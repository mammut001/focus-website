# focus-website (FocusMint)

Marketing website for the FocusMint iOS/Apple Watch app, built with Next.js 14 (App Router) and Tailwind CSS. It is a statically-exported, i18n site (`en`, `fr`, `zh`) deployed to GitHub Pages.

## Cursor Cloud specific instructions

- Package manager for dependencies is **npm** (`package-lock.json`, mirrors the CI in `.github/workflows/deploy.yml`). Tests use the **Bun** test runner (`bun:test`, configured via `bunfig.toml`), so `bun` must be on `PATH`. The setup installs bun to `~/.bun/bin` and adds it to `~/.bashrc`.
- Commands (see `package.json`):
  - Dev server: `npm run dev` (Next.js on http://localhost:3000). The root `/` client-redirects to `/en`; localized routes are `/en/`, `/fr/`, `/zh/`.
  - Lint: `npm run lint` (only warnings expected, no errors).
  - Tests: `bun test` (do NOT use `npm test`; there is no npm test script and tests import `bun:test`).
  - Production build: `npm run build` → static export to `out/`. Note `next.config.js` only enables `output: 'export'` + `basePath: '/focus-website'` when `NODE_ENV=production`, so built HTML expects to be served under `/focus-website`. Use `npm run dev` for local development instead.
- `prebuild` runs `node scripts/generate-changelog.js` to regenerate the changelog data before builds.
