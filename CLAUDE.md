# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start local dev server
npm run devh         # Start dev server with host (LAN access)
npm run build        # Type-check and build for production (tsc && vite build)
npm run lint         # Run ESLint (zero warnings allowed)
npm run preview      # Preview the production build locally
npm run deploy       # Build and deploy to GitHub Pages (gh-pages -d dist)
```

There are no tests in this project.

## Architecture

Single-page portfolio site built with React + TypeScript + Vite + Tailwind CSS v4.

**Page sections** (rendered top-to-bottom in `App.tsx`):
- `NavBar` — fixed top bar with section links
- `Home` — hero with name, typed animation, and profile photo
- `Experience` — work history cards (data lives in the component)
- `TechStack` — skills grid with Font Awesome icons (data lives in the component)
- `Contact` (`Socials`) — social links
- `Footer` — copyright and source link
- `GoTopButton` — floating scroll-to-top button

**`FeatureSection` wrapper** (`src/Components/Common/FeatureSection.tsx`) — used by Experience, TechStack, and Contact to render a lime-400 section heading plus optional subtitle. All new sections should use this component.

**Styling** — Tailwind CSS v4 via `@tailwindcss/vite` plugin; configured in `src/index.css` using `@import 'tailwindcss'` and `@theme {}`. Custom fonts: `Rubik` (body/display, loaded via Google Fonts), `Koulen` (loaded in `index.html`). Icons from Font Awesome (kit loaded in `index.html`) and Simple Line Icons (CDN).

**Typed animation** — powered by `tailwind-plugin-typed`. Usage: add `typed-[Word1;Word2;Word3]` and `typed-caret` classes to an element. Delimiter is `;`.

**Theme system** — `src/theme/ThemeProvider.tsx` uses the `ayu` package to expose light/dark/mirage palettes as CSS variables (`--bg-color`, `--text-color`), but it is not currently wired into `App.tsx`.

**Deployment** — hosted on GitHub Pages at `https://chhunvirak.github.io/Potfolio`. Vite base is `'./'`. Deploy with `npm run deploy`.
