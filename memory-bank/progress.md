# Progress & Roadmap

## What Works
- Theming with light/dark toggle and `CssBaseline`.
- Nested, centered layout wrapper and sticky header.
- Posts index renders from Markdown with Zod validation and sanitize pipeline.
- Static export configuration for GitHub Pages compatibility.
- Consistent `styled()` usage across components.

## What’s Left
- Add posts detail route (`/posts/[slug]`) with server rendering and sanitized HTML.
- Adopt MUI + Emotion SSR integration for App Router to avoid any style flash and reduce client-only islands.
- Extract and reuse UI primitives (`Panel`, `PageContainer`, `SectionTitle`, cards, stacks) to remove duplication.
- Expand SEO: per-page metadata, canonical URLs, OG/Twitter, `robots.ts`, `sitemap.ts`.
- Convert pages that don’t need interactivity back to Server Components.

## Critical Issues (Fix First)
- MUI SSR integration: add `AppRouterCacheProvider` from `@mui/material-nextjs` at the root to stabilize styles and support server-first rendering.
- Remove unnecessary Client Components: e.g., Home page (`src/app/page.tsx`) and `LayoutWrapper` can be server-rendered once SSR is configured.

## High Priority Issues
- SEO baseline: metadata per page, sitemap/robots, canonical URLs, OG/Twitter images; ensure semantic landmarks and heading order.
- Component patterns: create shared UI primitives and refactor pages to use them for consistency and maintainability.
- Posts detail: implement `[slug]` route with build-time path generation for static export.

## Pragmatic Roadmap (2–3 weeks)
1) Enable MUI SSR
   - Install/confirm `@mui/material-nextjs` and wrap `RootLayout` with `AppRouterCacheProvider`.
   - Verify no FOUC; measure initial paint and layout shift.
2) Server-First Cleanup
   - Remove `'use client'` from `src/app/page.tsx`; keep client-only where needed (theme toggle).
   - Consider `LayoutWrapper` as a server component after SSR is stable.
3) Component Primitives
   - Add `src/components/ui/Panel.tsx`, `PageContainer.tsx`, `SectionTitle.tsx`, and spacing helpers.
   - Refactor Home, Work, Resume, PostsLayout to consume primitives.
4) SEO Baseline
   - Add `app/robots.ts`, `app/sitemap.ts`, and complete `metadata` on all routes.
   - Add canonical URLs and OG/Twitter images; validate with Lighthouse.
5) Posts Detail Route
   - Implement `src/app/posts/[slug]/page.tsx` with sanitized HTML and pre-generated params.
   - Add `<article>` semantics, breadcrumbs, and structured data later if needed.
6) Performance Polish
   - Audit bundle: ensure minimal client JS on non-interactive pages.
   - Defer non-critical styles/animations; ensure image dimensions are fixed to reduce CLS.

