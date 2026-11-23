/* Watchify — Collections (template + logic). Rendered by js/dc-lite.js */
DC.define("Collections", "<div id=\"hg-col\" style=\"background: #0A0908; color: #EFE6D4; font-family: 'Inter', system-ui, sans-serif; overflow-x: clip\">\n\n<!-- NAV -->\n<header class=\"hg-nav\">\n<nav style=\"max-width: 1280px; margin: 0 auto; padding: 14px clamp(16px, 5vw, 72px); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 32px\" aria-label=\"Primary\">\n<a href=\"index.html\" aria-label=\"Watchify — home\" style=\"display: inline-flex; align-items: center; gap: 0.5em; font-family: 'Cinzel', serif; font-size: 22px; letter-spacing: 0.28em; color: #D9B97A; text-decoration: none\"><svg width=\"1.6em\" height=\"1.6em\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" style=\"flex: none; overflow: visible\"><circle cx=\"20\" cy=\"21\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"></circle><rect x=\"17.6\" y=\"1.2\" width=\"4.8\" height=\"3.2\" rx=\"1\" fill=\"currentColor\"></rect><path d=\"M36.5 21h-2.4M5.9 21h-2.4M20 37.5v-2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"></path><path d=\"M10.5 14.5L15.2 28.5L20 19.5L24.8 28.5L29.5 14.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><circle cx=\"20\" cy=\"19.5\" r=\"1.9\" fill=\"#3EE29D\"></circle></svg><span>WATCHIFY</span></a>\n<div style=\"display: flex; flex-wrap: wrap; gap: 4px 32px; font-size: 13px; letter-spacing: 0.02em\">\n<a href=\"#top\" class=\"hg-nl is-cur\" aria-current=\"page\">Collections</a>\n<a href=\"gallery.html\" class=\"hg-nl\">Gallery</a>\n<a href=\"story.html\" class=\"hg-nl\">Our Story</a>\n<a href=\"contact.html\" class=\"hg-nl\">Contact</a>\n</div>\n<button type=\"button\" class=\"hg-bag\" aria-label=\"{{bagLabel}}\" aria-haspopup=\"dialog\" aria-expanded=\"{{bagExpanded}}\" onClick=\"{{openCart}}\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: none; border: none; color: #D9B97A; cursor: pointer; padding: 0\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" aria-hidden=\"true\"><path d=\"M5 8h14l-1 13H6L5 8z\"></path><path d=\"M9 8V6a3 3 0 0 1 6 0v2\"></path></svg>\n<sc-if value=\"{{hasCart}}\" hint-placeholder-val=\"{{ false }}\"><span class=\"hg-bag-n {{bagBump}}\" aria-hidden=\"true\">{{cartCount}}</span></sc-if>\n</button>\n</nav>\n</header>\n\n<!-- 1. HERO -->\n<section id=\"top\" style=\"position: relative; overflow: hidden\">\n<div class=\"hg-aura\" aria-hidden=\"true\"></div>\n<div style=\"position: relative; max-width: 1280px; margin: 0 auto; padding: 64px clamp(16px, 5vw, 72px) 96px; display: flex; flex-wrap: wrap; align-items: center; gap: 48px 56px\">\n<div style=\"flex: 1 1 480px; min-width: 0; display: flex; flex-direction: column; gap: 26px\">\n<p class=\"hg-eyebrow hg-ge\">THE COLLECTIONS · 2026</p>\n<h1 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(54px, 7.4vw, 112px); line-height: 0.96; letter-spacing: -0.01em; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Six dials.</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">One</em> obsession.</span></span>\n</h1>\n<p class=\"hg-gf\" data-delay=\"0.35\" style=\"margin: 0; max-width: 470px; font-family: 'Cormorant Garamond', serif; font-size: 21px; line-height: 1.5; color: #CFC5B1\">Every Watchify is skeletonised by hand, so the movement itself becomes the dial. All that is left to choose is the colour of the light that passes through it.</p>\n<div class=\"hg-gf\" data-delay=\"0.5\" style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 20px 36px\">\n<a href=\"#pieces\" class=\"hg-btn\" style=\"display: inline-flex; align-items: center; justify-content: center; min-height: 50px; padding: 0 32px; background: #D9B97A; color: #1A1408; font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-decoration: none\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">EXPLORE THE PIECES</span>\n</a>\n<a href=\"#bespoke\" class=\"hg-line\" style=\"display: inline-flex; align-items: center; min-height: 44px; font-size: 12px; font-weight: 500; letter-spacing: 0.16em; color: #EFE6D4\">BESPOKE COMMISSIONS</a>\n</div>\n<div class=\"hg-gf\" data-delay=\"0.65\" style=\"display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-top: 18px; max-width: 520px\">\n<div class=\"hg-stat\"><b><span class=\"hg-count\" data-to=\"6\" data-pad=\"2\">06</span></b><span>Signature dials</span></div>\n<div class=\"hg-stat\"><b><span class=\"hg-count\" data-to=\"212\">212</span></b><span>Parts per calibre</span></div>\n<div class=\"hg-stat\"><b><span class=\"hg-count\" data-to=\"72\" data-suf=\"h\">72h</span></b><span>Power reserve</span></div>\n</div>\n</div>\n\n<div style=\"flex: 1 1 420px; min-width: 0; display: flex; justify-content: center\">\n<div class=\"hg-hero-stage\" onMouseMove=\"{{heroMove}}\" onMouseLeave=\"{{heroLeave}}\">\n<div class=\"hg-par hg-par-ring\">\n<div class=\"hg-orbit hg-orbit-in\" aria-hidden=\"true\">\n<svg class=\"hg-orb-l hg-spin-slow\" viewBox=\"0 0 600 600\">\n<circle cx=\"300\" cy=\"300\" r=\"292\" fill=\"none\" stroke=\"#C9A25C\" stroke-opacity=\"0.32\" stroke-width=\"1\" stroke-dasharray=\"2 9\"></circle>\n<sc-for list=\"{{ticks}}\" as=\"t\" hint-placeholder-count=\"60\">\n<line x1=\"{{t.x1}}\" y1=\"{{t.y1}}\" x2=\"{{t.x2}}\" y2=\"{{t.y2}}\" stroke=\"#D9B97A\" stroke-opacity=\"{{t.o}}\" stroke-width=\"{{t.w}}\"></line>\n</sc-for>\n</svg>\n<svg class=\"hg-orb-l hg-spin-rev\" viewBox=\"0 0 600 600\">\n<circle cx=\"300\" cy=\"300\" r=\"252\" fill=\"none\" stroke=\"#3EE29D\" stroke-opacity=\"0.18\" stroke-width=\"1\"></circle>\n<path d=\"M300 48 A252 252 0 0 1 552 300\" fill=\"none\" stroke=\"#E3C88E\" stroke-opacity=\"0.75\" stroke-width=\"1.4\" stroke-linecap=\"round\"></path>\n</svg>\n<svg class=\"hg-orb-l hg-spin-bead\" viewBox=\"0 0 600 600\">\n<circle cx=\"300\" cy=\"8\" r=\"5\" fill=\"#F6E0A6\"></circle>\n<circle cx=\"300\" cy=\"8\" r=\"12\" fill=\"#F6E0A6\" fill-opacity=\"0.18\"></circle>\n</svg>\n</div>\n</div>\n<div class=\"hg-par hg-par-img\">\n<div class=\"hg-hero-spin\" style=\"position: absolute; inset: 0\">\n<div class=\"hg-hero-float\">\n<img class=\"hg-hero-img hg-wimg\" src=\"assets/images/38e923d6674f686cea6263a1aa7cb9fb.webp\" alt=\"Verde Squelette skeleton watch with an emerald sapphire dial in a yellow gold case\">\n</div>\n</div>\n</div>\n<div class=\"hg-par hg-par-chip\" aria-hidden=\"true\">\n<span class=\"hg-chip\" style=\"left: -2%; top: 18%\"><i></i>Emerald sapphire dial</span>\n<span class=\"hg-chip\" style=\"right: -4%; bottom: 20%\">18k gold · 41 mm</span>\n</div>\n</div>\n</div>\n</div>\n</section>\n\n<!-- 2. MARQUEE -->\n<section class=\"hg-mq\" aria-label=\"Dial finishes\">\n<div class=\"hg-mq-row\">\n<div id=\"hg-mq1\" class=\"hg-mq-track\">\n<span class=\"hg-mq-item\">Fumé <span class=\"hg-dia\">◆</span> <em>Verde</em> <span class=\"hg-dia\">◆</span> Bleu Nuit <span class=\"hg-dia\">◆</span> <em>Rubis</em> <span class=\"hg-dia\">◆</span> Noir <span class=\"hg-dia\">◆</span> <em>Héritage</em> <span class=\"hg-dia\">◆</span></span>\n<span class=\"hg-mq-item\" aria-hidden=\"true\">Fumé <span class=\"hg-dia\">◆</span> <em>Verde</em> <span class=\"hg-dia\">◆</span> Bleu Nuit <span class=\"hg-dia\">◆</span> <em>Rubis</em> <span class=\"hg-dia\">◆</span> Noir <span class=\"hg-dia\">◆</span> <em>Héritage</em> <span class=\"hg-dia\">◆</span></span>\n</div>\n</div>\n<div class=\"hg-mq-row hg-mq-out\" aria-hidden=\"true\">\n<div id=\"hg-mq2\" class=\"hg-mq-track\">\n<span class=\"hg-mq-item\">Hand-bevelled <span class=\"hg-dia\">◆</span> Skeletonised <span class=\"hg-dia\">◆</span> Regulated in five positions <span class=\"hg-dia\">◆</span> Made to be kept <span class=\"hg-dia\">◆</span></span>\n<span class=\"hg-mq-item\">Hand-bevelled <span class=\"hg-dia\">◆</span> Skeletonised <span class=\"hg-dia\">◆</span> Regulated in five positions <span class=\"hg-dia\">◆</span> Made to be kept <span class=\"hg-dia\">◆</span></span>\n</div>\n</div>\n</section>\n\n<!-- 3. DIAL SELECTOR -->\n<section id=\"dials\" style=\"position: relative; overflow: hidden\">\n<div style=\"max-width: 1280px; margin: 0 auto; padding: 120px clamp(16px, 5vw, 72px) 110px; display: flex; flex-direction: column; gap: 56px\">\n<div style=\"display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 24px\">\n<div style=\"display: flex; flex-direction: column; gap: 18px\">\n<p class=\"hg-eyebrow hg-ge\">CHOOSE YOUR LIGHT</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(40px, 5vw, 72px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">The dial is a window.</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">Pick its colour.</em></span></span>\n</h2>\n</div>\n<p class=\"hg-gf\" style=\"margin: 0; max-width: 360px; font-size: 14px; line-height: 1.7; color: #A79E8C\">The same hand-finished calibre sits behind every crystal. Tap a finish to see how the light changes it.</p>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 48px 72px\">\n<div data-speed=\"0.3\" style=\"flex: 1 1 440px; min-width: 0\">\n<div class=\"hg-dial-stage\">\n<div class=\"hg-dial-glow\" aria-hidden=\"true\" style=\"background: radial-gradient(closest-side, {{dialGlow}}, rgba(0,0,0,0))\"></div>\n<sc-for list=\"{{dials}}\" as=\"d\" hint-placeholder-count=\"6\">\n<img class=\"hg-dial-img hg-wimg {{d.cls}}\" src=\"{{d.img}}\" alt=\"{{d.alt}}\">\n</sc-for>\n<div class=\"hg-dial-no\" aria-hidden=\"true\">{{dialNo}}</div>\n</div>\n</div>\n<div class=\"hg-gf {{dialAutoClass}}\" style=\"flex: 1 1 400px; min-width: 0; display: flex; flex-direction: column; gap: 28px\">\n<div role=\"group\" aria-label=\"Dial finishes\" style=\"display: flex; flex-direction: column; border-top: 1px solid rgba(201,162,92,0.16)\">\n<sc-for list=\"{{dials}}\" as=\"d\" hint-placeholder-count=\"6\">\n<button type=\"button\" class=\"hg-dial-opt {{d.cls}}\" aria-pressed=\"{{d.pressed}}\" onClick=\"{{d.pick}}\">\n<span class=\"hg-dial-sw\" style=\"background: {{d.swatch}}\"></span>\n<span><span class=\"hg-dial-name\">{{d.name}}</span><span class=\"hg-dial-meta\">{{d.meta}}</span></span>\n<span class=\"hg-dial-price\">{{d.price}}</span>\n<span class=\"hg-dial-bar\" aria-hidden=\"true\"><i></i></span>\n</button>\n</sc-for>\n</div>\n<div class=\"hg-dial-descs\" aria-live=\"polite\">\n<sc-for list=\"{{dials}}\" as=\"d\" hint-placeholder-count=\"6\">\n<p class=\"hg-dial-desc {{d.cls}}\">{{d.desc}}</p>\n</sc-for>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; gap: 28px; font-size: 11px; letter-spacing: 0.14em; color: #A79E8C\">\n<span>CASE <b style=\"color: #F1E6CF; font-weight: 500\">41 MM</b></span>\n<span>RESERVE <b style=\"color: #F1E6CF; font-weight: 500\">72 H</b></span>\n<span>WATER <b style=\"color: #F1E6CF; font-weight: 500\">50 M</b></span>\n<span>JEWELS <b style=\"color: #F1E6CF; font-weight: 500\">21</b></span>\n</div>\n</div>\n</div>\n</div>\n</section>\n\n<!-- 4. HORIZONTAL GALLERY -->\n<section id=\"hg-hs\" class=\"hg-hs\" aria-label=\"The signature six\">\n<div class=\"hg-hs-stage\">\n<div class=\"hg-hs-head\">\n<p class=\"hg-eyebrow\">THE SIGNATURE SIX</p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 22px; color: #F1E6CF\"><span style=\"color: #E3C88E\">{{hsNo}}</span> <span style=\"color: #6E6656\">/ 06</span></p>\n</div>\n<div id=\"hg-hs-track\" class=\"hg-hs-track\">\n<div class=\"hg-hs-intro\">\n<h2 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(48px, 6.4vw, 96px); line-height: 0.98; color: #F1E6CF\">Scroll through<br><em style=\"font-style: italic; color: #E3C88E\">the six.</em></h2>\n<p style=\"margin: 22px 0 0; max-width: 420px; font-size: 14px; line-height: 1.7; color: #A79E8C\">One calibre, six characters. Each piece is assembled, regulated and signed by the same watchmaker from the first screw to the last.</p>\n<svg width=\"120\" height=\"18\" viewBox=\"0 0 120 18\" fill=\"none\" stroke=\"#D9B97A\" stroke-width=\"1.3\" aria-hidden=\"true\" style=\"margin-top: 28px\"><path d=\"M0 9h116M108 2l8 7-8 7\"></path></svg>\n</div>\n<sc-for list=\"{{panels}}\" as=\"p\" hint-placeholder-count=\"6\">\n<article class=\"hg-hs-panel\" style=\"--pg: {{p.glow}}\">\n<div class=\"hg-hs-num\" aria-hidden=\"true\">{{p.no}}</div>\n<div class=\"hg-hs-imgwrap\">\n<img class=\"hg-hs-img hg-wimg\" src=\"{{p.img}}\" alt=\"{{p.alt}}\">\n</div>\n<div class=\"hg-hs-copy\">\n<p class=\"hg-eyebrow\">{{p.no}} — {{p.meta}}</p>\n<h3 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(36px, 4.2vw, 60px); line-height: 1; color: #F1E6CF\">{{p.name}}</h3>\n<p style=\"margin: 0; max-width: 420px; font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 22px; line-height: 1.45; color: #CFC5B1\">“{{p.quote}}”</p>\n<div class=\"hg-hs-spec\"><span>41 mm</span><span>{{p.metal}}</span><span>72 h reserve</span></div>\n<div style=\"display: flex; align-items: center; gap: 28px; margin-top: 6px\">\n<span style=\"font-family: 'Cormorant Garamond', serif; font-size: 26px; color: #E3C88E\">{{p.price}}</span>\n<a href=\"#pieces\" class=\"hg-line\" style=\"display: inline-flex; align-items: center; min-height: 44px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #EFE6D4\">VIEW PIECE</a>\n</div>\n</div>\n</article>\n</sc-for>\n<div style=\"width: 6vw; flex: none\" aria-hidden=\"true\"></div>\n</div>\n<div class=\"hg-hs-prog\" aria-hidden=\"true\"><i></i></div>\n</div>\n</section>\n\n<!-- 5. ANATOMY -->\n<section id=\"anatomy\" style=\"position: relative; overflow: hidden; border-top: 1px solid rgba(201,162,92,0.18)\">\n<div style=\"max-width: 1280px; margin: 0 auto; padding: 120px clamp(16px, 5vw, 72px); display: flex; flex-wrap: wrap; align-items: center; gap: 56px 72px\">\n<div style=\"flex: 1 1 460px; min-width: 0\">\n<div class=\"hg-anat {{anatZoom}}\">\n<div class=\"hg-anat-rot\" style=\"position: absolute; inset: 0\">\n<div class=\"hg-anat-zoom\" style=\"transform-origin: {{hotOrigin}}\">\n<img class=\"hg-anat-img hg-wimg\" src=\"assets/images/3e0dbaf8a68a09744e639e89aaff95ca.webp\" alt=\"Héritage Ouvert open-worked skeleton watch showing its movement\">\n<sc-for list=\"{{hots}}\" as=\"h\" hint-placeholder-count=\"5\">\n<button type=\"button\" class=\"hg-hot {{h.cls}}\" style=\"left: {{h.x}}; top: {{h.y}}\" aria-label=\"{{h.title}}\" onMouseEnter=\"{{h.on}}\" onFocus=\"{{h.on}}\" onClick=\"{{h.on}}\"><span class=\"hg-hot-label\">{{h.label}}</span></button>\n</sc-for>\n</div>\n</div>\n</div>\n</div>\n<div style=\"flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; gap: 22px\">\n<p class=\"hg-eyebrow hg-ge\">ANATOMY OF A WATCHIFY</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(40px, 5vw, 68px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\"><span class=\"hg-count\" data-to=\"212\">212</span> parts.</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">Not one hidden.</em></span></span>\n</h2>\n<div class=\"hg-gf\" style=\"display: flex; flex-direction: column; border-top: 1px solid rgba(201,162,92,0.14); margin-top: 8px\">\n<sc-for list=\"{{hots}}\" as=\"h\" hint-placeholder-count=\"5\">\n<div class=\"hg-feat {{h.cls}}\" onMouseEnter=\"{{h.on}}\">\n<span class=\"hg-feat-n\">{{h.n}}</span>\n<h3>{{h.title}}</h3>\n<p><b><span class=\"hg-count\" data-to=\"{{h.to}}\">{{h.toText}}</span></b> {{h.text}}</p>\n</div>\n</sc-for>\n</div>\n</div>\n</div>\n</section>\n\n<!-- 6. ALL PIECES -->\n<section id=\"pieces\" style=\"position: relative; border-top: 1px solid rgba(201,162,92,0.18)\">\n<div class=\"hg-orbs\" aria-hidden=\"true\">\n<span class=\"hg-orb hg-orb-1\"></span>\n<span class=\"hg-orb hg-orb-2\"></span>\n<span class=\"hg-orb hg-orb-3\"></span>\n</div>\n<div style=\"position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; padding: 110px clamp(16px, 5vw, 72px) 120px; display: flex; flex-direction: column; gap: 44px\">\n<div style=\"display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 28px\">\n<div style=\"display: flex; flex-direction: column; gap: 18px\">\n<p class=\"hg-eyebrow hg-ge\">THE PIECES</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(40px, 5vw, 72px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Find <em style=\"font-style: italic; color: #E3C88E\">yours.</em></span></span>\n</h2>\n<p style=\"margin: 0; font-size: 12px; letter-spacing: 0.14em; color: #A79E8C\">SHOWING <span style=\"color: #E3C88E\">{{shown}}</span> OF 8</p>\n</div>\n<div class=\"hg-gf\" role=\"group\" aria-label=\"Filter pieces\" style=\"display: flex; flex-wrap: wrap; gap: 10px\">\n<sc-for list=\"{{filters}}\" as=\"f\" hint-placeholder-count=\"5\">\n<button type=\"button\" class=\"hg-filt {{f.cls}}\" aria-pressed=\"{{f.pressed}}\" onClick=\"{{f.pick}}\">{{f.label}}</button>\n</sc-for>\n</div>\n</div>\n<div id=\"hg-grid\" style=\"display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 22px; align-content: start\">\n<sc-for list=\"{{pieces}}\" as=\"p\" hint-placeholder-count=\"8\">\n<div class=\"hg-pc {{p.hidden}}\">\n<article class=\"hg-card\" onMouseMove=\"{{p.move}}\" onMouseLeave=\"{{p.leave}}\">\n<span class=\"hg-glass\" aria-hidden=\"true\"></span>\n<div class=\"hg-card-media\">\n<img src=\"{{p.img}}\" alt=\"{{p.alt}}\" style=\"width: 100%; aspect-ratio: 4 / 3; object-fit: cover; object-position: 50% 46%; display: block\">\n<span class=\"hg-card-tag\">{{p.kind}}</span>\n</div>\n<div class=\"hg-card-body\" style=\"padding: 16px 22px 22px; display: flex; flex-direction: column; gap: 6px\">\n<div style=\"display: flex; align-items: baseline; justify-content: space-between; gap: 12px\">\n<h3 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 21px; color: #F1E6CF\">{{p.name}}</h3>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #E3C88E; white-space: nowrap\">{{p.price}}</p>\n</div>\n<p style=\"margin: 0; font-size: 11px; letter-spacing: 0.1em; color: #A79E8C\">{{p.meta}}</p>\n<span class=\"hg-card-rule\" aria-hidden=\"true\"></span>\n<a href=\"#pieces\" class=\"hg-line\" style=\"align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; min-height: 36px; margin-top: 2px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #D9B97A\">VIEW PIECE\n<svg class=\"hg-card-arrow\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\" aria-hidden=\"true\"><path d=\"M2 8L8 2M3.5 2H8v4.5\"></path></svg>\n</a>\n</div>\n</article>\n</div>\n</sc-for>\n</div>\n</div>\n</section>\n\n<!-- 7. BESPOKE -->\n<section id=\"bespoke\" style=\"position: relative; overflow: hidden; min-height: 560px; border-top: 1px solid rgba(201,162,92,0.18); border-bottom: 2px solid #C9A25C; background: #0A0908\">\n<video id=\"hg-v-bespoke\" class=\"hg-vid hg-vid-bespoke\" src=\"assets/videos/fff80c4fb3cd616e4e4175a0448dccc4.mp4\" poster=\"assets/images/67f8583a8c38d01b3d8710ea1179440b.webp\" autoplay=\"\" muted=\"\" loop=\"\" playsinline=\"\" preload=\"auto\" aria-hidden=\"true\"></video>\n<div style=\"position: relative; max-width: 1280px; margin: 0 auto; padding: 130px clamp(16px, 5vw, 72px); display: flex; flex-direction: column; align-items: flex-start; gap: 24px\">\n<p class=\"hg-eyebrow hg-ge\">BESPOKE</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; max-width: 560px; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(40px, 5vw, 70px); line-height: 1.02; color: #F1E6CF; text-shadow: 0 2px 24px #000\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Your dial. Your colour.</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">Your name on the bridge.</em></span></span>\n</h2>\n<p class=\"hg-gf\" style=\"margin: 0; max-width: 440px; font-family: 'Cormorant Garamond', serif; font-size: 20px; line-height: 1.5; color: #CFC5B1; text-shadow: 0 2px 16px #000\">We accept only <b class=\"hg-count\" data-to=\"24\" style=\"font-weight: 600; color: #F1E6CF\">24</b> bespoke commissions a year. Each one begins with a conversation and ends with a watch that exists nowhere else.</p>\n<div class=\"hg-gf\" data-delay=\"0.2\" style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 20px 36px; margin-top: 6px\">\n<a href=\"#bespoke\" class=\"hg-btn\" style=\"display: inline-flex; align-items: center; justify-content: center; min-height: 50px; padding: 0 30px; background: #D9B97A; color: #1A1408; font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-decoration: none\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">BOOK A CONSULTATION</span>\n</a>\n<a href=\"story.html\" class=\"hg-line\" style=\"display: inline-flex; align-items: center; min-height: 44px; font-size: 12px; font-weight: 500; letter-spacing: 0.16em; color: #EFE6D4\">OUR STORY</a>\n</div>\n</div>\n</section>\n\n<!-- FOOTER -->\n<footer style=\"max-width: 1280px; margin: 0 auto; padding: 40px clamp(16px, 5vw, 72px) 28px; display: flex; flex-direction: column; gap: 32px\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 40px 56px\">\n<div style=\"flex: 1 1 240px; display: flex; flex-direction: column; gap: 12px\">\n<p style=\"margin: 0; display: flex; align-items: center; gap: 0.5em; font-family: 'Cinzel', serif; font-size: 20px; letter-spacing: 0.26em; color: #D9B97A\"><svg width=\"1.6em\" height=\"1.6em\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" style=\"flex: none; overflow: visible\"><circle cx=\"20\" cy=\"21\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"></circle><rect x=\"17.6\" y=\"1.2\" width=\"4.8\" height=\"3.2\" rx=\"1\" fill=\"currentColor\"></rect><path d=\"M36.5 21h-2.4M5.9 21h-2.4M20 37.5v-2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"></path><path d=\"M10.5 14.5L15.2 28.5L20 19.5L24.8 28.5L29.5 14.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><circle cx=\"20\" cy=\"19.5\" r=\"1.9\" fill=\"#3EE29D\"></circle></svg><span>WATCHIFY</span></p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #CFC5B1\">Make every second matter.</p>\n<div style=\"display: flex; gap: 4px; margin-left: -12px\">\n<a href=\"#top\" aria-label=\"Instagram\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"></rect><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><circle cx=\"17.5\" cy=\"6.5\" r=\"0.8\" fill=\"currentColor\"></circle></svg></a>\n<a href=\"#top\" aria-label=\"Facebook\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><path d=\"M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z\"></path></svg></a>\n<a href=\"#top\" aria-label=\"X\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" aria-hidden=\"true\"><path d=\"M4 4l16 16M20 4L4 20\"></path></svg></a>\n<a href=\"#top\" aria-label=\"Pinterest\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M11 8.5c3-1 5 .5 4.5 3s-3 3-4 1.5M11.5 10l-2.5 11\"></path></svg></a>\n</div>\n</div>\n<nav aria-label=\"Footer\" style=\"flex: 1 1 160px; display: flex; flex-direction: column; gap: 10px\">\n<p style=\"margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #EFE6D4\">PAGES</p>\n<a href=\"index.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Home</a>\n<a href=\"#top\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #E3C88E; text-decoration: none\">Collections</a>\n<a href=\"gallery.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Gallery</a>\n<a href=\"story.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Our Story</a>\n<a href=\"contact.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Contact</a>\n</nav>\n<form onSubmit=\"{{nlSubmit}}\" style=\"flex: 1 1 300px; display: flex; flex-direction: column; gap: 10px; padding-left: 28px; border-left: 1px solid rgba(201,162,92,0.25)\">\n<label for=\"hg-email\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #F1E6CF\">Letters on time</label>\n<p style=\"margin: 0; font-size: 12px; line-height: 1.5; color: #A79E8C\">Be the first to know about new arrivals and exclusive stories.</p>\n<sc-if value=\"{{nlDone}}\" hint-placeholder-val=\"{{ false }}\">\n<p role=\"status\" style=\"margin: 6px 0 0; font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #E3C88E\">Thank you — you are on the list.</p>\n</sc-if>\n<sc-if value=\"{{nlOpen}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px\">\n<input id=\"hg-email\" name=\"email\" type=\"email\" required=\"{{ true }}\" autocomplete=\"email\" placeholder=\"Your email address\" style=\"flex: 1 1 160px; min-width: 0; min-height: 44px; padding: 0 14px; background: #100E0B; border: 1px solid rgba(201,162,92,0.35); color: #EFE6D4; font-family: 'Inter', sans-serif; font-size: 13px; box-sizing: border-box\">\n<button type=\"submit\" class=\"hg-btn\" style=\"min-height: 44px; padding: 0 22px; background: #D9B97A; color: #1A1408; border: none; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.16em\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">SUBSCRIBE</span>\n</button>\n</div>\n</sc-if>\n</form>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding-top: 18px; border-top: 1px solid rgba(201,162,92,0.2); font-size: 12px; color: #A79E8C\">\n<p style=\"margin: 0\">© 2026 Watchify. All rights reserved.</p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 15px; color: #D9B97A\">Timeless pieces. A lasting legacy.</p>\n</div>\n</footer>\n\n<dc-import name=\"CartDrawer\" open=\"{{cartOpen}}\" on-close=\"{{closeCart}}\" on-change=\"{{cartChange}}\" hint-size=\"0px,0px\"></dc-import>\n</div>", (function () {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { dial: 2, dialAuto: false, dialManual: false, hs: 1, hot: 0, filter: 'all', nl: false };
    this.W = {
      1: 'assets/images/f14797db87b593ffacd5f58ddcf20858.webp', 2: 'assets/images/38e923d6674f686cea6263a1aa7cb9fb.webp', 3: 'assets/images/34414a3e10bd2430ecf6addd9e2c9c82.webp',
      4: 'assets/images/861030cc4ddcd424b2c353a6a2fe2597.webp', 5: 'assets/images/20ad6f349112e2b65207b501f7d9f931.webp', 6: 'assets/images/3e0dbaf8a68a09744e639e89aaff95ca.webp'
    };
    this.WS = {
      1: 'assets/images/03d82286c5e0ec1c5efcf4480afa979c.webp', 2: 'assets/images/92de356452526023d14d4043221402fe.webp', 3: 'assets/images/877df250d9dd31a16bf346df2edf47cf.webp',
      4: 'assets/images/e98e1460b87524991c3ca6a2e94390ec.webp', 5: 'assets/images/333f4e3b5fde63a032c19100c1ab21fd.webp', 6: 'assets/images/f2704a5c0fd0a53324169a367da96374.webp'
    };
    this.DIALS = [
      { n: 1, name: 'Fumé Squelette', meta: 'SMOKED SAPPHIRE · 18K YELLOW GOLD', price: '$3,450', swatch: 'radial-gradient(circle at 35% 30%, #5a5a58, #121212)', glow: 'rgba(214,180,118,0.34)', desc: 'A smoked sapphire crystal dims the movement to a whisper, so the gold wheels glow like embers behind glass.' },
      { n: 2, name: 'Verde Squelette', meta: 'EMERALD SAPPHIRE · 18K YELLOW GOLD', price: '$3,980', swatch: 'radial-gradient(circle at 35% 30%, #23b277, #063d27)', glow: 'rgba(40,190,120,0.42)', desc: 'Our signature. Emerald-tinted sapphire bathes the bridges in green light — a nod to the marble dial that started it all.' },
      { n: 3, name: 'Bleu Nuit', meta: 'MIDNIGHT SAPPHIRE · 18K WHITE GOLD', price: '$4,250', swatch: 'radial-gradient(circle at 35% 30%, #4f7dff, #0a1f63)', glow: 'rgba(70,120,255,0.42)', desc: 'Blued bridges beneath a midnight crystal. Cool, exact and quietly loud on the wrist.' },
      { n: 4, name: 'Rubis Rosé', meta: 'RUBY SAPPHIRE · 18K ROSE GOLD', price: '$4,250', swatch: 'radial-gradient(circle at 35% 30%, #e0445f, #4a0614)', glow: 'rgba(220,50,90,0.38)', desc: 'Rose gold and ruby glass — the warmest piece we make, finished by a single watchmaker from start to end.' },
      { n: 5, name: 'Noir Chapitre', meta: 'BLACK CHAPTER RING · 18K YELLOW GOLD', price: '$3,650', swatch: 'radial-gradient(circle at 50% 50%, #0b0b0b 52%, #D9B97A 54%, #8a6526 62%, #111 64%)', glow: 'rgba(217,185,122,0.30)', desc: 'A black minute track frames the movement like a stage. The most graphic face in the collection.' },
      { n: 6, name: 'Héritage Ouvert', meta: 'OPEN-WORKED · 18K ROSE GOLD', price: '$3,200', swatch: 'radial-gradient(circle at 35% 30%, #f6e0a6, #8a6526)', glow: 'rgba(232,190,120,0.36)', desc: 'The purest expression of the craft: no tint, no ring, nothing between you and the 212 parts that keep your time.' }
    ];
    this.PANELS = [
      { n: 1, quote: 'Light falls through smoke and lands on gold.', metal: '18k yellow gold' },
      { n: 2, quote: 'Green, because it all began with marble.', metal: '18k yellow gold' },
      { n: 3, quote: 'Midnight, measured to the second.', metal: '18k white gold' },
      { n: 4, quote: 'Warm as rose gold, deep as a ruby.', metal: '18k rose gold' },
      { n: 5, quote: 'A black stage for a golden performance.', metal: '18k yellow gold' },
      { n: 6, quote: 'Nothing hidden. Nothing spared.', metal: '18k rose gold' }
    ];
    this.HOTS = [
      { x: '48.6%', y: '60.3%', label: 'BALANCE WHEEL', title: 'Balance wheel', to: 28800, toText: '28,800', text: 'beats an hour, regulated in five positions before it leaves the bench.' },
      { x: '60.6%', y: '31.1%', label: 'MAINSPRING BARREL', title: 'Mainspring barrel', to: 72, toText: '72', text: 'hours of power from a single full wind of the crown.' },
      { x: '33.5%', y: '48.6%', label: 'GEAR TRAIN', title: 'Gear train', to: 21, toText: '21', text: 'synthetic ruby jewels carry the wheels so friction almost disappears.' },
      { x: '68.6%', y: '51%', label: 'BRIDGES', title: 'Hand-bevelled bridges', to: 40, toText: '40', text: 'hours of hand-bevelling and polishing on every set of bridges.' },
      { x: '82.1%', y: '46.6%', label: 'CROWN', title: 'Knurled crown', to: 50, toText: '50', text: 'metres of water resistance, sealed behind hand-knurled 18k gold.' }
    ];
    this.PIECES = [
      { w: 1, name: 'Fumé Squelette', price: '$3,450', metal: 'yellow', kind: 'SMOKED DIAL', meta: '18K YELLOW GOLD · 41 MM' },
      { w: 2, name: 'Verde Squelette', price: '$3,980', metal: 'yellow', kind: 'EMERALD DIAL', meta: '18K YELLOW GOLD · 41 MM' },
      { w: 3, name: 'Bleu Nuit', price: '$4,250', metal: 'white', kind: 'MIDNIGHT DIAL', meta: '18K WHITE GOLD · 41 MM' },
      { w: 4, name: 'Rubis Rosé', price: '$4,250', metal: 'rose', kind: 'RUBY DIAL', meta: '18K ROSE GOLD · 41 MM' },
      { w: 5, name: 'Noir Chapitre', price: '$3,650', metal: 'yellow', kind: 'NOIR RING', meta: '18K YELLOW GOLD · 41 MM' },
      { w: 6, name: 'Héritage Ouvert', price: '$3,200', metal: 'rose', kind: 'OPEN-WORKED', meta: '18K ROSE GOLD · 41 MM' },
      { w: 2, name: 'Verde Édition 25', price: '$5,400', metal: 'yellow', limited: true, kind: 'LIMITED · 25', meta: 'NUMBERED · 25 PIECES' },
      { w: 4, name: 'Rubis Édition 25', price: '$5,600', metal: 'rose', limited: true, kind: 'LIMITED · 25', meta: 'NUMBERED · 25 PIECES' }
    ];
    this.FILTERS = [
      { k: 'all', label: 'ALL' }, { k: 'yellow', label: 'YELLOW GOLD' }, { k: 'rose', label: 'ROSE GOLD' },
      { k: 'white', label: 'WHITE GOLD' }, { k: 'limited', label: 'LIMITED' }
    ];
    var ticks = [];
    for (var i = 0; i < 60; i++) {
      var a = i * Math.PI / 30, s = Math.sin(a), c = Math.cos(a), major = i % 5 === 0;
      var r1 = major ? 262 : 270, r2 = 280;
      ticks.push({ x1: (300 + r1 * s).toFixed(2), y1: (300 - r1 * c).toFixed(2), x2: (300 + r2 * s).toFixed(2), y2: (300 - r2 * c).toFixed(2), w: major ? 2 : 1, o: major ? 0.8 : 0.35 });
    }
    this.ticks = ticks;
    this.heroMove = this.heroMove.bind(this);
    this.heroLeave = this.heroLeave.bind(this);
    this.cardMove = this.cardMove.bind(this);
    this.cardLeave = this.cardLeave.bind(this);
  }

  componentDidMount() {
    this.fxVideos(['hg-v-bespoke']);
    this.fxStart('hg-col', this.pageFx.bind(this));
  }

  componentWillUnmount() {
    clearInterval(this.dialTimer);
    clearTimeout(this.mqTimer);
    if (this.vidIO) this.vidIO.disconnect();
    this.fxStop();
  }

  // Background videos play only while on screen: decoding off-screen HD video steals frames from scrolling.
  fxVideos(ids) {
    var vids = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var play = function (v) { try { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } catch (e) {} };
    vids.forEach(function (v) {
      v.muted = true; v.defaultMuted = true; v.playsInline = true; v.loop = true;
      v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    });
    if (!('IntersectionObserver' in window)) { vids.forEach(play); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) play(e.target); else e.target.pause(); });
    }, { rootMargin: '200px 0px' });
    vids.forEach(function (v) { io.observe(v); });
    this.vidIO = io;
  }

  // ---------- Motion engine: GSAP reveals, counters, smooth scrolling ----------
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
    if (window.Flip) g.registerPlugin(window.Flip);
    var reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    this.fxReduce = reduce;
    if (!reduce) this.smoothStart();
    this.fxCtx = g.context(function () {
      if (reduce) return;
      // headings: every line rises out of its own mask, sharpening from a blur
      g.utils.toArray(root.querySelectorAll('.hg-gh')).forEach(function (h) {
        var lines = h.querySelectorAll('.hg-ln');
        g.fromTo(lines.length ? lines : h, { yPercent: 108, opacity: 0 }, {
          yPercent: 0, opacity: 1, duration: 1.5, ease: 'expo.out', stagger: 0.14,
          delay: parseFloat(h.getAttribute('data-delay') || '0'),
          scrollTrigger: { trigger: h, start: 'top 88%', once: true }
        });
      });
      // eyebrows: letters gather in from wide spacing
      g.utils.toArray(root.querySelectorAll('.hg-ge')).forEach(function (el) {
        g.fromTo(el, { opacity: 0, y: 14 }, {
          opacity: 1, y: 0, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true }
        });
      });
      // body copy and groups: soft rise
      g.utils.toArray(root.querySelectorAll('.hg-gf')).forEach(function (el) {
        g.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: parseFloat(el.getAttribute('data-delay') || '0'),
          scrollTrigger: { trigger: el, start: 'top 90%', once: true }
        });
      });
      // parallax wrappers
      g.utils.toArray(root.querySelectorAll('[data-speed]')).forEach(function (el) {
        var sp = parseFloat(el.getAttribute('data-speed')) || 0;
        g.fromTo(el, { y: sp * 90 }, { y: -sp * 90, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
      });
      // numbers count up when they come into view
      g.utils.toArray(root.querySelectorAll('.hg-count')).forEach(function (el) { self.fxCounter(g, el); });
      if (self.fxExtra) self.fxExtra(g, ST, root);
    }, root);
    var refresh = function () { try { ST.refresh(); } catch (e) {} };
    this.fxRefresh = refresh;
    this.fxTimers = [setTimeout(refresh, 700), setTimeout(refresh, 2000)];
    try { if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh); } catch (e) {}
    window.addEventListener('load', refresh);
  }

  fxCounter(g, el) {
    var node = el.firstChild;
    if (!node || node.nodeType !== 3) return;
    var to = parseFloat(el.getAttribute('data-to'));
    if (isNaN(to)) return;
    var from = parseFloat(el.getAttribute('data-from') || '0');
    var dec = parseInt(el.getAttribute('data-dec') || '0', 10), pad = parseInt(el.getAttribute('data-pad') || '0', 10);
    var pre = el.getAttribute('data-pre') || '', suf = el.getAttribute('data-suf') || '', comma = el.getAttribute('data-comma') !== 'no';
    function fmt(v) {
      var s = v.toFixed(dec);
      if (comma) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      while (s.length < pad) s = '0' + s;
      return pre + s + suf;
    }
    var o = { v: from };
    node.nodeValue = fmt(from);
    g.to(o, {
      v: to, duration: parseFloat(el.getAttribute('data-dur') || '2.4'), ease: 'power2.out',
      onUpdate: function () { node.nodeValue = fmt(o.v); },
      scrollTrigger: { trigger: el, start: 'top 92%', once: true }
    });
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
      e.preventDefault();
      var d = e.deltaY * (e.deltaMode === 1 ? 36 : (e.deltaMode === 2 ? window.innerHeight : 1));
      if (!sm.on) { sm.cur = sm.tgt = window.scrollY; sm.last = 0; }
      sm.tgt = Math.max(0, Math.min(maxY(), sm.tgt + d));
      if (!sm.on) { sm.on = true; sm.raf = requestAnimationFrame(step); }
    };
    // keyboard, scrollbar drags and anchor jumps take over from the easing
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

  // ---------- Page motion ----------
  pageFx(g, ST, root) {
    var self = this;
    // hero: the watch spirals in, the orbit rings open around it
    var heroImg = root.querySelector('.hg-hero-img');
    g.fromTo(heroImg, { opacity: 0, scale: 0.7, rotate: -26 }, { opacity: 1, scale: 1, rotate: 0, duration: 2.4, ease: 'expo.out', delay: 0.15 });
    g.fromTo(root.querySelector('.hg-orbit-in'), { opacity: 0, scale: 0.55 }, { opacity: 1, scale: 1, duration: 2.6, ease: 'expo.out', delay: 0.05, transformOrigin: '50% 50%' });
    g.fromTo(root.querySelectorAll('.hg-chip'), { opacity: 0, y: 24, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: 'power3.out', stagger: 0.18, delay: 1.2 });
    g.to(root.querySelector('.hg-hero-spin'), { rotate: 32, scale: 0.9, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: 0.5 } });

    // marquee: endless drift that speeds up and leans with scroll velocity
    var t1 = root.querySelector('#hg-mq1'), t2 = root.querySelector('#hg-mq2');
    var m1 = g.fromTo(t1, { xPercent: 0 }, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });
    var m2 = g.fromTo(t2, { xPercent: -50 }, { xPercent: 0, duration: 48, ease: 'none', repeat: -1 });
    var sk1 = g.quickTo(t1, 'skewX', { duration: 0.7, ease: 'power3.out' });
    var sk2 = g.quickTo(t2, 'skewX', { duration: 0.7, ease: 'power3.out' });
    // the endless drift only runs while the marquee is on screen
    m1.pause(); m2.pause();
    ST.create({
      trigger: root.querySelector('.hg-mq'), start: 'top bottom', end: 'bottom top',
      onToggle: function (s) { [m1, m2].forEach(function (m) { if (s.isActive) m.play(); else m.pause(); }); }
    });
    ST.create({
      trigger: root.querySelector('.hg-mq'), start: 'top bottom', end: 'bottom top',
      onUpdate: function (s) {
        var v = s.getVelocity();
        var k = g.utils.clamp(-12, 12, v / -220);
        sk1(k); sk2(k);
        g.to([m1, m2], { timeScale: 1 + Math.min(6, Math.abs(v) / 380), duration: 0.25, overwrite: true });
        clearTimeout(self.mqTimer);
        self.mqTimer = setTimeout(function () { sk1(0); sk2(0); g.to([m1, m2], { timeScale: 1, duration: 1.4, ease: 'power2.out', overwrite: true }); }, 140);
      }
    });

    // dial selector autoplays only while it is on screen and untouched
    ST.create({ trigger: root.querySelector('#dials'), start: 'top 65%', end: 'bottom 35%', onToggle: function (s) { self.dialAutoplay(s.isActive); } });
    g.fromTo(root.querySelectorAll('.hg-dial-opt'), { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: root.querySelector('#dials'), start: 'top 60%', once: true } });

    // horizontal gallery: vertical scroll drives the track sideways
    var sec = root.querySelector('#hg-hs'), track = root.querySelector('#hg-hs-track');
    var dist = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
    var bar = sec.querySelector('.hg-hs-prog i');
    var hs = g.to(track, {
      x: function () { return -dist(); }, ease: 'none',
      scrollTrigger: {
        trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true,
        onUpdate: function (s) {
          if (bar) bar.style.transform = 'scaleX(' + s.progress.toFixed(4) + ')';
          var n = Math.min(6, Math.max(1, Math.floor(s.progress * 6.2) + 1));
          if (n !== self.state.hs) self.setState({ hs: n });
        }
      }
    });
    g.utils.toArray(root.querySelectorAll('.hg-hs-panel')).forEach(function (p) {
      var img = p.querySelector('.hg-hs-img'), num = p.querySelector('.hg-hs-num'), copy = p.querySelector('.hg-hs-copy');
      var st = { trigger: p, containerAnimation: hs, start: 'left right', end: 'right left', scrub: true };
      g.fromTo(img, { rotate: -22, scale: 0.74 }, { rotate: 12, scale: 1.04, ease: 'none', scrollTrigger: st });
      g.fromTo(num, { xPercent: 45 }, { xPercent: -45, ease: 'none', scrollTrigger: { trigger: p, containerAnimation: hs, start: 'left right', end: 'right left', scrub: true } });
      g.fromTo(copy, { opacity: 0, x: 90 }, { opacity: 1, x: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: p, containerAnimation: hs, start: 'left 72%', toggleActions: 'play none none reverse' } });
    });

    // anatomy: the watch turns into place, hotspots pop in one by one
    g.fromTo(root.querySelector('.hg-anat-rot'), { rotate: -14, scale: 0.86, opacity: 0.4 }, { rotate: 0, scale: 1, opacity: 1, ease: 'none', scrollTrigger: { trigger: root.querySelector('#anatomy'), start: 'top bottom', end: 'center center', scrub: 0.6 } });
    g.fromTo(root.querySelectorAll('.hg-hot'), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(2.2)', stagger: 0.14, scrollTrigger: { trigger: root.querySelector('#anatomy'), start: 'top 45%', once: true } });

    // pieces: cards rise in batches as they enter
    var cards = root.querySelectorAll('.hg-pc');
    g.set(cards, { opacity: 0, y: 70 });
    ST.batch(cards, { start: 'top 92%', once: true, onEnter: function (b) { g.to(b, { opacity: 1, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.1, overwrite: true }); } });
  }

  dialAutoplay(on) {
    clearInterval(this.dialTimer);
    if (this.state.dialManual) return;
    var self = this;
    if (on) {
      this.setState({ dialAuto: true });
      this.dialTimer = setInterval(function () { self.setState({ dial: self.state.dial % 6 + 1 }); }, 5000);
    } else if (this.state.dialAuto) {
      this.setState({ dialAuto: false });
    }
  }

  pickDial(n) {
    clearInterval(this.dialTimer);
    this.setState({ dial: n, dialManual: true, dialAuto: false });
  }

  // Filtering: the visible cards fade down in place, the grid swaps, the new set rises in order.
  // Cards never leave the grid flow, so nothing jumps to the top or swaps places mid-animation.
  setFilter(f) {
    if (f === this.state.filter) return;
    var g = window.gsap, root = document.getElementById('hg-col'), self = this;
    var grid = root ? root.querySelector('#hg-grid') : null;
    if (!g || !grid || this.fxReduce) { this.setState({ filter: f }); return; }
    var visible = function () {
      return [].slice.call(root.querySelectorAll('.hg-pc')).filter(function (el) { return !el.classList.contains('is-hidden'); });
    };
    var seq = this.filterSeq = (this.filterSeq || 0) + 1;
    var h0 = grid.offsetHeight;
    g.killTweensOf(root.querySelectorAll('.hg-pc'));
    g.killTweensOf(grid);
    grid.style.height = h0 + 'px';
    g.to(visible(), {
      opacity: 0, y: 18, scale: 0.96, duration: 0.3, ease: 'power2.in', stagger: 0.02, overwrite: true,
      onComplete: function () {
        if (seq !== self.filterSeq) return;
        self.setState({ filter: f }, function () {
          if (seq !== self.filterSeq) return;
          grid.style.height = 'auto';
          var h1 = grid.offsetHeight;
          grid.style.height = h0 + 'px';
          g.to(grid, { height: h1, duration: 0.6, ease: 'power3.inOut', onComplete: function () { grid.style.height = ''; } });
          g.fromTo(visible(), { opacity: 0, y: 34, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'expo.out', stagger: 0.07, overwrite: true });
        });
      }
    });
  }

  heroMove(e) {
    if (this.fxReduce) return;
    var el = e.currentTarget, r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (((e.clientX - r.left) / r.width - 0.5) * 2).toFixed(3));
    el.style.setProperty('--my', (((e.clientY - r.top) / r.height - 0.5) * 2).toFixed(3));
  }

  heroLeave(e) {
    e.currentTarget.style.setProperty('--mx', '0');
    e.currentTarget.style.setProperty('--my', '0');
  }

  cardMove(e) {
    if (this.fxReduce) return;
    var el = e.currentTarget, r = el.getBoundingClientRect();
    var x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    var y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    var st = el.style;
    st.setProperty('--ry', ((x - 0.5) * 14).toFixed(2) + 'deg');
    st.setProperty('--rx', ((0.5 - y) * 11).toFixed(2) + 'deg');
    st.setProperty('--gx', (x * 100).toFixed(1) + '%');
    st.setProperty('--gy', (y * 100).toFixed(1) + '%');
    st.setProperty('--px', ((x - 0.5) * 2).toFixed(3));
    st.setProperty('--py', ((y - 0.5) * 2).toFixed(3));
  }

  cardLeave(e) {
    var st = e.currentTarget.style;
    ['--ry', '--rx', '--px', '--py'].forEach(function (n) { st.removeProperty(n); });
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
    var s = this.state, self = this, W = this.W, WS = this.WS;
    var dials = this.DIALS.map(function (d) {
      return {
        name: d.name, meta: d.meta, price: d.price, swatch: d.swatch, desc: d.desc,
        img: W[d.n], alt: d.name + ' skeleton watch',
        cls: d.n === s.dial ? 'is-on' : '', pressed: d.n === s.dial ? 'true' : 'false',
        pick: function () { self.pickDial(d.n); }
      };
    });
    var cur = this.DIALS[s.dial - 1];
    var panels = this.PANELS.map(function (p) {
      var d = self.DIALS[p.n - 1];
      return { no: '0' + p.n, name: d.name, meta: d.meta, price: d.price, quote: p.quote, metal: p.metal, glow: d.glow, img: W[p.n], alt: d.name + ' skeleton watch' };
    });
    var hots = this.HOTS.map(function (h, i) {
      return { x: h.x, y: h.y, label: h.label, title: h.title, to: h.to, toText: h.toText, text: h.text, n: '0' + (i + 1), cls: i === s.hot ? 'is-on' : '', on: function () { if (self.state.hot !== i) self.setState({ hot: i }); } };
    });
    var hot = this.HOTS[s.hot];
    var shown = 0;
    var pieces = this.PIECES.map(function (p) {
      var vis = s.filter === 'all' || (s.filter === 'limited' ? !!p.limited : p.metal === s.filter);
      if (vis) shown++;
      return { name: p.name, price: p.price, kind: p.kind, meta: p.meta, img: WS[p.w], alt: p.name + ' skeleton watch', hidden: vis ? '' : 'is-hidden', move: self.cardMove, leave: self.cardLeave };
    });
    var filters = this.FILTERS.map(function (f) {
      return { label: f.label, cls: f.k === s.filter ? 'is-on' : '', pressed: f.k === s.filter ? 'true' : 'false', pick: function () { self.setFilter(f.k); } };
    });
    return {
      ticks: this.ticks, heroMove: this.heroMove, heroLeave: this.heroLeave,
      dials: dials, dialNo: '0' + s.dial, dialGlow: cur.glow, dialAutoClass: s.dialAuto ? 'is-auto' : '',
      panels: panels, hsNo: '0' + s.hs,
      hots: hots, hotOrigin: hot.x + ' ' + hot.y, anatZoom: 'is-zoom',
      pieces: pieces, filters: filters, shown: shown,
      nlDone: s.nl, nlOpen: !s.nl,
      cartOpen: !!s.cartOpen, hasCart: (s.cartN || 0) > 0, cartCount: s.cartN || 0,
      bagLabel: 'Open cart, ' + (s.cartN || 0) + ((s.cartN || 0) === 1 ? ' item' : ' items'),
      bagExpanded: s.cartOpen ? 'true' : 'false', bagBump: s.bump ? 'is-bump' : '',
      openCart: this.cartApi().open, closeCart: this.cartApi().close, cartChange: this.cartApi().change,
      nlSubmit: function (e) { e.preventDefault(); self.setState({ nl: true }); }
    };
  }
}
return Component;
})(), {});
