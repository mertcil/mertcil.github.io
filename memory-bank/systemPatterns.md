# System Patterns

## Architecture
- Next.js App Router with a server-first approach. Pages and layouts are Server Components by default; only interactive leaf nodes opt into Client Components.
- Styling via MUI `styled()` with Emotion. Theme provided at the top-level and consumed in components; tokens (colors, spacing, radius, shadows) should be centralized.
- Content for Posts sourced from Markdown at build time and rendered/sanitized for static export.

## Key Patterns
- Server-First Rendering:
  - Data access and Markdown parsing on the server (`src/app/posts/page.tsx`, `src/lib/posts.ts`).
  - Avoid `'use client'` unless hooks/events are needed.
- Theming & SSR:
  - Use `@mui/material-nextjs` `AppRouterCacheProvider` to integrate Emotion with the App Router and eliminate style flicker.
  - Keep toggle as a small client island while enabling SSR styles for initial paint.
- UI Primitives:
  - Extract common building blocks into `src/components/ui/` (e.g., `PageContainer`, `Panel`, `SectionTitle`, `Stack`, `Card`).
  - Prefer composition over deep component trees; keep primitives stateless.
- Accessibility:
  - Use semantic elements: `header`, `nav`, `main`, `footer`, and headings in order. Ensure focus styles and contrasts.
- Routing & SEO:
  - Define `export const metadata` per route and global defaults in `src/app/layout.tsx`.
  - Provide `app/robots.ts` and `app/sitemap.ts` for static export.
  - Use canonical URLs and descriptive titles; add structured data for posts when feasible.
- Performance:
  - Keep Home/Work/Resume free of client-only code where possible.
  - Code-split client widgets, avoid unnecessary re-renders, and limit heavy shadows/filters.
  - Prefer CSS+SSR over JS animation for micro-interactions.

## Folder & Module Organization
- `src/components/` – feature components and primitives (`ui/` subfolder for tokens/primitives).
- `src/contexts/` – client contexts like theme toggle.
- `src/lib/` – server utilities (Markdown, formatting, data helpers).
- `src/styles/` – minimal global CSS; most styles via `styled()`.

## Data & Content
- Posts: Markdown files in `src/posts` with validated frontmatter (Zod). Sanitized HTML via Remark/Rehype on server.
- Caching: In-memory caches during build (`renderedHtmlCache`, `metadataCache`) to speed processing.

## Testing & Validation (Lightweight)
- Type safety with strict TS.
- Linting via `eslint` and Next.js defaults.

