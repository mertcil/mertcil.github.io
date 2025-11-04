# Active Context

Last updated: 2025-11-03

## Current Focus
- Establish a documented component pattern (shared primitives) to reduce duplication and improve consistency.
- Improve performance by reducing Client Components and enabling proper MUI + Emotion SSR for App Router.
- Strengthen SEO: page-level metadata, sitemap, robots, canonical, and OG/Twitter cards.

## Recent Changes
- Theming: Custom `ThemeContext` with toggle and MUI `CssBaseline` (`src/contexts/ThemeContext.tsx`, `src/components/ThemeToggle.tsx`).
- Layout: Nested, centered layout wrapper using styled() (`src/components/LayoutWrapper.tsx`).
- Navigation: Sticky header with active-state buttons (`src/components/Header.tsx`).
- Posts: Markdown pipeline with Zod frontmatter validation and sanitize (see `src/lib/posts.ts`), server-rendered listing (`src/app/posts/page.tsx`) and client `PostsLayout` UI.
- Build/Output: Static export via `next.config.ts` (`output: 'export'`, `images.unoptimized: true`).

## Next Steps (Execution Order)
1) MUI SSR integration: wrap root with `AppRouterCacheProvider` from `@mui/material-nextjs` to prevent FOUC and enable server-first components.
2) Component primitives: extract `PageContainer`, `Panel`, `SectionTitle`, and spacing utilities into `src/components/ui/` and refactor pages to use them.
3) Server-first passes: remove unnecessary `'use client'` from `src/app/page.tsx` and consider making `LayoutWrapper` a server component once MUI SSR is in place.
4) SEO baseline: add `app/robots.ts`, `app/sitemap.ts`, per-page `export const metadata`, canonical URLs, and OG/Twitter images.
5) Posts detail route: add `src/app/posts/[slug]/page.tsx` (server) that renders sanitized HTML; pre-generate paths at build.
6) Performance budget: analyze bundle (target minimal client JS on Home/Work/Resume); lazy-load any heavy interactive widgets.

## Coordination Notes
- Keep `output: 'export'` compatibility; prefer build-time data and static routes.
- Theme switching remains client-side; SSR styles should still render stable initial theme without layout shift.

