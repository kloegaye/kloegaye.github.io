# Kloe Gaye — Portfolio

Static portfolio site for **Kloe Gaye** (digital-marketing strategist & Head of
Content), built with the **Kloe Gaye design system** and deployed to GitHub Pages.

Live: https://kloegaye.github.io/

## Stack

- **Vite** — builds to static HTML/CSS/JS in `dist/`.
- **React 18** (UMD globals) — loaded as a classic `<script>`, not bundled, so it
  matches the runtime the design-system bundle was compiled against.
- **Kloe Gaye design system** — the compiled component bundle
  (`public/_ds_bundle.js`, exposing `window.KloeGayeDesignSystem_152bdb`), its
  tokens (`src/ds/tokens/`), and the `styles.css` entry point. Synced from the
  design system project on claude.ai/design.

JSX is pre-compiled by Vite with the **classic runtime** (`React.createElement`),
so there is no in-browser Babel.

## Project layout

```
index.html                 Vite entry; loads React + DS bundle (globals), then src/main.jsx
src/
  main.jsx                 imports sections, renders <App/> into #root
  app.css                  page-level styles (nav underline, dark form, responsive)
  ds/
    styles.css             design-system entry (@imports tokens)
    tokens/*.css           colors, typography, layout, fonts, base
  sections/                Nav, Hero, WorkGrid, Services, Statement, About, Footer, icons
public/
  _ds_bundle.js            compiled design-system components (window global)
  vendor/                  React + ReactDOM UMD (self-hosted)
  .nojekyll
.github/workflows/deploy.yml   builds with Vite and publishes dist/ to Pages
```

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Vite
and publishes `dist/` to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment →
Source** and select **GitHub Actions**.

## Notes / placeholders to replace

The content is the design system's placeholder portfolio — swap for Kloe's real
material:

- **Imagery** — currently `picsum.photos` seeds (Hero portrait, About, WorkCard
  images). Replace with real photos/work.
- **Copy & case studies** — `src/sections/WorkGrid.jsx`, `Services.jsx`, `About.jsx`.
- **Contact** — `hello@kloegaye.com` and the social links (`#`) in `Footer.jsx`.
- **Fonts** — Lexend + Space Mono load from Google Fonts CDN
  (`src/ds/tokens/fonts.css`); self-host for production/offline if desired.
