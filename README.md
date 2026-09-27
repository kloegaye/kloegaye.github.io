# Kloe Gaye - Portfolio

Static portfolio site for **Kloe Gaye** (digital-marketing strategist & Head of
Content), built with the **Kloe Gaye design system** and deployed to GitHub Pages.

Live: https://kloegaye.github.io/

## Stack

- **Vite** - builds to static HTML/CSS/JS in `dist/`.
- **React 18** (UMD globals) - loaded as a classic `<script>`, not bundled, so it
  matches the runtime the design-system bundle was compiled against.
- **Kloe Gaye design system** - the compiled component bundle
  (`public/_ds_bundle.js`, exposing `window.KloeGayeDesignSystem_152bdb`), its
  tokens (`src/ds/tokens/`), and the `styles.css` entry point. Synced from the
  design system project on claude.ai/design.

JSX is pre-compiled by Vite with the **classic runtime** (`React.createElement`),
so there is no in-browser Babel.

## Working on the site

Kloe edits this site by asking Claude Code in plain language. `CLAUDE.md` tells
Claude how: it sets up the tools, makes the change, publishes it, and confirms
when it's live. No technical steps needed.

## Project layout

```
index.html                 main page; loads React + DS bundle (globals), then src/main.jsx
ugc.html                   hidden, unlinked UGC-creator page (/ugc.html) -> src/ugc.jsx
src/
  main.jsx                 imports sections, renders <App/> into #root
  app.css                  page-level styles (nav underline, dark form, responsive)
  ugc.jsx, ugc.css         UGC page
  ds/
    styles.css             design-system entry (@imports tokens)
    tokens/*.css           colors, typography, layout, fonts, base
  sections/                Nav, Hero, WorkGrid, Podcast, Services, Statement, About, Footer, icons
public/
  _ds_bundle.js            compiled design-system components (window global)
  vendor/                  React + ReactDOM UMD (self-hosted)
  images/                  photos, work thumbnails, social-share images
  reels/                   UGC videos + poster frames
.github/workflows/deploy.yml   builds with Vite and publishes dist/ to Pages
CLAUDE.md                  instructions for Claude Code
```

## Develop

Uses [bun](https://bun.sh).

```bash
bun install
bun run dev        # local dev server
bun run build      # production build -> dist/
bun run preview    # serve the production build locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Vite
and publishes `dist/` to GitHub Pages (Settings -> Pages -> Source: GitHub Actions).
Takes a minute or two; track with `gh run watch`.

## Notes

- Fonts (Lexend, Space Mono) load from Google Fonts (`src/ds/tokens/fonts.css`).
- New pages need their own HTML file plus an entry in `vite.config.js`
  `rollupOptions.input`.
