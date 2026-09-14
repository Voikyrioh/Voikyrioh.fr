# ADR-005: Vue Router 5 for SPA Routing

**Status**: Acceptée  
**Type**: Librairie  
**Decision Date**: 2024-06-15  

## Context

SPA needs client-side routing to navigate between home and project detail pages without full page reload.

## Decision

Use **Vue Router 5.0.4** for all routing logic.

## Rationale

- Official Vue router; guaranteed compatibility with Vue 3.
- Supports lazy-loading components for code-splitting.
- History API for clean URLs; fallback to hash-based routes available.
- Excellent TypeScript support.

## Implementation

- Routes defined in `src/router/index.ts`.
- Two routes: `/` (home) and `/project/:slug` (project detail).
- Lazy-loaded project-detail component: `() => import('@/pages/project-detail.vue')`.
- Scroll behavior: smooth scroll to hash, top on navigation.

## Routes

| Path | Component | Props | Purpose |
|---|---|---|---|
| `/` | home.vue | — | Display hero + sections |
| `/project/:slug` | project-detail.vue | slug (string) | Show individual project |

## Related

- ADR-001: Vue 3 SPA foundation.

