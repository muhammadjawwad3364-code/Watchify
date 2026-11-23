/* Watchify — Story (template + logic). Rendered by js/dc-lite.js */
DC.define("Story", "<div id=\"hg-story\" style=\"background: #0A0908; color: #EFE6D4; font-family: 'Inter', system-ui, sans-serif; overflow-x: clip\">\n\n<!-- NAV -->\n<header class=\"hg-nav\">\n<nav style=\"max-width: 1280px; margin: 0 auto; padding: 14px clamp(16px, 5vw, 72px); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 32px\" aria-label=\"Primary\">\n<a href=\"index.html\" aria-label=\"Watchify — home\" style=\"display: inline-flex; align-items: center; gap: 0.5em; font-family: 'Cinzel', serif; font-size: 22px; letter-spacing: 0.28em; color: #D9B97A; text-decoration: none\"><svg width=\"1.6em\" height=\"1.6em\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" style=\"flex: none; overflow: visible\"><circle cx=\"20\" cy=\"21\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"></circle><rect x=\"17.6\" y=\"1.2\" width=\"4.8\" height=\"3.2\" rx=\"1\" fill=\"currentColor\"></rect><path d=\"M36.5 21h-2.4M5.9 21h-2.4M20 37.5v-2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"></path><path d=\"M10.5 14.5L15.2 28.5L20 19.5L24.8 28.5L29.5 14.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><circle cx=\"20\" cy=\"19.5\" r=\"1.9\" fill=\"#3EE29D\"></circle></svg><span>WATCHIFY</span></a>\n<div style=\"display: flex; flex-wrap: wrap; gap: 4px 32px; font-size: 13px; letter-spacing: 0.02em\">\n<a href=\"collections.html\" class=\"hg-nl\">Collections</a>\n<a href=\"gallery.html\" class=\"hg-nl\">Gallery</a>\n<a href=\"#top\" class=\"hg-nl is-cur\" aria-current=\"page\">Our Story</a>\n<a href=\"contact.html\" class=\"hg-nl\">Contact</a>\n</div>\n<button type=\"button\" class=\"hg-bag\" aria-label=\"{{bagLabel}}\" aria-haspopup=\"dialog\" aria-expanded=\"{{bagExpanded}}\" onClick=\"{{openCart}}\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: none; border: none; color: #D9B97A; cursor: pointer; padding: 0\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" aria-hidden=\"true\"><path d=\"M5 8h14l-1 13H6L5 8z\"></path><path d=\"M9 8V6a3 3 0 0 1 6 0v2\"></path></svg>\n<sc-if value=\"{{hasCart}}\" hint-placeholder-val=\"{{ false }}\"><span class=\"hg-bag-n {{bagBump}}\" aria-hidden=\"true\">{{cartCount}}</span></sc-if>\n</button>\n</nav>\n</header>\n\n<!-- 1. HERO -->\n<section id=\"top\" class=\"hg-sh\">\n<div class=\"hg-sh-dial\" aria-hidden=\"true\"><img src=\"assets/images/44fb5c3f56ac7f37bd42faa77e574f2e.jpg\" alt=\"\"></div>\n<div class=\"hg-sh-veil\" aria-hidden=\"true\"></div>\n<div style=\"position: relative; max-width: 980px; padding: 96px clamp(16px, 5vw, 72px) 72px; display: flex; flex-direction: column; align-items: center; gap: 28px\">\n<p class=\"hg-eyebrow hg-ge\">OUR STORY · EST. 1998</p>\n<h1 class=\"hg-gh\" data-delay=\"0.1\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(60px, 10vw, 156px); line-height: 0.92; letter-spacing: -0.015em; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Every second,</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">earned.</em></span></span>\n</h1>\n<p class=\"hg-gf\" data-delay=\"0.5\" style=\"margin: 0; max-width: 600px; font-family: 'Cormorant Garamond', serif; font-size: 22px; line-height: 1.5; color: #CFC5B1\">From three hand-made watches on a kitchen table to the best-selling luxury watchmaker in the country. This is how we got here — one second at a time.</p>\n<p class=\"hg-gf\" data-delay=\"0.7\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: clamp(28px, 3vw, 40px); color: #E3C88E\">1998 <span style=\"color: #6E6656\">—</span> <span class=\"hg-count\" data-from=\"1998\" data-to=\"2026\" data-comma=\"no\" data-dur=\"3.2\">2026</span></p>\n<a href=\"#chapter\" class=\"hg-cue hg-gf\" data-delay=\"1\" style=\"text-decoration: none; margin-top: 18px\">SCROLL<i></i></a>\n</div>\n</section>\n\n<!-- 2. CHAPTER ONE -->\n<section id=\"chapter\" style=\"position: relative; border-top: 1px solid rgba(201,162,92,0.18)\">\n<div style=\"max-width: 1280px; margin: 0 auto; padding: 130px clamp(16px, 5vw, 72px); display: flex; flex-wrap: wrap; align-items: center; gap: 64px 80px\">\n<div style=\"flex: 1 1 460px; min-width: 0; display: flex; flex-direction: column; gap: 24px\">\n<p class=\"hg-eyebrow hg-ge\">CHAPTER ONE</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(42px, 5.2vw, 76px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">It began with</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">three watches.</em></span></span>\n</h2>\n<p class=\"hg-gf hg-drop\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 21px; line-height: 1.6; color: #CFC5B1\">In 1998 our founder cleared a kitchen table, bought a second-hand loupe and rebuilt three watches from salvaged movements. Two became gifts. The third was sold for exactly what the parts had cost.</p>\n<p class=\"hg-gf\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 21px; line-height: 1.6; color: #CFC5B1\">There was no business plan — only a stubborn idea that a watch should be beautiful on the inside first. Twenty-eight years later we still build them that way, one bench and one pair of hands at a time.</p>\n<p class=\"hg-gf\" style=\"margin: 6px 0 0; font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 22px; color: #E3C88E\">— The Founder</p>\n</div>\n<div style=\"flex: 1 1 420px; min-width: 0\">\n<div class=\"hg-stack\">\n<div data-speed=\"0.25\" style=\"position: absolute; inset: 0\">\n<div class=\"hg-stack-a hg-gi\"><img src=\"assets/images/3e0dbaf8a68a09744e639e89aaff95ca.webp\" alt=\"Open-worked gold skeleton watch on black\"></div>\n</div>\n<div data-speed=\"-0.35\" style=\"position: absolute; inset: 0\">\n<div class=\"hg-stack-b hg-gi\"><img src=\"assets/images/f14797db87b593ffacd5f58ddcf20858.webp\" alt=\"Smoked sapphire skeleton watch in yellow gold\"></div>\n</div>\n<div class=\"hg-stack-chip hg-gf\" data-delay=\"0.6\">\n<p style=\"margin: 0; font-size: 10px; font-weight: 600; letter-spacing: 0.18em; color: #D9B97A\">PIECE NO. 001</p>\n<p style=\"margin: 4px 0 0; font-family: 'Cormorant Garamond', serif; font-size: 20px; color: #F1E6CF\">Signed by hand, 1998</p>\n</div>\n</div>\n</div>\n</div>\n</section>\n\n<!-- 3. STATS -->\n<section aria-label=\"Watchify in numbers\" style=\"position: relative; border-top: 1px solid rgba(201,162,92,0.18); border-bottom: 1px solid rgba(201,162,92,0.18); background: radial-gradient(70% 120% at 50% 0%, rgba(31,150,96,0.10), rgba(31,150,96,0) 70%)\">\n<div style=\"max-width: 1280px; margin: 0 auto; padding: 40px clamp(16px, 5vw, 72px); display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0\">\n<div class=\"hg-sstat hg-gf\"><b><span class=\"hg-count\" data-to=\"28\">28</span></b><span>Years at the bench</span></div>\n<div class=\"hg-sstat hg-gf\" data-delay=\"0.1\"><b><span class=\"hg-count\" data-to=\"120000\" data-suf=\"+\">120,000+</span></b><span>Watches delivered</span></div>\n<div class=\"hg-sstat hg-gf\" data-delay=\"0.2\"><b><span class=\"hg-count\" data-to=\"86\">86</span></b><span>Master artisans</span></div>\n<div class=\"hg-sstat hg-gf\" data-delay=\"0.3\"><b><span class=\"hg-count\" data-to=\"14\">14</span></b><span>Boutiques nationwide</span></div>\n</div>\n</section>\n\n<!-- 4. TIMELINE -->\n<section id=\"hg-tl\" aria-label=\"Our journey, 1998 to 2026\" style=\"position: relative\">\n<div style=\"max-width: 1280px; margin: 0 auto; padding: 130px clamp(16px, 5vw, 72px) 120px; display: flex; flex-wrap: wrap; align-items: flex-start; gap: 56px 72px\">\n<div style=\"flex: 1 1 340px; min-width: 0; position: sticky; top: 96px; display: flex; flex-direction: column; gap: 26px\">\n<p class=\"hg-eyebrow hg-ge\">THE JOURNEY</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(40px, 4.6vw, 64px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Twenty-eight years,</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">one direction.</em></span></span>\n</h2>\n<div class=\"hg-tl-dial hg-gf\">\n<svg viewBox=\"0 0 400 400\" aria-hidden=\"true\">\n<circle cx=\"200\" cy=\"200\" r=\"196\" fill=\"none\" stroke=\"#C9A25C\" stroke-opacity=\"0.25\" stroke-width=\"1\" stroke-dasharray=\"2 8\"></circle>\n<sc-for list=\"{{ticks}}\" as=\"t\" hint-placeholder-count=\"60\">\n<line x1=\"{{t.x1}}\" y1=\"{{t.y1}}\" x2=\"{{t.x2}}\" y2=\"{{t.y2}}\" stroke=\"#D9B97A\" stroke-opacity=\"{{t.o}}\" stroke-width=\"{{t.w}}\"></line>\n</sc-for>\n<circle cx=\"200\" cy=\"200\" r=\"170\" fill=\"none\" stroke=\"#C9A25C\" stroke-opacity=\"0.14\" stroke-width=\"3\"></circle>\n<circle class=\"hg-tl-arc\" cx=\"200\" cy=\"200\" r=\"170\" fill=\"none\" stroke=\"#E3C88E\" stroke-width=\"3\" stroke-linecap=\"round\" transform=\"rotate(-90 200 200)\"></circle>\n<g class=\"hg-tl-hand\">\n<line x1=\"200\" y1=\"214\" x2=\"200\" y2=\"38\" stroke=\"#F6E0A6\" stroke-width=\"2\" stroke-linecap=\"round\"></line>\n<circle cx=\"200\" cy=\"30\" r=\"5\" fill=\"#3EE29D\"></circle>\n<circle cx=\"200\" cy=\"30\" r=\"12\" fill=\"#3EE29D\" fill-opacity=\"0.2\"></circle>\n</g>\n</svg>\n<div class=\"hg-tl-center\">\n<div class=\"hg-odo\" aria-live=\"polite\" aria-label=\"{{tlYear}}\">\n<sc-for list=\"{{odo}}\" as=\"c\" hint-placeholder-count=\"4\">\n<span class=\"hg-odo-col\" aria-hidden=\"true\"><span class=\"hg-odo-strip\" style=\"transform: translateY({{c.y}}); transition-delay: {{c.delay}}\"><sc-for list=\"{{c.digits}}\" as=\"dg\" hint-placeholder-count=\"10\"><span>{{dg}}</span></sc-for></span></span>\n</sc-for>\n</div>\n<div class=\"hg-tl-titles\" style=\"width: 70%\">\n<sc-for list=\"{{miles}}\" as=\"m\" hint-placeholder-count=\"7\">\n<p class=\"hg-tl-title {{m.titleCls}}\">{{m.title}}</p>\n</sc-for>\n</div>\n</div>\n</div>\n</div>\n<div id=\"hg-tl-list\" class=\"hg-tl-list\" style=\"flex: 2 1 560px; min-width: 0\">\n<div class=\"hg-tl-rail\" aria-hidden=\"true\"><div id=\"hg-tl-fill\" class=\"hg-tl-fill\"></div></div>\n<sc-for list=\"{{miles}}\" as=\"m\" hint-placeholder-count=\"7\">\n<article class=\"hg-ms {{m.cls}}\">\n<span class=\"hg-ms-node\" aria-hidden=\"true\"></span>\n<span class=\"hg-ms-year\" aria-hidden=\"true\">{{m.year}}</span>\n<div class=\"hg-ms-card\">\n<div class=\"hg-ms-img\"><img src=\"{{m.img}}\" alt=\"{{m.alt}}\"></div>\n<div class=\"hg-ms-text\">\n<p class=\"hg-eyebrow\">{{m.year}}</p>\n<h3 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(28px, 2.6vw, 38px); line-height: 1.05; color: #F1E6CF\">{{m.title}}</h3>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.7; color: #A79E8C\">{{m.text}}</p>\n<span class=\"hg-ms-chip\">{{m.chip}}</span>\n</div>\n</div>\n</article>\n</sc-for>\n</div>\n</div>\n</section>\n\n<!-- 5. THE ATELIER -->\n<section id=\"atelier\" style=\"position: relative; border-top: 1px solid rgba(201,162,92,0.18)\">\n<div style=\"max-width: 1280px; margin: 0 auto; padding: 130px clamp(16px, 5vw, 72px); display: flex; flex-wrap: wrap; align-items: center; gap: 56px 80px\">\n<div style=\"flex: 1 1 520px; min-width: 0\">\n<div class=\"hg-gi\" style=\"position: relative; width: 100%; aspect-ratio: 16 / 10; border-radius: 24px; overflow: hidden; background: #0A0908\">\n<video id=\"hg-v-at\" class=\"hg-vid hg-vid-at\" src=\"assets/videos/fef71e327709375ff1b1ccbec992dcd2.mp4\" poster=\"assets/images/8524bc59eb7d2c5f2504a7d44fa2217c.webp\" autoplay=\"\" muted=\"\" loop=\"\" playsinline=\"\" preload=\"auto\" aria-hidden=\"true\"></video>\n</div>\n</div>\n<div style=\"flex: 1 1 400px; min-width: 0; display: flex; flex-direction: column; gap: 22px\">\n<p class=\"hg-eyebrow hg-ge\">THE ATELIER</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(42px, 5vw, 72px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Slow hands.</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">Patient hearts.</em></span></span>\n</h2>\n<p class=\"hg-gf\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 20px; line-height: 1.6; color: #CFC5B1\">Every movement is assembled by one watchmaker, start to finish. Nothing is rushed, because nothing about time should be.</p>\n<div class=\"hg-gf\" style=\"display: flex; flex-direction: column; border-top: 1px solid rgba(201,162,92,0.14)\">\n<div class=\"hg-at-row\"><b><span class=\"hg-count\" data-to=\"212\">212</span></b><span>components in every calibre, each one inspected under a loupe.</span></div>\n<div class=\"hg-at-row\"><b><span class=\"hg-count\" data-to=\"400\" data-suf=\"+\">400+</span></b><span>hours from the first cut of brass to the final polish.</span></div>\n<div class=\"hg-at-row\"><b><span class=\"hg-count\" data-to=\"5\">5</span></b><span>positions of regulation before a watch is allowed to leave.</span></div>\n</div>\n</div>\n</div>\n</section>\n\n<!-- 6. FOUNDER'S WORDS -->\n<section id=\"words\" style=\"position: relative; overflow: hidden; border-top: 1px solid rgba(201,162,92,0.18); background: radial-gradient(60% 80% at 50% 50%, rgba(217,170,90,0.07), rgba(217,170,90,0) 70%)\">\n<div style=\"max-width: 1100px; margin: 0 auto; padding: 150px clamp(16px, 5vw, 72px); display: flex; flex-direction: column; align-items: center; gap: 34px\">\n<svg width=\"54\" height=\"40\" viewBox=\"0 0 54 40\" fill=\"#C9A25C\" aria-hidden=\"true\" class=\"hg-gf\"><path d=\"M0 40V22C0 9 7 2 21 0l2 5C14 8 10 13 10 20h11v20H0zm31 0V22C31 9 38 2 52 0l2 5c-9 3-13 8-13 15h11v20H31z\"></path></svg>\n<p id=\"hg-quote\" class=\"hg-quote\"><sc-for list=\"{{words}}\" as=\"w\" hint-placeholder-count=\"40\"><span class=\"hg-qw\">{{w}} </span></sc-for></p>\n<p class=\"hg-eyebrow hg-ge\">THE FOUNDER · 2026</p>\n</div>\n</section>\n\n<!-- 7. VALUES -->\n<section id=\"values\" style=\"position: relative; border-top: 1px solid rgba(201,162,92,0.18)\">\n<div class=\"hg-orbs\" aria-hidden=\"true\">\n<span class=\"hg-orb hg-orb-1\"></span>\n<span class=\"hg-orb hg-orb-2\"></span>\n</div>\n<div style=\"position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; padding: 120px clamp(16px, 5vw, 72px); display: flex; flex-direction: column; gap: 48px\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 18px; text-align: center\">\n<p class=\"hg-eyebrow hg-ge\">WHAT WE KEEP</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(40px, 5vw, 70px); line-height: 1; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Three promises,</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">never broken.</em></span></span>\n</h2>\n</div>\n<div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 22px\">\n<div class=\"hg-val\">\n<article class=\"hg-card\" onMouseMove=\"{{cardMove}}\" onMouseLeave=\"{{cardLeave}}\">\n<span class=\"hg-glass\" aria-hidden=\"true\"></span>\n<div class=\"hg-card-in\">\n<span class=\"hg-val-icon\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M12 1v5M12 18v5M1 12h5M18 12h5\"></path></svg></span>\n<h3 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 30px; color: #F1E6CF\">Precision</h3>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 42px; line-height: 1; color: #E3C88E\">±<span class=\"hg-count\" data-to=\"2\">2</span> <span style=\"font-size: 16px; letter-spacing: 0.12em; color: #A79E8C\">SEC / DAY</span></p>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.7; color: #A79E8C\">Every calibre is timed for six days on our own bench before it is signed off.</p>\n</div>\n</article>\n</div>\n<div class=\"hg-val\">\n<article class=\"hg-card\" onMouseMove=\"{{cardMove}}\" onMouseLeave=\"{{cardLeave}}\">\n<span class=\"hg-glass\" aria-hidden=\"true\"></span>\n<div class=\"hg-card-in\">\n<span class=\"hg-val-icon\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" aria-hidden=\"true\"><path d=\"M6 3h12M6 21h12M7 3c0 5 10 5 10 9s-10 4-10 9M17 3c0 5-10 5-10 9s10 4 10 9\"></path></svg></span>\n<h3 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 30px; color: #F1E6CF\">Patience</h3>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 42px; line-height: 1; color: #E3C88E\"><span class=\"hg-count\" data-to=\"400\">400</span> <span style=\"font-size: 16px; letter-spacing: 0.12em; color: #A79E8C\">HOURS A PIECE</span></p>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.7; color: #A79E8C\">We would rather make fewer watches than make one of them in a hurry.</p>\n</div>\n</article>\n</div>\n<div class=\"hg-val\">\n<article class=\"hg-card\" onMouseMove=\"{{cardMove}}\" onMouseLeave=\"{{cardLeave}}\">\n<span class=\"hg-glass\" aria-hidden=\"true\"></span>\n<div class=\"hg-card-in\">\n<span class=\"hg-val-icon\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" aria-hidden=\"true\"><path d=\"M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z\"></path><path d=\"M8.5 12l2.5 2.5 4.5-5\"></path></svg></span>\n<h3 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 30px; color: #F1E6CF\">Permanence</h3>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 42px; line-height: 1; color: #E3C88E\">For life <span style=\"font-size: 16px; letter-spacing: 0.12em; color: #A79E8C\">SERVICE</span></p>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.7; color: #A79E8C\">Every Watchify ever made can come home to the bench that built it.</p>\n</div>\n</article>\n</div>\n</div>\n</div>\n</section>\n\n<!-- 8. NEXT CHAPTER -->\n<section id=\"next\" style=\"position: relative; overflow: hidden; border-top: 1px solid rgba(201,162,92,0.18); border-bottom: 2px solid #C9A25C\">\n<div data-speed=\"0.4\" aria-hidden=\"true\" style=\"position: absolute; right: -6%; top: 50%; width: min(56vw, 680px); aspect-ratio: 1 / 1; margin-top: calc(min(56vw, 680px) * -0.5); opacity: 0.55\">\n<img class=\"hg-wimg\" src=\"assets/images/38e923d6674f686cea6263a1aa7cb9fb.webp\" alt=\"\" style=\"width: 100%; height: 100%; display: block\">\n</div>\n<div style=\"position: relative; max-width: 1280px; margin: 0 auto; padding: 150px clamp(16px, 5vw, 72px); display: flex; flex-direction: column; align-items: flex-start; gap: 26px\">\n<p class=\"hg-eyebrow hg-ge\">CHAPTER NEXT</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; max-width: 680px; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(44px, 6vw, 92px); line-height: 0.98; color: #F1E6CF; text-shadow: 0 2px 24px #000\">\n<span class=\"hg-lm\"><span class=\"hg-ln\">Write the next</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\"><em style=\"font-style: italic; color: #E3C88E\">second with us.</em></span></span>\n</h2>\n<p class=\"hg-gf\" style=\"margin: 0; max-width: 460px; font-family: 'Cormorant Garamond', serif; font-size: 20px; line-height: 1.55; color: #CFC5B1; text-shadow: 0 2px 16px #000\">Find the piece that will keep your time — and one day, someone else's.</p>\n<div class=\"hg-gf\" data-delay=\"0.2\" style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 20px 36px\">\n<a href=\"collections.html\" class=\"hg-btn\" style=\"display: inline-flex; align-items: center; justify-content: center; min-height: 50px; padding: 0 30px; background: #D9B97A; color: #1A1408; font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-decoration: none\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">EXPLORE THE COLLECTIONS</span>\n</a>\n<a href=\"index.html\" class=\"hg-line\" style=\"display: inline-flex; align-items: center; min-height: 44px; font-size: 12px; font-weight: 500; letter-spacing: 0.16em; color: #EFE6D4\">BACK TO HOME</a>\n</div>\n</div>\n</section>\n\n<!-- FOOTER -->\n<footer style=\"max-width: 1280px; margin: 0 auto; padding: 40px clamp(16px, 5vw, 72px) 28px; display: flex; flex-direction: column; gap: 32px\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 40px 56px\">\n<div style=\"flex: 1 1 240px; display: flex; flex-direction: column; gap: 12px\">\n<p style=\"margin: 0; display: flex; align-items: center; gap: 0.5em; font-family: 'Cinzel', serif; font-size: 20px; letter-spacing: 0.26em; color: #D9B97A\"><svg width=\"1.6em\" height=\"1.6em\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" style=\"flex: none; overflow: visible\"><circle cx=\"20\" cy=\"21\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"></circle><rect x=\"17.6\" y=\"1.2\" width=\"4.8\" height=\"3.2\" rx=\"1\" fill=\"currentColor\"></rect><path d=\"M36.5 21h-2.4M5.9 21h-2.4M20 37.5v-2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"></path><path d=\"M10.5 14.5L15.2 28.5L20 19.5L24.8 28.5L29.5 14.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><circle cx=\"20\" cy=\"19.5\" r=\"1.9\" fill=\"#3EE29D\"></circle></svg><span>WATCHIFY</span></p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #CFC5B1\">Make every second matter.</p>\n<div style=\"display: flex; gap: 4px; margin-left: -12px\">\n<a href=\"#top\" aria-label=\"Instagram\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"></rect><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><circle cx=\"17.5\" cy=\"6.5\" r=\"0.8\" fill=\"currentColor\"></circle></svg></a>\n<a href=\"#top\" aria-label=\"Facebook\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><path d=\"M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z\"></path></svg></a>\n<a href=\"#top\" aria-label=\"X\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" aria-hidden=\"true\"><path d=\"M4 4l16 16M20 4L4 20\"></path></svg></a>\n<a href=\"#top\" aria-label=\"Pinterest\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M11 8.5c3-1 5 .5 4.5 3s-3 3-4 1.5M11.5 10l-2.5 11\"></path></svg></a>\n</div>\n</div>\n<nav aria-label=\"Footer\" style=\"flex: 1 1 160px; display: flex; flex-direction: column; gap: 10px\">\n<p style=\"margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #EFE6D4\">PAGES</p>\n<a href=\"index.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Home</a>\n<a href=\"collections.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Collections</a>\n<a href=\"gallery.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Gallery</a>\n<a href=\"#top\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #E3C88E; text-decoration: none\">Our Story</a>\n<a href=\"contact.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Contact</a>\n</nav>\n<form onSubmit=\"{{nlSubmit}}\" style=\"flex: 1 1 300px; display: flex; flex-direction: column; gap: 10px; padding-left: 28px; border-left: 1px solid rgba(201,162,92,0.25)\">\n<label for=\"hg-email\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #F1E6CF\">Letters on time</label>\n<p style=\"margin: 0; font-size: 12px; line-height: 1.5; color: #A79E8C\">Be the first to know about new arrivals and exclusive stories.</p>\n<sc-if value=\"{{nlDone}}\" hint-placeholder-val=\"{{ false }}\">\n<p role=\"status\" style=\"margin: 6px 0 0; font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #E3C88E\">Thank you — you are on the list.</p>\n</sc-if>\n<sc-if value=\"{{nlOpen}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px\">\n<input id=\"hg-email\" name=\"email\" type=\"email\" required=\"{{ true }}\" autocomplete=\"email\" placeholder=\"Your email address\" style=\"flex: 1 1 160px; min-width: 0; min-height: 44px; padding: 0 14px; background: #100E0B; border: 1px solid rgba(201,162,92,0.35); color: #EFE6D4; font-family: 'Inter', sans-serif; font-size: 13px; box-sizing: border-box\">\n<button type=\"submit\" class=\"hg-btn\" style=\"min-height: 44px; padding: 0 22px; background: #D9B97A; color: #1A1408; border: none; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.16em\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">SUBSCRIBE</span>\n</button>\n</div>\n</sc-if>\n</form>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding-top: 18px; border-top: 1px solid rgba(201,162,92,0.2); font-size: 12px; color: #A79E8C\">\n<p style=\"margin: 0\">© 2026 Watchify. All rights reserved.</p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 15px; color: #D9B97A\">Timeless pieces. A lasting legacy.</p>\n</div>\n</footer>\n\n<dc-import name=\"CartDrawer\" open=\"{{cartOpen}}\" on-close=\"{{closeCart}}\" on-change=\"{{cartChange}}\" hint-size=\"0px,0px\"></dc-import>\n</div>", (function () {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tl: 0, seen: 0, nl: false };
    this.MILES = [
      { year: '1998', title: 'The kitchen table', chip: '3 WATCHES', img: 'assets/images/f2704a5c0fd0a53324169a367da96374.webp', alt: 'Open-worked gold skeleton watch', text: 'Our founder rebuilds three watches from salvaged movements with a second-hand loupe. Two become gifts; one is sold for the price of its parts.' },
      { year: '2003', title: 'A second pair of hands', chip: '100 PIECES A YEAR', img: 'assets/images/44fb5c3f56ac7f37bd42faa77e574f2e.jpg', alt: 'Green marble clock dial with gold numerals', text: 'The first apprentice joins and output reaches one hundred watches a year. The green marble dial — still our signature — is born.' },
      { year: '2008', title: 'The atelier opens', chip: '12 WATCHMAKERS', img: 'assets/images/8524bc59eb7d2c5f2504a7d44fa2217c.webp', alt: 'Gold hands over gears and a green marble dial', text: 'A real workshop, twelve watchmakers and our first in-house calibre, the H-01, finished entirely by hand.' },
      { year: '2013', title: 'Cutting away the dial', chip: 'FIRST BOUTIQUE', img: 'assets/images/03d82286c5e0ec1c5efcf4480afa979c.webp', alt: 'Smoked sapphire skeleton watch', text: 'The Skeleton Atelier line lets the movement speak for itself, and our first boutique opens its doors.' },
      { year: '2018', title: 'Ten thousand', chip: '10,000 PIECES', img: 'assets/images/333f4e3b5fde63a032c19100c1ab21fd.webp', alt: 'Skeleton watch with black chapter ring', text: 'A decade of word of mouth. The 10,000th Watchify leaves the bench, signed by the watchmaker who built it.' },
      { year: '2022', title: 'The colour of light', chip: '8 BOUTIQUES', img: 'assets/images/877df250d9dd31a16bf346df2edf47cf.webp', alt: 'Skeleton watch with midnight blue sapphire', text: 'Sapphire, ruby and emerald crystals join the family, and eight boutiques now carry the name across the country.' },
      { year: '2026', title: 'Number one', chip: '120,000+ DELIVERED', img: 'assets/images/92de356452526023d14d4043221402fe.webp', alt: 'Emerald skeleton watch in yellow gold', text: 'The best-selling luxury watchmaker in the country — still hand-finished, still one bench at a time.' }
    ];
    this.QUOTE = 'We never set out to be the biggest. We set out to make one watch so honest that you could see every reason it keeps time — and then to make the next one a little better.';
    var ticks = [];
    for (var i = 0; i < 60; i++) {
      var a = i * Math.PI / 30, s = Math.sin(a), c = Math.cos(a), major = i % 5 === 0;
      var r1 = major ? 178 : 183, r2 = 189;
      ticks.push({ x1: (200 + r1 * s).toFixed(2), y1: (200 - r1 * c).toFixed(2), x2: (200 + r2 * s).toFixed(2), y2: (200 - r2 * c).toFixed(2), w: major ? 2 : 1, o: major ? 0.85 : 0.35 });
    }
    this.ticks = ticks;
    this.cardMove = this.cardMove.bind(this);
    this.cardLeave = this.cardLeave.bind(this);
  }

  componentDidMount() {
    this.fxVideos(['hg-v-at']);
    this.fxStart('hg-story', this.pageFx.bind(this));
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
    this.fxStop();
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
      // images and video frames: wipe open upward while the picture settles from a zoom
      g.utils.toArray(root.querySelectorAll('.hg-gi')).forEach(function (el) {
        var media = el.querySelector('img,video');
        g.fromTo(el, { clipPath: 'inset(100% 0% 0% 0% round 20px)' }, { clipPath: 'inset(0% 0% 0% 0% round 20px)', duration: 1.7, ease: 'expo.inOut', scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
        if (media) g.fromTo(media, { scale: 1.32 }, { scale: 1, duration: 2.4, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
      });
      g.utils.toArray(root.querySelectorAll('[data-speed]')).forEach(function (el) {
        var sp = parseFloat(el.getAttribute('data-speed')) || 0;
        g.fromTo(el, { y: sp * 90 }, { y: -sp * 90, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
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
    // hero: the great dial settles in from far away, then turns with the scroll
    var dial = root.querySelector('.hg-sh-dial');
    g.fromTo(dial, { scale: 1.5, opacity: 0, rotate: -30 }, { scale: 1, opacity: 1, rotate: 0, duration: 3, ease: 'expo.out' });
    g.to(dial.querySelector('img'), { rotate: 50, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: 0.6 } });

    // timeline: the rail fills, the dial's hand sweeps, the year rolls to each milestone
    var list = root.querySelector('#hg-tl-list');
    var arc = root.querySelector('.hg-tl-arc'), hand = root.querySelector('.hg-tl-hand');
    g.fromTo(root.querySelector('#hg-tl-fill'), { scaleY: 0 }, {
      scaleY: 1, ease: 'none',
      scrollTrigger: {
        trigger: list, start: 'top 55%', end: 'bottom 60%', scrub: 0.6,
        // write only to the arc and the hand (not the whole timeline), so each frame stays cheap
        onUpdate: function (s) {
          if (arc) arc.style.strokeDashoffset = (1068.14 * (1 - s.progress)).toFixed(2);
          if (hand) hand.style.transform = 'rotate(' + (s.progress * 360).toFixed(2) + 'deg)';
        }
      }
    });
    g.utils.toArray(root.querySelectorAll('.hg-ms')).forEach(function (m, i) {
      ST.create({
        trigger: m, start: 'top 58%', end: 'bottom 58%',
        onToggle: function (s) { if (s.isActive && self.state.tl !== i) self.setState({ tl: i, seen: Math.max(self.state.seen, i) }); }
      });
      g.fromTo(m.querySelector('.hg-ms-card'), { opacity: 0, x: 110, rotateY: -16 }, {
        opacity: 1, x: 0, rotateY: 0, duration: 1.5, ease: 'expo.out',
        scrollTrigger: { trigger: m, start: 'top 82%', once: true }
      });
      g.fromTo(m.querySelector('.hg-ms-img img'), { scale: 1.35 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: m, start: 'top bottom', end: 'bottom 40%', scrub: 0.6 } });
      g.fromTo(m.querySelector('.hg-ms-year'), { yPercent: 40, opacity: 0 }, { yPercent: -40, opacity: 1, ease: 'none', scrollTrigger: { trigger: m, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
    });

    // founder's words light up one by one as you read down
    g.to(root.querySelectorAll('#hg-quote .hg-qw'), {
      opacity: 1, ease: 'none', stagger: 0.12,
      scrollTrigger: { trigger: root.querySelector('#hg-quote'), start: 'top 78%', end: 'bottom 42%', scrub: 0.6 }
    });

    // values: cards fan up from a tilt
    g.fromTo(root.querySelectorAll('.hg-val'), { opacity: 0, y: 90, rotateX: 18, transformPerspective: 1200 }, {
      opacity: 1, y: 0, rotateX: 0, duration: 1.4, ease: 'expo.out', stagger: 0.14,
      scrollTrigger: { trigger: root.querySelector('#values'), start: 'top 70%', once: true }
    });
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
  }

  cardLeave(e) {
    var st = e.currentTarget.style;
    st.removeProperty('--ry'); st.removeProperty('--rx');
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
    var s = this.state, self = this, DIG = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var year = this.MILES[s.tl].year;
    var odo = year.split('').map(function (ch, i) {
      return { y: (-parseInt(ch, 10) * 10) + '%', delay: (i * 0.07).toFixed(2) + 's', digits: DIG };
    });
    var miles = this.MILES.map(function (m, i) {
      return {
        year: m.year, title: m.title, chip: m.chip, img: m.img, alt: m.alt, text: m.text,
        cls: i === s.tl ? 'is-on is-past' : (i < s.tl ? 'is-past' : ''),
        titleCls: i === s.tl ? 'is-on' : ''
      };
    });
    return {
      ticks: this.ticks, odo: odo, tlYear: year, miles: miles,
      words: this.QUOTE.split(' '),
      cardMove: this.cardMove, cardLeave: this.cardLeave,
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
