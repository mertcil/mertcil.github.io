# Project Brief

Project: Personal portfolio for Mevlut Mert CIL built on Next.js App Router with MUI styled() and TypeScript.

## Purpose
- Showcase experience, past work, and writing with a professional, fast, and accessible site.
- Prioritize a server-first architecture for SEO and performance while using MUI styled() for design consistency.

## Vision
- Clean, modern, and responsive portfolio that loads fast, indexes well, and is easy to extend.
- Uses a small set of reusable UI primitives and consistent tokens.

## Audience
- Recruiters, hiring managers, peers, and collaborators evaluating experience and craft.

## Scope (Initial)
- Core pages: Home, Posts, Resume, Work, Documents, Contact.
- Theming with light/dark switch.
- Blog system from Markdown with validated frontmatter and safe rendering.

## Non‑Goals (Initial)
- CMS integration, comments, or complex authoring workflow.
- Heavy animation libraries or visual effects that hurt performance.

## Success Metrics
- Technical: CLS < 0.1, LCP < 2.5s (desktop), no hydration errors, minimal client JS on static pages.
- Content: Clear navigation, consistent brand, semantic structure, complete metadata for SEO.

## Priorities
1) Component Patterns (server-first, primitive components, clean tokens)
2) Performance (reduce client bundles, SSR styles, image optimization)
3) SEO (complete metadata, sitemap/robots, semantic markup)

## Deliverables (Phase 1)
- Server-first pages and shared UI primitives.
- MUI + Emotion SSR configured for App Router to prevent FOUC.
- SEO baseline: metadata, Open Graph/Twitter, sitemap, robots, canonical.

