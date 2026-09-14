# ADR-001: Vue 3 Single-Page Application

**Status**: Acceptée  
**Type**: Framework  
**Decision Date**: 2024-06-15  

## Context

Portfolio website must be fast, responsive, and showcase projects dynamically. Users navigate between home and project detail pages.

## Decision

Build as a Vue 3 Single-Page Application with client-side rendering (CSR) and Vue Router for navigation.

## Rationale

- Vue 3's Composition API and `<script setup>` simplify component logic.
- SPA provides instant navigation and smooth user experience.
- Vue Router enables deep linking and browser history management.
- TypeScript support ensures type safety throughout the app.
- Excellent developer experience; quick iteration cycles.

## Implementation

- App entry point: `src/main.ts` → `App.vue` with RouterView.
- Routes defined in `src/router/index.ts` (home and project-detail).
- Components composed from atoms/molecules (see ADR-003).

## Alternatives Considered

- Nuxt: Overkill for a portfolio; adds unnecessary complexity.
- React: Viable, but Vue ecosystem preference.
- Static HTML: Would require manual updates for each project; harder to maintain.

## Related

- ADR-003: Atomic Design components.
- ADR-002: Tailwind CSS for styling.

