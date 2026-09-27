# Kloe's portfolio site

This is Kloe Gaye's personal portfolio website, live at https://kloegaye.github.io/.
Kloe owns it and works on it with you directly. **Kloe is not technical.**

## How to work with Kloe

- **Talk in plain language.** No jargon, no code, no file paths, no command output in your replies
  unless Kloe asks. Say what changed on the site ("The About section now mentions your podcast"),
  not how ("Edited About.jsx").
- **Never hand Kloe technical decisions.** If a request needs a technical choice (a library, a
  hosting approach, how to build a feature, image formats, etc.), research it yourself, pick the
  best option for a small static portfolio, and just do it. Only ask Kloe about things that are
  genuinely theirs to decide: wording, which photo, look and feel, what should be on the page.
  When you ask, offer simple choices, ideally with a visual preview or a description of how each
  option looks to a visitor.
- **Prefer simple, free, low-maintenance solutions.** The site must stay a static site on GitHub
  Pages with no servers, paid services, or accounts Kloe would need to manage. If a request truly
  can't be done that way (e.g. a contact form that stores messages), pick the simplest free option
  that works, set it up, and tell Kloe in one sentence what, if anything, they need to do.
- **Keep the existing design.** Match the site's current look, fonts, colours, and components.
  New sections should look like they were always there, and must work on phones.
- **Keep Kloe posted briefly.** Short updates while you work; a clear "done, here's what changed"
  at the end.

## Publishing: always automatic

Every change Kloe asks for should end up live without Kloe doing anything technical. After making
a change:

1. **Check it builds:** `bun run build` (fall back to `npx vite build` if bun is missing). If it
   fails, fix it. Never publish a broken build. For visual changes, preview locally
   (`bun run dev`) and check desktop and phone widths before publishing.
2. **Commit and push to `main`** straight away, without asking. Write a short, clear commit message.
3. **Track the deploy.** Pushing to `main` triggers the GitHub Actions workflow
   (`.github/workflows/deploy.yml`). Watch it: `gh run list --limit 1` then `gh run watch <id>
   --exit-status`.
4. **Confirm it's live.** Once the run succeeds, load the live page (e.g. `curl -s
   https://kloegaye.github.io/ | grep ...`) and check the change is actually there. GitHub
   Pages can take a minute or two to update.
5. **Tell Kloe:** "It's live" with the link to the page that changed. Mention they may need to
   refresh (or hard-refresh) to see it.

If the deploy fails, fix it and redeploy yourself. Only tell Kloe if it can't be fixed, and then
in plain words. If something already live is broken, revert first, then fix.

If `git push` or `gh` fails because of login/permissions, tell Kloe to type `! gh auth login`
and walk them through the prompts (GitHub.com, HTTPS, log in with a web browser), then run
`gh auth setup-git` and retry.

Kloe can always say "undo that" and you should revert the last change and republish.

## Technical notes (for you, not Kloe)

- Vite + React, built to `dist/`, deployed by GitHub Actions to GitHub Pages (user site, `base: '/'`).
  Package manager is bun (`bun.lock`; CI uses bun).
- React/ReactDOM are UMD globals from `public/vendor/`, loaded as `<script>` tags before the app.
  JSX is compiled with the classic runtime (`React.createElement`). Do not add a `react` npm import.
- Design system: compiled bundle `public/_ds_bundle.js` exposes `window.KloeGayeDesignSystem_152bdb`.
  Tokens and styles in `src/ds/`. Reuse its components and tokens rather than inventing new styles.
- Pages:
  - `index.html` → `src/main.jsx` → sections in `src/sections/` (Nav, Hero, WorkGrid, Podcast,
    Services, Statement, About, Footer). Page styles in `src/app.css`.
  - `ugc.html` → `src/ugc.jsx` + `src/ugc.css`: a hidden, unlinked UGC-creator page at
    https://kloegaye.github.io/ugc.html. A new page needs its own HTML file and an entry in
    `vite.config.js` `rollupOptions.input`.
- Images go in `public/images/`, videos in `public/reels/`, referenced as `/images/...`. When
  Kloe gives you photos or videos, resize/compress them sensibly for the web before adding.
- Page titles and social-share text live in the `<head>` of `index.html` / `ugc.html`; keep them
  in sync when relevant content changes.
