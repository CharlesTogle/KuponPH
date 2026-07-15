# ADR-001: Tech Stack

**Status**: Accepted  
**Date**: 2026-07-15  

## Context

KuponPH is a Philippines-focused coupon and sale discovery platform. The initial build needs to ship fast with minimal operational overhead while keeping the stack flexible enough for SEO, content pages, and ingestion pipelines.

## Decision

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | **React + Vite** | Vite gives instant HMR and fast builds. React without Next avoids the App Router complexity and server-cost overhead for a content-forward site that can be deployed as a static SPA or behind a lightweight SSR layer later if needed. Minimal overhead for a team of three. |
| Backend | **Fastify** | Lightweight, fast, TypeScript-native. Node-based so the team only speaks one language. No heavy framework tax — just routes, hooks, and plugins. Easy to deploy on Render as a long-running service. |
| Database | **Supabase (Postgres)** | Managed Postgres with a built-in dashboard for early moderation work before a custom admin exists. Free tier covers MVP. |
| Hosting | **Vercel (client) + Render (server)** | Vite SPA on Vercel is free and fast. Fastify on Render handles the API and scheduled ingestion jobs. |

## Consequences

- Vite SPA means SEO depends on `react-helmet-async` and prerender/SSR work later. Acceptable for MVP — core traffic will come from platform/category/campaign landing pages that can be server-rendered once we add a simple SSR proxy or switch to Next if needed.
- Fastify keeps the backend lean — no ORM or framework cruft out of the box. We add `kysely` or `drizzle` when the schema stabilizes.
- Whole team works in TypeScript. Single-language stack reduces context switching.
