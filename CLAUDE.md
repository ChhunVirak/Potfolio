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

All copy lives in `src/data/portfolio.ts`; section components are presentational. Rendered top-to-bottom in `PortfolioPage.tsx` inside a `max-w-[1120px]` container:
- `NavBar` — sticky top bar (rendered in `App.tsx`, shared across all routes)
- `Home` — hero (role line with accent dot, name, lede, CTAs, photo) + "At a glance" facts row
- `Work` — "Apps I've shipped" grid; projects without an `image` show a name tile
- `Experience` — timeline rows
- `Writing` — latest 3 Firestore posts; renders nothing when there are none
- `Achievement` — "Recognition" timeline (id `recognition`)
- `Education` — timeline rows
- `TechStack` — "Stack" definition list (id `stack`)
- `Contact` (`Socials`) — headline + text links
- `Footer` — copyright, source link, back to top

Design source: the "Portfolio Redesign — Chhun Virak" canvas (https://claude.ai/artifact/8L5WmghQyLfDV2jy6EpDTw).

### NavBar (`src/Components/Common/NavBar.tsx`)

- Name on the left; section links (`SECTION_LINKS`) plus a "Blog" route link on desktop; a "Menu"/"Close" text button opens a full-width list on mobile
- Navigating to a section from a non-portfolio page uses `navigate('/', { state: { scrollTo: id } })`; `PortfolioPage` reads this state on mount and scrolls

### `FeatureSection` wrapper (`src/Components/Common/FeatureSection.tsx`)

Used by all body sections. Props:
- `id`, `title`
- `layout?` — `'aside'` (default: small label column + content) or `'stacked'` (large heading above content)
- `meta?` — node shown right of a stacked heading (date range, "All posts →")
- `subtitle?`, `badge?` — muted description / post count (stacked only)
- `className?` — overrides top spacing

Use `Timeline` (`Common/Timeline.tsx`) for date-on-the-left rows and `PostList` for blog post rows.

### Firebase / Firestore (`src/firebase/`)

- `config.ts` — initialises the Firebase app (project: `find-me-3cec7`)
- `blog.ts` — exports `fetchBlogs()` and `fetchBlog(id)`; expects a `blogs` collection with fields: `title`, `excerpt`, `content` (HTML), `tags` (string[]), `createdAt` (Timestamp)

### Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin; configured in `src/index.css`. Color tokens are CSS variables (`--bg`, `--fg`, `--muted`, `--line`, `--chip`, `--accent`) redefined under `:root.dark`, exposed to Tailwind via `@theme inline` as `bg-bg`, `text-fg`, `text-muted`, `border-line`, `bg-chip`, `bg-accent`. Fonts: `Geist` (`font-sans`) and `Geist Mono` (`font-mono`, used for dates/labels) from Google Fonts. Icons are inline SVG; the Font Awesome kit in `index.html` is still used by the dev-only admin pages. `.link-ul` gives the draw-in underline; `.post-body` styles blog HTML.

### Theme system

`src/theme/ThemeProvider.tsx` uses the `ayu` package to expose light/dark/mirage palettes as CSS variables, but it is not currently wired into `App.tsx`. Dark mode is toggled via a button in `NavBar` using `useTheme`.

### Deployment

Hosted on GitHub Pages at `https://chhunvirak.github.io/Potfolio`. Vite base is `/Potfolio/` in production. Deploy with `npm run deploy`.
