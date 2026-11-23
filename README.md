# Watchify

Luxury skeleton-watch website: Home, Collections, Our Story, Gallery (with the scroll-driven exploded chronograph), Contact, and a checkout preview with a shared cart drawer.

It is a **static site**: plain HTML, CSS and JavaScript, with no build step and nothing to install.

## Deploy on Vercel

1. Put these files at the root of a GitHub repository (`index.html` must sit at the top level).
2. In Vercel, choose **Add New → Project**, import the repository and keep the defaults:
   - Framework Preset: **Other**
   - Build Command: *(leave empty)*
   - Output Directory: *(leave empty, or `.`)*
3. Click **Deploy**.

`vercel.json` turns on clean URLs (`/collections` instead of `/collections.html`) and long-term caching for images, videos and libraries.

## Run it locally

Any static file server works, for example:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open http://localhost:8080. (Opening `index.html` straight from the disk won't work, because the browser blocks some features on `file://` pages.)

## How it is put together

| Path | What it is |
|---|---|
| `index.html`, `collections.html`, `story.html`, `gallery.html`, `contact.html`, `checkout.html` | The pages |
| `js/components/*.js` | Each page's template and logic (plus the cart drawer and the exploded-watch section, which are shared components) |
| `js/dc-lite.js` | The small runtime that renders those templates with React |
| `js/vendor/` | React 19, GSAP 3 + ScrollTrigger, Three.js r158 |
| `css/` | Page styles, the cart drawer, the 3D section and the responsive layer |
| `assets/images`, `assets/videos` | Product photos, movement layers and background videos |

Templates use `{{ name }}` placeholders, `<sc-for>` loops, `<sc-if>` conditions and `<dc-import>` for child components; each page's `renderVals()` supplies the values.

## Notes before going live

- **Checkout is a preview.** No payment provider is connected; the pay button stays disabled. Connect Stripe, Shopify or similar before taking orders.
- **Contact form and newsletter** validate and show a confirmation, but don't send anything yet. Wire them to a form service (Formspree, Resend, a Vercel function…) to receive messages.
- **Placeholders** to replace on the Contact page: boutique address, phone and email.
- The cart is saved in the visitor's browser (localStorage).
