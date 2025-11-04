# Tech Context

## Stack & Versions
- Next.js `16.0.0` (App Router, static export)
- React `19.2.x`
- MUI `7.3.4` with `@mui/material-nextjs` available
- Emotion `@emotion/react` and `@emotion/styled`
- TypeScript `5.9.x`
- Content tooling: `remark`, `remark-gfm`, `remark-rehype`, `rehype-sanitize`, `rehype-stringify`, `gray-matter`, `zod`

## Project Setup
- Absolute imports via `@/*` path alias (see `tsconfig.json`).
- Static export set in `next.config.ts` (`output: 'export'`, `images.unoptimized: true`, `trailingSlash: true`).
- Global CSS at `src/styles/globals.css`; component styles via MUI `styled()`.

## Theming
- Current: Client `ThemeProvider` context wraps app and injects MUI theme and `CssBaseline`.
- Recommended: Add `AppRouterCacheProvider` from `@mui/material-nextjs` for SSR Emotion integration to avoid FOUC and enable more Server Components consuming theme styling.

## Data & Content
- Posts live under `src/posts/*.md` with Zod-validated frontmatter.
- Listing page (`src/app/posts/page.tsx`) builds a server-side list; detail route to be added.

## Scripts
- `npm run dev` – local dev server
- `npm run build` – production build (static export)
- `npm run start` – start server (not used for static hosting)
- `npm run lint` – lint sources

## Constraints
- Static hosting target (e.g., GitHub Pages) implies: no server runtime, use build-time data; ensure routes are statically pre-rendered.
- Styling strategy is CSS-in-JS only (no Tailwind/CSS Modules) per project direction.

