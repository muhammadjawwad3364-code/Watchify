/* Watchify — WatchExploded (template + logic). Rendered by js/dc-lite.js */
DC.define("WatchExploded", "<section id=\"hgx-sec\" class=\"hgx-sec {{secCls}}\" aria-label=\"Exploded view of the Watchify gold skeleton chronograph\" style=\"font-family: 'Inter', system-ui, sans-serif; color: #F4ECDA\">\n<div id=\"hgx-stage\" class=\"hgx-stage\">\n<sc-if value=\"{{gl}}\" hint-placeholder-val=\"{{ true }}\">\n<canvas id=\"hgx-canvas\" class=\"hgx-canvas\" role=\"img\" aria-label=\"A gold skeleton chronograph tilts, separates into its crystal, bezel, hands, dial, dial frame, balance, bridges, gear train, baseplate, crown and pushers, then reassembles\"></canvas>\n</sc-if>\n<sc-if value=\"{{fallback}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"hgx-fallback\"><img src=\"assets/images/cc7a2dad9ceaaa8255fe0a54218e20ab.webp\" alt=\"Gold skeleton chronograph with a black chapter ring and black leather strap\"></div>\n</sc-if>\n<svg class=\"hgx-svg\" aria-hidden=\"true\">\n<sc-for list=\"{{labels}}\" as=\"l\" hint-placeholder-count=\"12\">\n<g class=\"hgx-glow\">\n<path id=\"{{l.ruleId}}\" class=\"hgx-rule\"></path>\n<path id=\"{{l.tickId}}\" class=\"hgx-ticks\"></path>\n<path id=\"{{l.lineId}}\" class=\"hgx-line\"></path>\n<rect id=\"{{l.nodeId}}\" class=\"hgx-node\" width=\"5\" height=\"5\"></rect>\n<path id=\"{{l.brkId}}\" class=\"hgx-brk\"></path>\n<g id=\"{{l.retId}}\" class=\"hgx-ret\">\n<circle class=\"hgx-ring\" r=\"7\"></circle>\n<path class=\"hgx-cross\" d=\"M-13 0H-9M9 0H13M0 -13V-9M0 9V13\"></path>\n</g>\n<circle id=\"{{l.dotId}}\" class=\"hgx-dot\" r=\"1.7\"></circle>\n<circle id=\"{{l.headId}}\" class=\"hgx-head\" r=\"1.9\"></circle>\n</g>\n</sc-for>\n</svg>\n<sc-for list=\"{{labels}}\" as=\"l\" hint-placeholder-count=\"12\">\n<div id=\"{{l.labId}}\" class=\"hgx-lab {{l.sideCls}}\" aria-hidden=\"true\"><div id=\"{{l.innId}}\" class=\"hgx-lab-in\"><span class=\"hgx-txt\">{{l.title}}</span><span class=\"hgx-desc\">{{l.desc}}</span></div></div>\n</sc-for>\n<ul class=\"hgx-sr\">\n<sc-for list=\"{{labels}}\" as=\"l\" hint-placeholder-count=\"12\"><li>{{l.full}}</li></sc-for>\n</ul>\n</div>\n</section>", (function () {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { mode: 'gl', still: false, compact: false };
    // Callouts, in the order they draw. side: which column the text sits in.
    this.LABELS = [
      { key: 'crystal', side: 'L', title: 'Sapphire crystal', short: 'Crystal', desc: 'Scratch-resistant, ultra clear' },
      { key: 'bezel', side: 'L', title: 'Polished gold bezel', short: 'Bezel', desc: 'Holds the crystal, frames the dial' },
      { key: 'hands', side: 'L', title: 'Precision watch hands', short: 'Hands', desc: 'Hour, minute and seconds' },
      { key: 'dial', side: 'R', title: 'Skeleton dial', short: 'Dial', desc: 'Black chapter ring, applied gold indices' },
      { key: 'frame', side: 'L', title: 'Dial support frame', short: 'Dial frame', desc: 'Locates the dial over the movement' },
      { key: 'balance', side: 'L', title: 'Balance assembly', short: 'Balance', desc: 'The regulating heart of the calibre' },
      { key: 'bridges', side: 'R', title: 'Movement bridges', short: 'Bridges', desc: 'Skeletonised, hand-finished gold' },
      { key: 'gears', side: 'R', title: 'Mechanical gear train', short: 'Gear train', desc: 'Four wheels carry the power' },
      { key: 'base', side: 'L', title: 'Movement baseplate', short: 'Baseplate', desc: 'The foundation of the calibre' },
      { key: 'case', side: 'L', title: 'Gold watch case', short: 'Case', desc: 'Polished and brushed gold' },
      { key: 'crown', side: 'R', title: 'Crown & stem', short: 'Crown', desc: 'Winds and sets the movement' },
      { key: 'pushers', side: 'R', title: 'Chronograph pushers', short: 'Pushers', desc: 'Start, stop and reset' }
    ];
    // Layers cut from your chronograph photograph and rectified to a front view: 40 mm squares centred on the arbor
    this.TEX = {
      base: 'assets/images/e1ded8e15cfd03afc9b31dfe98c9096a.webp',
      bridge: 'assets/images/22a0b29489751c10ea8091256823825e.webp',
      balance: 'assets/images/dd6c491d66b88858c0b2c60c38432a57.webp',
      w1: 'assets/images/97705f694fd16d60c41714d32745bfc1.webp',
      w2: 'assets/images/4cc4fac89be7cef3f0a3ee5f9278433a.webp',
      w3: 'assets/images/ab2526d2415c3ea291c40f1920a8ccb2.webp',
      w4: 'assets/images/63969d735db6ceac0e88f065ff02cf4a.webp',
      dial: 'assets/images/b1d0b86377352d4c9ff5b29d0b8edddb.webp',
      hour: 'assets/images/dad318366178310b251488bd01c7d8dc.webp',
      minute: 'assets/images/901aba8cb72b4361444f462f73adaf0e.webp',
      sec: 'assets/images/4ca9ce7720df95561918932657e30ba1.webp',
      strap: 'assets/images/e8efbd0b950f7fd9327a30896a41a18c.webp'
    };
    // Scroll timeline (fractions of the pinned section)
    this.T = {
      TILT_A: 0.08, TILT_B: 0.25,     // hold, then tilt up and left
      EX_A: 0.25, EX_B: 0.58,         // sequential disassembly
      LAB_A: 0.585, LAB_STEP: 0.0095, LAB_W: 0.022, // callouts draw one after another, then hold
      RET_A: 0.755, RET_B: 0.78,      // callouts retract
      AS_A: 0.78, AS_B: 0.93,         // reassembly: the exact reverse of the disassembly
      BACK_A: 0.93, BACK_B: 0.985     // tilt back to the opening pose, then hold
    };
    this.p = 0;
    this.raf = 0;
    this.frame = this.frame.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onLost = this.onLost.bind(this);
  }

  // ---------- lifecycle ----------
  componentDidMount() {
    var reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    this.reduce = reduce;
    if (reduce) this.setState({ still: true });
    if (!this.initGL()) { this.setState({ mode: 'fallback' }); return; }
    window.addEventListener('resize', this.onResize);
    this.onResize();
    // reduced motion: no scroll choreography, just the annotated exploded view
    if (reduce) { this.p = 0.72; this.request(); }
    else this.initScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    cancelAnimationFrame(this.raf);
    clearTimeout(this.waitT);
    if (this.tw) { if (this.tw.scrollTrigger) this.tw.scrollTrigger.kill(); this.tw.kill(); }
    if (this.renderer) {
      var c = this.renderer.domElement;
      if (c) c.removeEventListener('webglcontextlost', this.onLost);
      if (this.scene) this.scene.traverse(function (o) {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(function (m) { m.dispose(); });
      });
      (this.texs || []).forEach(function (t) { t.dispose(); });
      if (this.envTex) this.envTex.dispose();
      this.renderer.dispose();
    }
  }

  onLost(e) {
    if (e && e.preventDefault) e.preventDefault();
    this.setState({ mode: 'fallback' });
  }

  // ---------- scroll: one scrubbed value drives everything, so a scroll position always gives the same frame ----------
  initScroll() {
    var g = window.gsap, ST = window.ScrollTrigger, sec = document.getElementById('hgx-sec'), self = this;
    if (!g || !ST || !sec) {
      this.waitN = (this.waitN || 0) + 1;
      if (this.waitN < 120) this.waitT = setTimeout(function () { self.initScroll(); }, 80);
      return;
    }
    g.registerPlugin(ST);
    var prox = { p: 0 };
    this.tw = g.to(prox, {
      p: 1, ease: 'none',
      onUpdate: function () { self.p = prox.p; self.request(); },
      scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.5 }
    });
    setTimeout(function () { try { ST.refresh(); } catch (e) {} }, 300);
  }

  request() {
    if (!this.raf) this.raf = requestAnimationFrame(this.frame);
  }

  frame() {
    this.raf = 0;
    if (!this.renderer || this.state.mode !== 'gl') return;
    this.apply(this.p);
    this.renderer.render(this.scene, this.camera);
    this.labelsUpdate(this.p);
  }

  onResize() {
    var stage = document.getElementById('hgx-stage');
    if (!stage || !this.renderer) return;
    var w = stage.clientWidth || window.innerWidth, h = stage.clientHeight || window.innerHeight;
    this.W = w; this.H = h;
    var compact = w < 900;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, compact ? 1.25 : 1.35));
    this.renderer.setSize(w, h, false);
    var cam = this.camera, aspect = w / h, k = 2 * Math.tan(cam.fov * Math.PI / 360);
    cam.aspect = aspect;
    // camera distance for the assembled hero framing and for the full exploded stack (height- or width-limited)
    var fit = function (hv, wv) { return Math.max(hv, wv / aspect) / k; };
    this.D0 = compact ? fit(92, 96) : fit(80, 120);
    this.D1 = compact ? fit(116, 140) : fit(96, 160);
    cam.near = 1; cam.far = this.D1 * 4;
    cam.updateProjectionMatrix();
    if (compact !== this.state.compact) {
      var self = this;
      this.setState({ compact: compact }, function () { self.measureLabels(); self.request(); });
    } else this.measureLabels();
    this.compact = compact;
    this.request();
  }

  // ---------- 3D ----------
  initGL() {
    var T = window.THREE, canvas = document.getElementById('hgx-canvas');
    if (!T || !canvas) return false;
    var renderer;
    try {
      renderer = new T.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch (e) { return false; }
    if (!renderer || !renderer.getContext()) return false;
    renderer.outputColorSpace = T.SRGBColorSpace;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.setClearColor(0x000000, 0);
    canvas.addEventListener('webglcontextlost', this.onLost);
    this.renderer = renderer;
    var scene = new T.Scene();
    this.scene = scene;
    this.camera = new T.PerspectiveCamera(26, 1, 1, 4000);
    this.camera.position.set(0, 0, 300);
    this.envTex = this.makeEnv(T, renderer);
    scene.environment = this.envTex;
    scene.add(new T.AmbientLight(0xffffff, 0.14));
    var key = new T.DirectionalLight(0xFFE6C0, 2.3); key.position.set(-50, 70, 90); scene.add(key);
    var rim = new T.DirectionalLight(0xC9D6FF, 1.0); rim.position.set(80, -30, -40); scene.add(rim);
    var side = new T.DirectionalLight(0xFFF1DA, 1.2); side.position.set(110, 10, 40); scene.add(side);
    this.build(T);
    return true;
  }

  // A small studio "room" of soft boxes, baked into a reflection map for the gold and glass
  makeEnv(T, renderer) {
    var s = new T.Scene();
    var geos = [], mats = [];
    var room = new T.Mesh(new T.BoxGeometry(10, 10, 10), new T.MeshBasicMaterial({ color: 0x0b0b0b, side: T.BackSide }));
    geos.push(room.geometry); mats.push(room.material); s.add(room);
    var panel = function (w, h, x, y, z, k, tint) {
      var m = new T.MeshBasicMaterial({ color: new T.Color(tint || 0xffffff).multiplyScalar(k), side: T.DoubleSide });
      var p = new T.Mesh(new T.PlaneGeometry(w, h), m);
      p.position.set(x, y, z); p.lookAt(0, 0, 0);
      geos.push(p.geometry); mats.push(m); s.add(p);
    };
    panel(6, 2.6, 0, 4.8, 1.2, 7, 0xFFF1DC);   // overhead softbox
    panel(1.1, 6, -4.8, 0.4, 1.6, 5, 0xFFDDB0); // warm strip, left
    panel(1, 5, 4.8, -0.2, -0.8, 3.4, 0xFFF4E4); // strip, right (lights the crown side)
    panel(5, 1.4, 0, -1.2, 4.8, 1.5, 0xFFFFFF); // low front fill
    panel(3, 1, 1.2, 2.2, -4.8, 2.2, 0xFFFFFF); // back kicker
    var pm = new T.PMREMGenerator(renderer);
    var rt = pm.fromScene(s, 0.035);
    pm.dispose();
    geos.forEach(function (g) { g.dispose(); });
    mats.forEach(function (m) { m.dispose(); });
    return rt.texture;
  }

  build(T) {
    var self = this, TX = this.TEX, TAU = Math.PI * 2;
    var V2 = function (x, y) { return new T.Vector2(x, y); };
    var mesh = function (geo, mat, x, y, z) { var m = new T.Mesh(geo, mat); m.position.set(x || 0, y || 0, z || 0); return m; };
    var extrude = function (shapes, depth, bevel, segs) {
      return new T.ExtrudeGeometry(shapes, { depth: depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: segs || 24 });
    };
    var lathe = function (pts, seg) {
      var g = new T.LatheGeometry(pts.map(function (p) { return V2(p[0], p[1]); }), seg || 128);
      g.rotateX(Math.PI / 2);
      return g;
    };
    var xAxis = function (g) { g.rotateZ(-Math.PI / 2); return g; }; // cylinder axis Y -> X

    // textures
    var loader = new T.TextureLoader();
    var caps = this.renderer.capabilities, aniso = Math.min(8, caps && caps.getMaxAnisotropy ? caps.getMaxAnisotropy() : 1);
    var texs = this.texs = [];
    var tex = function (url) {
      var t = loader.load(url, function () { self.request(); });
      t.colorSpace = T.SRGBColorSpace; t.anisotropy = aniso;
      texs.push(t); return t;
    };
    var strapTex = tex(TX.strap);
    strapTex.wrapS = T.MirroredRepeatWrapping; strapTex.wrapT = T.MirroredRepeatWrapping; strapTex.repeat.set(1, 5);

    // crown end cap: black enamel with a gold compass star (drawn once into a texture)
    var capTex = null;
    try {
      var cv = document.createElement('canvas');
      cv.width = cv.height = 256;
      var c = cv.getContext('2d');
      c.fillStyle = '#0B0A08'; c.beginPath(); c.arc(128, 128, 128, 0, TAU); c.fill();
      c.strokeStyle = '#E8BE70'; c.lineWidth = 10; c.beginPath(); c.arc(128, 128, 118, 0, TAU); c.stroke();
      c.fillStyle = '#E8BE70'; c.beginPath();
      for (var si = 0; si < 16; si++) { var ra = si % 2 ? 22 : (si % 4 === 0 ? 92 : 62), aa = si * Math.PI / 8 - Math.PI / 2; c[si ? 'lineTo' : 'moveTo'](128 + ra * Math.cos(aa), 128 + ra * Math.sin(aa)); }
      c.closePath(); c.fill();
      c.lineWidth = 3; c.beginPath(); c.arc(128, 128, 70, 0, TAU); c.stroke();
      capTex = new T.CanvasTexture(cv); capTex.colorSpace = T.SRGBColorSpace; texs.push(capTex);
    } catch (e) { capTex = null; }

    // materials: tuned to the photograph's yellow gold
    var M = {
      gold: new T.MeshPhysicalMaterial({ color: '#EDBE72', metalness: 1, roughness: 0.16, clearcoat: 0.5, clearcoatRoughness: 0.08, side: T.DoubleSide }),
      brushed: new T.MeshStandardMaterial({ color: '#DCAD5E', metalness: 1, roughness: 0.34, side: T.DoubleSide }),
      steel: new T.MeshStandardMaterial({ color: '#CFD2D8', metalness: 1, roughness: 0.22 }),
      leather: new T.MeshPhysicalMaterial({ color: '#FFFFFF', map: strapTex, metalness: 0, roughness: 0.5, sheen: 1, sheenColor: new T.Color('#4A3828'), sheenRoughness: 0.5 }),
      leatherSide: new T.MeshStandardMaterial({ color: '#141210', roughness: 0.6 }),
      lining: new T.MeshStandardMaterial({ color: '#B89B74', roughness: 0.85 }),
      cap: new T.MeshStandardMaterial({ color: '#FFFFFF', map: capTex, metalness: 0.4, roughness: 0.3 }),
      // reflective clear glass without a transmission pass (that pass would re-render the scene every frame)
      glass: new T.MeshPhysicalMaterial({ color: '#F4EEDF', metalness: 0, roughness: 0.04, transparent: true, opacity: 0.15, depthWrite: false, specularIntensity: 1, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 2.3, side: T.DoubleSide })
    };

    var watch = new T.Group();
    this.scene.add(watch);
    this.watch = watch;
    var parts = this.parts = {};
    var MOVERS = this.MOVERS = []; // every independently animated component, with its saved original transform

    // --- case, lugs, case-back, strap, crown tube and pusher tubes (the anchor everything returns to) ---
    var caseG = new T.Group(); watch.add(caseG); parts.case = caseG;
    caseG.add(mesh(lathe([[18.6, -4.6], [20.6, -5.0], [21.9, -4.3], [22.3, -2.4], [22.35, -0.2], [22.1, 0.6], [19.2, 0.65], [18.7, 0.1], [18.6, -4.6]]), M.gold));
    var back = new T.CylinderGeometry(19.4, 19.4, 0.8, 96); back.rotateX(Math.PI / 2);
    caseG.add(mesh(back, M.brushed, 0, 0, -5.1));
    var lugShape = new T.Shape([V2(-1.5, 17.5), V2(-0.9, 24.5), V2(0.6, 28.2), V2(3.4, 28.4), V2(3.8, 24.5), V2(3.9, 20), V2(3.7, 17.5)]);
    var lugGeo = extrude(lugShape, 3.4, 0.2, 6); lugGeo.rotateY(Math.PI / 2);
    [[-14.2, 1], [10.8, 1], [-14.2, -1], [10.8, -1]].forEach(function (L) {
      var m = mesh(lugGeo, M.brushed, L[0], 0, 0.2);
      if (L[1] < 0) m.scale.y = -1;
      caseG.add(m);
    });
    var strapGeo = new T.BoxGeometry(20, 36, 2.6, 1, 24, 1);
    strapGeo.translate(0, 18, 0);
    var sp = strapGeo.attributes.position;
    for (var sv = 0; sv < sp.count; sv++) {
      var sy = sp.getY(sv);
      sp.setZ(sv, sp.getZ(sv) - 0.014 * sy * sy);
      sp.setX(sv, sp.getX(sv) * (1 - 0.1 * (sy / 36)));
    }
    strapGeo.computeVertexNormals();
    var strapMats = [M.leatherSide, M.leatherSide, M.leatherSide, M.leatherSide, M.leather, M.lining];
    var strapTop = new T.Mesh(strapGeo, strapMats); strapTop.position.set(0, 25.2, -2.4); caseG.add(strapTop);
    var strapBot = new T.Mesh(strapGeo, strapMats); strapBot.position.set(0, -25.2, -2.4); strapBot.rotation.z = Math.PI; caseG.add(strapBot);
    var CZ = -1.9; // height of the crown and pusher axes on the case flank
    var tube = xAxis(new T.CylinderGeometry(1.25, 1.25, 1.4, 24));
    caseG.add(mesh(tube, M.gold, 22.6, 0, CZ));

    // --- crown & stem (pull straight out along the stem axis) ---
    var crownG = new T.Group(); crownG.position.set(23.2, 0, CZ); watch.add(crownG);
    var stem = mesh(xAxis(new T.CylinderGeometry(0.42, 0.42, 4.2, 16)), M.steel, 0.4, 0, 0); crownG.add(stem);
    var crownObj = new T.Group(); crownG.add(crownObj);
    var knurl = [], NK = 30;
    for (var ki = 0; ki < NK * 2; ki++) { var kr = ki % 2 ? 2.72 : 2.95, ka = ki * Math.PI / NK; knurl.push(V2(kr * Math.cos(ka), kr * Math.sin(ka))); }
    var crownGeo = extrude(new T.Shape(knurl), 3.0, 0.18, 4); crownGeo.rotateY(Math.PI / 2);
    var crownMat = M.gold.clone(); crownMat.flatShading = true;
    crownObj.add(mesh(crownGeo, crownMat, 0.3, 0, 0));
    var capGeo = new T.CircleGeometry(2.45, 48); capGeo.rotateY(Math.PI / 2);
    crownObj.add(mesh(capGeo, M.cap, 3.52, 0, 0));
    parts.crown = crownObj;

    // --- chronograph pushers at 2 and 4 o'clock (each slides out along its own axis) ---
    var pushers = [];
    [0.49, -0.49].forEach(function (ang) {
      var pg = new T.Group(); pg.position.z = CZ; pg.rotation.z = ang; watch.add(pg);
      pg.add(mesh(xAxis(new T.CylinderGeometry(1.0, 1.0, 1.6, 20)), M.gold, 22.6, 0, 0));
      var btn = new T.Group(); pg.add(btn);
      var bl = new T.LatheGeometry([V2(0, 0), V2(1.85, 0), V2(2.05, 0.25), V2(2.05, 2.2), V2(1.8, 2.55), V2(0, 2.6)].map(function (v) { return v; }), 40);
      bl.rotateZ(-Math.PI / 2); // lathe axis Y -> X
      btn.add(mesh(bl, M.gold, 23.3, 0, 0));
      pushers.push(btn);
    });
    parts.pushers = pushers[0];

    // --- photographic movement, dial and hands ---
    // each layer is a textured plate; a few tinted copies stacked behind it give it a visible metal edge when it tilts
    var TS = 20, plate = new T.PlaneGeometry(TS * 2, TS * 2);
    var layer = function (url, depth, edge, x, y) {
      var g = new T.Group(), t = tex(url), n = Math.max(1, Math.round(depth / 0.1));
      var edgeM = new T.MeshBasicMaterial({ map: t, color: edge, alphaTest: 0.45, toneMapped: false });
      for (var j = n; j >= 1; j--) g.add(mesh(plate, edgeM, x || 0, y || 0, -depth * j / n));
      var topM = new T.MeshBasicMaterial({ map: t, alphaTest: 0.04, alphaToCoverage: true, toneMapped: false });
      var face = mesh(plate, topM, x || 0, y || 0, 0);
      g.add(face); g.face = face;
      return g;
    };
    var group = function (z) { var g = new T.Group(); g.position.z = z; watch.add(g); return g; };

    var base = group(-2.9); parts.base = base;
    var baseL = layer(TX.base, 0.8, 0x2a2420); base.add(baseL);

    var bridges = group(-1.9); parts.bridges = bridges;
    var bridgeL = layer(TX.bridge, 0.5, 0x6b4a22); bridges.add(bridgeL);

    var WH = [['w1', 0.54, 8.88], ['w2', -7.8, -0.4], ['w3', 8.84, -0.16], ['w4', 0.26, -9.07]];
    var wheels = WH.map(function (d) { var g = group(-1.3); g.add(layer(TX[d[0]], 0.45, 0x6b4a22)); g.wx = d[1]; g.wy = d[2]; return g; });
    parts.gears = wheels[2];

    var bal = group(-1.2); parts.balance = bal;
    var balL = layer(TX.balance, 0.4, 0x5a4a3a); bal.add(balL);

    // dial support frame: a gold ring under the chapter ring, with locating slots and feet
    var frame = group(-0.5); parts.frame = frame;
    var fs = new T.Shape(); fs.absarc(0, 0, 18.9, 0, TAU, false);
    var fh = new T.Path(); fh.absarc(0, 0, 15.5, 0, TAU, true); fs.holes.push(fh);
    for (var hi = 0; hi < 12; hi++) {
      var ha = (hi + 0.5) * TAU / 12, hp = new T.Path();
      hp.absarc(17.2 * Math.sin(ha), 17.2 * Math.cos(ha), 0.55, 0, TAU, true); fs.holes.push(hp);
    }
    frame.add(mesh(extrude(fs, 0.35, 0.05, 48), M.brushed, 0, 0, 0));
    var foot = new T.CylinderGeometry(0.5, 0.5, 1.4, 16); foot.rotateX(Math.PI / 2);
    [0.6, 2.7, 4.8].forEach(function (a) { frame.add(mesh(foot, M.gold, 17.2 * Math.cos(a), 17.2 * Math.sin(a), -0.6)); });

    var dial = group(0.35); parts.dial = dial;
    var dialL = layer(TX.dial, 0.3, 0x141414); dial.add(dialL);

    var hands = [['hour', 0.8], ['minute', 0.95], ['sec', 1.1]].map(function (d) { var g = group(d[1]); g.add(layer(TX[d[0]], 0.12, 0x6b4a22)); return g; });
    parts.hands = hands[0];

    var bezel = group(0.6); parts.bezel = bezel;
    bezel.add(mesh(lathe([[19.0, 0], [19.05, 0.9], [19.4, 1.5], [20.3, 1.85], [21.4, 1.8], [22.0, 1.3], [22.15, 0.6], [22.0, 0], [19.0, 0]]), M.gold));

    var crystal = group(2.3); parts.crystal = crystal;
    var Rs = 150, capA = Math.asin(19.6 / Rs);
    var dome = new T.SphereGeometry(Rs, 128, 10, 0, TAU, 0, capA); dome.rotateX(Math.PI / 2); dome.translate(0, 0, -(Rs - 1.0));
    var domeM = mesh(dome, M.glass); domeM.renderOrder = 10; crystal.add(domeM);
    var edge = new T.CylinderGeometry(19.6, 19.6, 0.8, 128, 1, true); edge.rotateX(Math.PI / 2);
    var edgeM = mesh(edge, M.glass, 0, 0, -0.6); edgeM.renderOrder = 10; crystal.add(edgeM);

    // --- disassembly choreography: [object, offset in mm along the watch's own axes, scroll window] ---
    var add = function (o, d, a, b) {
      MOVERS.push({ o: o, p0: o.position.clone(), d: new T.Vector3(d[0], d[1], d[2]), a: a, b: b });
    };
    add(crystal, [0, 0, 34], 0.250, 0.315);
    add(bezel, [0, 0, 27], 0.274, 0.330);
    add(hands[0], [0, 0, 21], 0.294, 0.344);
    add(hands[1], [0, 0, 21.6], 0.300, 0.350);
    add(hands[2], [0, 0, 22.2], 0.306, 0.356);
    add(dial, [0, 0, 16], 0.330, 0.380);
    add(frame, [0, 0, 12.6], 0.352, 0.402);
    add(bridges, [0, 0, 9], 0.378, 0.428);
    wheels.forEach(function (g, i) {
      var len = Math.hypot(g.wx, g.wy) || 1;
      add(g, [g.wx / len * 0.9, g.wy / len * 0.9, 4.4 + i * 0.6], 0.404 + i * 0.008, 0.454 + i * 0.008);
    });
    add(bal, [-1.2, 0.9, 11.2], 0.442, 0.492);
    add(base, [0, 0, 2.0], 0.470, 0.520);
    add(stem, [4.2, 0, 0], 0.496, 0.546);
    add(crownObj, [7.5, 0, 0], 0.496, 0.546);
    add(pushers[0], [5.0, 0, 0], 0.516, 0.566);
    add(pushers[1], [5.0, 0, 0], 0.524, 0.574);

    // opening pose (three-quarter, crown side visible) and the tilted pose (up and to the left, crown and pushers toward you)
    this.q0 = new T.Quaternion().setFromEuler(new T.Euler(-0.22, -0.42, 0.04, 'YXZ'));
    this.q1 = new T.Quaternion().setFromEuler(new T.Euler(-0.50, -0.80, 0.12, 'YXZ'));
    this.qt = new T.Quaternion();
    this.tmp = new T.Vector3();

    // callout anchors: a point on each physical part, in that part's own coordinates (photo layers in millimetres)
    this.ANCHORS = {
      crystal: { o: crystal, v: new T.Vector3(-11.2, 11.2, 0.4) },
      bezel: { o: bezel, v: new T.Vector3(-19.4, -8.6, 1.8) },
      hands: { o: hands[0].children[0].face, v: new T.Vector3(-6.91, 4.1, 0) },
      dial: { o: dialL.face, v: new T.Vector3(16.99, 3.98, 0) },
      frame: { o: frame, v: new T.Vector3(-16.9, -3.4, 0.35) },
      balance: { o: balL.face, v: new T.Vector3(-8.2, 7.81, 0) },
      bridges: { o: bridgeL.face, v: new T.Vector3(12.5, 7.5, 0) },
      gears: { o: wheels[2].children[0].face, v: new T.Vector3(13.91, 1.48, 0) },
      base: { o: baseL.face, v: new T.Vector3(-14.2, -6.5, 0) },
      case: { o: caseG, v: new T.Vector3(-21.0, -7.6, -1.6) },
      crown: { o: crownObj, v: new T.Vector3(1.8, 0, 2.95) },
      pushers: { o: pushers[0], v: new T.Vector3(24.6, 0, 2.05) }
    };
    return true;
  }

  // smootherstep: zero velocity and zero acceleration at both ends, so nothing starts or stops with a jolt
  ease(t) { return t <= 0 ? 0 : (t >= 1 ? 1 : t * t * t * (t * (t * 6 - 15) + 10)); }

  // how far a component is out (0–1). Reassembly mirrors the disassembly window, so every part travels back along exactly the same path.
  outAmt(p, a, b) {
    var T = this.T, clamp = function (v) { return v < 0 ? 0 : (v > 1 ? 1 : v); };
    if (p <= (T.EX_B + T.AS_A) / 2) return this.ease(clamp((p - a) / (b - a)));
    var k = (T.AS_B - T.AS_A) / (T.EX_B - T.EX_A);
    var a2 = T.AS_A + (T.EX_B - b) * k, b2 = T.AS_A + (T.EX_B - a) * k;
    return 1 - this.ease(clamp((p - a2) / (b2 - a2)));
  }

  // ---------- one function maps scroll progress to every transform ----------
  apply(p) {
    var T = this.T, clamp = function (v) { return v < 0 ? 0 : (v > 1 ? 1 : v); };
    // tilt up-left, hold through the disassembly, tilt back at the end
    var tilt = p < 0.6 ? this.ease(clamp((p - T.TILT_A) / (T.TILT_B - T.TILT_A))) : 1 - this.ease(clamp((p - T.BACK_A) / (T.BACK_B - T.BACK_A)));
    this.qt.slerpQuaternions(this.q0, this.q1, tilt);
    var w = this.watch;
    w.quaternion.copy(this.qt);
    // overall openness: pulls the camera back and recentres the stack while the top layers lift, mirrored on reassembly
    var X = this.outAmt(p, T.EX_A, 0.33);
    w.position.set(7.5 * X, -10 * X, 0);
    var cam = this.camera;
    cam.position.set(0, 0, this.D0 + (this.D1 - this.D0) * X);
    cam.updateMatrixWorld(true);
    // each component: original transform + its offset scaled by its own (sequential) progress
    for (var i = 0; i < this.MOVERS.length; i++) {
      var m = this.MOVERS[i], e = this.outAmt(p, m.a, m.b);
      m.o.position.set(m.p0.x + m.d.x * e, m.p0.y + m.d.y * e, m.p0.z + m.d.z * e);
    }
    w.updateMatrixWorld(true);
  }

  // ---------- technical callouts ----------
  measureLabels() {
    this.labW = this.LABELS.map(function (L, i) {
      var inner = document.getElementById('hgx-in-' + i);
      return inner ? inner.offsetWidth : 0;
    });
  }

  labelsUpdate(p) {
    var W = this.W, H = this.H, cam = this.camera, self = this, T = this.T;
    var clamp = function (v) { return v < 0 ? 0 : (v > 1 ? 1 : v); };
    var r1 = function (v) { return v.toFixed(1); };
    var visible = p > T.LAB_A && p < T.RET_B;
    if (!visible && !this.labelsShown) return;
    this.labelsShown = visible;
    var labs = this.LABELS, compact = this.compact;
    var maxL = 0, maxR = 0, pad = 12;
    labs.forEach(function (L, i) { if (L.side === 'L') maxL = Math.max(maxL, self.labW[i] || 0); else maxR = Math.max(maxR, self.labW[i] || 0); });
    var edgeL = Math.max(W * (compact ? 0 : 0.18), 14 + maxL);
    var edgeR = Math.min(W * (compact ? 1 : 0.82), W - 14 - maxR);
    var pts = labs.map(function (L) {
      var A = self.ANCHORS[L.key], v = self.tmp.copy(A.v);
      A.o.localToWorld(v);
      v.project(cam);
      return { x: (v.x + 1) / 2 * W, y: (1 - v.y) / 2 * H };
    });
    // stack each column top-to-bottom with a minimum gap so no two callouts overlap,
    // and give each line its own vertical lane (top callout nearest the text) so no two lines ever cross
    // top limit stays clear of the page's sticky navigation bar
    var gap = compact ? 28 : 46, top = Math.max(H * 0.08, compact ? 112 : 84), bot = H * 0.94, lane = compact ? 6 : 10;
    ['L', 'R'].forEach(function (side) {
      var idx = labs.map(function (L, i) { return i; }).filter(function (i) { return labs[i].side === side; });
      idx.sort(function (a, b) { return pts[a].y - pts[b].y; });
      var y = top - gap;
      idx.forEach(function (i) { y = Math.max(pts[i].y, y + gap); pts[i].ly = y; });
      var over = y - bot;
      if (over > 0) idx.forEach(function (i) { pts[i].ly -= over; });
      var prev = -1e9;
      idx.forEach(function (i) { pts[i].ly = Math.max(pts[i].ly, Math.max(top, prev + gap)); prev = pts[i].ly; });
      // lanes: the top callout's lane is nearest the text, each lower one steps back toward the watch,
      // and no lane sits behind its own anchor. That ordering is what keeps every pair of lines from crossing.
      var sg = side === 'L' ? -1 : 1, edge = side === 'L' ? edgeL + pad : edgeR - pad, lim = edge - sg * 6, s = lane;
      idx.forEach(function (i, rank) { if (rank > 0) s = Math.min(s, sg * (lim - pts[i].x) / rank); });
      s = Math.max(2, s);
      var nxt = null;
      for (var r = idx.length - 1; r >= 0; r--) {
        var i = idx[r], ex = edge - sg * ((compact ? 14 : 24) + r * s);
        ex = sg > 0 ? Math.max(ex, pts[i].x) : Math.min(ex, pts[i].x);
        if (nxt !== null) ex = sg > 0 ? Math.max(ex, nxt + s) : Math.min(ex, nxt - s);
        pts[i].ex = ex; nxt = ex;
      }
    });
    // all callouts retract together: text first, then the line, then the anchor
    var ret = clamp((p - T.RET_A) / (T.RET_B - T.RET_A));
    labs.forEach(function (L, i) {
      var f = Math.min(clamp((p - (T.LAB_A + i * T.LAB_STEP)) / T.LAB_W), 1 - ret);
      var fDot = clamp(f / 0.2), fLine = self.ease(clamp((f - 0.12) / 0.5)), fTxt = self.ease(clamp((f - 0.62) / 0.38));
      var P = pts[i], left = L.side === 'L', dir = left ? -1 : 1, ly = P.ly;
      var endX = left ? edgeL + pad : edgeR - pad;
      // technical-drawing leader: out from the anchor, along its own lane, across to the text
      var elbowX = P.ex;
      var l0 = Math.abs(elbowX - P.x), lv = Math.abs(ly - P.y), l1 = l0 + lv, l2 = Math.abs(endX - elbowX), len = l1 + l2, d = len * fLine;
      var hx, hy;
      if (d <= l0) { hx = P.x + dir * d; hy = P.y; }
      else if (d <= l1) { hx = elbowX; hy = P.y + (ly > P.y ? 1 : -1) * (d - l0); }
      else { hx = elbowX + dir * (d - l1); hy = ly; }
      var g = function (k) { return document.getElementById('hgx-' + k + '-' + i); };
      var line = g('l'), dot = g('d'), retc = g('r'), node = g('n'), brk = g('b'), head = g('hd'), rule = g('u'), ticks = g('k'), lab = g('lab');
      if (!line || !dot || !lab) return;
      line.setAttribute('d', 'M' + r1(P.x) + ' ' + r1(P.y) + 'L' + r1(elbowX) + ' ' + r1(P.y) + 'L' + r1(elbowX) + ' ' + r1(ly) + 'L' + r1(endX) + ' ' + r1(ly));
      line.style.strokeDasharray = r1(len) + ' ' + r1(len + 2);
      line.style.strokeDashoffset = r1(len * (1 - fLine));
      line.style.opacity = fLine > 0 ? 1 : 0;
      // ruler under the horizontal run: graduations appear as the line passes them
      var x0 = elbowX + dir * 8, ruleD = '', tickD = '';
      if (d > l1 + 8 && !compact) {
        ruleD = 'M' + r1(x0) + ' ' + r1(ly + 3.5) + 'L' + r1(hx) + ' ' + r1(ly + 3.5);
        for (var k = 0; k < 400; k++) {
          var tx = endX - dir * (3 + k * 6);
          if (dir > 0 ? tx < x0 : tx > x0) break;
          if (dir > 0 ? tx > hx : tx < hx) continue;
          tickD += 'M' + r1(tx) + ' ' + r1(ly + 3.5) + 'V' + r1(ly + (k % 5 === 0 ? 9 : 6));
        }
      }
      if (rule) { rule.setAttribute('d', ruleD); rule.style.opacity = ruleD ? 1 : 0; }
      if (ticks) { ticks.setAttribute('d', tickD); ticks.style.opacity = tickD ? 1 : 0; }
      if (node) {
        node.setAttribute('x', r1(elbowX - 2.5)); node.setAttribute('y', r1(ly - 2.5));
        node.setAttribute('transform', 'rotate(45 ' + r1(elbowX) + ' ' + r1(ly) + ')');
        node.style.opacity = d >= l1 && lv > 4 ? 1 : 0;
      }
      if (brk) {
        brk.setAttribute('d', 'M' + r1(endX + dir * 5) + ' ' + r1(ly - 8) + 'H' + r1(endX) + 'V' + r1(ly + 8) + 'H' + r1(endX + dir * 5));
        brk.style.opacity = clamp((fLine - 0.9) / 0.1).toFixed(3);
      }
      if (head) {
        head.setAttribute('cx', r1(hx)); head.setAttribute('cy', r1(hy));
        head.style.opacity = fLine > 0.01 && fLine < 0.99 ? 1 : 0;
      }
      dot.setAttribute('cx', r1(P.x)); dot.setAttribute('cy', r1(P.y));
      dot.style.opacity = fDot.toFixed(3);
      // anchor reticle turns into place as it appears, then stays still
      if (retc) {
        retc.setAttribute('transform', 'translate(' + r1(P.x) + ' ' + r1(P.y) + ') rotate(' + r1(90 * (1 - fDot)) + ') scale(' + (1.7 - 0.7 * fDot).toFixed(3) + ')');
        retc.style.opacity = (fDot * (compact ? 0.6 : 1)).toFixed(3);
      }
      lab.style.transform = 'translate3d(' + r1(endX + dir * (11 + 8 * (1 - fTxt))) + 'px,' + r1(ly) + 'px,0)';
      lab.style.opacity = fTxt.toFixed(3);
    });
  }

  renderVals() {
    var s = this.state;
    return {
      secCls: s.still ? 'is-static' : '',
      gl: s.mode === 'gl', fallback: s.mode !== 'gl',
      labels: this.LABELS.map(function (L, i) {
        return {
          full: L.title + ' — ' + L.desc, title: s.compact ? L.short : L.title, desc: L.desc,
          sideCls: L.side === 'L' ? 'is-left' : '',
          lineId: 'hgx-l-' + i, dotId: 'hgx-d-' + i, retId: 'hgx-r-' + i, nodeId: 'hgx-n-' + i, brkId: 'hgx-b-' + i,
          headId: 'hgx-hd-' + i, ruleId: 'hgx-u-' + i, tickId: 'hgx-k-' + i,
          labId: 'hgx-lab-' + i, innId: 'hgx-in-' + i
        };
      })
    };
  }
}
return Component;
})(), {});
