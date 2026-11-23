/* Watchify — Gallery (template + logic). Rendered by js/dc-lite.js */
DC.define("Gallery", "<div id=\"hg-gal\" style=\"background: #0A0908; color: #EFE6D4; font-family: 'Inter', system-ui, sans-serif; overflow-x: clip\">\n\n<!-- NAV -->\n<header class=\"hg-nav\">\n<nav style=\"max-width: 1280px; margin: 0 auto; padding: 14px clamp(16px, 5vw, 72px); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 32px\" aria-label=\"Primary\">\n<a href=\"index.html\" aria-label=\"Watchify — home\" style=\"display: inline-flex; align-items: center; gap: 0.5em; font-family: 'Cinzel', serif; font-size: 22px; letter-spacing: 0.28em; color: #D9B97A; text-decoration: none\"><svg width=\"1.6em\" height=\"1.6em\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" style=\"flex: none; overflow: visible\"><circle cx=\"20\" cy=\"21\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"></circle><rect x=\"17.6\" y=\"1.2\" width=\"4.8\" height=\"3.2\" rx=\"1\" fill=\"currentColor\"></rect><path d=\"M36.5 21h-2.4M5.9 21h-2.4M20 37.5v-2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"></path><path d=\"M10.5 14.5L15.2 28.5L20 19.5L24.8 28.5L29.5 14.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><circle cx=\"20\" cy=\"19.5\" r=\"1.9\" fill=\"#3EE29D\"></circle></svg><span>WATCHIFY</span></a>\n<div style=\"display: flex; flex-wrap: wrap; gap: 4px 32px; font-size: 13px; letter-spacing: 0.02em\">\n<a href=\"collections.html\" class=\"hg-nl\">Collections</a>\n<a href=\"#top\" class=\"hg-nl is-cur\" aria-current=\"page\">Gallery</a>\n<a href=\"story.html\" class=\"hg-nl\">Our Story</a>\n<a href=\"contact.html\" class=\"hg-nl\">Contact</a>\n</div>\n<button type=\"button\" class=\"hg-bag\" aria-label=\"{{bagLabel}}\" aria-haspopup=\"dialog\" aria-expanded=\"{{bagExpanded}}\" onClick=\"{{openCart}}\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: none; border: none; color: #D9B97A; cursor: pointer; padding: 0\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" aria-hidden=\"true\"><path d=\"M5 8h14l-1 13H6L5 8z\"></path><path d=\"M9 8V6a3 3 0 0 1 6 0v2\"></path></svg>\n<sc-if value=\"{{hasCart}}\" hint-placeholder-val=\"{{ false }}\"><span class=\"hg-bag-n {{bagBump}}\" aria-hidden=\"true\">{{cartCount}}</span></sc-if>\n</button>\n</nav>\n</header>\n\n<!-- 1. ZOOM-OUT HERO -->\n<section id=\"top\" class=\"hg-gz\" aria-label=\"Gallery introduction\">\n<div id=\"hg-gz-stage\" class=\"hg-gz-stage\">\n<div id=\"hg-gzg\" class=\"hg-gzg\">\n<div class=\"hg-gzt\" style=\"grid-area: a\"><img src=\"assets/images/44fb5c3f56ac7f37bd42faa77e574f2e.jpg\" alt=\"Green marble dial with gold numerals\"></div>\n<div id=\"hg-gz-center\" class=\"hg-gzt\" style=\"grid-area: b; z-index: 2\"><img id=\"hg-gz-cimg\" src=\"assets/images/38e923d6674f686cea6263a1aa7cb9fb.webp\" alt=\"Verde Squelette emerald skeleton watch\"><div id=\"hg-gz-shade\" class=\"hg-gz-shade\"></div></div>\n<div class=\"hg-gzt\" style=\"grid-area: c\"><img src=\"assets/images/877df250d9dd31a16bf346df2edf47cf.webp\" alt=\"Bleu Nuit midnight blue skeleton watch\"></div>\n<div class=\"hg-gzt\" style=\"grid-area: d\"><img src=\"assets/images/a2cf7dd55b954b2c525d1110a25b5ea0.webp\" alt=\"Green marble wall clock in a gold case\"></div>\n<div class=\"hg-gzt\" style=\"grid-area: e\"><img src=\"assets/images/e98e1460b87524991c3ca6a2e94390ec.webp\" alt=\"Rubis Rosé ruby skeleton watch\"></div>\n<div class=\"hg-gzt hg-gz-hide\" style=\"grid-area: f\"><img src=\"assets/images/33f8c8cc1fd141487005a6170358aa6e.webp\" alt=\"Gold skeleton watch on a leather strap\"></div>\n<div class=\"hg-gzt hg-gz-hide\" style=\"grid-area: g\"><img src=\"assets/images/03d82286c5e0ec1c5efcf4480afa979c.webp\" alt=\"Fumé Squelette smoked skeleton watch\"></div>\n</div>\n<div id=\"hg-gz-title\" class=\"hg-gz-title\">\n<p class=\"hg-eyebrow\" style=\"text-shadow: 0 2px 16px #000\">THE GALLERY</p>\n<h1 class=\"hg-gh\" data-delay=\"0.1\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(56px, 9vw, 140px); line-height: 0.94; color: #F1E6CF; text-shadow: 0 6px 40px rgba(0,0,0,0.8)\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Light, caught</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">in gold.</em></span></span>\n</h1>\n<p class=\"hg-gf\" data-delay=\"0.5\" style=\"margin: 0; font-size: 11px; font-weight: 600; letter-spacing: 0.3em; color: #CFC5B1; text-shadow: 0 2px 16px #000\">SCROLL TO STEP BACK</p>\n</div>\n<p id=\"hg-gz-hint\" class=\"hg-gz-hint\" style=\"opacity: 0\">KEEP SCROLLING · TAP ANY PIECE TO LOOK CLOSER</p>\n</div>\n</section>\n\n<!-- 1b. EXPLODED 3D WATCH (reusable component: WatchExploded.dc.html) -->\n<dc-import name=\"WatchExploded\" hint-size=\"100%,100vh\"></dc-import>\n\n<!-- 2. BENTO: LIGHT & METAL -->\n<section id=\"light\" style=\"position: relative; border-top: 1px solid rgba(201,162,92,0.18); background: radial-gradient(50% 50% at 15% 30%, rgba(31,150,96,0.14), rgba(31,150,96,0) 70%), radial-gradient(45% 45% at 85% 75%, rgba(217,170,90,0.12), rgba(217,170,90,0) 70%)\">\n<div style=\"max-width: 1280px; margin: 0 auto; padding: 120px clamp(16px, 5vw, 72px); display: flex; flex-direction: column; gap: 48px\">\n<div style=\"display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 24px\">\n<div style=\"display: flex; flex-direction: column; gap: 18px\">\n<p class=\"hg-eyebrow hg-ge\">CHAPTER I · LIGHT &amp; METAL</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(40px, 5vw, 72px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Where glass</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">meets gold.</em></span></span>\n</h2>\n</div>\n<p class=\"hg-gf\" style=\"margin: 0; max-width: 360px; font-size: 14px; line-height: 1.7; color: #A79E8C\">Every frame is a real piece from the atelier. Hover to bring it closer, tap to open it full size.</p>\n</div>\n<div class=\"hg-bento hg-b1\">\n<div class=\"hg-bw\" style=\"grid-area: a\">\n<button type=\"button\" class=\"hg-bt\" aria-label=\"Open Noir Chapitre\" onClick=\"{{op.i5}}\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<img class=\"hg-bt-img\" src=\"assets/images/20ad6f349112e2b65207b501f7d9f931.webp\" alt=\"\">\n<span class=\"hg-bt-cap\"><b>Noir Chapitre</b><span>VIEW</span></span>\n</button>\n</div>\n<div class=\"hg-bw\" style=\"grid-area: b\">\n<div class=\"hg-bt\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<div class=\"hg-bt-pad\">\n<p class=\"hg-eyebrow\">INSIDE EVERY PIECE</p>\n<div><div class=\"hg-big\"><span class=\"hg-count\" data-to=\"212\">212</span></div><p style=\"margin: 6px 0 0; font-size: 13px; color: #A79E8C\">hand-finished parts</p></div>\n</div>\n</div>\n</div>\n<div class=\"hg-bw\" style=\"grid-area: c\">\n<div class=\"hg-bt\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<video id=\"hg-v-g1\" class=\"hg-vtile\" src=\"assets/videos/fef71e327709375ff1b1ccbec992dcd2.mp4\" poster=\"assets/images/8524bc59eb7d2c5f2504a7d44fa2217c.webp\" autoplay=\"\" muted=\"\" loop=\"\" playsinline=\"\" preload=\"auto\" aria-hidden=\"true\" style=\"object-position: 30% center\"></video>\n<span class=\"hg-bt-cap\" style=\"opacity: 1; transform: none\"><b>In motion</b><span>LIVE</span></span>\n</div>\n</div>\n<div class=\"hg-bw\" style=\"grid-area: d\">\n<div class=\"hg-bt\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<div class=\"hg-bt-pad\">\n<svg width=\"30\" height=\"22\" viewBox=\"0 0 54 40\" fill=\"#C9A25C\" aria-hidden=\"true\"><path d=\"M0 40V22C0 9 7 2 21 0l2 5C14 8 10 13 10 20h11v20H0zm31 0V22C31 9 38 2 52 0l2 5c-9 3-13 8-13 15h11v20H31z\"></path></svg>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: clamp(20px, 1.9vw, 26px); line-height: 1.3; color: #F1E6CF\">Light falls through smoke and lands on gold.</p>\n</div>\n</div>\n</div>\n<div class=\"hg-bw\" style=\"grid-area: e\">\n<button type=\"button\" class=\"hg-bt\" aria-label=\"Open the wall clock\" onClick=\"{{op.i15}}\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<img class=\"hg-bt-img\" src=\"assets/images/67f8583a8c38d01b3d8710ea1179440b.webp\" alt=\"\" style=\"object-position: 50% 40%\">\n<span class=\"hg-bt-cap\"><b>The marble wall clock</b><span>VIEW</span></span>\n</button>\n</div>\n<div class=\"hg-bw\" style=\"grid-area: f\">\n<div class=\"hg-bt\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<div class=\"hg-bt-pad\" style=\"align-items: center; justify-content: center; gap: 10px\">\n<div class=\"hg-lc\" role=\"img\" aria-label=\"A clock showing your local time\">\n<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\">\n<circle cx=\"100\" cy=\"100\" r=\"96\" fill=\"none\" stroke=\"#C9A25C\" stroke-width=\"2\"></circle>\n<circle cx=\"100\" cy=\"100\" r=\"88\" fill=\"rgba(31,150,96,0.08)\" stroke=\"#C9A25C\" stroke-opacity=\"0.25\"></circle>\n<sc-for list=\"{{lcTicks}}\" as=\"t\" hint-placeholder-count=\"12\">\n<line x1=\"{{t.x1}}\" y1=\"{{t.y1}}\" x2=\"{{t.x2}}\" y2=\"{{t.y2}}\" stroke=\"#E3C88E\" stroke-width=\"{{t.w}}\" stroke-linecap=\"round\"></line>\n</sc-for>\n<g id=\"hg-lc-h\" class=\"hg-lc-hand\"><line x1=\"100\" y1=\"108\" x2=\"100\" y2=\"56\" stroke=\"#F1E6CF\" stroke-width=\"5\" stroke-linecap=\"round\"></line></g>\n<g id=\"hg-lc-m\" class=\"hg-lc-hand\"><line x1=\"100\" y1=\"110\" x2=\"100\" y2=\"30\" stroke=\"#E3C88E\" stroke-width=\"3.5\" stroke-linecap=\"round\"></line></g>\n<g id=\"hg-lc-s\" class=\"hg-lc-hand\"><line x1=\"100\" y1=\"118\" x2=\"100\" y2=\"22\" stroke=\"#3EE29D\" stroke-width=\"1.5\" stroke-linecap=\"round\"></line><circle cx=\"100\" cy=\"100\" r=\"5\" fill=\"#3EE29D\"></circle></g>\n<circle cx=\"100\" cy=\"100\" r=\"2.4\" fill=\"#0A0908\"></circle>\n</svg>\n</div>\n<p style=\"margin: 0; font-size: 10px; font-weight: 600; letter-spacing: 0.22em; color: #D9B97A\">YOUR TIME · <span id=\"hg-lc-t\">--:--</span></p>\n</div>\n</div>\n</div>\n<div class=\"hg-bw\" style=\"grid-area: g\">\n<button type=\"button\" class=\"hg-bt\" aria-label=\"Open Héritage Ouvert\" onClick=\"{{op.i6}}\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<img class=\"hg-bt-img\" src=\"assets/images/f2704a5c0fd0a53324169a367da96374.webp\" alt=\"\">\n<span class=\"hg-bt-cap\"><b>Héritage</b><span>VIEW</span></span>\n</button>\n</div>\n</div>\n</div>\n</section>\n\n<!-- 3. IMAGE STRIPS -->\n<section id=\"details\" style=\"position: relative; border-top: 1px solid rgba(201,162,92,0.18); padding: 110px 0 120px\">\n<div style=\"max-width: 1280px; margin: 0 auto 44px; padding: 0 clamp(16px, 5vw, 72px); display: flex; flex-direction: column; gap: 18px\">\n<p class=\"hg-eyebrow hg-ge\">CHAPTER II · THE DETAILS</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(40px, 5vw, 72px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">An endless</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">procession.</em></span></span>\n</h2>\n</div>\n<div class=\"hg-strip\" onMouseEnter=\"{{stripSlow}}\" onMouseLeave=\"{{stripFast}}\">\n<div id=\"hg-st1\" class=\"hg-strip-track\">\n<div class=\"hg-strip-set\">\n<sc-for list=\"{{strip1}}\" as=\"s\" hint-placeholder-count=\"6\">\n<button type=\"button\" class=\"hg-si hg-si-sq\" aria-label=\"Open {{s.title}}\" onClick=\"{{s.open}}\"><img src=\"{{s.img}}\" alt=\"\"></button>\n</sc-for>\n</div>\n<div class=\"hg-strip-set\" aria-hidden=\"true\" inert=\"\">\n<sc-for list=\"{{strip1}}\" as=\"s\" hint-placeholder-count=\"6\">\n<button type=\"button\" class=\"hg-si hg-si-sq\" onClick=\"{{s.open}}\"><img src=\"{{s.img}}\" alt=\"\"></button>\n</sc-for>\n</div>\n</div>\n</div>\n<div class=\"hg-strip\" onMouseEnter=\"{{stripSlow}}\" onMouseLeave=\"{{stripFast}}\">\n<div id=\"hg-st2\" class=\"hg-strip-track\">\n<div class=\"hg-strip-set\">\n<sc-for list=\"{{strip2}}\" as=\"s\" hint-placeholder-count=\"8\">\n<button type=\"button\" class=\"hg-si hg-si-wd\" aria-label=\"Open {{s.title}}\" onClick=\"{{s.open}}\"><img src=\"{{s.img}}\" alt=\"\"></button>\n</sc-for>\n</div>\n<div class=\"hg-strip-set\" aria-hidden=\"true\" inert=\"\">\n<sc-for list=\"{{strip2}}\" as=\"s\" hint-placeholder-count=\"8\">\n<button type=\"button\" class=\"hg-si hg-si-wd\" onClick=\"{{s.open}}\"><img src=\"{{s.img}}\" alt=\"\"></button>\n</sc-for>\n</div>\n</div>\n</div>\n</section>\n\n<!-- 4. PARALLAX WALL -->\n<section id=\"hg-wall\" class=\"hg-wall\" aria-label=\"Every angle\" style=\"border-top: 1px solid rgba(201,162,92,0.18)\">\n<div class=\"hg-wall-cols\">\n<div id=\"hg-wc1\" class=\"hg-wall-col\">\n<sc-for list=\"{{col1}}\" as=\"s\" hint-placeholder-count=\"3\">\n<button type=\"button\" class=\"hg-si\" aria-label=\"Open {{s.title}}\" onClick=\"{{s.open}}\"><img src=\"{{s.img}}\" alt=\"\"></button>\n</sc-for>\n</div>\n<div id=\"hg-wc2\" class=\"hg-wall-col\">\n<sc-for list=\"{{col2}}\" as=\"s\" hint-placeholder-count=\"3\">\n<button type=\"button\" class=\"hg-si\" aria-label=\"Open {{s.title}}\" onClick=\"{{s.open}}\"><img src=\"{{s.img}}\" alt=\"\"></button>\n</sc-for>\n</div>\n<div id=\"hg-wc3\" class=\"hg-wall-col hg-c3\">\n<sc-for list=\"{{col3}}\" as=\"s\" hint-placeholder-count=\"3\">\n<button type=\"button\" class=\"hg-si\" aria-label=\"Open {{s.title}}\" onClick=\"{{s.open}}\"><img src=\"{{s.img}}\" alt=\"\"></button>\n</sc-for>\n</div>\n</div>\n<div class=\"hg-wall-veil\" aria-hidden=\"true\"></div>\n<div id=\"hg-wall-plate\" class=\"hg-wall-plate\">\n<p class=\"hg-eyebrow\">CHAPTER III</p>\n<h2 style=\"margin: 16px 0 14px; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(38px, 4.6vw, 64px); line-height: 1; color: #F1E6CF\">Every angle,<br><em style=\"font-style: italic; color: #E3C88E\">every hour.</em></h2>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.7; color: #A79E8C\">The columns drift at their own pace as you scroll — the way light moves across a dial through the day.</p>\n</div>\n</section>\n\n<!-- 5. BENTO: MOMENTS -->\n<section id=\"moments\" style=\"position: relative; border-top: 1px solid rgba(201,162,92,0.18); background: radial-gradient(50% 50% at 80% 25%, rgba(31,150,96,0.12), rgba(31,150,96,0) 70%)\">\n<div style=\"max-width: 1280px; margin: 0 auto; padding: 120px clamp(16px, 5vw, 72px); display: flex; flex-direction: column; gap: 48px\">\n<div style=\"display: flex; flex-direction: column; gap: 18px\">\n<p class=\"hg-eyebrow hg-ge\">CHAPTER IV · MOMENTS</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(40px, 5vw, 72px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Time, kept</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">beautifully.</em></span></span>\n</h2>\n</div>\n<div class=\"hg-bento hg-b2\">\n<div class=\"hg-bw\" style=\"grid-area: v\">\n<div class=\"hg-bt\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<video id=\"hg-v-g2\" class=\"hg-vtile\" src=\"assets/videos/fff80c4fb3cd616e4e4175a0448dccc4.mp4\" poster=\"assets/images/67f8583a8c38d01b3d8710ea1179440b.webp\" autoplay=\"\" muted=\"\" loop=\"\" playsinline=\"\" preload=\"auto\" aria-hidden=\"true\"></video>\n<span class=\"hg-bt-cap\" style=\"opacity: 1; transform: none\"><b>Designed to outlast the moment</b><span>FILM</span></span>\n</div>\n</div>\n<div class=\"hg-bw\" style=\"grid-area: k\">\n<button type=\"button\" class=\"hg-bt\" aria-label=\"Open the skeleton clock\" onClick=\"{{op.i9}}\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\" style=\"background: radial-gradient(closest-side, rgba(217,185,122,0.18), rgba(10,9,8,0.4))\">\n<img class=\"hg-bt-img\" src=\"assets/images/58bd89f9245ae4ead3f0fbc5fb71fa8d.webp\" alt=\"\" style=\"object-fit: contain; padding: 12px; box-sizing: border-box\">\n<span class=\"hg-bt-cap\"><b>Skeleton clock</b><span>VIEW</span></span>\n</button>\n</div>\n<div class=\"hg-bw\" style=\"grid-area: n\">\n<div class=\"hg-bt\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<div class=\"hg-bt-pad\">\n<p class=\"hg-eyebrow\">AT THE BENCH</p>\n<div><div class=\"hg-big\"><span class=\"hg-count\" data-to=\"28\">28</span></div><p style=\"margin: 6px 0 0; font-size: 13px; color: #A79E8C\">years of watchmaking</p></div>\n</div>\n</div>\n</div>\n<div class=\"hg-bw\" style=\"grid-area: m\">\n<button type=\"button\" class=\"hg-bt\" aria-label=\"Open gears and marble\" onClick=\"{{op.i16}}\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<img class=\"hg-bt-img\" src=\"assets/images/8524bc59eb7d2c5f2504a7d44fa2217c.webp\" alt=\"\" style=\"object-position: 35% center\">\n<span class=\"hg-bt-cap\"><b>Gears &amp; marble</b><span>VIEW</span></span>\n</button>\n</div>\n<div class=\"hg-bw\" style=\"grid-area: t\">\n<div class=\"hg-bt\" onMouseMove=\"{{tileMove}}\" onMouseLeave=\"{{tileLeave}}\">\n<div class=\"hg-bt-pad\">\n<p class=\"hg-eyebrow\">SEE IT IN PERSON</p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: clamp(26px, 2.4vw, 34px); line-height: 1.15; color: #F1E6CF\">Photographs flatter. <em style=\"font-style: italic; color: #E3C88E\">Gold on the wrist doesn't need to.</em></p>\n<div style=\"display: flex; flex-wrap: wrap; gap: 14px 28px\">\n<a href=\"contact.html\" class=\"hg-line\" style=\"display: inline-flex; align-items: center; min-height: 44px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #EFE6D4\">BOOK A VIEWING</a>\n<a href=\"collections.html\" class=\"hg-line\" style=\"display: inline-flex; align-items: center; min-height: 44px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #EFE6D4\">THE COLLECTIONS</a>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</section>\n\n<!-- 6. CTA -->\n<section id=\"closer\" style=\"position: relative; overflow: hidden; border-top: 1px solid rgba(201,162,92,0.18); border-bottom: 2px solid #C9A25C; background: radial-gradient(60% 90% at 50% 100%, rgba(217,170,90,0.14), rgba(217,170,90,0) 70%)\">\n<div style=\"max-width: 900px; margin: 0 auto; padding: 140px clamp(16px, 5vw, 72px); display: flex; flex-direction: column; align-items: center; gap: 26px; text-align: center\">\n<p class=\"hg-eyebrow hg-ge\">SEEN ENOUGH?</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(46px, 6.6vw, 100px); line-height: 0.96; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Now come</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">closer.</em></span></span>\n</h2>\n<div class=\"hg-gf\" data-delay=\"0.2\" style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 20px 36px; margin-top: 8px\">\n<a href=\"collections.html\" class=\"hg-btn\" style=\"display: inline-flex; align-items: center; justify-content: center; min-height: 50px; padding: 0 30px; background: #D9B97A; color: #1A1408; font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-decoration: none\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">SHOP THE COLLECTIONS</span>\n</a>\n<a href=\"contact.html\" class=\"hg-line\" style=\"display: inline-flex; align-items: center; min-height: 44px; font-size: 12px; font-weight: 500; letter-spacing: 0.16em; color: #EFE6D4\">CONTACT THE ATELIER</a>\n</div>\n</div>\n</section>\n\n<!-- FOOTER -->\n<footer style=\"max-width: 1280px; margin: 0 auto; padding: 48px clamp(16px, 5vw, 72px) 28px; display: flex; flex-direction: column; gap: 32px\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 40px 64px\">\n<div style=\"flex: 1 1 240px; display: flex; flex-direction: column; gap: 12px\">\n<p style=\"margin: 0; display: flex; align-items: center; gap: 0.5em; font-family: 'Cinzel', serif; font-size: 20px; letter-spacing: 0.26em; color: #D9B97A\"><svg width=\"1.6em\" height=\"1.6em\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" style=\"flex: none; overflow: visible\"><circle cx=\"20\" cy=\"21\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"></circle><rect x=\"17.6\" y=\"1.2\" width=\"4.8\" height=\"3.2\" rx=\"1\" fill=\"currentColor\"></rect><path d=\"M36.5 21h-2.4M5.9 21h-2.4M20 37.5v-2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"></path><path d=\"M10.5 14.5L15.2 28.5L20 19.5L24.8 28.5L29.5 14.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><circle cx=\"20\" cy=\"19.5\" r=\"1.9\" fill=\"#3EE29D\"></circle></svg><span>WATCHIFY</span></p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #CFC5B1\">Make every second matter.</p>\n<div style=\"display: flex; gap: 4px; margin-left: -12px\">\n<a href=\"#top\" aria-label=\"Instagram\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"></rect><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><circle cx=\"17.5\" cy=\"6.5\" r=\"0.8\" fill=\"currentColor\"></circle></svg></a>\n<a href=\"#top\" aria-label=\"Facebook\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><path d=\"M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z\"></path></svg></a>\n<a href=\"#top\" aria-label=\"X\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" aria-hidden=\"true\"><path d=\"M4 4l16 16M20 4L4 20\"></path></svg></a>\n<a href=\"#top\" aria-label=\"Pinterest\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M11 8.5c3-1 5 .5 4.5 3s-3 3-4 1.5M11.5 10l-2.5 11\"></path></svg></a>\n</div>\n</div>\n<nav aria-label=\"Footer\" style=\"flex: 1 1 160px; display: flex; flex-direction: column; gap: 10px\">\n<p style=\"margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #EFE6D4\">PAGES</p>\n<a href=\"index.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Home</a>\n<a href=\"collections.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Collections</a>\n<a href=\"#top\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #E3C88E; text-decoration: none\">Gallery</a>\n<a href=\"story.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Our Story</a>\n<a href=\"contact.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Contact</a>\n</nav>\n<form onSubmit=\"{{nlSubmit}}\" style=\"flex: 1 1 300px; display: flex; flex-direction: column; gap: 10px; padding-left: 28px; border-left: 1px solid rgba(201,162,92,0.25)\">\n<label for=\"hg-email\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #F1E6CF\">Letters on time</label>\n<p style=\"margin: 0; font-size: 12px; line-height: 1.5; color: #A79E8C\">Be the first to know about new arrivals and exclusive stories.</p>\n<sc-if value=\"{{nlDone}}\" hint-placeholder-val=\"{{ false }}\">\n<p role=\"status\" style=\"margin: 6px 0 0; font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #E3C88E\">Thank you — you are on the list.</p>\n</sc-if>\n<sc-if value=\"{{nlOpen}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px\">\n<input id=\"hg-email\" name=\"email\" type=\"email\" required=\"{{ true }}\" autocomplete=\"email\" placeholder=\"Your email address\" style=\"flex: 1 1 160px; min-width: 0; min-height: 44px; padding: 0 14px; background: #100E0B; border: 1px solid rgba(201,162,92,0.35); color: #EFE6D4; font-family: 'Inter', sans-serif; font-size: 13px; box-sizing: border-box\">\n<button type=\"submit\" class=\"hg-btn\" style=\"min-height: 44px; padding: 0 22px; background: #D9B97A; color: #1A1408; border: none; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.16em\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">SUBSCRIBE</span>\n</button>\n</div>\n</sc-if>\n</form>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding-top: 18px; border-top: 1px solid rgba(201,162,92,0.2); font-size: 12px; color: #A79E8C\">\n<p style=\"margin: 0\">© 2026 Watchify. All rights reserved.</p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 15px; color: #D9B97A\">Timeless pieces. A lasting legacy.</p>\n</div>\n</footer>\n\n<!-- LIGHTBOX -->\n<sc-if value=\"{{lbOpen}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"hg-lb\" role=\"dialog\" aria-modal=\"true\" aria-label=\"{{lbTitle}}\" onClick=\"{{lbBackdrop}}\" onKeyDown=\"{{lbKey}}\">\n<figure class=\"hg-lb-fig\">\n<div class=\"hg-lb-imgwrap\">\n<img id=\"hg-lb-img\" class=\"hg-lb-img\" src=\"{{lbImg}}\" alt=\"{{lbTitle}}\">\n</div>\n<figcaption class=\"hg-lb-cap\">\n<span style=\"font-size: 11px; font-weight: 600; letter-spacing: 0.2em; color: #D9B97A\">{{lbNo}} / {{lbTotal}}</span>\n<span style=\"font-family: 'Cormorant Garamond', serif; font-size: 28px; color: #F1E6CF\">{{lbTitle}}</span>\n<span style=\"font-size: 12px; letter-spacing: 0.1em; color: #A79E8C\">{{lbMeta}}</span>\n</figcaption>\n<button type=\"button\" id=\"hg-lb-close\" class=\"hg-lb-x\" aria-label=\"Close\" onClick=\"{{lbClose}}\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"></path></svg>\n</button>\n<button type=\"button\" class=\"hg-lb-btn\" style=\"left: -26px\" aria-label=\"Previous image\" onClick=\"{{lbPrev}}\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 5l-7 7 7 7\"></path></svg>\n</button>\n<button type=\"button\" class=\"hg-lb-btn\" style=\"right: -26px\" aria-label=\"Next image\" onClick=\"{{lbNext}}\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 5l7 7-7 7\"></path></svg>\n</button>\n</figure>\n</div>\n</sc-if>\n\n<dc-import name=\"CartDrawer\" open=\"{{cartOpen}}\" on-close=\"{{closeCart}}\" on-change=\"{{cartChange}}\" hint-size=\"0px,0px\"></dc-import>\n</div>", (function () {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { lb: -1, nl: false };
    this.LB = [
      { img: 'assets/images/38e923d6674f686cea6263a1aa7cb9fb.webp', title: 'Verde Squelette', meta: 'EMERALD SAPPHIRE · 18K YELLOW GOLD' },
      { img: 'assets/images/44fb5c3f56ac7f37bd42faa77e574f2e.jpg', title: 'The marble dial', meta: 'WHERE IT BEGAN · 2003' },
      { img: 'assets/images/34414a3e10bd2430ecf6addd9e2c9c82.webp', title: 'Bleu Nuit', meta: 'MIDNIGHT SAPPHIRE · 18K WHITE GOLD' },
      { img: 'assets/images/861030cc4ddcd424b2c353a6a2fe2597.webp', title: 'Rubis Rosé', meta: 'RUBY SAPPHIRE · 18K ROSE GOLD' },
      { img: 'assets/images/f14797db87b593ffacd5f58ddcf20858.webp', title: 'Fumé Squelette', meta: 'SMOKED SAPPHIRE · 18K YELLOW GOLD' },
      { img: 'assets/images/20ad6f349112e2b65207b501f7d9f931.webp', title: 'Noir Chapitre', meta: 'BLACK CHAPTER RING · 18K YELLOW GOLD' },
      { img: 'assets/images/3e0dbaf8a68a09744e639e89aaff95ca.webp', title: 'Héritage Ouvert', meta: 'OPEN-WORKED · 18K ROSE GOLD' },
      { img: 'assets/images/a2cf7dd55b954b2c525d1110a25b5ea0.webp', title: 'Obsidian wall clock', meta: 'GREEN MARBLE · GOLD CASE' },
      { img: 'assets/images/c4a748b82037532aa773eb49e1b8624d.webp', title: 'Celeste chronograph', meta: 'CREAM DIAL · GOLD CASE' },
      { img: 'assets/images/33f8c8cc1fd141487005a6170358aa6e.webp', title: 'Skeleton Atelier', meta: 'OPEN MOVEMENT · GOLD CASE' },
      { img: 'assets/images/43ae32aa5f88aa0ed113e641d0d0df42.webp', title: 'Noir desk clock', meta: 'GOLD RING · BLACK DIAL' },
      { img: 'assets/images/1d1140c54ed5432531dcf59145844518.webp', title: 'Champagne table clock', meta: 'CHAMPAGNE DIAL · GOLD CASE' },
      { img: 'assets/images/92a357ca6d383a8fe55943662caffe41.webp', title: 'Orbit table clock', meta: 'GOLD RINGS · BLACK DIAL' },
      { img: 'assets/images/baa3d878c3ac2cad48d4f5befbf3672d.webp', title: 'Aurelia classic', meta: 'BLACK DIAL · GOLD CASE' },
      { img: 'assets/images/7b0eb084055ed2fcb8aa23dacc6b0a04.webp', title: 'Verde marble clock', meta: 'GREEN MARBLE · GOLD HANDS' },
      { img: 'assets/images/67f8583a8c38d01b3d8710ea1179440b.webp', title: 'The marble wall clock', meta: 'STILL FROM THE FILM' },
      { img: 'assets/images/8524bc59eb7d2c5f2504a7d44fa2217c.webp', title: 'Gears & marble', meta: 'STILL FROM THE FILM' }
    ];
    this.SMALL = {
      0: 'assets/images/92de356452526023d14d4043221402fe.webp', 2: 'assets/images/877df250d9dd31a16bf346df2edf47cf.webp', 3: 'assets/images/e98e1460b87524991c3ca6a2e94390ec.webp',
      4: 'assets/images/03d82286c5e0ec1c5efcf4480afa979c.webp', 5: 'assets/images/333f4e3b5fde63a032c19100c1ab21fd.webp', 6: 'assets/images/f2704a5c0fd0a53324169a367da96374.webp'
    };
    var self = this;
    this.opens = this.LB.map(function (_, i) {
      return function (e) { self.lbReturn = e && e.currentTarget; self.setState({ lb: i }); };
    });
    var lc = [];
    for (var i = 0; i < 12; i++) {
      var a = i * Math.PI / 6, s = Math.sin(a), c = Math.cos(a), major = i % 3 === 0;
      var r1 = major ? 70 : 76, r2 = 82;
      lc.push({ x1: (100 + r1 * s).toFixed(2), y1: (100 - r1 * c).toFixed(2), x2: (100 + r2 * s).toFixed(2), y2: (100 - r2 * c).toFixed(2), w: major ? 3 : 1.5 });
    }
    this.lcTicks = lc;
    this.tileMove = this.tileMove.bind(this);
    this.tileLeave = this.tileLeave.bind(this);
    this.lcFrame = this.lcFrame.bind(this);
    this.strips = [];
    this.stripSlow = function () { var g = window.gsap; if (g) g.to(self.strips, { timeScale: 0.15, duration: 0.8, overwrite: true }); };
    this.stripFast = function () { var g = window.gsap; if (g) g.to(self.strips, { timeScale: 1, duration: 1, overwrite: true }); };
  }

  componentDidMount() {
    this.fxVideos(['hg-v-g1', 'hg-v-g2']);
    // the live clock only ticks while its tile is on screen
    var self = this, s = document.getElementById('hg-lc-s'), svg = s && s.ownerSVGElement;
    this.lcOn = true;
    if (svg && 'IntersectionObserver' in window) {
      this.lcOn = false;
      this.lcIO = new IntersectionObserver(function (es) {
        var on = es[es.length - 1].isIntersecting;
        if (on && !self.lcOn) { self.lcOn = true; self.lcRaf = requestAnimationFrame(self.lcFrame); }
        else if (!on) { self.lcOn = false; cancelAnimationFrame(self.lcRaf); }
      });
      this.lcIO.observe(svg);
    }
    this.lcFrame();
    this.fxStart('hg-gal', this.pageFx.bind(this));
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

  componentWillUnmount() {
    if (this.vidIO) this.vidIO.disconnect();
    if (this.lcIO) this.lcIO.disconnect();
    this.lcOn = false;
    cancelAnimationFrame(this.lcRaf);
    clearTimeout(this.stTimer);
    document.documentElement.style.overflow = '';
    this.fxStop();
  }

  componentDidUpdate(prevProps, prevState) {
    var lb = this.state.lb;
    if (prevState.lb === lb) return;
    var g = window.gsap;
    if (lb >= 0) {
      document.documentElement.style.overflow = 'hidden';
      if (this.sm) this.sm.paused = true;
      if (prevState.lb < 0) {
        var btn = document.getElementById('hg-lb-close');
        if (btn) btn.focus();
      } else if (g && !this.fxReduce) {
        var dir = this.lbDir || 1;
        g.fromTo('#hg-lb-img', { opacity: 0, x: dir * 60, scale: 0.97 }, { opacity: 1, x: 0, scale: 1, duration: 0.7, ease: 'expo.out' });
      }
    } else {
      document.documentElement.style.overflow = '';
      if (this.sm) this.sm.paused = false;
      if (this.lbReturn && this.lbReturn.focus) { try { this.lbReturn.focus({ preventScroll: true }); } catch (e) {} }
    }
  }

  // live clock tile: hands sweep smoothly with the viewer's own time
  lcFrame() {
    var d = new Date();
    var ms = d.getMilliseconds(), sec = d.getSeconds() + ms / 1000, min = d.getMinutes() + sec / 60, hr = (d.getHours() % 12) + min / 60;
    var h = document.getElementById('hg-lc-h'), m = document.getElementById('hg-lc-m'), s = document.getElementById('hg-lc-s'), t = document.getElementById('hg-lc-t');
    if (h) h.style.transform = 'rotate(' + (hr * 30).toFixed(3) + 'deg)';
    if (m) m.style.transform = 'rotate(' + (min * 6).toFixed(3) + 'deg)';
    if (s) s.style.transform = 'rotate(' + (sec * 6).toFixed(3) + 'deg)';
    if (t && t.firstChild) {
      var txt = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
      if (t.firstChild.nodeValue !== txt) t.firstChild.nodeValue = txt;
    }
    if (this.lcOn) this.lcRaf = requestAnimationFrame(this.lcFrame);
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
    var sm = { cur: 0, tgt: 0, raf: 0, on: false, last: 0, paused: false };
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

    // 1. zoom-out hero: the full-screen watch shrinks into its bento cell while the wall assembles around it
    var stage = root.querySelector('#hg-gz-stage'), grid = root.querySelector('#hg-gzg'), center = root.querySelector('#hg-gz-center');
    var others = [].slice.call(grid.querySelectorAll('.hg-gzt')).filter(function (el) { return el !== center && el.offsetParent !== null; });
    var geo = function () {
      var sw = stage.clientWidth, sh = stage.clientHeight;
      var cx = grid.offsetLeft + center.offsetLeft + center.offsetWidth / 2;
      var cy = grid.offsetTop + center.offsetTop + center.offsetHeight / 2;
      return { x: sw / 2 - cx, y: sh / 2 - cy, s: Math.max(sw / center.offsetWidth, sh / center.offsetHeight) * 1.02 };
    };
    var out = function (el, axis) {
      var d = axis === 'x' ? (el.offsetLeft + el.offsetWidth / 2 - grid.clientWidth / 2) : (el.offsetTop + el.offsetHeight / 2 - grid.clientHeight / 2);
      return d * 0.9;
    };
    var tz = g.timeline({ scrollTrigger: { trigger: root.querySelector('#top'), start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true } });
    tz.fromTo(center, { x: function () { return geo().x; }, y: function () { return geo().y; }, scale: function () { return geo().s; }, borderRadius: 0 },
      { x: 0, y: 0, scale: 1, borderRadius: 22, ease: 'power2.inOut', duration: 1 }, 0)
      .fromTo(root.querySelector('#hg-gz-cimg'), { scale: 1.18 }, { scale: 1, ease: 'power2.inOut', duration: 1 }, 0)
      .to(root.querySelector('#hg-gz-shade'), { opacity: 0, ease: 'none', duration: 0.5 }, 0)
      .to(root.querySelector('#hg-gz-title'), { opacity: 0, y: -90, ease: 'power1.in', duration: 0.32 }, 0.02)
      .fromTo(others, {
        opacity: 0, scale: 0.5,
        x: function (i, el) { return out(el, 'x'); }, y: function (i, el) { return out(el, 'y'); },
        rotate: function (i) { return i % 2 ? 8 : -8; }
      }, { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0, ease: 'power3.out', duration: 0.7, stagger: 0.05 }, 0.22)
      .fromTo(root.querySelector('#hg-gz-hint'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.15 }, 0.95)
      .to({}, { duration: 0.2 });

    // 2 & 5. bento tiles: each one opens from a pinched clip and settles up into place
    var tiles = root.querySelectorAll('.hg-bw');
    g.set(tiles, { opacity: 0, y: 60, clipPath: 'inset(14% 14% 14% 14% round 22px)' });
    ST.batch(tiles, {
      start: 'top 90%', once: true,
      onEnter: function (b) { g.to(b, { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 22px)', duration: 1.4, ease: 'expo.out', stagger: 0.1, overwrite: true, clearProps: 'clipPath' }); }
    });

    // 3. strips: endless drift in opposite directions; faster and leaning while the page moves
    var s1 = root.querySelector('#hg-st1'), s2 = root.querySelector('#hg-st2');
    var a1 = g.fromTo(s1, { xPercent: 0 }, { xPercent: -50, duration: 55, ease: 'none', repeat: -1 });
    var a2 = g.fromTo(s2, { xPercent: -50 }, { xPercent: 0, duration: 65, ease: 'none', repeat: -1 });
    this.strips = [a1, a2];
    // the endless drift only runs while the strips are on screen
    a1.pause(); a2.pause();
    ST.create({
      trigger: root.querySelector('#details'), start: 'top bottom', end: 'bottom top',
      onToggle: function (s) { [a1, a2].forEach(function (a) { if (s.isActive) a.play(); else a.pause(); }); }
    });
    var k1 = g.quickTo(s1, 'skewX', { duration: 0.7, ease: 'power3.out' }), k2 = g.quickTo(s2, 'skewX', { duration: 0.7, ease: 'power3.out' });
    ST.create({
      trigger: root.querySelector('#details'), start: 'top bottom', end: 'bottom top',
      onUpdate: function (s) {
        var v = s.getVelocity();
        var k = g.utils.clamp(-8, 8, v / -300);
        k1(k); k2(k);
        clearTimeout(self.stTimer);
        self.stTimer = setTimeout(function () { k1(0); k2(0); }, 140);
      }
    });

    // 4. parallax wall: three columns drift at different speeds and directions with the scroll
    var wall = root.querySelector('#hg-wall');
    var wst = { trigger: wall, start: 'top bottom', end: 'bottom top', scrub: 0.6 };
    g.fromTo(root.querySelector('#hg-wc1'), { y: 140 }, { y: -220, ease: 'none', scrollTrigger: wst });
    g.fromTo(root.querySelector('#hg-wc2'), { y: -260 }, { y: 160, ease: 'none', scrollTrigger: { trigger: wall, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
    g.fromTo(root.querySelector('#hg-wc3'), { y: 220 }, { y: -320, ease: 'none', scrollTrigger: { trigger: wall, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
    g.fromTo(root.querySelector('#hg-wall-plate'), { opacity: 0, scale: 0.86 }, {
      opacity: 1, scale: 1, ease: 'power2.out',
      scrollTrigger: { trigger: wall, start: 'top 70%', end: 'top 15%', scrub: 0.6 }
    });
  }

  tileMove(e) {
    if (this.fxReduce) return;
    var el = e.currentTarget, r = el.getBoundingClientRect();
    var x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    var y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    var st = el.style;
    st.setProperty('--ry', ((x - 0.5) * 7).toFixed(2) + 'deg');
    st.setProperty('--rx', ((0.5 - y) * 6).toFixed(2) + 'deg');
    st.setProperty('--gx', (x * 100).toFixed(1) + '%');
    st.setProperty('--gy', (y * 100).toFixed(1) + '%');
  }

  tileLeave(e) {
    var st = e.currentTarget.style;
    st.removeProperty('--ry'); st.removeProperty('--rx');
  }

  // Cart drawer bridge: the drawer owns the cart; the page tracks open/closed and the badge count.
  cartApi() {
    if (this.cartFns) return this.cartFns;
    var self = this;
    this.cartFns = {
      open: function () { if (self.sm) self.sm.paused = true; self.setState({ cartOpen: true }); },
      close: function () { if (self.sm) self.sm.paused = self.state.lb >= 0; self.setState({ cartOpen: false }); },
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
    var s = this.state, self = this, LB = this.LB, opens = this.opens, SMALL = this.SMALL, n = LB.length;
    var item = function (i, small) { return { img: small && SMALL[i] ? SMALL[i] : LB[i].img, title: LB[i].title, open: opens[i] }; };
    var op = {};
    for (var i = 0; i < n; i++) op['i' + i] = opens[i];
    var cur = s.lb >= 0 ? LB[s.lb] : LB[0];
    var go = function (d) { self.lbDir = d; self.setState({ lb: (self.state.lb + d + n) % n }); };
    return {
      op: op, tileMove: this.tileMove, tileLeave: this.tileLeave, lcTicks: this.lcTicks,
      stripSlow: this.stripSlow, stripFast: this.stripFast,
      strip1: [0, 2, 3, 4, 5, 6].map(function (i) { return item(i, true); }),
      strip2: [7, 8, 9, 10, 11, 12, 13, 14].map(function (i) { return item(i, false); }),
      col1: [8, 1, 13].map(function (i) { return item(i, false); }),
      col2: [0, 11, 6].map(function (i) { return item(i, true); }),
      col3: [10, 3, 14].map(function (i) { return item(i, false); }),
      lbOpen: s.lb >= 0, lbImg: cur.img, lbTitle: cur.title, lbMeta: cur.meta,
      lbNo: ('0' + (s.lb + 1)).slice(-2), lbTotal: ('0' + n).slice(-2),
      lbClose: function () { self.setState({ lb: -1 }); },
      lbPrev: function (e) { e.stopPropagation(); go(-1); },
      lbNext: function (e) { e.stopPropagation(); go(1); },
      lbBackdrop: function (e) { if (e.target === e.currentTarget) self.setState({ lb: -1 }); },
      lbKey: function (e) {
        if (e.key === 'Escape') { e.preventDefault(); self.setState({ lb: -1 }); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      },
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
