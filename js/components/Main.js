/* Watchify — Main (template + logic). Rendered by js/dc-lite.js */
DC.define("Main", "<div id=\"hg-home\" style=\"background: #0A0908; color: #EFE6D4; font-family: 'Inter', system-ui, sans-serif; min-height: 100vh; overflow-x: clip\">\n\n<!-- NAV -->\n<header style=\"border-bottom: 1px solid rgba(201,162,92,0.2)\">\n<nav style=\"max-width: 1280px; margin: 0 auto; padding: 18px clamp(16px, 5vw, 72px); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px 32px\" aria-label=\"Primary\">\n<a href=\"#top\" aria-label=\"Watchify — home\" style=\"display: inline-flex; align-items: center; gap: 0.5em; font-family: 'Cinzel', serif; font-size: 22px; letter-spacing: 0.28em; color: #D9B97A; text-decoration: none\"><svg width=\"1.6em\" height=\"1.6em\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" style=\"flex: none; overflow: visible\"><circle cx=\"20\" cy=\"21\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"></circle><rect x=\"17.6\" y=\"1.2\" width=\"4.8\" height=\"3.2\" rx=\"1\" fill=\"currentColor\"></rect><path d=\"M36.5 21h-2.4M5.9 21h-2.4M20 37.5v-2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"></path><path d=\"M10.5 14.5L15.2 28.5L20 19.5L24.8 28.5L29.5 14.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><circle cx=\"20\" cy=\"19.5\" r=\"1.9\" fill=\"#3EE29D\"></circle></svg><span>WATCHIFY</span></a>\n<div style=\"display: flex; flex-wrap: wrap; gap: 4px 32px; font-size: 13px; letter-spacing: 0.02em\">\n<a href=\"collections.html\" class=\"hg-nl\">Collections</a>\n<a href=\"gallery.html\" class=\"hg-nl\">Gallery</a>\n<a href=\"story.html\" class=\"hg-nl\">Our Story</a>\n<a href=\"contact.html\" class=\"hg-nl\">Contact</a>\n</div>\n<button type=\"button\" class=\"hg-bag\" aria-label=\"{{bagLabel}}\" aria-haspopup=\"dialog\" aria-expanded=\"{{bagExpanded}}\" onClick=\"{{openCart}}\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: none; border: none; color: #D9B97A; cursor: pointer; padding: 0\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" aria-hidden=\"true\"><path d=\"M5 8h14l-1 13H6L5 8z\"></path><path d=\"M9 8V6a3 3 0 0 1 6 0v2\"></path></svg>\n<sc-if value=\"{{hasCart}}\" hint-placeholder-val=\"{{ false }}\"><span class=\"hg-bag-n {{bagBump}}\" aria-hidden=\"true\">{{cartCount}}</span></sc-if>\n</button>\n</nav>\n</header>\n\n<!-- HERO -->\n<section id=\"top\" style=\"max-width: 1280px; margin: 0 auto; padding: 64px clamp(16px, 5vw, 72px) 72px; display: flex; flex-wrap: wrap; align-items: center; gap: 48px\">\n<div style=\"flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 28px\">\n<p class=\"hg-ge\" style=\"margin: 0; font-size: 12px; letter-spacing: 0.32em; color: #D9B97A; font-weight: 500\">TIME, REDEFINED</p>\n<h1 class=\"hg-gh\" data-delay=\"0.15\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(52px, 7.6vw, {{headingPx}}); line-height: 0.98; letter-spacing: -0.01em; color: #F1E6CF\">\n<span class=\"hg-lm\"><span class=\"hg-ln\" style=\"white-space: nowrap\">A Legacy</span></span>\n<span class=\"hg-lm\"><span class=\"hg-ln\" style=\"white-space: nowrap\">Beyond Time.</span></span>\n</h1>\n<p class=\"hg-gf\" data-delay=\"0.55\" style=\"margin: 0; max-width: 380px; font-family: 'Cormorant Garamond', serif; font-size: 21px; line-height: 1.45; color: #CFC5B1\">Exceptional timepieces crafted for those who value every second.</p>\n<div class=\"hg-gf\" data-delay=\"0.75\" style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 20px 36px; margin-top: 8px\">\n<a href=\"collections.html\" class=\"hg-btn\" style=\"display: inline-flex; align-items: center; justify-content: center; min-height: 50px; padding: 0 32px; background: #D9B97A; color: #1A1408; font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-decoration: none\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">EXPLORE COLLECTION</span>\n</a>\n<a href=\"story.html\" class=\"hg-line\" style=\"display: inline-flex; align-items: center; min-height: 44px; font-size: 12px; font-weight: 500; letter-spacing: 0.16em; color: #EFE6D4\">DISCOVER OUR STORY</a>\n</div>\n</div>\n\n<div style=\"flex: 1 1 400px; min-width: 0; display: flex; justify-content: center; position: relative; z-index: 0\">\n<div class=\"hg-clockwrap\" role=\"img\" aria-label=\"Green marble wall clock with gold hands showing the current time\">\n<div class=\"hg-halo {{haloClass}}\" aria-hidden=\"true\"></div>\n<div class=\"hg-clock {{clockClass}}\">\n<img src=\"assets/images/44fb5c3f56ac7f37bd42faa77e574f2e.jpg\" alt=\"\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; display: block; -webkit-mask-image: radial-gradient(closest-side, #000 94%, rgba(0,0,0,0) 100%); mask-image: radial-gradient(closest-side, #000 94%, rgba(0,0,0,0) 100%)\">\n<svg viewBox=\"0 0 960 912\" aria-hidden=\"true\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible\">\n<defs>\n<linearGradient id=\"hg-fl\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n<stop offset=\"0\" stop-color=\"#9C6E2C\"></stop>\n<stop offset=\"0.5\" stop-color=\"#E2BC72\"></stop>\n<stop offset=\"1\" stop-color=\"#FFF4D2\"></stop>\n</linearGradient>\n<linearGradient id=\"hg-fr\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n<stop offset=\"0\" stop-color=\"#B98B42\"></stop>\n<stop offset=\"0.55\" stop-color=\"#7A5520\"></stop>\n<stop offset=\"1\" stop-color=\"#3B270B\"></stop>\n</linearGradient>\n<linearGradient id=\"hg-tip\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n<stop offset=\"0\" stop-color=\"#FFFFFF\" stop-opacity=\"0.35\"></stop>\n<stop offset=\"0.25\" stop-color=\"#FFFFFF\" stop-opacity=\"0\"></stop>\n</linearGradient>\n<radialGradient id=\"hg-cap\" cx=\"36%\" cy=\"30%\" r=\"72%\">\n<stop offset=\"0\" stop-color=\"#FFF7DC\"></stop>\n<stop offset=\"0.3\" stop-color=\"#EBC77F\"></stop>\n<stop offset=\"0.72\" stop-color=\"#A57530\"></stop>\n<stop offset=\"1\" stop-color=\"#4E3510\"></stop>\n</radialGradient>\n<radialGradient id=\"hg-capin\" cx=\"62%\" cy=\"66%\" r=\"70%\">\n<stop offset=\"0\" stop-color=\"#F4D898\"></stop>\n<stop offset=\"0.6\" stop-color=\"#B0823A\"></stop>\n<stop offset=\"1\" stop-color=\"#5C3F13\"></stop>\n</radialGradient>\n<radialGradient id=\"hg-glass\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n<stop offset=\"0\" stop-color=\"#FFFFFF\" stop-opacity=\"0.09\"></stop>\n<stop offset=\"1\" stop-color=\"#FFFFFF\" stop-opacity=\"0\"></stop>\n</radialGradient>\n<filter id=\"hg-shh\" filterUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"960\" height=\"912\" color-interpolation-filters=\"sRGB\">\n<feDropShadow dx=\"3\" dy=\"5\" stdDeviation=\"2.6\" flood-color=\"#000000\" flood-opacity=\"0.72\"></feDropShadow>\n</filter>\n<filter id=\"hg-shm\" filterUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"960\" height=\"912\" color-interpolation-filters=\"sRGB\">\n<feDropShadow dx=\"5\" dy=\"8\" stdDeviation=\"3.6\" flood-color=\"#000000\" flood-opacity=\"0.68\"></feDropShadow>\n</filter>\n<filter id=\"hg-shc\" filterUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"960\" height=\"912\" color-interpolation-filters=\"sRGB\">\n<feDropShadow dx=\"4\" dy=\"6\" stdDeviation=\"3.2\" flood-color=\"#000000\" flood-opacity=\"0.75\"></feDropShadow>\n</filter>\n<clipPath id=\"hg-dialclip\"><circle cx=\"474\" cy=\"448\" r=\"404\"></circle></clipPath>\n</defs>\n<g filter=\"url(#hg-shh)\">\n<g class=\"hg-hand\" style=\"transform: rotate({{hourDeg}}deg); transition: {{handTransition}}\">\n<g transform=\"translate(479 458.5)\">\n<path d=\"M0 -190 L-8 -48 L-5.2 0 L-4.2 19 Q-3.6 24.5 0 25 Z\" fill=\"url(#hg-fl)\"></path>\n<path d=\"M0 -190 L8 -48 L5.2 0 L4.2 19 Q3.6 24.5 0 25 Z\" fill=\"url(#hg-fr)\"></path>\n<path d=\"M0 -190 L-8 -48 L-5.2 0 L-4.2 19 Q-3.6 24.5 0 25 Q3.6 24.5 4.2 19 L5.2 0 L8 -48 Z\" fill=\"url(#hg-tip)\" stroke=\"#3B270B\" stroke-opacity=\"0.6\" stroke-width=\"0.8\" stroke-linejoin=\"round\"></path>\n<line x1=\"0\" y1=\"-186\" x2=\"0\" y2=\"18\" stroke=\"#FFF7DE\" stroke-opacity=\"0.75\" stroke-width=\"0.9\"></line>\n</g>\n</g>\n</g>\n<g filter=\"url(#hg-shm)\">\n<g class=\"hg-hand\" style=\"transform: rotate({{minDeg}}deg); transition: {{handTransition}}\">\n<g transform=\"translate(479 458.5)\">\n<path d=\"M0 -282 L-6.2 -72 L-4.6 0 L-3.4 36 Q-3 41.5 0 42 Z\" fill=\"url(#hg-fl)\"></path>\n<path d=\"M0 -282 L6.2 -72 L4.6 0 L3.4 36 Q3 41.5 0 42 Z\" fill=\"url(#hg-fr)\"></path>\n<path d=\"M0 -282 L-6.2 -72 L-4.6 0 L-3.4 36 Q-3 41.5 0 42 Q3 41.5 3.4 36 L4.6 0 L6.2 -72 Z\" fill=\"url(#hg-tip)\" stroke=\"#3B270B\" stroke-opacity=\"0.6\" stroke-width=\"0.8\" stroke-linejoin=\"round\"></path>\n<line x1=\"0\" y1=\"-278\" x2=\"0\" y2=\"34\" stroke=\"#FFF7DE\" stroke-opacity=\"0.75\" stroke-width=\"0.8\"></line>\n</g>\n</g>\n</g>\n<g filter=\"url(#hg-shc)\">\n<circle cx=\"479\" cy=\"458.5\" r=\"19\" fill=\"url(#hg-cap)\"></circle>\n<circle cx=\"479\" cy=\"458.5\" r=\"18.4\" fill=\"none\" stroke=\"#3B270B\" stroke-opacity=\"0.7\" stroke-width=\"1\"></circle>\n<circle cx=\"479\" cy=\"458.5\" r=\"8.6\" fill=\"url(#hg-capin)\" stroke=\"#4E3510\" stroke-opacity=\"0.8\" stroke-width=\"0.8\"></circle>\n<circle cx=\"479\" cy=\"458.5\" r=\"2.6\" fill=\"#2A1C07\"></circle>\n<ellipse cx=\"472.5\" cy=\"451.5\" rx=\"5.2\" ry=\"2.8\" fill=\"#FFFFFF\" fill-opacity=\"0.55\" transform=\"rotate(-35 472.5 451.5)\"></ellipse>\n</g>\n<g clip-path=\"url(#hg-dialclip)\">\n<ellipse cx=\"650\" cy=\"230\" rx=\"320\" ry=\"150\" transform=\"rotate(38 650 230)\" fill=\"url(#hg-glass)\"></ellipse>\n</g>\n</svg>\n</div>\n<div class=\"hg-shade {{shadeClass}}\" aria-hidden=\"true\"></div>\n</div>\n</div>\n</section>\n\n<!-- WE SELL CLOCK: pinned scroll scene -->\n<section id=\"hg-wsc\" class=\"hg-wsc\">\n<div class=\"hg-wsc-stage\">\n<div id=\"hg-wsc-dark\" class=\"hg-wsc-dark\" aria-hidden=\"true\"></div>\n<div id=\"hg-wsc-zoom\" class=\"hg-wsc-zoom\">\n<h2 class=\"hg-wsc-title\" aria-label=\"We sell clocks\"><span class=\"hg-let\" style=\"white-space: nowrap\">WE SELL</span> <span style=\"white-space: nowrap\"><span class=\"hg-let\">CL</span><span id=\"hg-o\" class=\"hg-o\"><svg viewBox=\"0 0 864 864\" aria-hidden=\"true\">\n<defs>\n<radialGradient id=\"hk-glow\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n<stop offset=\"0.72\" stop-color=\"#C9A25C\" stop-opacity=\"0.34\"></stop>\n<stop offset=\"0.84\" stop-color=\"#C9A25C\" stop-opacity=\"0.10\"></stop>\n<stop offset=\"1\" stop-color=\"#C9A25C\" stop-opacity=\"0\"></stop>\n</radialGradient>\n<linearGradient id=\"hk-fl\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n<stop offset=\"0\" stop-color=\"#9C6E2C\"></stop>\n<stop offset=\"0.5\" stop-color=\"#E2BC72\"></stop>\n<stop offset=\"1\" stop-color=\"#FFF4D2\"></stop>\n</linearGradient>\n<linearGradient id=\"hk-fr\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n<stop offset=\"0\" stop-color=\"#B98B42\"></stop>\n<stop offset=\"0.55\" stop-color=\"#7A5520\"></stop>\n<stop offset=\"1\" stop-color=\"#3B270B\"></stop>\n</linearGradient>\n<linearGradient id=\"hk-tip\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n<stop offset=\"0\" stop-color=\"#FFFFFF\" stop-opacity=\"0.35\"></stop>\n<stop offset=\"0.25\" stop-color=\"#FFFFFF\" stop-opacity=\"0\"></stop>\n</linearGradient>\n<radialGradient id=\"hk-cap\" cx=\"36%\" cy=\"30%\" r=\"72%\">\n<stop offset=\"0\" stop-color=\"#FFF7DC\"></stop>\n<stop offset=\"0.3\" stop-color=\"#EBC77F\"></stop>\n<stop offset=\"0.72\" stop-color=\"#A57530\"></stop>\n<stop offset=\"1\" stop-color=\"#4E3510\"></stop>\n</radialGradient>\n<radialGradient id=\"hk-capin\" cx=\"62%\" cy=\"66%\" r=\"70%\">\n<stop offset=\"0\" stop-color=\"#F4D898\"></stop>\n<stop offset=\"0.6\" stop-color=\"#B0823A\"></stop>\n<stop offset=\"1\" stop-color=\"#5C3F13\"></stop>\n</radialGradient>\n</defs>\n<circle class=\"hg-o-glow\" cx=\"432\" cy=\"432\" r=\"520\" fill=\"url(#hk-glow)\"></circle>\n<image href=\"assets/images/58bd89f9245ae4ead3f0fbc5fb71fa8d.webp\" x=\"0\" y=\"0\" width=\"864\" height=\"864\" preserveAspectRatio=\"none\"></image>\n<g id=\"hg-wg1\" class=\"hg-g\" style=\"transform-origin: 436.5px 453px\">\n<image href=\"assets/images/1e477a04db14907ffe7e393d8bfd32a4.webp\" x=\"364\" y=\"381\" width=\"145\" height=\"144\" preserveAspectRatio=\"none\"></image>\n</g>\n<g id=\"hg-wg2\" class=\"hg-g\" style=\"transform-origin: 368px 268px\">\n<image href=\"assets/images/f24fee1aee4c96e8e60421ac89a4658a.webp\" x=\"284\" y=\"184\" width=\"168\" height=\"168\" preserveAspectRatio=\"none\"></image>\n</g>\n<g id=\"hg-wg3\" class=\"hg-g\" style=\"transform-origin: 224px 511.5px\">\n<image href=\"assets/images/773acbe9c3038ffcc5e0b774493a9aa6.webp\" x=\"148\" y=\"435\" width=\"152\" height=\"153\" preserveAspectRatio=\"none\"></image>\n</g>\n<g id=\"hg-wg4\" class=\"hg-g\" style=\"transform-origin: 426.5px 647px\">\n<image href=\"assets/images/9d57df0a0d9988e34ca0d9250a7affa0.webp\" x=\"303\" y=\"524\" width=\"247\" height=\"246\" preserveAspectRatio=\"none\"></image>\n</g>\n<image href=\"assets/images/9f1c37329b76254f48d7f01b6d9a6225.webp\" x=\"0\" y=\"0\" width=\"864\" height=\"864\" preserveAspectRatio=\"none\"></image>\n<g transform=\"translate(3 5)\" fill=\"#000000\"><g id=\"hg-wsh\" class=\"hg-g\" style=\"transform-origin: 436px 447.5px; transform: rotate(303.3deg)\"><g transform=\"translate(436 447.5)\"><path d=\"M0 -234 L-9.5 -62 L-6.5 0 L-5 22 Q-4.2 27.5 0 28 Q4.2 27.5 5 22 L6.5 0 L9.5 -62 Z\" fill-opacity=\"0.34\" stroke=\"#000000\" stroke-opacity=\"0.15\" stroke-width=\"5\" stroke-linejoin=\"round\"></path></g></g></g>\n<g>\n<g id=\"hg-wh\" class=\"hg-g\" style=\"transform-origin: 436px 447.5px; transform: rotate(303.3deg)\">\n<g transform=\"translate(436 447.5)\">\n<path d=\"M0 -234 L-9.5 -62 L-6.5 0 L-5 22 Q-4.2 27.5 0 28 Z\" fill=\"url(#hk-fl)\"></path>\n<path d=\"M0 -234 L9.5 -62 L6.5 0 L5 22 Q4.2 27.5 0 28 Z\" fill=\"url(#hk-fr)\"></path>\n<path d=\"M0 -234 L-9.5 -62 L-6.5 0 L-5 22 Q-4.2 27.5 0 28 Q4.2 27.5 5 22 L6.5 0 L9.5 -62 Z\" fill=\"url(#hk-tip)\" stroke=\"#3B270B\" stroke-opacity=\"0.6\" stroke-width=\"0.9\" stroke-linejoin=\"round\"></path>\n<line x1=\"0\" y1=\"-230\" x2=\"0\" y2=\"20\" stroke=\"#FFF7DE\" stroke-opacity=\"0.75\" stroke-width=\"1\"></line>\n</g>\n</g>\n</g>\n<g transform=\"translate(5 8)\" fill=\"#000000\"><g id=\"hg-wsm\" class=\"hg-g\" style=\"transform-origin: 436px 447.5px; transform: rotate(57.8deg)\"><g transform=\"translate(436 447.5)\"><path d=\"M0 -344 L-7.5 -82 L-5.5 0 L-4 30 Q-3.4 35.5 0 36 Q3.4 35.5 4 30 L5.5 0 L7.5 -82 Z\" fill-opacity=\"0.32\" stroke=\"#000000\" stroke-opacity=\"0.14\" stroke-width=\"6\" stroke-linejoin=\"round\"></path></g></g></g>\n<g>\n<g id=\"hg-wm\" class=\"hg-g\" style=\"transform-origin: 436px 447.5px; transform: rotate(57.8deg)\">\n<g transform=\"translate(436 447.5)\">\n<path d=\"M0 -344 L-7.5 -82 L-5.5 0 L-4 30 Q-3.4 35.5 0 36 Z\" fill=\"url(#hk-fl)\"></path>\n<path d=\"M0 -344 L7.5 -82 L5.5 0 L4 30 Q3.4 35.5 0 36 Z\" fill=\"url(#hk-fr)\"></path>\n<path d=\"M0 -344 L-7.5 -82 L-5.5 0 L-4 30 Q-3.4 35.5 0 36 Q3.4 35.5 4 30 L5.5 0 L7.5 -82 Z\" fill=\"url(#hk-tip)\" stroke=\"#3B270B\" stroke-opacity=\"0.6\" stroke-width=\"0.9\" stroke-linejoin=\"round\"></path>\n<line x1=\"0\" y1=\"-340\" x2=\"0\" y2=\"28\" stroke=\"#FFF7DE\" stroke-opacity=\"0.75\" stroke-width=\"0.9\"></line>\n</g>\n</g>\n</g>\n<g>\n<circle cx=\"440.5\" cy=\"454\" r=\"32\" fill=\"#000000\" fill-opacity=\"0.2\"></circle>\n<circle cx=\"440\" cy=\"453.5\" r=\"29.5\" fill=\"#000000\" fill-opacity=\"0.32\"></circle>\n<circle cx=\"436\" cy=\"447.5\" r=\"29\" fill=\"url(#hk-cap)\"></circle>\n<circle cx=\"436\" cy=\"447.5\" r=\"28.3\" fill=\"none\" stroke=\"#3B270B\" stroke-opacity=\"0.7\" stroke-width=\"1.1\"></circle>\n<circle cx=\"436\" cy=\"447.5\" r=\"12\" fill=\"url(#hk-capin)\" stroke=\"#4E3510\" stroke-opacity=\"0.8\" stroke-width=\"0.9\"></circle>\n<circle cx=\"436\" cy=\"447.5\" r=\"3.4\" fill=\"#2A1C07\"></circle>\n<ellipse cx=\"426.5\" cy=\"437.5\" rx=\"7.5\" ry=\"4\" fill=\"#FFFFFF\" fill-opacity=\"0.55\" transform=\"rotate(-35 426.5 437.5)\"></ellipse>\n</g>\n</svg></span><span class=\"hg-let\">CK</span></span></h2>\n</div>\n<div id=\"hg-wsc-cue\" class=\"hg-wsc-cue\" aria-hidden=\"true\"><span>SCROLL</span><span class=\"hg-cue-line\"></span></div>\n<div id=\"hg-wsc-black\" class=\"hg-wsc-black\" aria-hidden=\"true\"></div>\n</div>\n</section>\n\n<!-- TIMELESS BY DESIGN -->\n<section id=\"story\" style=\"position: relative; z-index: 2; margin-top: -100vh; background: #0A0908; border-top: 1px solid rgba(201,162,92,0.18); border-bottom: 1px solid rgba(201,162,92,0.18)\">\n<div class=\"hg-rev {{revClass}}\" style=\"max-width: 1280px; margin: 0 auto; padding: 32px clamp(16px, 5vw, 72px) 36px; display: flex; flex-direction: column; gap: 28px\">\n<div style=\"display: flex; align-items: center; gap: 20px\">\n<div style=\"flex: 1; height: 1px; background: rgba(201,162,92,0.45)\"></div>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 16px; letter-spacing: 0.32em; color: #D9B97A; white-space: nowrap\">◆&#160;&#160;TIMELESS BY DESIGN&#160;&#160;◆</p>\n<div style=\"flex: 1; height: 1px; background: rgba(201,162,92,0.45)\"></div>\n</div>\n<div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 14px\">\n<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#D9B97A\" stroke-width=\"1.3\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M12 1v5M12 18v5M1 12h5M18 12h5\"></path></svg>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #E6DCC7\">Swiss-Inspired Precision</p>\n</div>\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 14px\">\n<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#D9B97A\" stroke-width=\"1.3\" aria-hidden=\"true\"><path d=\"M12 3l9 5-9 5-9-5 9-5z\"></path><path d=\"M3 12l9 5 9-5\"></path><path d=\"M3 16l9 5 9-5\"></path></svg>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #E6DCC7\">Exceptional Materials</p>\n</div>\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 14px\">\n<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#D9B97A\" stroke-width=\"1.3\" aria-hidden=\"true\"><path d=\"M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z\"></path><path d=\"M8.5 12l2.5 2.5 4.5-5\"></path></svg>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #E6DCC7\">Made to Be Kept</p>\n</div>\n</div>\n</div>\n</section>\n\n<!-- COLLECTION -->\n<section id=\"collection\" style=\"position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: 56px clamp(16px, 5vw, 72px) 72px; display: flex; flex-direction: column; gap: 36px\">\n<div class=\"hg-rev {{revClass}}\" style=\"position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; transition-delay: 0.25s\">\n<h2 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(34px, 4vw, 46px); color: #F1E6CF\">The Signature Collection</h2>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 19px; letter-spacing: 0.04em; color: #BDB39F\">Eight expressions of enduring style.</p>\n</div>\n<div class=\"hg-orbs\" aria-hidden=\"true\">\n<span class=\"hg-orb hg-orb-1\"></span>\n<span class=\"hg-orb hg-orb-2\"></span>\n<span class=\"hg-orb hg-orb-3\"></span>\n</div>\n<div style=\"position: relative; z-index: 1; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 22px\">\n<sc-for list=\"{{products}}\" as=\"p\" hint-placeholder-count=\"8\">\n<div class=\"hg-cardwrap hg-rev {{revClass}}\" style=\"transition-delay: {{p.delay}}\">\n<article class=\"hg-card\" onMouseMove=\"{{p.move}}\" onMouseLeave=\"{{p.leave}}\">\n<span class=\"hg-glass\" aria-hidden=\"true\"></span>\n<div class=\"hg-card-media\">\n<img src=\"{{p.img}}\" alt=\"{{p.alt}}\" style=\"width: 100%; aspect-ratio: 4 / 3; object-fit: cover; object-position: 50% 46%; display: block; background: #000\">\n<span class=\"hg-card-tag\">{{p.kind}}</span>\n</div>\n<div class=\"hg-card-body\" style=\"padding: 16px 22px 22px; display: flex; flex-direction: column; gap: 6px\">\n<div style=\"display: flex; align-items: baseline; justify-content: space-between; gap: 12px\">\n<h3 style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 21px; color: #F1E6CF\">{{p.name}}</h3>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #E3C88E; white-space: nowrap\">{{p.price}}</p>\n</div>\n<span class=\"hg-card-rule\" aria-hidden=\"true\"></span>\n<a href=\"#collection\" class=\"hg-line\" style=\"align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; min-height: 36px; margin-top: 2px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #D9B97A\">VIEW PIECE\n<svg class=\"hg-card-arrow\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\" aria-hidden=\"true\"><path d=\"M2 8L8 2M3.5 2H8v4.5\"></path></svg>\n</a>\n</div>\n</article>\n</div>\n</sc-for>\n</div>\n</section>\n\n<!-- CRAFTSMANSHIP -->\n<section id=\"craft\" style=\"border-top: 1px solid rgba(201,162,92,0.18); display: flex; flex-wrap: wrap; align-items: stretch\">\n<div style=\"flex: 1 1 520px; min-width: 0; min-height: 340px; position: relative; overflow: hidden; background: #0A0908\">\n<video id=\"hg-v-craft\" class=\"hg-vid hg-vid-craft\" src=\"assets/videos/fef71e327709375ff1b1ccbec992dcd2.mp4\" poster=\"assets/images/8524bc59eb7d2c5f2504a7d44fa2217c.webp\" autoplay=\"\" muted=\"\" loop=\"\" playsinline=\"\" preload=\"auto\" aria-hidden=\"true\"></video>\n<div class=\"hg-vid-vignette\" aria-hidden=\"true\"></div>\n</div>\n<div style=\"flex: 1 1 420px; min-width: 0; padding: 56px clamp(16px, 5vw, 72px); display: flex; flex-direction: column; justify-content: center; gap: 18px\">\n<p class=\"hg-ge\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 14px; letter-spacing: 0.3em; color: #D9B97A\">THE ART OF PRECISION</p>\n<h2 class=\"hg-gh\" style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(34px, 3.6vw, 46px); line-height: 1.05; color: #F1E6CF\"><span class=\"hg-lm\"><span class=\"hg-ln\">Every detail has</span></span><span class=\"hg-lm\"><span class=\"hg-ln\">a purpose.</span></span></h2>\n<p style=\"margin: 0; max-width: 440px; font-family: 'Cormorant Garamond', serif; font-size: 19px; line-height: 1.5; color: #CFC5B1\">From carefully selected materials to meticulous finishing, our craft is a commitment to excellence.</p>\n<a href=\"#craft\" class=\"hg-line\" style=\"align-self: flex-start; display: inline-flex; align-items: center; gap: 12px; min-height: 44px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #EFE6D4\">OUR CRAFTSMANSHIP\n<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" fill=\"none\" stroke=\"#D9B97A\" stroke-width=\"1.3\" aria-hidden=\"true\"><path d=\"M0 5h16M12 1l4 4-4 4\"></path></svg>\n</a>\n</div>\n</section>\n\n<!-- JOURNAL BAND -->\n<section id=\"journal\" style=\"position: relative; overflow: hidden; min-height: 420px; border-top: 1px solid rgba(201,162,92,0.18); border-bottom: 2px solid #C9A25C; background: #0A0908\">\n<video id=\"hg-v-journal\" class=\"hg-vid hg-vid-journal\" src=\"assets/videos/fff80c4fb3cd616e4e4175a0448dccc4.mp4\" poster=\"assets/images/67f8583a8c38d01b3d8710ea1179440b.webp\" autoplay=\"\" muted=\"\" loop=\"\" playsinline=\"\" preload=\"auto\" aria-hidden=\"true\"></video>\n<div style=\"position: relative; max-width: 1280px; margin: 0 auto; padding: 120px clamp(16px, 5vw, 72px); display: flex; flex-direction: column; align-items: flex-start; gap: 24px\">\n<h2 style=\"margin: 0; max-width: 420px; font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(34px, 3.6vw, 46px); line-height: 1.1; color: #F1E6CF; text-shadow: 0 2px 18px #000\" class=\"hg-gh\"><span class=\"hg-lm\"><span class=\"hg-ln\">Designed to outlast</span></span><span class=\"hg-lm\"><span class=\"hg-ln\">the moment.</span></span></h2>\n<a href=\"#journal\" class=\"hg-btn\" style=\"display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 26px; background: #D9B97A; color: #1A1408; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-decoration: none\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">THE WATCHIFY JOURNAL</span>\n</a>\n</div>\n</section>\n\n<!-- FOOTER -->\n<footer style=\"max-width: 1280px; margin: 0 auto; padding: 40px clamp(16px, 5vw, 72px) 28px; display: flex; flex-direction: column; gap: 32px\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 40px 56px\">\n<div style=\"flex: 1 1 220px; display: flex; flex-direction: column; gap: 12px\">\n<p style=\"margin: 0; display: flex; align-items: center; gap: 0.5em; font-family: 'Cinzel', serif; font-size: 20px; letter-spacing: 0.26em; color: #D9B97A\"><svg width=\"1.6em\" height=\"1.6em\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" style=\"flex: none; overflow: visible\"><circle cx=\"20\" cy=\"21\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"></circle><rect x=\"17.6\" y=\"1.2\" width=\"4.8\" height=\"3.2\" rx=\"1\" fill=\"currentColor\"></rect><path d=\"M36.5 21h-2.4M5.9 21h-2.4M20 37.5v-2.4\" stroke=\"currentColor\" stroke-width=\"1.3\"></path><path d=\"M10.5 14.5L15.2 28.5L20 19.5L24.8 28.5L29.5 14.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><circle cx=\"20\" cy=\"19.5\" r=\"1.9\" fill=\"#3EE29D\"></circle></svg><span>WATCHIFY</span></p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #CFC5B1\">Make every second matter.</p>\n<div style=\"display: flex; gap: 4px; margin-left: -12px\">\n<a href=\"#top\" aria-label=\"Instagram\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"></rect><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><circle cx=\"17.5\" cy=\"6.5\" r=\"0.8\" fill=\"currentColor\"></circle></svg></a>\n<a href=\"#top\" aria-label=\"Facebook\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><path d=\"M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z\"></path></svg></a>\n<a href=\"#top\" aria-label=\"X\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" aria-hidden=\"true\"><path d=\"M4 4l16 16M20 4L4 20\"></path></svg></a>\n<a href=\"#top\" aria-label=\"Pinterest\" style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #D9B97A\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M11 8.5c3-1 5 .5 4.5 3s-3 3-4 1.5M11.5 10l-2.5 11\"></path></svg></a>\n</div>\n</div>\n<nav aria-label=\"Footer\" style=\"flex: 1 1 160px; display: flex; flex-direction: column; gap: 10px\">\n<p style=\"margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #EFE6D4\">PAGES</p>\n<a href=\"#top\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #E3C88E; text-decoration: none\">Home</a>\n<a href=\"collections.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Collections</a>\n<a href=\"gallery.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Gallery</a>\n<a href=\"story.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Our Story</a>\n<a href=\"contact.html\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 17px; color: #BDB39F; text-decoration: none\">Contact</a>\n</nav>\n<form onSubmit=\"{{nlSubmit}}\" style=\"flex: 1 1 300px; display: flex; flex-direction: column; gap: 10px; padding-left: 28px; border-left: 1px solid rgba(201,162,92,0.25)\">\n<label for=\"hg-email\" style=\"font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #F1E6CF\">Letters on time</label>\n<p style=\"margin: 0; font-size: 12px; line-height: 1.5; color: #A79E8C\">Be the first to know about new arrivals and exclusive stories.</p>\n<sc-if value=\"{{nlDone}}\" hint-placeholder-val=\"{{ false }}\">\n<p role=\"status\" style=\"margin: 6px 0 0; font-family: 'Cormorant Garamond', serif; font-size: 19px; color: #E3C88E\">Thank you — you are on the list.</p>\n</sc-if>\n<sc-if value=\"{{nlOpen}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px\">\n<input id=\"hg-email\" name=\"email\" type=\"email\" required=\"{{ true }}\" autocomplete=\"email\" placeholder=\"Your email address\" style=\"flex: 1 1 160px; min-width: 0; min-height: 44px; padding: 0 14px; background: #100E0B; border: 1px solid rgba(201,162,92,0.35); color: #EFE6D4; font-family: 'Inter', sans-serif; font-size: 13px; box-sizing: border-box\">\n<button type=\"submit\" class=\"hg-btn\" style=\"min-height: 44px; padding: 0 22px; background: #D9B97A; color: #1A1408; border: none; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.16em\">\n<span class=\"hg-wave\" aria-hidden=\"true\">\n<svg class=\"hg-back\" viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#1F8A5B\"></path></svg>\n<svg viewBox=\"0 0 400 25\" preserveAspectRatio=\"none\"><path d=\"M0 12 C50 0 50 0 100 12 S150 24 200 12 S250 0 300 12 S350 24 400 12 V25 H0 Z\" fill=\"#0F5E3D\"></path></svg>\n<span class=\"hg-fill\"></span>\n</span>\n<span class=\"hg-label\">SUBSCRIBE</span>\n</button>\n</div>\n</sc-if>\n</form>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding-top: 18px; border-top: 1px solid rgba(201,162,92,0.2); font-size: 12px; color: #A79E8C\">\n<p style=\"margin: 0\">© 2026 Watchify. All rights reserved.</p>\n<p style=\"margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 15px; color: #D9B97A\">Timeless pieces. A lasting legacy.</p>\n</div>\n</footer>\n\n<dc-import name=\"CartDrawer\" open=\"{{cartOpen}}\" on-close=\"{{closeCart}}\" on-change=\"{{cartChange}}\" hint-size=\"0px,0px\"></dc-import>\n</div>", (function () {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.C = {
      REVEAL_AT: 2500,   // ms after load: clock comes to the front
      SPIN_AT: 3600,     // ms after load: hands start spinning
      SPIN_MS: 7600,     // length of the spin
      DELTA: 540,        // clock-minutes travelled (9 turns of the minute hand)
      EASE: [0.5, 0, 0.08, 1] // fast start, long smooth slow-down; shared by CSS and the tick sound
    };
    this.ease = this.makeBezier(this.C.EASE[0], this.C.EASE[1], this.C.EASE[2], this.C.EASE[3]);
    var p = this.plan(this.C.SPIN_AT);
    this.state = {
      stage: 'behind', instant: true,
      hourDeg: p.h0, minDeg: p.m0,
      soundOn: true, audioReady: false,
      revealed: false
    };
    // Scroll scene: phase boundaries as fractions of the pinned scroll distance
    this.Z = {
      ZOOM_A: 0.03, ZOOM_B: 0.38,   // zoom into the O until the whole clock fills the screen
      ROT_A: 0.42, ROT_B: 0.71,     // one full turn of the minute hand, wheels and balance follow
      BLACK_A: 0.73, BLACK_B: 0.80, // fade to black; the next section slides in over it at ~0.83
      LERP: 0.08                    // smoothing of scroll input (lower = silkier)
    };
    this.sc = { cur: 0, tgt: 0, raf: 0 };
    this.geo = null;
    this.prevRot = null;
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.scFrame = this.scFrame.bind(this);
    this.timers = [];
    this.raf = 0;
    this.replay = this.replay.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.unlock = this.unlock.bind(this);
    this.loop = this.loop.bind(this);
  }

  makeBezier(x1, y1, x2, y2) {
    function bx(t) { return 3 * x1 * t * (1 - t) * (1 - t) + 3 * x2 * t * t * (1 - t) + t * t * t; }
    function by(t) { return 3 * y1 * t * (1 - t) * (1 - t) + 3 * y2 * t * t * (1 - t) + t * t * t; }
    return function (x) {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      var lo = 0, hi = 1;
      for (var i = 0; i < 30; i++) { var m = (lo + hi) / 2; if (bx(m) < x) lo = m; else hi = m; }
      return by((lo + hi) / 2);
    };
  }

  // Start and end angles. The hands land on the viewer's local time when the spin ends.
  // Hour and minute angles both come from one clock time T (minutes): minute = 6T, hour = 0.5T,
  // and both hands share the same duration and easing, so they stay mechanically geared at every frame.
  plan(spinDelay) {
    var end = new Date(Date.now() + spinDelay + this.C.SPIN_MS);
    var tEnd = (end.getHours() % 12) * 60 + end.getMinutes() + end.getSeconds() / 60;
    var t0 = ((tEnd - this.C.DELTA) % 720 + 720) % 720;
    return { h0: t0 * 0.5, m0: t0 * 6, h1: t0 * 0.5 + this.C.DELTA * 0.5, m1: t0 * 6 + this.C.DELTA * 6 };
  }

  componentDidMount() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) {
        var ctx = new AC();
        var comp = ctx.createDynamicsCompressor();
        comp.threshold.value = -14; comp.ratio.value = 4;
        var master = ctx.createGain(); master.gain.value = 0.7;
        master.connect(comp); comp.connect(ctx.destination);
        var len = Math.floor(ctx.sampleRate * 0.06);
        var buf = ctx.createBuffer(1, len, ctx.sampleRate);
        var ch = buf.getChannelData(0);
        for (var i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
        this.ctx = ctx; this.master = master; this.noise = buf;
        var self = this;
        ctx.onstatechange = function () { self.setState({ audioReady: ctx.state === 'running' }); };
        this.setState({ audioReady: ctx.state === 'running' });
      }
    } catch (e) { this.ctx = null; }
    window.addEventListener('pointerdown', this.unlock, true);
    window.addEventListener('touchstart', this.unlock, true);
    this.run(this.C.REVEAL_AT, this.C.SPIN_AT);

    this.fxVideos(['hg-v-craft', 'hg-v-journal']);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize);
    this.onResize();
    // page height changes (images, fonts) move the pinned scene: re-measure its cached geometry
    var selfR = this;
    try {
      this.ro = new ResizeObserver(function () { clearTimeout(selfR.roT); selfR.roT = setTimeout(selfR.onResize, 120); });
      this.ro.observe(document.getElementById('hg-home'));
    } catch (e) {}
    var self2 = this;
    this.timers2 = [setTimeout(this.onResize, 400), setTimeout(this.onResize, 1500)];
    try { if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { self2.onResize(); }); } catch (e) {}
    this.fxStart('hg-home', null);
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
    var reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    this.fxReduce = reduce;
    if (!reduce) this.smoothStart();
    // the pinned clock scene already eases its own input; with smooth scrolling on, let it follow more tightly
    if (this.sm && this.Z) this.Z.LERP = 0.2;
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

  // ---------- WE SELL CLOCK scroll scene ----------
  // All motion comes from one smoothed scroll value; hands, wheels, balance and sound are derived from it.
  sceneVars() { return document.getElementById('hg-wsc'); }

  onResize() {
    var zoom = document.getElementById('hg-wsc-zoom'), o = document.getElementById('hg-o'), sec = this.sceneVars();
    if (zoom && o && sec) {
      var x = 0, y = 0, el = o;
      while (el && el !== zoom) { x += el.offsetLeft; y += el.offsetTop; el = el.offsetParent; }
      var d = o.offsetWidth || 1, Wz = zoom.offsetWidth, Hz = zoom.offsetHeight;
      // final zoom: the whole round clock (98% of the O) fits with a margin on every side
      var ring = d * 0.98;
      this.geo = { ox: x + d / 2, oy: y + o.offsetHeight / 2, W: Wz, H: Hz,
        S: Math.max(1.5, Math.min(Wz * 0.9, Hz * 0.84) / ring) };
      zoom.style.transformOrigin = this.geo.ox.toFixed(2) + 'px ' + this.geo.oy.toFixed(2) + 'px';
    }
    if (sec) {
      // cache where things sit in the page, so scrolling only reads window.scrollY (no layout work per frame)
      var sy = window.scrollY || 0, story = document.getElementById('story');
      this.secTop = sec.getBoundingClientRect().top + sy;
      this.secTravel = Math.max(1, sec.offsetHeight - window.innerHeight);
      this.storyTop = story ? story.getBoundingClientRect().top + sy : 1e9;
      var q = function (id) { return document.getElementById(id); };
      this.wsc = {
        zoom: zoom, dark: q('hg-wsc-dark'), cue: q('hg-wsc-cue'), black: q('hg-wsc-black'),
        glow: sec.querySelector('.hg-o-glow'), lets: [].slice.call(sec.querySelectorAll('.hg-let')),
        g1: q('hg-wg1'), g2: q('hg-wg2'), g3: q('hg-wg3'), bal: q('hg-wg4'),
        hr: q('hg-wh'), hrS: q('hg-wsh'), mn: q('hg-wm'), mnS: q('hg-wsm'),
        last: {}
      };
    }
    this.onScroll();
    this.sc.cur = this.sc.tgt;
    this.prevRot = null;
    this.applyScene(this.sc.cur);
  }

  onScroll() {
    var y = window.scrollY || 0;
    if (this.secTravel) this.sc.tgt = Math.min(1, Math.max(0, (y - this.secTop) / this.secTravel));
    if (!this.state.revealed && this.storyTop - y < window.innerHeight * 1.05) this.setState({ revealed: true });
    if (!this.sc.raf) { this.sc.last = performance.now(); this.sc.raf = requestAnimationFrame(this.scFrame); }
  }

  scFrame(now) {
    var sc = this.sc;
    var dt = Math.min(0.1, Math.max(0.001, (now - (sc.last || now)) / 1000)); sc.last = now;
    // frame-rate independent easing toward the scroll position
    var k = 1 - Math.pow(1 - this.Z.LERP, dt * 60);
    var c = sc.cur + (sc.tgt - sc.cur) * k;
    if (Math.abs(sc.tgt - c) < 0.00008) c = sc.tgt;
    sc.cur = c;
    this.applyScene(c, dt);
    if (c !== sc.tgt) sc.raf = requestAnimationFrame(this.scFrame);
    else { sc.raf = 0; this.setWhirr(0); }
  }

  applyScene(p, dt) {
    var g = this.geo, Z = this.Z, W = this.wsc;
    if (!W) return;
    function clamp(v) { return Math.min(1, Math.max(0, v)); }
    function seg(a, b) { return clamp((p - a) / (b - a)); }
    function inOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    function inOutSine(t) { return -(Math.cos(Math.PI * t) - 1) / 2; }
    function smooth(t) { return t * t * (3 - 2 * t); }
    // write straight to the few elements that move (only when a value changes), never to the whole section
    var L = W.last;
    function set(key, el, prop, v) { if (el && L[key] !== v) { L[key] = v; el.style[prop] = v; } }
    var e = inOutCubic(seg(Z.ZOOM_A, Z.ZOOM_B));
    if (g) {
      var s = Math.exp(Math.log(g.S) * e);  // exponential zoom reads as a steady push
      set('z', W.zoom, 'transform', 'translate(' + ((g.W / 2 - g.ox) * e).toFixed(2) + 'px,' + ((g.H / 2 - g.oy) * e).toFixed(2) + 'px) scale(' + s.toFixed(5) + ')');
    }
    var lo = (1 - smooth(clamp((e - 0.4) / 0.42))).toFixed(3);
    for (var li = 0; li < W.lets.length; li++) set('l' + li, W.lets[li], 'opacity', lo);
    var dk = smooth(clamp((e - 0.48) / 0.48)).toFixed(3);
    set('d', W.dark, 'opacity', dk);
    set('gl', W.glow, 'opacity', dk);
    set('c', W.cue, 'opacity', (1 - seg(0, 0.04)).toFixed(3));
    set('b', W.black, 'opacity', inOutSine(seg(Z.BLACK_A, Z.BLACK_B)).toFixed(3));

    // one full turn of the minute hand; hour hand turns 1/12 of it, wheels are geared from the same value
    var rot = 360 * inOutSine(seg(Z.ROT_A, Z.ROT_B));
    // balance wheel swings once per tick: crosses centre exactly on each 6-degree step
    var bal = 11 * Math.sin(Math.PI * rot / 6);
    var R = function (deg) { return 'rotate(' + deg.toFixed(3) + 'deg)'; };
    set('g1', W.g1, 'transform', R(rot));
    set('g2', W.g2, 'transform', R(rot * -0.75));
    set('g3', W.g3, 'transform', R(rot * 1.6));
    set('bal', W.bal, 'transform', R(bal));
    var hr = R(303.3 + rot / 12), mn = R(57.8 + rot);
    set('hr', W.hr, 'transform', hr); set('hrS', W.hrS, 'transform', hr);
    set('mn', W.mn, 'transform', mn); set('mnS', W.mnS, 'transform', mn);

    if (this.prevRot != null && dt) {
      var a = Math.floor(this.prevRot / 6 + 1e-9), b = Math.floor(rot / 6 + 1e-9);
      var speed = Math.abs(rot - this.prevRot) / dt; // degrees per second
      if (a !== b) this.tick(Math.min(240, speed / 6)); // speed in ticks per second
      this.setWhirr(speed);
      if (this.prevRot < 359.5 && rot >= 359.5) this.chime();
    }
    this.prevRot = rot;
    if (!this.state.revealed && p >= 0.78) this.setState({ revealed: true });
  }

  ensureWhirr() {
    var ctx = this.ctx;
    if (!ctx || this.whirr) return this.whirr;
    var len = ctx.sampleRate * 2, buf = ctx.createBuffer(1, len, ctx.sampleRate), ch = buf.getChannelData(0), last = 0;
    for (var i = 0; i < len; i++) { last = 0.97 * last + 0.03 * (Math.random() * 2 - 1); ch[i] = (Math.random() * 2 - 1) * 0.6 + last * 4; }
    var src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    var hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 500;
    var bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1900; bp.Q.value = 1.4;
    var am = ctx.createGain(); am.gain.value = 0.5;              // ratchet texture: noise chopped by a fast LFO
    var lfo = ctx.createOscillator(); lfo.type = 'square'; lfo.frequency.value = 18;
    var depth = ctx.createGain(); depth.gain.value = 0.5;
    lfo.connect(depth); depth.connect(am.gain);
    var out = ctx.createGain(); out.gain.value = 0;
    src.connect(hp); hp.connect(bp); bp.connect(am); am.connect(out); out.connect(this.master);
    src.start(); lfo.start();
    this.whirr = { out: out, lfo: lfo, bp: bp };
    return this.whirr;
  }

  setWhirr(speed) {
    var ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    var w = this.ensureWhirr(); if (!w) return;
    var on = this.state.soundOn ? 1 : 0;
    var lvl = on * Math.min(0.09, speed / 900 * 0.09);
    var t = ctx.currentTime;
    w.out.gain.setTargetAtTime(lvl, t, 0.06);
    w.lfo.frequency.setTargetAtTime(Math.max(6, Math.min(70, speed * 0.32)), t, 0.08);
    w.bp.frequency.setTargetAtTime(1500 + Math.min(1400, speed * 2.2), t, 0.1);
  }

  // A mantel-clock gong when the minute hand completes its turn
  chime() {
    var ctx = this.ctx;
    if (!ctx || !this.state.soundOn || ctx.state !== 'running') return;
    var t = ctx.currentTime + 0.02, f0 = 196;
    var parts = [[0.5, 0.35, 5.5], [1, 0.55, 4.2], [2.0, 0.28, 3.0], [2.76, 0.16, 2.2], [3.95, 0.09, 1.5], [5.4, 0.05, 1.0]];
    for (var i = 0; i < parts.length; i++) {
      var o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f0 * parts[i][0];
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(parts[i][1] * 0.5, t + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, t + parts[i][2]);
      o.connect(g); g.connect(this.master); o.start(t); o.stop(t + parts[i][2] + 0.05);
    }
  }

  componentWillUnmount() {
    this.fxStop();
    this.clear();
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    if (this.sc.raf) cancelAnimationFrame(this.sc.raf);
    (this.timers2 || []).forEach(function (t) { clearTimeout(t); });
    if (this.vidIO) this.vidIO.disconnect();
    if (this.ro) this.ro.disconnect();
    clearTimeout(this.roT);
    window.removeEventListener('pointerdown', this.unlock, true);
    window.removeEventListener('touchstart', this.unlock, true);
    if (this.ctx && this.ctx.close) { try { this.ctx.close(); } catch (e) {} }
  }

  clear() {
    for (var i = 0; i < this.timers.length; i++) clearTimeout(this.timers[i]);
    this.timers = [];
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  unlock() {
    if (this.ctx && this.ctx.state !== 'running') {
      var self = this;
      this.ctx.resume().then(function () { self.setState({ audioReady: self.ctx.state === 'running' }); }, function () {});
    }
  }

  run(revealAt, spinAt) {
    this.clear();
    var p = this.plan(spinAt);
    this.current = p;
    var reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    if (reduce) {
      this.setState({ stage: 'front', instant: true, hourDeg: p.h1, minDeg: p.m1 });
      return;
    }
    this.setState({ stage: 'behind', instant: true, hourDeg: p.h0, minDeg: p.m0 });
    var self = this;
    this.timers.push(setTimeout(function () { self.setState({ stage: 'front' }); }, revealAt));
    this.timers.push(setTimeout(function () { self.startSpin(); }, spinAt));
  }

  startSpin() {
    var p = this.current, self = this;
    this.setState({ instant: false, hourDeg: p.h1, minDeg: p.m1 }, function () {
      self.spinStart = performance.now();
      self.lastK = 0; self.prevT = 0; self.prevNow = self.spinStart; self.lastTick = -1; self.tickN = 0;
      self.raf = requestAnimationFrame(self.loop);
    });
  }

  // One tick each time the minute hand passes a minute mark, so the sound speeds up,
  // slows down and stops exactly with the hands.
  loop(now) {
    var u = Math.min(1, (now - this.spinStart) / this.C.SPIN_MS);
    var T = this.C.DELTA * this.ease(u);
    var k = Math.floor(T + 1e-6);
    var dt = Math.max(0.001, (now - this.prevNow) / 1000);
    var speed = (T - this.prevT) / dt; // minute marks per second
    if (k > this.lastK) {
      this.lastK = k;
      this.tick(speed);
    }
    this.prevT = T; this.prevNow = now;
    if (u < 1) this.raf = requestAnimationFrame(this.loop);
    else this.raf = 0;
  }

  tick(speed) {
    var ctx = this.ctx;
    if (!ctx || !this.state.soundOn || ctx.state !== 'running') return;
    var t = ctx.currentTime + 0.005;
    if (this.lastTick > 0 && t - this.lastTick < 0.018) return; // at full speed ticks blur into a fast whirr
    this.lastTick = t;
    this.tickN++;
    var tock = this.tickN % 2 === 0;
    var vol = Math.max(0.22, Math.min(0.95, 1.1 / (1 + speed / 60)));
    var src = ctx.createBufferSource(); src.buffer = this.noise;
    var hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1500;
    var bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = tock ? 2700 : 3400; bp.Q.value = 2.6;
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.0012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.028);
    src.connect(hp); hp.connect(bp); bp.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + 0.05);
    var o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = tock ? 1680 : 2140;
    var og = ctx.createGain();
    og.gain.setValueAtTime(0.0001, t);
    og.gain.exponentialRampToValueAtTime(vol * 0.18, t + 0.002);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
    o.connect(og); og.connect(this.master); o.start(t); o.stop(t + 0.07);
    var b = ctx.createOscillator(); b.type = 'sine';
    b.frequency.setValueAtTime(tock ? 360 : 440, t);
    b.frequency.exponentialRampToValueAtTime(150, t + 0.035);
    var bg = ctx.createGain();
    bg.gain.setValueAtTime(0.0001, t);
    bg.gain.exponentialRampToValueAtTime(vol * 0.32, t + 0.0015);
    bg.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
    b.connect(bg); bg.connect(this.master); b.start(t); b.stop(t + 0.05);
  }

  replay() {
    this.unlock();
    this.run(1400, 2500);
  }

  toggleSound() {
    this.unlock();
    this.setState({ soundOn: !this.state.soundOn });
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
    var size = this.props.headingSize ?? 112;
    var s = this.state;
    var front = s.stage === 'front';
    var self3 = this;
    var products = [
      { name: 'Fumé Squelette', price: '$3,450', img: 'assets/images/03d82286c5e0ec1c5efcf4480afa979c.webp', alt: 'Skeleton watch with smoked sapphire dial in yellow gold' },
      { name: 'Verde Squelette', price: '$3,980', img: 'assets/images/92de356452526023d14d4043221402fe.webp', alt: 'Skeleton watch with emerald sapphire dial in yellow gold' },
      { name: 'Bleu Nuit', price: '$4,250', img: 'assets/images/877df250d9dd31a16bf346df2edf47cf.webp', alt: 'Skeleton watch with midnight blue sapphire dial in white gold' },
      { name: 'Rubis Rosé', price: '$4,250', img: 'assets/images/e98e1460b87524991c3ca6a2e94390ec.webp', alt: 'Skeleton watch with ruby sapphire dial in rose gold' },
      { name: 'Noir Chapitre', price: '$3,650', img: 'assets/images/333f4e3b5fde63a032c19100c1ab21fd.webp', alt: 'Skeleton watch with black chapter ring in yellow gold' },
      { name: 'Héritage Ouvert', price: '$3,200', img: 'assets/images/f2704a5c0fd0a53324169a367da96374.webp', alt: 'Open-worked skeleton watch in rose gold' },
      { name: 'Verde Édition 25', price: '$5,400', img: 'assets/images/92de356452526023d14d4043221402fe.webp', alt: 'Limited edition emerald skeleton watch' },
      { name: 'Rubis Édition 25', price: '$5,600', img: 'assets/images/e98e1460b87524991c3ca6a2e94390ec.webp', alt: 'Limited edition ruby skeleton watch' }
    ];
    var kinds = ['SMOKED DIAL', 'EMERALD DIAL', 'MIDNIGHT DIAL', 'RUBY DIAL', 'NOIR RING', 'OPEN-WORKED', 'LIMITED · 25', 'LIMITED · 25'];
    var reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    // Pointer tracking writes CSS variables straight onto the card: tilt, glare position, image parallax
    function move(e) {
      if (reduce) return;
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
    function leave(e) {
      var st = e.currentTarget.style;
      ['--ry', '--rx', '--px', '--py'].forEach(function (n) { st.removeProperty(n); });
    }
    products.forEach(function (pr, i) { pr.kind = kinds[i]; pr.move = move; pr.leave = leave; });
    products.forEach(function (pr, i) { pr.delay =(0.15 + (i % 4) * 0.08 + Math.floor(i / 4) * 0.12).toFixed(2) + 's'; });
    return {
      headingPx: size + 'px', products: products,
      clockClass: front ? 'is-front' : '',
      shadeClass: front ? 'is-gone' : '',
      haloClass: front ? 'is-on' : '',
      ctlClass: front ? 'is-on' : '',
      hourDeg: s.hourDeg.toFixed(3), minDeg: s.minDeg.toFixed(3),
      handTransition: s.instant ? 'none' : 'transform ' + this.C.SPIN_MS + 'ms cubic-bezier(' + this.C.EASE.join(',') + ')',
      soundOn: s.soundOn, soundOff: !s.soundOn,
      soundPressed: s.soundOn ? 'true' : 'false',
      needsTap: s.soundOn && !s.audioReady,
      replay: this.replay, toggleSound: this.toggleSound,
      nlDone: !!s.nl, nlOpen: !s.nl,
      cartOpen: !!s.cartOpen, hasCart: (s.cartN || 0) > 0, cartCount: s.cartN || 0,
      bagLabel: 'Open cart, ' + (s.cartN || 0) + ((s.cartN || 0) === 1 ? ' item' : ' items'),
      bagExpanded: s.cartOpen ? 'true' : 'false', bagBump: s.bump ? 'is-bump' : '',
      openCart: this.cartApi().open, closeCart: this.cartApi().close, cartChange: this.cartApi().change,
      nlSubmit: function (e) { e.preventDefault(); self3.setState({ nl: true }); },
      revClass: s.revealed ? 'is-in' : ''
    };
  }
}
return Component;
})(), {"headingSize": 112});
