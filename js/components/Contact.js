/* Watchify — Contact (template + logic). Rendered by js/dc-lite.js */
DC.define("Contact", "<div id=\"hg-contact\" style=\"background: #0A0908; color: #EFE6D4; font-family: 'Inter', system-ui, sans-serif; overflow-x: clip\">\n\n<!-- NAV -->\n<header class=\"hg-nav\">\n<nav style=\"max-width: 1280px; margin: 0 auto; padding: 14px clamp(16px, 5vw, 72px); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 32px\" aria-label=\"Primary\">\n<a href=\"index.html\" aria-label=\"Watchify — home\" style=\"display: inline-flex; align-items: center; gap: 0.5em; font-family: 'Cinzel', serif; font-size: 22px; letter-spacing: 0.28em; color: #D9B97A; text-decoration: none\"><svg width=\"1.6em\" height=\"1.6em\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" style=\"flex: none; overflow: visible\"><circle cx=\"20\" cy=\"21\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"></circle><rect x=\"17.6\" y=\"1.2\" width=\"4.8\" height=\"3.2\" rx=\"1\" fill=\"currentColor\"></rect><path d=\"M36.5 21h-2.4M5.9 21h-2.4M20 37.5v-2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"></path><path d=\"M10.5 14.5L15.2 28.5L20 19.5L24.8 28.5L29.5 14.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><circle cx=\"20\" cy=\"19.5\" r=\"1.9\" fill=\"#3EE29D\"></circle></svg><span>WATCHIFY</span></a>\n<div style=\"display: flex; flex-wrap: wrap; gap: 4px 32px; font-size: 13px; letter-spacing: 0.02em\">\n<a href=\"collections.html\" class=\"hg-nl\">Collections</a>\n<a href=\"gallery.html\" class=\"hg-nl\">Gallery</a>\n<a href=\"story.html\" class=\"hg-nl\">Our Story</a>\n<a href=\"#top\" class=\"hg-nl is-cur\" aria-current=\"page\">Contact</a>\n</div>\n<button type=\"button\" class=\"hg-bag\" aria-label=\"{{bagLabel}}\" aria-haspopup=\"dialog\" aria-expanded=\"{{bagExpanded}}\" onClick=\"{{openCart}}\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: none; border: none; color: #D9B97A; cursor: pointer; padding: 0\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" aria-hidden=\"true\"><path d=\"M5 8h14l-1 13H6L5 8z\"></path><path d=\"M9 8V6a3 3 0 0 1 6 0v2\"></path></svg>\n<sc-if value=\"{{hasCart}}\" hint-placeholder-val=\"{{ false }}\"><span class=\"hg-bag-n {{bagBump}}\" aria-hidden=\"true\">{{cartCount}}</span></sc-if>\n</button>\n</nav>\n</header>\n\n<!-- 1. HERO -->\n<section id=\"top\" style=\"position: relative; overflow: hidden; background: radial-gradient(50% 80% at 85% 50%, rgba(217,170,90,0.12), rgba(217,170,90,0) 70%)\">\n<div class=\"hg-ring\" aria-hidden=\"true\">\n<svg viewBox=\"0 0 400 400\">\n<circle cx=\"200\" cy=\"200\" r=\"196\" fill=\"none\" stroke=\"#C9A25C\" stroke-opacity=\"0.35\" stroke-width=\"1\" stroke-dasharray=\"2 8\"></circle>\n<circle cx=\"200\" cy=\"200\" r=\"170\" fill=\"none\" stroke=\"#C9A25C\" stroke-opacity=\"0.18\" stroke-width=\"1\"></circle>\n<sc-for list=\"{{ticks}}\" as=\"t\" hint-placeholder-count=\"60\">\n<line x1=\"{{t.x1}}\" y1=\"{{t.y1}}\" x2=\"{{t.x2}}\" y2=\"{{t.y2}}\" stroke=\"#D9B97A\" stroke-opacity=\"{{t.o}}\" stroke-width=\"{{t.w}}\"></line>\n</sc-for>\n</svg>\n</div>\n<div style=\"position: relative; max-width: 1280px; margin: 0 auto; padding: 110px clamp(16px, 5vw, 72px) 100px; display: flex; flex-direction: column; gap: 24px\">\n<p class=\"hg-eyebrow hg-ge\">CONTACT THE ATELIER</p>\n<h1 class=\"hg-gh\" data-delay=\"0.1\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(56px, 8.4vw, 128px); line-height: 0.94; letter-spacing: -0.01em; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Let's talk</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">about time.</em></span></span>\n</h1>\n<p class=\"hg-gf\" data-delay=\"0.45\" style=\"margin: 0; max-width: 520px; font-family: 'Cormorant Garamond', serif; font-size: 22px; line-height: 1.5; color: #CFC5B1\">A question about a piece, a bespoke commission or a watch that needs care — a watchmaker reads every message.</p>\n</div>\n</section>\n\n<!-- 2. CONTACT -->\n<section id=\"write\" style=\"position: relative; background: #000000; border-top: 1px solid rgba(201,162,92,0.22)\">\n<div style=\"max-width: 1280px; margin: 0 auto; padding: 110px clamp(16px, 5vw, 72px) 120px; display: flex; flex-wrap: wrap; align-items: flex-start; gap: 64px 72px\">\n<div style=\"flex: 1 1 340px; min-width: 0; display: flex; flex-direction: column; gap: 22px\">\n<p class=\"hg-eyebrow hg-ge\">VISIT · WRITE · CALL</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(38px, 4.4vw, 60px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Come by the bench,</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">or drop us a line.</em></span></span>\n</h2>\n<div style=\"display: flex; flex-direction: column; border-top: 1px solid rgba(201,162,92,0.16); margin-top: 10px\">\n<div class=\"hg-info hg-gf\">\n<span class=\"hg-info-ic\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><path d=\"M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z\"></path><circle cx=\"12\" cy=\"9\" r=\"2.5\"></circle></svg></span>\n<b>ATELIER &amp; FLAGSHIP</b>\n<span>[Your boutique address]</span>\n</div>\n<div class=\"hg-info hg-gf\" data-delay=\"0.08\">\n<span class=\"hg-info-ic\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"></rect><path d=\"M3 7l9 6 9-6\"></path></svg></span>\n<b>EMAIL</b>\n<span>[your email address]</span>\n</div>\n<div class=\"hg-info hg-gf\" data-delay=\"0.16\">\n<span class=\"hg-info-ic\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z\"></path></svg></span>\n<b>TELEPHONE</b>\n<span>[your phone number]</span>\n</div>\n<div class=\"hg-info hg-gf\" data-delay=\"0.24\">\n<span class=\"hg-info-ic\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M12 7v5l3 2\"></path></svg></span>\n<b>HOURS</b>\n<span>[your opening hours]</span>\n</div>\n</div>\n</div>\n\n<div style=\"flex: 1.4 1 480px; min-width: 0\">\n<div id=\"hg-fcard\" class=\"hg-fwrap\">\n<span class=\"hg-frim\" aria-hidden=\"true\"><span class=\"hg-frim-in\"></span></span>\n<div class=\"hg-form\">\n<sc-if value=\"{{formOpen}}\" hint-placeholder-val=\"{{ true }}\">\n<form id=\"hg-cform\" novalidate=\"\" onSubmit=\"{{submit}}\" aria-label=\"Contact form\">\n<div style=\"display: flex; flex-direction: column; gap: 6px; margin-bottom: 26px\">\n<p style=\"margin: 0; font-size: 11px; font-weight: 600; letter-spacing: 0.24em; color: #8A6526\">SEND A MESSAGE</p>\n<h3 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(30px, 3vw, 40px); line-height: 1.05; color: #1A1408\">How can we help?</h3>\n</div>\n<div class=\"hg-fgrid\">\n<div class=\"hg-field hg-fi\">\n<label for=\"cf-name\">FULL NAME *</label>\n<input id=\"cf-name\" name=\"name\" class=\"hg-input\" type=\"text\" autocomplete=\"name\" placeholder=\"Your name\" aria-invalid=\"{{inv.name}}\" aria-describedby=\"cf-name-err\">\n<sc-if value=\"{{err.name}}\" hint-placeholder-val=\"{{ false }}\"><p id=\"cf-name-err\" class=\"hg-err\">{{err.name}}</p></sc-if>\n</div>\n<div class=\"hg-field hg-fi\">\n<label for=\"cf-email\">EMAIL *</label>\n<input id=\"cf-email\" name=\"email\" class=\"hg-input\" type=\"email\" autocomplete=\"email\" placeholder=\"you@example.com\" aria-invalid=\"{{inv.email}}\" aria-describedby=\"cf-email-err\">\n<sc-if value=\"{{err.email}}\" hint-placeholder-val=\"{{ false }}\"><p id=\"cf-email-err\" class=\"hg-err\">{{err.email}}</p></sc-if>\n</div>\n<div class=\"hg-field hg-fi\">\n<label for=\"cf-phone\">PHONE</label>\n<input id=\"cf-phone\" name=\"phone\" class=\"hg-input\" type=\"tel\" autocomplete=\"tel\" placeholder=\"Optional\">\n</div>\n<div class=\"hg-field hg-fi\">\n<label for=\"cf-topic\">I'M ASKING ABOUT</label>\n<select id=\"cf-topic\" name=\"topic\" class=\"hg-input\">\n<option value=\"piece\">A piece from the collections</option>\n<option value=\"bespoke\">A bespoke commission</option>\n<option value=\"service\">Service &amp; repair</option>\n<option value=\"viewing\">Booking a private viewing</option>\n<option value=\"other\">Something else</option>\n</select>\n</div>\n<div class=\"hg-field hg-wide hg-fi\">\n<span class=\"hg-flabel\" id=\"cf-pref-l\">BEST WAY TO REACH YOU</span>\n<div class=\"hg-pills\" role=\"radiogroup\" aria-labelledby=\"cf-pref-l\">\n<label class=\"hg-pill\"><input id=\"cf-pref-email\" type=\"radio\" name=\"pref\" value=\"email\"><span>EMAIL</span></label>\n<label class=\"hg-pill\"><input type=\"radio\" name=\"pref\" value=\"phone\"><span>PHONE</span></label>\n<label class=\"hg-pill\"><input type=\"radio\" name=\"pref\" value=\"whatsapp\"><span>WHATSAPP</span></label>\n</div>\n</div>\n<div class=\"hg-field hg-wide hg-fi\">\n<label for=\"cf-msg\">YOUR MESSAGE *</label>\n<textarea id=\"cf-msg\" name=\"message\" class=\"hg-input\" rows=\"5\" placeholder=\"Tell us a little about what you're looking for\" aria-invalid=\"{{inv.message}}\" aria-describedby=\"cf-msg-err\"></textarea>\n<sc-if value=\"{{err.message}}\" hint-placeholder-val=\"{{ false }}\"><p id=\"cf-msg-err\" class=\"hg-err\">{{err.message}}</p></sc-if>\n</div>\n<div class=\"hg-field hg-wide hg-fi\">\n<label class=\"hg-check\"><input type=\"checkbox\" name=\"consent\" aria-invalid=\"{{inv.consent}}\" aria-describedby=\"cf-consent-err\"><span>I'm happy for Watchify to contact me about this enquiry. *</span></label>\n<sc-if value=\"{{err.consent}}\" hint-placeholder-val=\"{{ false }}\"><p id=\"cf-consent-err\" class=\"hg-err\">{{err.consent}}</p></sc-if>\n</div>\n</div>\n<div class=\"hg-fi\" style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; margin-top: 28px\">\n<p style=\"margin: 0; font-size: 12px; color: #6E5C38\">We reply within one working day.</p>\n<button type=\"submit\" class=\"hg-btn\" style=\"min-height: 54px; padding: 0 34px; border: none; border-radius: 999px; background: #14110D; color: #E3C88E; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.18em; box-shadow: 0 0 0 1px rgba(201,162,92,0.6), 0 12px 30px -12px rgba(138,101,38,0.8)\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">SEND MESSAGE</span>\n</button>\n</div>\n</form>\n</sc-if>\n<sc-if value=\"{{sent}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"hg-done\" role=\"status\">\n<svg width=\"84\" height=\"84\" viewBox=\"0 0 84 84\" fill=\"none\" aria-hidden=\"true\">\n<circle class=\"hg-tick-ring\" cx=\"42\" cy=\"42\" r=\"38\" stroke=\"#B8913F\" stroke-width=\"2\"></circle>\n<path class=\"hg-tick\" d=\"M27 43l10 10 20-22\" stroke=\"#8A6526\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n<h3 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(34px, 3.6vw, 48px); line-height: 1.05; color: #1A1408\">Thank you, {{sentName}}.</h3>\n<p style=\"margin: 0; max-width: 420px; font-family: 'Cormorant Garamond', serif; font-size: 21px; line-height: 1.5; color: #4A3A1C\">Your message is with the atelier. A watchmaker will reply within one working day.</p>\n<button type=\"button\" onClick=\"{{again}}\" style=\"min-height: 44px; padding: 0; border: none; background: none; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.18em; color: #8A6526; text-decoration: underline; text-underline-offset: 6px; cursor: pointer\">SEND ANOTHER MESSAGE</button>\n</div>\n</sc-if>\n</div>\n</div>\n</div>\n</div>\n</section>\n\n<!-- FOOTER -->\n<footer style=\"max-width: 1280px; margin: 0 auto; padding: 48px clamp(16px, 5vw, 72px) 28px; display: flex; flex-direction: column; gap: 32px\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 40px 64px\">\n<div style=\"flex: 1 1 240px; display: flex; flex-direction: column; gap: 12px\">\n<p style=\"margin: 0; display: flex; align-items: center; gap: 0.5em; font-family: 'Cinzel', serif; font-size: 20px; letter-spacing: 0.26em; color: #D9B97A\"><svg width=\"1.6em\" height=\"1.6em\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" style=\"flex: none; overflow: visible\"><circle cx=\"20\" cy=\"21\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"></circle><rect x=\"17.6\" y=\"1.2\" width=\"4.8\" height=\"3.2\" rx=\"1\" fill=\"currentColor\"></rect><path d=\"M36.5 21h-2.4M5.9 21h-2.4M20 37.5v-2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"></path><path d=\"M10.5 14.5L15.2 28.5L20 19.5L24.8 28.5L29.5 14.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><circle cx=\"20\" cy=\"19.5\" r=\"1.9\" fill=\"#3EE29D\"></circle></svg><span>WATCHIFY</span></p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #CFC5B1\">Make every second matter.</p>\n<div style=\"display: flex; gap: 4px; margin-left: -12px\">\n<a href=\"#top\" aria-label=\"Instagram\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"></rect><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><circle cx=\"17.5\" cy=\"6.5\" r=\"0.8\" fill=\"currentColor\"></circle></svg></a>\n<a href=\"#top\" aria-label=\"Facebook\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><path d=\"M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z\"></path></svg></a>\n<a href=\"#top\" aria-label=\"X\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" aria-hidden=\"true\"><path d=\"M4 4l16 16M20 4L4 20\"></path></svg></a>\n<a href=\"#top\" aria-label=\"Pinterest\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M11 8.5c3-1 5 .5 4.5 3s-3 3-4 1.5M11.5 10l-2.5 11\"></path></svg></a>\n</div>\n</div>\n<nav aria-label=\"Footer\" style=\"flex: 1 1 160px; display: flex; flex-direction: column; gap: 10px\">\n<p style=\"margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #EFE6D4\">PAGES</p>\n<a href=\"index.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Home</a>\n<a href=\"collections.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Collections</a>\n<a href=\"gallery.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Gallery</a>\n<a href=\"story.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Our Story</a>\n<a href=\"#top\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #E3C88E; text-decoration: none\">Contact</a>\n</nav>\n<form onSubmit=\"{{nlSubmit}}\" style=\"flex: 1 1 300px; display: flex; flex-direction: column; gap: 10px; padding-left: 28px; border-left: 1px solid rgba(201,162,92,0.25)\">\n<label for=\"hg-email\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #F1E6CF\">Letters on time</label>\n<p style=\"margin: 0; font-size: 12px; line-height: 1.5; color: #A79E8C\">Be the first to know about new arrivals and exclusive stories.</p>\n<sc-if value=\"{{nlDone}}\" hint-placeholder-val=\"{{ false }}\">\n<p role=\"status\" style=\"margin: 6px 0 0; font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #E3C88E\">Thank you — you are on the list.</p>\n</sc-if>\n<sc-if value=\"{{nlOpen}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px\">\n<input id=\"hg-email\" name=\"email\" type=\"email\" required=\"{{ true }}\" autocomplete=\"email\" placeholder=\"Your email address\" style=\"flex: 1 1 160px; min-width: 0; min-height: 44px; padding: 0 14px; background: #100E0B; border: 1px solid rgba(201,162,92,0.35); color: #EFE6D4; font-family: 'Inter', sans-serif; font-size: 13px; box-sizing: border-box\">\n<button type=\"submit\" class=\"hg-btn\" style=\"min-height: 44px; padding: 0 22px; background: #D9B97A; color: #1A1408; border: none; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.16em\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">SUBSCRIBE</span>\n</button>\n</div>\n</sc-if>\n</form>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding-top: 18px; border-top: 1px solid rgba(201,162,92,0.2); font-size: 12px; color: #A79E8C\">\n<p style=\"margin: 0\">© 2026 Watchify. All rights reserved.</p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 15px; color: #D9B97A\">Timeless pieces. A lasting legacy.</p>\n</div>\n</footer>\n\n<dc-import name=\"CartDrawer\" open=\"{{cartOpen}}\" on-close=\"{{closeCart}}\" on-change=\"{{cartChange}}\" hint-size=\"0px,0px\"></dc-import>\n</div>", (function () {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { sent: false, sentName: '', err: { name: '', email: '', message: '', consent: '' }, nl: false };
    var ticks = [];
    for (var i = 0; i < 60; i++) {
      var a = i * Math.PI / 30, s = Math.sin(a), c = Math.cos(a), major = i % 5 === 0;
      var r1 = major ? 176 : 182, r2 = 188;
      ticks.push({ x1: (200 + r1 * s).toFixed(2), y1: (200 - r1 * c).toFixed(2), x2: (200 + r2 * s).toFixed(2), y2: (200 - r2 * c).toFixed(2), w: major ? 2 : 1, o: major ? 0.7 : 0.3 });
    }
    this.ticks = ticks;
    this.submit = this.submit.bind(this);
    this.again = this.again.bind(this);
  }

  componentDidMount() {
    this.prefDefault();
    this.fxStart('hg-contact', this.pageFx.bind(this));
  }

  prefDefault() {
    var r = document.getElementById('cf-pref-email');
    if (r) r.checked = true;
  }

  componentWillUnmount() {
    this.fxStop();
  }

  submit(e) {
    e.preventDefault();
    var f = e.currentTarget;
    var q = function (n) { return f.querySelector('[name="' + n + '"]'); };
    var name = (q('name').value || '').trim(), email = (q('email').value || '').trim(), msg = (q('message').value || '').trim();
    var err = { name: '', email: '', message: '', consent: '' };
    if (!name) err.name = 'Please tell us your name.';
    if (!email) err.email = 'Please add your email so we can reply.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = 'That email address doesn’t look quite right.';
    if (msg.length < 10) err.message = 'A few words about your enquiry, please (at least 10 characters).';
    if (!q('consent').checked) err.consent = 'Please confirm we may contact you.';
    var bad = ['name', 'email', 'message', 'consent'].filter(function (k) { return err[k]; });
    if (bad.length) {
      this.setState({ err: err }, function () {
        var first = f.querySelector('[name="' + bad[0] + '"]');
        if (first) first.focus();
        var g = window.gsap;
        if (g) g.fromTo('#hg-fcard', { x: -10 }, { x: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
      });
      return;
    }
    var self = this;
    var g = window.gsap;
    var done = function () {
      self.setState({ sent: true, sentName: name.split(' ')[0], err: err }, function () {
        if (g) g.fromTo('.hg-done > *', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.1 });
      });
    };
    if (g && !this.fxReduce) g.to('#hg-cform', { opacity: 0, y: -16, duration: 0.4, ease: 'power2.in', onComplete: done });
    else done();
  }

  again() {
    var self = this;
    this.setState({ sent: false, sentName: '' }, function () {
      self.prefDefault();
      var g = window.gsap;
      if (g) g.fromTo('#hg-cform .hg-fi', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.06 });
    });
  }

  // ---------- Motion engine: GSAP reveals and smooth scrolling ----------
  fxStart(rootId, extra) {
    this.fxRootId = rootId; this.fxExtra = extra || null;
    this.fxInit = this.fxInit.bind(this);
    this.fxInit();
  }

  fxInit() {
    var g = window.gsap, ST = window.ScrollTrigger, root = document.getElementById(this.fxRootId), self = this;
    if (!g || !ST || !root) {
      this.fxTries = (this.fxTries || 0) + 1;
      if (this.fxTries < 120) this.fxTimer = setTimeout(this.fxInit, 80);
      return;
    }
    g.registerPlugin(ST);
    var reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    this.fxReduce = reduce;
    if (!reduce) this.smoothStart();
    this.fxCtx = g.context(function () {
      if (reduce) return;
      g.utils.toArray(root.querySelectorAll('.hg-gh')).forEach(function (h) {
        var lines = h.querySelectorAll('.hg-ln');
        g.fromTo(lines.length ? lines : h, { yPercent: 108, opacity: 0 }, {
          yPercent: 0, opacity: 1, duration: 1.5, ease: 'expo.out', stagger: 0.14,
          delay: parseFloat(h.getAttribute('data-delay') || '0'),
          scrollTrigger: { trigger: h, start: 'top 88%', once: true }
        });
      });
      g.utils.toArray(root.querySelectorAll('.hg-ge')).forEach(function (el) {
        g.fromTo(el, { opacity: 0, y: 14 }, {
          opacity: 1, y: 0, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true }
        });
      });
      g.utils.toArray(root.querySelectorAll('.hg-gf')).forEach(function (el) {
        g.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: parseFloat(el.getAttribute('data-delay') || '0'),
          scrollTrigger: { trigger: el, start: 'top 90%', once: true }
        });
      });
      if (self.fxExtra) self.fxExtra(g, ST, root);
    }, root);
    var refresh = function () { try { ST.refresh(); } catch (e) {} };
    this.fxRefresh = refresh;
    this.fxTimers = [setTimeout(refresh, 700), setTimeout(refresh, 2000)];
    try { if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh); } catch (e) {}
    window.addEventListener('load', refresh);
  }

  smoothStart() {
    if (this.sm) return;
    try { if (window.matchMedia('(pointer: coarse)').matches) return; } catch (e) {}
    var de = document.documentElement;
    var sm = { cur: 0, tgt: 0, raf: 0, on: false, last: 0 };
    var maxY = function () { return Math.max(0, de.scrollHeight - window.innerHeight); };
    var step = function (now) {
      var dt = Math.min(0.05, Math.max(0.001, (now - (sm.last || now)) / 1000));
      sm.last = now;
      sm.cur += (sm.tgt - sm.cur) * (1 - Math.pow(0.0012, dt));
      if (Math.abs(sm.tgt - sm.cur) < 0.5) { sm.cur = sm.tgt; sm.on = false; }
      window.scrollTo(0, sm.cur);
      if (window.ScrollTrigger) window.ScrollTrigger.update(); // same-frame update: no scroll/animation jitter
      sm.raf = sm.on ? requestAnimationFrame(step) : 0;
    };
    sm.wheel = function (e) {
      if (sm.paused || e.ctrlKey || e.defaultPrevented) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (maxY() < 2) return;
      var t = e.target;
      if (t && t.tagName === 'TEXTAREA' && t.scrollHeight > t.clientHeight) return;
      e.preventDefault();
      var d = e.deltaY * (e.deltaMode === 1 ? 36 : (e.deltaMode === 2 ? window.innerHeight : 1));
      if (!sm.on) { sm.cur = sm.tgt = window.scrollY; sm.last = 0; }
      sm.tgt = Math.max(0, Math.min(maxY(), sm.tgt + d));
      if (!sm.on) { sm.on = true; sm.raf = requestAnimationFrame(step); }
    };
    sm.sync = function () {
      if (sm.on && Math.abs(window.scrollY - sm.cur) > 3) { sm.on = false; cancelAnimationFrame(sm.raf); sm.raf = 0; }
      if (!sm.on) sm.cur = sm.tgt = window.scrollY;
    };
    window.addEventListener('wheel', sm.wheel, { passive: false });
    window.addEventListener('scroll', sm.sync, { passive: true });
    this.sm = sm;
  }

  fxStop() {
    clearTimeout(this.fxTimer);
    (this.fxTimers || []).forEach(function (t) { clearTimeout(t); });
    if (this.fxRefresh) window.removeEventListener('load', this.fxRefresh);
    if (this.fxCtx) this.fxCtx.revert();
    if (this.sm) {
      window.removeEventListener('wheel', this.sm.wheel);
      window.removeEventListener('scroll', this.sm.sync);
      cancelAnimationFrame(this.sm.raf);
      this.sm = null;
    }
  }

  pageFx(g, ST, root) {
    // the dial ring drifts in, the form card lifts out of the dark, fields follow one by one
    g.fromTo(root.querySelector('.hg-ring'), { opacity: 0, scale: 0.7, rotate: -40 }, { opacity: 0.7, scale: 1, rotate: 0, duration: 2.6, ease: 'expo.out' });
    g.to(root.querySelector('.hg-ring'), { yPercent: 18, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: 0.6 } });
    g.fromTo(root.querySelector('#hg-fcard'), { opacity: 0, y: 80, rotateX: 12, transformPerspective: 1400 }, {
      opacity: 1, y: 0, rotateX: 0, duration: 1.6, ease: 'expo.out',
      scrollTrigger: { trigger: root.querySelector('#write'), start: 'top 75%', once: true }
    });
    g.fromTo(root.querySelectorAll('#hg-cform .hg-fi'), { opacity: 0, y: 26 }, {
      opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.07, delay: 0.35,
      scrollTrigger: { trigger: root.querySelector('#write'), start: 'top 75%', once: true }
    });
  }

  // Cart drawer bridge: the drawer owns the cart; the page tracks open/closed and the badge count.
  cartApi() {
    if (this.cartFns) return this.cartFns;
    var self = this;
    this.cartFns = {
      open: function () { if (self.sm) self.sm.paused = true; self.setState({ cartOpen: true }); },
      close: function () { if (self.sm) self.sm.paused = false; self.setState({ cartOpen: false }); },
      change: function (items) {
        var n = 0;
        (items || []).forEach(function (it) { n += it.qty; });
        var prev = self.state.cartN || 0;
        if (n === prev && self.cartSeen) return;
        var bump = !!self.cartSeen && n > prev;
        self.cartSeen = true;
        self.setState({ cartN: n, bump: bump });
        if (bump) { clearTimeout(self.bumpT); self.bumpT = setTimeout(function () { self.setState({ bump: false }); }, 700); }
      }
    };
    return this.cartFns;
  }

  renderVals() {
    var s = this.state, self = this, e = s.err;
    return {
      ticks: this.ticks,
      formOpen: !s.sent, sent: s.sent, sentName: s.sentName || 'friend',
      err: e,
      inv: { name: e.name ? 'true' : 'false', email: e.email ? 'true' : 'false', message: e.message ? 'true' : 'false', consent: e.consent ? 'true' : 'false' },
      submit: this.submit, again: this.again,
      nlDone: s.nl, nlOpen: !s.nl,
      cartOpen: !!s.cartOpen, hasCart: (s.cartN || 0) > 0, cartCount: s.cartN || 0,
      bagLabel: 'Open cart, ' + (s.cartN || 0) + ((s.cartN || 0) === 1 ? ' item' : ' items'),
      bagExpanded: s.cartOpen ? 'true' : 'false', bagBump: s.bump ? 'is-bump' : '',
      openCart: this.cartApi().open, closeCart: this.cartApi().close, cartChange: this.cartApi().change,
      nlSubmit: function (ev) { ev.preventDefault(); self.setState({ nl: true }); }
    };
  }
}
return Component;
})(), {});
