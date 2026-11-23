/*!
 * dc-lite — a tiny runtime that renders Watchify's page templates with React.
 * Templates use {{ dotted.path }} holes, <sc-for>, <sc-if> and <dc-import> child components;
 * each page's logic is a React class component (class Component extends DCLogic) whose
 * renderVals() returns the values the template reads.
 */
(function () {
  'use strict';
  var R = window.React, RD = window.ReactDOM;
  if (!R || !RD) { console.error('dc-lite: React is missing'); return; }

  var registry = {};
  var HOLE = /\{\{\s*([^}]*?)\s*\}\}/g;
  var SINGLE = /^\{\{\s*([^}]*?)\s*\}\}$/;

  // HTML parsing lowercases attribute names: map them back to React's names
  var EVENTS = {};
  ['Click', 'DoubleClick', 'ContextMenu', 'Change', 'Input', 'Submit', 'Reset', 'Invalid', 'Error', 'Load',
    'Focus', 'Blur', 'KeyDown', 'KeyUp', 'KeyPress', 'MouseEnter', 'MouseLeave', 'MouseMove', 'MouseDown',
    'MouseUp', 'MouseOver', 'MouseOut', 'PointerDown', 'PointerUp', 'PointerMove', 'PointerEnter',
    'PointerLeave', 'PointerCancel', 'TouchStart', 'TouchMove', 'TouchEnd', 'Wheel', 'Scroll', 'Play',
    'Pause', 'Ended', 'TimeUpdate', 'LoadedData', 'LoadedMetadata', 'CanPlay', 'AnimationEnd',
    'TransitionEnd', 'DragStart', 'Drag', 'DragEnd', 'DragOver', 'Drop'
  ].forEach(function (e) { EVENTS['on' + e.toLowerCase()] = 'on' + e; });
  EVENTS.ondblclick = 'onDoubleClick';

  var ATTRS = {
    'class': 'className', 'for': 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength',
    minlength: 'minLength', autocomplete: 'autoComplete', autofocus: 'autoFocus', autoplay: 'autoPlay',
    playsinline: 'playsInline', crossorigin: 'crossOrigin', srcset: 'srcSet', inputmode: 'inputMode',
    enterkeyhint: 'enterKeyHint', spellcheck: 'spellCheck', novalidate: 'noValidate', datetime: 'dateTime',
    colspan: 'colSpan', rowspan: 'rowSpan', referrerpolicy: 'referrerPolicy', contenteditable: 'contentEditable',
    accesskey: 'accessKey', formnovalidate: 'formNoValidate', allowfullscreen: 'allowFullScreen',
    enctype: 'encType', formaction: 'formAction', hreflang: 'hrefLang', charset: 'charSet',
    fetchpriority: 'fetchPriority', 'accept-charset': 'acceptCharset', 'http-equiv': 'httpEquiv',
    'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', 'xml:lang': 'xmlLang'
  };
  var BOOL = { required: 1, disabled: 1, checked: 1, selected: 1, multiple: 1, readonly: 1, autofocus: 1, autoplay: 1,
    muted: 1, loop: 1, playsinline: 1, controls: 1, hidden: 1, open: 1, novalidate: 1, 'default': 1, defer: 1,
    async: 1, reversed: 1, allowfullscreen: 1, formnovalidate: 1, inert: 1 };
  var NOT_TEXT_INPUT = { radio: 1, checkbox: 1, submit: 1, button: 1, reset: 1, image: 1, file: 1, hidden: 1 };

  function camel(s) { return s.replace(/-([a-z])/g, function (m, c) { return c.toUpperCase(); }); }

  // ---- holes ----
  function lookup(expr, scope) {
    if (expr === 'true') return true;
    if (expr === 'false') return false;
    if (expr === 'null') return null;
    if (expr === 'undefined' || expr === '') return undefined;
    if (/^-?\d+(\.\d+)?$/.test(expr)) return parseFloat(expr);
    var q = expr.charAt(0);
    if ((q === '"' || q === "'") && expr.charAt(expr.length - 1) === q) return expr.slice(1, -1);
    var parts = expr.split('.'), v = scope;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }
  function str(v) { return v == null || v === false || v === true ? '' : String(v); }
  function interp(s, scope) { return s.replace(HOLE, function (m, e) { return str(lookup(e, scope)); }); }

  // ---- inline style string -> React style object ----
  function parseStyle(css) {
    var out = {}, buf = '', depth = 0, quote = '', decls = [];
    for (var i = 0; i < css.length; i++) {
      var c = css.charAt(i);
      if (quote) { if (c === quote) quote = ''; buf += c; continue; }
      if (c === '"' || c === "'") { quote = c; buf += c; continue; }
      if (c === '(') depth++;
      else if (c === ')') depth--;
      if (c === ';' && depth <= 0) { decls.push(buf); buf = ''; continue; }
      buf += c;
    }
    decls.push(buf);
    decls.forEach(function (d) {
      var k = d.indexOf(':');
      if (k < 0) return;
      var p = d.slice(0, k).trim(), v = d.slice(k + 1).trim();
      if (!p || v === '') return;
      if (p.indexOf('--') === 0) { out[p] = v; return; }
      p = p.toLowerCase();
      if (p.charAt(0) === '-') {
        // vendor prefixes: -webkit-x -> WebkitX, -moz-x -> MozX, -ms-x -> msX
        p = camel(p.slice(1));
        if (p.indexOf('ms') !== 0) p = p.charAt(0).toUpperCase() + p.slice(1);
      } else p = camel(p);
      out[p] = v;
    });
    return out;
  }

  // ---- compile template DOM into a small tree, once per component ----
  function compileKids(nodes) {
    var out = [];
    for (var i = 0; i < nodes.length; i++) {
      var c = compile(nodes[i]);
      if (c) out.push(c);
    }
    return out;
  }
  function attrSpec(name, value, svg, tag, controlled, type) {
    var lower = name.toLowerCase();
    var spec = { raw: value };
    var m = SINGLE.exec(value);
    spec.single = m ? m[1] : null;
    spec.hasHole = !m && value.indexOf('{{') >= 0;
    if (EVENTS[lower]) spec.n = EVENTS[lower];
    else if (ATTRS[lower]) spec.n = ATTRS[lower];
    else if (lower === 'style') { spec.n = 'style'; spec.style = true; }
    else if (lower.indexOf('aria-') === 0 || lower.indexOf('data-') === 0) spec.n = lower;
    else if (svg && name.indexOf('-') > 0) spec.n = camel(name);
    else spec.n = svg ? name : lower;
    if (!m && value === '' && BOOL[lower]) { spec.lit = true; spec.single = null; }
    // uncontrolled form fields keep their markup value as the initial value
    if (!controlled && (tag === 'textarea' || tag === 'select' || (tag === 'input' && !NOT_TEXT_INPUT[type]))) {
      if (spec.n === 'value') spec.n = 'defaultValue';
    }
    if (!controlled && tag === 'input' && spec.n === 'checked') spec.n = 'defaultChecked';
    return spec;
  }
  function compile(node) {
    if (node.nodeType === 3) {
      var t = node.nodeValue;
      var m = SINGLE.exec(t.trim());
      if (m && t.trim() === t) return { k: 't', single: m[1] };
      if (t.indexOf('{{') >= 0) return { k: 't', s: t, interp: true };
      return { k: 't', s: t };
    }
    if (node.nodeType !== 1) return null;
    var tag = node.localName;
    if (tag === 'helmet') return null;
    if (tag === 'sc-for') {
      return { k: 'for', list: node.getAttribute('list') || '', as: node.getAttribute('as') || 'item', kids: compileKids(node.childNodes) };
    }
    if (tag === 'sc-if') {
      return { k: 'if', value: node.getAttribute('value') || '', kids: compileKids(node.childNodes) };
    }
    if (tag === 'dc-import') {
      var props = [];
      for (var a = 0; a < node.attributes.length; a++) {
        var at = node.attributes[a];
        if (at.name === 'name' || at.name.indexOf('hint-') === 0) continue;
        var mm = SINGLE.exec(at.value);
        props.push({ n: camel(at.name), raw: at.value, single: mm ? mm[1] : null });
      }
      return { k: 'imp', name: node.getAttribute('name'), props: props };
    }
    var svg = node.namespaceURI === 'http://www.w3.org/2000/svg';
    var name = svg ? node.tagName : tag;
    var controlled = node.hasAttribute('onchange') || node.hasAttribute('oninput');
    var type = (node.getAttribute('type') || 'text').toLowerCase();
    var attrs = [];
    for (var j = 0; j < node.attributes.length; j++) {
      var att = node.attributes[j];
      if (att.name.indexOf('hint-') === 0) continue;
      attrs.push(attrSpec(att.name, att.value, svg, tag, controlled, type));
    }
    var kids = tag === 'template' ? compileKids(node.content.childNodes) : compileKids(node.childNodes);
    if (tag === 'textarea' && kids.length) kids = [];
    return { k: 'e', tag: name, attrs: attrs, kids: kids };
  }

  // ---- render the compiled tree with the values from renderVals() ----
  function renderKids(kids, scope) {
    var out = [];
    for (var i = 0; i < kids.length; i++) {
      var r = renderNode(kids[i], scope);
      if (r !== null && r !== undefined && r !== '') out.push(r);
    }
    return out;
  }
  function renderNode(n, scope) {
    if (n.k === 't') {
      if (n.single !== undefined) {
        var v = lookup(n.single, scope);
        return typeof v === 'number' ? String(v) : str(v);
      }
      return n.interp ? interp(n.s, scope) : n.s;
    }
    if (n.k === 'if') {
      var val = SINGLE.exec(n.value) ? lookup(SINGLE.exec(n.value)[1], scope) : n.value;
      if (!val) return null;
      return R.createElement.apply(null, [R.Fragment, null].concat(renderKids(n.kids, scope)));
    }
    if (n.k === 'for') {
      var lm = SINGLE.exec(n.list), list = lm ? lookup(lm[1], scope) : null;
      if (!list || !list.length) return null;
      var items = [];
      for (var i = 0; i < list.length; i++) {
        var s = Object.create(scope);
        s[n.as] = list[i];
        s.$index = i;
        items.push(R.createElement.apply(null, [R.Fragment, { key: i }].concat(renderKids(n.kids, s))));
      }
      return R.createElement(R.Fragment, null, items);
    }
    if (n.k === 'imp') {
      var def = registry[n.name];
      if (!def) { console.error('dc-lite: unknown component ' + n.name); return null; }
      var p = {};
      for (var d in def.defaults) p[d] = def.defaults[d];
      n.props.forEach(function (pp) { p[pp.n] = pp.single !== null ? lookup(pp.single, scope) : interp(pp.raw, scope); });
      return R.createElement(def.cls, p);
    }
    var props = {};
    for (var a = 0; a < n.attrs.length; a++) {
      var at = n.attrs[a], value;
      if (at.lit) value = true;
      else if (at.single !== null) value = lookup(at.single, scope);
      else value = at.hasHole ? interp(at.raw, scope) : at.raw;
      if (at.style) value = typeof value === 'string' ? parseStyle(value) : value;
      if (value === undefined) continue;
      props[at.n] = value;
    }
    return R.createElement.apply(null, [n.tag, props].concat(renderKids(n.kids, scope)));
  }

  // ---- the base class every page/component logic extends ----
  class DCLogic extends R.Component {
    render() {
      var vals = typeof this.renderVals === 'function' ? (this.renderVals() || {}) : {};
      var ir = this.constructor.__dcIR || [];
      return R.createElement.apply(null, [R.Fragment, null].concat(renderKids(ir, vals)));
    }
  }

  function define(name, template, cls, defaults) {
    var t = document.createElement('template');
    t.innerHTML = template;
    cls.__dcIR = compileKids(t.content.childNodes);
    cls.displayName = name;
    registry[name] = { cls: cls, defaults: defaults || {} };
  }
  function mount(name, el) {
    var def = registry[name];
    if (!def) { console.error('dc-lite: unknown component ' + name); return; }
    var root = RD.createRoot(el || document.getElementById('dc-root'));
    var p = {};
    for (var d in def.defaults) p[d] = def.defaults[d];
    root.render(R.createElement(def.cls, p));
    return root;
  }

  window.DCLogic = DCLogic;
  window.DC = { define: define, mount: mount, _parseStyle: parseStyle };
})();
