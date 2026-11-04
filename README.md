# Pratik Mahato — Portfolio Website

A responsive personal portfolio built with React, Vite and Tailwind CSS, using a premium dark visual style with lime accents.

## Portfolio content
- Hero headline: “Building digital experiences through technology and creativity.”
- About, skills, professional experience, areas of focus, social profiles, continuous learning and contact sections
- Technical skills and creative tools supplied by Pratik
- Experience at Boston International College from April 2022 to present
- Contact email: `contact@pratikmahato.com.np`
- GitHub, LinkedIn, Facebook and Instagram links
- No CV download link and no invented project case studies or certifications
- Temporary PM monogram, ready to be replaced with a custom logo
- Contact form opens the visitor's email application using `mailto:`; it is not a server-backed form

## Run locally
Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Replace the temporary logo later
1. Create a `public` folder in the project root if it does not exist.
2. Add your logo file as `public/logo.svg` (SVG recommended; transparent PNG also works).
3. In `src/main.jsx`, find the `Brand` component and replace the temporary `PM` monogram with:

```jsx
<img src="/logo.svg" alt="Pratik Mahato" className="site-logo" />
```

4. Add suitable `.site-logo` sizing in `src/styles.css` (for example `height: 38px; width: auto; object-fit: contain;`).

The header and footer both use the same `Brand` component, so the logo will update in both places.

## Add a profile photo later
The current hero uses a custom abstract graphic rather than a stock portrait. When you provide a professional photo, it can be added as a separate visual without changing the page structure.

## Projects and credentials
The “Areas of Focus” section describes supplied skills and interests, not fabricated client projects. Replace or supplement it with specific project case studies only when you have approved project names, descriptions and links. No certifications are listed because none have been supplied yet; the continuous-learning section keeps this area meaningful without claiming credentials.

## Deploy with GitHub and Cloudflare Pages
Connect the GitHub repository to Cloudflare Pages using:
- Framework preset: `Vite`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

Deploy the site and test the generated `pages.dev` address before connecting the custom domain. Preserve existing MX, SPF, DKIM, DMARC and mail-related DNS records when connecting the domain.
