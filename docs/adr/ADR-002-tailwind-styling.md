# ADR-002: Tailwind CSS for Styling

**Status**: Acceptée  
**Type**: Styling  
**Decision Date**: 2024-06-15  

## Context

Portfolio needs consistent, maintainable styling. Must support responsive design and dark/light themes.

## Decision

Use **Tailwind CSS 4** as the primary styling framework. No CSS-in-JS or external component libraries.

## Rationale

- Utility-first approach reduces CSS duplication.
- Built-in dark mode support.
- Excellent TypeScript support; no style prop generation needed.
- JIT compilation ensures small production bundle.
- Large ecosystem; easy to find patterns and extensions.

## Implementation

- Global styles in `src/style.css` (custom CSS overrides and Tailwind imports).
- Components use only Tailwind classes and minimal scoped `<style>` blocks.
- Responsive breakpoints: `sm`, `md`, `lg`, `xl`, `2xl` (Tailwind defaults).

## Constraints

- No inline styles; all styling via Tailwind classes or `<style>` blocks.
- Color palette defined in Tailwind config (currently default theme).

## Related

- ADR-003: Atomic components structure supports styling isolation.

