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

Multi-page portfolio site built with React + TypeScript + Vite + Tailwind CSS v4.

### Routes

| Path | Page | Notes |
|------|------|-------|
| `/` | `PortfolioPage` | Main portfolio, includes `GoTopButton` |
| `/blog` | `BlogPage` | Blog list fetched from Firestore |
| `/blog/:id` | `BlogDetailPage` | Single post fetched from Firestore |

The `postbuild` script copies `dist/index.html` into `dist/blog/` so GitHub Pages serves the SPA correctly on sub-routes.

### Portfolio sections

Rendered top-to-bottom in `PortfolioPage.tsx`:
- `NavBar` — fixed top bar (rendered in `App.tsx`, shared across all routes)
- `Home` — hero with name and typewriter animation
- `Experience` — work history cards; current job shows a lime-400 "Current" badge
- `Education` — degree cards; scholarships show a lime-400 badge
- `Achievement` — milestone cards
- `TechStack` — skills grid with Font Awesome brand icons
- `Contact` (`Socials`) — social links + Gmail mailto
- `Footer` — copyright and source link
- `GoTopButton` — floating next-section / scroll-to-top button

### NavBar (`src/Components/Common/NavBar.tsx`)

- Title shows **Potfolio** on `/` and **Blog** on `/blog*`
- **Desktop**: "Potfolio" dropdown (hover) lists all sections; "Blog" is a direct link
- **Mobile**: hamburger opens a menu with a collapsible "Potfolio" accordion and a "Blog" link
- Navigating to a section from a non-portfolio page uses `navigate('/', { state: { scrollTo: id } })`; `PortfolioPage` reads this state on mount and scrolls

### `FeatureSection` wrapper (`src/Components/Common/FeatureSection.tsx`)

Used by all body sections. Props:
- `id` — sets the HTML `id` for anchor scrolling
- `title` — section heading (lime-400 pill)
- `icon?` — Font Awesome class suffix (e.g. `fa-briefcase`) shown inside the heading pill
- `subtitle?` — italic description line
- `badge?` — numeric count pill shown next to the heading (used by BlogPage)

All new sections should use this component.

### Firebase / Firestore (`src/firebase/`)

- `config.ts` — initialises the Firebase app (project: `find-me-3cec7`)
- `blog.ts` — exports `fetchBlogs()` and `fetchBlog(id)`; expects a `blogs` collection with fields: `title`, `excerpt`, `content` (HTML), `tags` (string[]), `createdAt` (Timestamp)

### Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin; configured in `src/index.css` using `@import 'tailwindcss'` and `@theme {}`. Custom fonts: `Rubik` (body/display, loaded via Google Fonts), `Koulen` (loaded in `index.html`). Icons from Font Awesome (kit loaded in `index.html`).

### Theme system

`src/theme/ThemeProvider.tsx` uses the `ayu` package to expose light/dark/mirage palettes as CSS variables, but it is not currently wired into `App.tsx`. Dark mode is toggled via a button in `NavBar` using `useTheme`.

### Deployment

Hosted on GitHub Pages at `https://chhunvirak.github.io/Potfolio`. Vite base is `/Potfolio/` in production. Deploy with `npm run deploy`.
