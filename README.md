# Pratik Mahato — Portfolio

A clean, responsive React + Vite portfolio with a simple dark interface and lime accent.

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev` to preview locally.
5. Run `npm run build` to create the production site in `dist/`.

## Cloudflare Pages
Connect this GitHub repository to Cloudflare Pages:
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## Personal images
Your supplied logo and portrait are included in `public/`:
- `public/pratik-mahato-logo.png`
- `public/pratik-mahato-photo.jpg`

To replace either later, keep the same filename or update the image path in `src/main.jsx`.

## Content notes
The work section is presented as areas of focus, not invented client projects. No certifications or CV are claimed. Confirm contact details and profile links before publishing.

## Original uploaded assets

The files in `public/` are the original user-uploaded assets copied without editing, filters, cropping, recoloring, or AI replacement:

- `pratik-mahato-logo.png` — original uploaded logo (PNG)
- `pratik-mahato-photo.jpg` — original uploaded portrait (JPEG)

The site references these exact local files in the header, hero portrait, and footer.


### Browser tab icon (favicon)

The browser tab icon is configured in `index.html` to use `public/pratik-mahato-logo.png` directly. The original uploaded logo file is included unchanged. After deployment, hard-refresh the site or clear the browser cache if the old globe icon remains.


## SEO and security additions

The `public/` folder contains files that Vite copies to the deployed site root:
- `robots.txt` and `sitemap.xml`
- `_headers` for Cloudflare Pages security headers and asset caching
- `404.html` for a branded not-found page

The homepage includes a canonical URL, title/description, Open Graph and Twitter metadata, and Person JSON-LD structured data. It also includes a no-JavaScript content fallback. This remains a client-rendered React/Vite site, not full server-side rendering or static prerendering; Google can render JavaScript, but a prerender/SSR step can further improve support for crawlers that do not execute JavaScript.

## After deployment: verify

1. Open `https://pratikmahato.com.np/` and confirm the homepage loads.
2. Open `/robots.txt` and `/sitemap.xml` directly.
3. Visit a made-up path such as `/this-page-should-not-exist` and confirm the branded 404 appears.
4. Check response headers in browser DevTools → Network → select the document → Headers.
5. Check canonical metadata and structured data with Google Search Console URL Inspection and Rich Results Test.
6. Check important assets and links; a successful deployment does not itself prove every URL returns HTTP 200.

The Content Security Policy permits same-origin scripts and images, plus Google Fonts for styles/fonts. If future analytics, embedded media, or third-party services are added, update the policy only for the exact trusted origin required.
