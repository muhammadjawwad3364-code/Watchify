/* Watchify — CartDrawer (template + logic). Rendered by js/dc-lite.js */
DC.define("CartDrawer", "<div class=\"hgc-root {{rootCls}}\" style=\"font-family: 'Inter', system-ui, sans-serif; color: #F3EAD7\">\n<div class=\"hgc-backdrop\" aria-hidden=\"true\" onClick=\"{{close}}\"></div>\n<aside id=\"hgc-drawer\" class=\"hgc-drawer\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"hgc-title\" aria-hidden=\"{{ariaHidden}}\" onKeyDown=\"{{keyDown}}\">\n\n<!-- Header -->\n<div class=\"hgc-head\">\n<div class=\"hgc-top\">\n<h2 id=\"hgc-title\" class=\"hgc-title\">Your Cart <span class=\"hgc-badge\" aria-label=\"{{countLabel}}\">{{count}}</span></h2>\n<button type=\"button\" id=\"hgc-close\" class=\"hgc-x\" aria-label=\"Close cart\" onClick=\"{{close}}\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"></path></svg>\n</button>\n</div>\n<div class=\"hgc-bar\">\n<div class=\"hgc-tabs\" role=\"tablist\" aria-label=\"Cart views\" onKeyDown=\"{{tabKey}}\">\n<button type=\"button\" id=\"hgc-tab-products\" class=\"hgc-tab\" role=\"tab\" aria-selected=\"{{selProducts}}\" aria-controls=\"hgc-panel\" onClick=\"{{showProducts}}\">Products</button>\n<button type=\"button\" id=\"hgc-tab-cart\" class=\"hgc-tab\" role=\"tab\" aria-selected=\"{{selCart}}\" aria-controls=\"hgc-panel\" onClick=\"{{showCart}}\">Cart ({{count}})</button>\n</div>\n<div class=\"hgc-search\" role=\"search\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-4-4\"></path></svg>\n<label for=\"hgc-q\" class=\"hgc-sr\">Search watches</label>\n<input id=\"hgc-q\" type=\"search\" placeholder=\"Search watches…\" autocomplete=\"off\" value=\"{{q}}\" onChange=\"{{onSearch}}\">\n<sc-if value=\"{{hasQuery}}\" hint-placeholder-val=\"{{ false }}\">\n<button type=\"button\" class=\"hgc-clear\" aria-label=\"Clear search\" onClick=\"{{clearSearch}}\">\n<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"></path></svg>\n</button>\n</sc-if>\n</div>\n</div>\n</div>\n\n<!-- Body -->\n<div id=\"hgc-panel\" class=\"hgc-body\" role=\"tabpanel\" aria-labelledby=\"{{panelLabel}}\">\n<sc-if value=\"{{storageWarn}}\" hint-placeholder-val=\"{{ false }}\">\n<p class=\"hgc-note\" role=\"note\">Your browser isn't letting us save the cart, so it will clear if you leave this page.</p>\n</sc-if>\n\n<!-- Products tab -->\n<sc-if value=\"{{onProducts}}\" hint-placeholder-val=\"{{ true }}\">\n<sc-if value=\"{{hasResults}}\" hint-placeholder-val=\"{{ true }}\">\n<ul class=\"hgc-grid\" style=\"margin: 0; padding: 0; list-style: none\" aria-label=\"Watches\">\n<sc-for list=\"{{products}}\" as=\"p\" hint-placeholder-count=\"10\">\n<li class=\"hgc-card {{p.cardCls}}\">\n<div class=\"hgc-media {{p.mediaCls}}\">\n<sc-if value=\"{{p.hasImg}}\" hint-placeholder-val=\"{{ true }}\">\n<img src=\"{{p.img}}\" alt=\"{{p.alt}}\" loading=\"lazy\" decoding=\"async\" onLoad=\"{{p.onLoad}}\" onError=\"{{p.onErr}}\">\n</sc-if>\n<sc-if value=\"{{p.noImg}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"hgc-ph\" role=\"img\" aria-label=\"{{p.alt}}\">\n<svg width=\"54\" height=\"54\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#C9A25C\" stroke-width=\"1.4\" aria-hidden=\"true\"><rect x=\"24\" y=\"2\" width=\"16\" height=\"12\" rx=\"3\"></rect><rect x=\"24\" y=\"50\" width=\"16\" height=\"12\" rx=\"3\"></rect><circle cx=\"32\" cy=\"32\" r=\"18\"></circle><circle cx=\"32\" cy=\"32\" r=\"13\" stroke-opacity=\"0.5\"></circle><path d=\"M32 23v9l6 4\"></path></svg>\n<span>IMAGE COMING SOON</span>\n</div>\n</sc-if>\n</div>\n<sc-if value=\"{{p.inCart}}\" hint-placeholder-val=\"{{ false }}\">\n<span class=\"hgc-qtytag\">IN CART · {{p.qty}}</span>\n</sc-if>\n<div class=\"hgc-info\">\n<h3 class=\"hgc-name\">{{p.name}}</h3>\n<p class=\"hgc-price\">{{p.priceText}}</p>\n</div>\n<button type=\"button\" class=\"hgc-add {{p.addCls}}\" aria-label=\"{{p.addLabel}}\" onClick=\"{{p.add}}\">\n<sc-if value=\"{{p.justAdded}}\" hint-placeholder-val=\"{{ false }}\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12.5l4.5 4.5L19 7.5\"></path></svg>\n</sc-if>\n<sc-if value=\"{{p.notAdded}}\" hint-placeholder-val=\"{{ true }}\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"></path></svg>\n</sc-if>\n</button>\n</li>\n</sc-for>\n</ul>\n</sc-if>\n<sc-if value=\"{{noResults}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"hgc-empty\">\n<span class=\"hgc-empty-ic\"><svg width=\"38\" height=\"38\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-4-4M8.5 11h5\"></path></svg></span>\n<h3>No watches found</h3>\n<p>Nothing in the collection matches “{{q}}”. Try another name, such as Skeleton or Chrono.</p>\n<button type=\"button\" class=\"hgc-ghost\" onClick=\"{{clearSearch}}\">CLEAR SEARCH</button>\n</div>\n</sc-if>\n</sc-if>\n\n<!-- Cart tab -->\n<sc-if value=\"{{onCart}}\" hint-placeholder-val=\"{{ false }}\">\n<sc-if value=\"{{hasItems}}\" hint-placeholder-val=\"{{ false }}\">\n<ul class=\"hgc-list\" aria-label=\"Items in your cart\">\n<sc-for list=\"{{cartItems}}\" as=\"c\" hint-placeholder-count=\"3\">\n<li class=\"hgc-item\">\n<div class=\"hgc-thumb\">\n<sc-if value=\"{{c.hasImg}}\" hint-placeholder-val=\"{{ true }}\">\n<img src=\"{{c.img}}\" alt=\"{{c.alt}}\" onError=\"{{c.onErr}}\">\n</sc-if>\n<sc-if value=\"{{c.noImg}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"hgc-ph\" role=\"img\" aria-label=\"{{c.alt}}\"><svg width=\"34\" height=\"34\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"#C9A25C\" stroke-width=\"1.6\" aria-hidden=\"true\"><rect x=\"24\" y=\"2\" width=\"16\" height=\"12\" rx=\"3\"></rect><rect x=\"24\" y=\"50\" width=\"16\" height=\"12\" rx=\"3\"></rect><circle cx=\"32\" cy=\"32\" r=\"18\"></circle><path d=\"M32 23v9l6 4\"></path></svg></div>\n</sc-if>\n</div>\n<div class=\"hgc-item-main\">\n<div class=\"hgc-item-row\">\n<div style=\"min-width: 0\">\n<h3 class=\"hgc-item-name\">{{c.name}}</h3>\n<p class=\"hgc-item-unit\">{{c.unitText}} each</p>\n</div>\n<p class=\"hgc-item-line\" aria-label=\"{{c.lineLabel}}\">{{c.lineText}}</p>\n</div>\n<div class=\"hgc-item-row\" style=\"align-items: center\">\n<div class=\"hgc-qty\" role=\"group\" aria-label=\"{{c.qtyLabel}}\">\n<button type=\"button\" aria-label=\"{{c.decLabel}}\" onClick=\"{{c.dec}}\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"></path></svg></button>\n<output aria-live=\"polite\">{{c.qty}}</output>\n<button type=\"button\" aria-label=\"{{c.incLabel}}\" onClick=\"{{c.inc}}\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"></path></svg></button>\n</div>\n<button type=\"button\" class=\"hgc-rm\" aria-label=\"{{c.rmLabel}}\" onClick=\"{{c.remove}}\">\n<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3\"></path></svg>\nREMOVE\n</button>\n</div>\n</div>\n</li>\n</sc-for>\n</ul>\n</sc-if>\n<sc-if value=\"{{noItems}}\" hint-placeholder-val=\"{{ true }}\">\n<div class=\"hgc-empty\">\n<span class=\"hgc-empty-ic\"><svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 8h14l-1 13H6L5 8z\"></path><path d=\"M9 8V6a3 3 0 0 1 6 0v2\"></path><path d=\"M9.5 14.5c1.2 1 3.8 1 5 0\" stroke-linecap=\"round\"></path></svg></span>\n<h3>Your cart is empty</h3>\n<p>Every Watchify starts with a single choice. Browse the collection and add the piece that speaks to you.</p>\n<button type=\"button\" class=\"hgc-ghost\" onClick=\"{{showProducts}}\">BROWSE WATCHES</button>\n</div>\n</sc-if>\n</sc-if>\n</div>\n\n<!-- Sticky summary (cart tab with items) -->\n<sc-if value=\"{{showSummary}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"hgc-sum\" aria-label=\"Order summary\" role=\"region\">\n<p class=\"hgc-sum-row\"><span>Items</span><b>{{count}}</b></p>\n<p class=\"hgc-sum-row\"><span>Shipping</span><b>Calculated at checkout</b></p>\n<p class=\"hgc-sum-row\" style=\"align-items: center\"><span>Subtotal</span><span class=\"hgc-sum-total\">{{subtotalText}}</span></p>\n<a href=\"checkout.html\" class=\"hgc-cta\" onClick=\"{{toCheckout}}\">PROCEED TO CHECKOUT\n<svg width=\"18\" height=\"12\" viewBox=\"0 0 18 12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><path d=\"M0 6h16M11 1l5 5-5 5\"></path></svg>\n</a>\n</div>\n</sc-if>\n\n<p class=\"hgc-toast {{toastCls}}\" role=\"status\" aria-live=\"polite\"><i aria-hidden=\"true\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7.5\"></path></svg></i><span>{{toast}}</span></p>\n</aside>\n</div>", (function () {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.KEY = 'horologue.cart.v1';
    // Catalogue. A null img renders the "image coming soon" placeholder.
    this.CATALOGUE = [
      { id: 'obsidian-01', name: 'Obsidian No. 01', price: 1280, img: 'assets/images/a2cf7dd55b954b2c525d1110a25b5ea0.webp', alt: 'Obsidian No. 01 with a green marble dial in a gold case' },
      { id: 'aurelia-classic', name: 'Aurelia Classic', price: 980, img: 'assets/images/baa3d878c3ac2cad48d4f5befbf3672d.webp', alt: 'Aurelia Classic, black dial, gold case, black leather strap' },
      { id: 'celeste-chrono', name: 'Celeste Chrono', price: 1450, img: 'assets/images/c4a748b82037532aa773eb49e1b8624d.webp', alt: 'Celeste Chrono, cream chronograph dial, gold case' },
      { id: 'skeleton-atelier', name: 'Skeleton Atelier', price: 1860, img: 'assets/images/33f8c8cc1fd141487005a6170358aa6e.webp', alt: 'Skeleton Atelier, open movement in a gold case' },
      { id: 'emerald-touring', name: 'Emerald Touring', price: 2150, img: 'assets/images/92de356452526023d14d4043221402fe.webp', alt: 'Emerald Touring, emerald skeleton dial, yellow gold' },
      { id: 'sapphire-atelier', name: 'Sapphire Atelier', price: 1920, img: 'assets/images/877df250d9dd31a16bf346df2edf47cf.webp', alt: 'Sapphire Atelier, blue skeleton dial, white gold' },
      { id: 'rubis-heritage', name: 'Rubis Heritage', price: 1360, img: 'assets/images/e98e1460b87524991c3ca6a2e94390ec.webp', alt: 'Rubis Heritage, ruby skeleton dial, rose gold' },
      { id: 'titanium-edge', name: 'Titanium Edge', price: 1780, img: 'assets/images/03d82286c5e0ec1c5efcf4480afa979c.webp', alt: 'Titanium Edge, smoked skeleton dial' },
      { id: 'lapis-moonphase', name: 'Lapis Moonphase', price: 1620, img: null, alt: 'Lapis Moonphase — photograph coming soon' },
      { id: 'noir-skeleton', name: 'Noir Skeleton', price: 2200, img: 'assets/images/333f4e3b5fde63a032c19100c1ab21fd.webp', alt: 'Noir Skeleton, black chapter ring, gold case' }
    ];
    this.BY_ID = {};
    for (var i = 0; i < this.CATALOGUE.length; i++) this.BY_ID[this.CATALOGUE[i].id] = this.CATALOGUE[i];
    this.state = { items: [], tab: 'products', q: '', added: {}, loaded: {}, broken: {}, toast: '', toastOn: false, storageOk: true };
    this.timers = {};
    try { this.fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }); } catch (e) { this.fmt = null; }
    var self = this;
    this.fns = {};
    this.CATALOGUE.forEach(function (p) {
      self.fns[p.id] = {
        add: function () { self.add(p.id); },
        inc: function () { self.setQty(p.id, self.qtyOf(p.id) + 1); },
        dec: function () { self.setQty(p.id, self.qtyOf(p.id) - 1); },
        remove: function () { self.setQty(p.id, 0); },
        onLoad: function () { if (!self.state.loaded[p.id]) self.setState({ loaded: Object.assign({}, self.state.loaded, (function () { var o = {}; o[p.id] = true; return o; })()) }); },
        onErr: function () { if (!self.state.broken[p.id]) self.setState({ broken: Object.assign({}, self.state.broken, (function () { var o = {}; o[p.id] = true; return o; })()) }); }
      };
    });
    ['close', 'keyDown', 'tabKey', 'showProducts', 'showCart', 'onSearch', 'clearSearch', 'toCheckout', 'onStorage'].forEach(function (k) { self[k] = self[k].bind(self); });
  }

  // ---------- lifecycle ----------
  componentDidMount() {
    var res = this.load();
    var self = this;
    this.setState({ items: res.items, storageOk: res.ok }, function () {
      if (res.dirty) self.save(res.items);
      self.emit();
    });
    window.addEventListener('storage', this.onStorage);
    if (this.isOpen(this.props)) this.opened();
  }

  componentDidUpdate(prevProps) {
    var was = this.isOpen(prevProps), now = this.isOpen(this.props);
    if (!was && now) this.opened();
    if (was && !now) this.closed();
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.onStorage);
    var t = this.timers;
    Object.keys(t).forEach(function (k) { clearTimeout(t[k]); });
    if (this.locked) this.unlock();
  }

  // Standalone (previewed on its own) the drawer shows open; inside a page it follows the `open` prop.
  isOpen(p) { return p.open == null ? !p.onClose : !!p.open; }

  opened() {
    try { this.returnFocus = document.activeElement; } catch (e) { this.returnFocus = null; }
    if (this.props.tab === 'cart' || this.props.tab === 'products') this.setState({ tab: this.props.tab });
    this.lock();
    var self = this;
    clearTimeout(this.timers.focus);
    this.timers.focus = setTimeout(function () { var b = document.getElementById('hgc-close'); if (b) b.focus({ preventScroll: true }); }, 60);
  }

  closed() {
    this.unlock();
    var r = this.returnFocus;
    if (r && r.focus && document.contains(r)) { try { r.focus({ preventScroll: true }); } catch (e) {} }
  }

  lock() {
    if (this.locked) return;
    var de = document.documentElement, body = document.body;
    var sw = Math.max(0, window.innerWidth - de.clientWidth);
    this.prevLock = { ov: de.style.overflow, bov: body.style.overflow, pr: de.style.paddingRight };
    de.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    if (sw > 0) de.style.paddingRight = sw + 'px';
    this.locked = true;
  }

  unlock() {
    if (!this.locked) return;
    var de = document.documentElement, body = document.body, p = this.prevLock || {};
    de.style.overflow = p.ov || '';
    body.style.overflow = p.bov || '';
    de.style.paddingRight = p.pr || '';
    this.locked = false;
  }

  // ---------- storage (validated, never trusted) ----------
  load() {
    var raw = null, ok = true;
    try { raw = window.localStorage.getItem(this.KEY); } catch (e) { ok = false; }
    if (!raw) return { items: [], ok: ok, dirty: false };
    var data = null;
    try { data = JSON.parse(raw); } catch (e) { return { items: [], ok: ok, dirty: true }; }
    var list = data && Array.isArray(data.items) ? data.items : (Array.isArray(data) ? data : null);
    if (!list) return { items: [], ok: ok, dirty: true };
    var merged = {}, order = [], dirty = false, byId = this.BY_ID;
    list.forEach(function (it) {
      if (!it || typeof it.id !== 'string' || !byId[it.id]) { dirty = true; return; }
      var q = Math.floor(Number(it.qty));
      if (!isFinite(q) || q < 1) { dirty = true; return; }
      if (q > 99) { q = 99; dirty = true; }
      if (merged[it.id]) { merged[it.id] = Math.min(99, merged[it.id] + q); dirty = true; }
      else { merged[it.id] = q; order.push(it.id); }
    });
    return { items: order.map(function (id) { return { id: id, qty: merged[id] }; }), ok: ok, dirty: dirty };
  }

  save(items) {
    try {
      window.localStorage.setItem(this.KEY, JSON.stringify({ v: 1, items: items }));
      if (!this.state.storageOk) this.setState({ storageOk: true });
    } catch (e) {
      if (this.state.storageOk) this.setState({ storageOk: false });
    }
  }

  onStorage(e) {
    if (e && e.key && e.key !== this.KEY) return;
    var res = this.load(), self = this;
    this.setState({ items: res.items }, function () { self.emit(); });
  }

  emit() {
    var cb = this.props.onChange;
    if (typeof cb !== 'function') return;
    var byId = this.BY_ID;
    cb(this.state.items.map(function (it) {
      var p = byId[it.id];
      return { id: it.id, name: p.name, price: p.price, img: p.img, qty: it.qty, line: p.price * it.qty };
    }));
  }

  commit(items) {
    var self = this;
    this.setState({ items: items }, function () { self.save(items); self.emit(); });
  }

  // ---------- cart actions ----------
  qtyOf(id) {
    var it = this.state.items.filter(function (x) { return x.id === id; })[0];
    return it ? it.qty : 0;
  }

  add(id) {
    var items = this.state.items.map(function (x) { return { id: x.id, qty: x.qty }; });
    var found = items.filter(function (x) { return x.id === id; })[0];
    if (found) found.qty = Math.min(99, found.qty + 1);
    else items.push({ id: id, qty: 1 });
    this.commit(items);
    var added = Object.assign({}, this.state.added); added[id] = true;
    var p = this.BY_ID[id];
    this.setState({ added: added, toast: p.name + ' added to your cart', toastOn: true });
    var self = this;
    clearTimeout(this.timers['a' + id]);
    this.timers['a' + id] = setTimeout(function () {
      var a = Object.assign({}, self.state.added); delete a[id];
      self.setState({ added: a });
    }, 1500);
    clearTimeout(this.timers.toast);
    this.timers.toast = setTimeout(function () { self.setState({ toastOn: false }); }, 2200);
  }

  setQty(id, qty) {
    qty = Math.min(99, Math.floor(qty));
    var items = this.state.items
      .map(function (x) { return { id: x.id, qty: x.id === id ? qty : x.qty }; })
      .filter(function (x) { return x.qty > 0; });
    var self = this;
    var removing = qty <= 0;
    this.commit(items);
    if (removing) {
      // keep keyboard focus inside the drawer after a row disappears
      clearTimeout(this.timers.rf);
      this.timers.rf = setTimeout(function () {
        var t = items.length ? document.querySelector('#hgc-panel .hgc-qty button') : document.querySelector('#hgc-panel .hgc-ghost');
        if (t) t.focus({ preventScroll: true });
      }, 30);
    }
  }

  // ---------- UI handlers ----------
  close() { if (typeof this.props.onClose === 'function') this.props.onClose(); }

  toCheckout() { this.close(); }

  showProducts() { this.setState({ tab: 'products' }); }

  showCart() { this.setState({ tab: 'cart' }); }

  onSearch(e) {
    var v = e && e.target ? e.target.value : '';
    this.setState({ q: v, tab: 'products' });
  }

  clearSearch() {
    this.setState({ q: '' });
    var i = document.getElementById('hgc-q');
    if (i) i.focus({ preventScroll: true });
  }

  tabKey(e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'Home' && e.key !== 'End') return;
    e.preventDefault();
    var next = this.state.tab === 'products' ? 'cart' : 'products';
    if (e.key === 'Home') next = 'products';
    if (e.key === 'End') next = 'cart';
    this.setState({ tab: next });
    var b = document.getElementById(next === 'cart' ? 'hgc-tab-cart' : 'hgc-tab-products');
    if (b) b.focus();
  }

  // Escape closes; Tab stays inside the open drawer
  keyDown(e) {
    if (e.key === 'Escape') { e.preventDefault(); this.close(); return; }
    if (e.key !== 'Tab') return;
    var root = document.getElementById('hgc-drawer');
    if (!root) return;
    var f = [].slice.call(root.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])')).filter(function (el) {
      return !el.disabled && el.getAttribute('tabindex') !== '-1' && (el.offsetWidth || el.offsetHeight);
    });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1], a = document.activeElement;
    if (e.shiftKey && (a === first || !root.contains(a))) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && (a === last || !root.contains(a))) { e.preventDefault(); first.focus(); }
  }

  money(n) { return this.fmt ? this.fmt.format(n) : '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  renderVals() {
    var s = this.state, self = this, byId = this.BY_ID, fns = this.fns;
    var open = this.isOpen(this.props);
    var qty = {};
    var count = 0, subtotal = 0;
    s.items.forEach(function (it) { var p = byId[it.id]; if (!p) return; qty[it.id] = it.qty; count += it.qty; subtotal += p.price * it.qty; });
    var q = (s.q || '').trim().toLowerCase();
    var products = this.CATALOGUE.filter(function (p) { return !q || p.name.toLowerCase().indexOf(q) !== -1; }).map(function (p) {
      var hasImg = !!p.img && !s.broken[p.id];
      var just = !!s.added[p.id];
      return {
        name: p.name, priceText: self.money(p.price), img: p.img || '', alt: p.alt,
        hasImg: hasImg, noImg: !hasImg,
        mediaCls: hasImg ? (s.loaded[p.id] ? 'is-loaded' : '') : 'is-loaded',
        inCart: !!qty[p.id], qty: qty[p.id] || 0,
        justAdded: just, notAdded: !just,
        addCls: just ? 'is-added' : '', cardCls: just ? 'is-added' : '',
        addLabel: just ? p.name + ' added to cart' : 'Add ' + p.name + ' to cart, ' + self.money(p.price),
        add: fns[p.id].add, onLoad: fns[p.id].onLoad, onErr: fns[p.id].onErr
      };
    });
    var cartItems = s.items.filter(function (it) { return byId[it.id]; }).map(function (it) {
      var p = byId[it.id], hasImg = !!p.img && !s.broken[p.id];
      return {
        name: p.name, img: p.img || '', alt: p.alt, hasImg: hasImg, noImg: !hasImg,
        unitText: self.money(p.price), lineText: self.money(p.price * it.qty), qty: it.qty,
        lineLabel: 'Line total ' + self.money(p.price * it.qty),
        qtyLabel: 'Quantity of ' + p.name,
        decLabel: it.qty > 1 ? 'Decrease quantity of ' + p.name : 'Remove ' + p.name + ' from cart',
        incLabel: 'Increase quantity of ' + p.name, rmLabel: 'Remove ' + p.name + ' from cart',
        inc: fns[p.id].inc, dec: fns[p.id].dec, remove: fns[p.id].remove, onErr: fns[p.id].onErr
      };
    });
    var onCart = s.tab === 'cart';
    return {
      rootCls: open ? 'is-open' : '', ariaHidden: open ? 'false' : 'true',
      count: count, countLabel: count + (count === 1 ? ' item' : ' items') + ' in cart',
      selProducts: onCart ? 'false' : 'true', selCart: onCart ? 'true' : 'false',
      tiProducts: onCart ? '-1' : '0', tiCart: onCart ? '0' : '-1',
      panelLabel: onCart ? 'hgc-tab-cart' : 'hgc-tab-products',
      onProducts: !onCart, onCart: onCart,
      q: s.q, hasQuery: !!s.q, products: products, hasResults: products.length > 0, noResults: products.length === 0,
      cartItems: cartItems, hasItems: cartItems.length > 0, noItems: cartItems.length === 0,
      showSummary: onCart && cartItems.length > 0, subtotalText: this.money(subtotal),
      toast: s.toast, toastCls: s.toastOn ? 'is-show' : '',
      storageWarn: !s.storageOk,
      close: this.close, keyDown: this.keyDown, tabKey: this.tabKey,
      showProducts: this.showProducts, showCart: this.showCart,
      onSearch: this.onSearch, clearSearch: this.clearSearch, toCheckout: this.toCheckout
    };
  }
}
return Component;
})(), {});
