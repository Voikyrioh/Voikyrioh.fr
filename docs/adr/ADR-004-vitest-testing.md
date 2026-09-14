# ADR-004: Vitest for Unit Testing

**Status**: Acceptée  
**Type**: Testing  
**Decision Date**: 2024-06-15  

## Context

Components and composables need automated tests. Test runner must be fast and integrate with Vue 3.

## Decision

Use **Vitest 4.1** as the unit test runner, with Happy DOM as the primary test environment and jsdom as fallback.

## Rationale

- Vitest is Vite-native; uses same transpiler and config; instant feedback.
- Lightweight and fast compared to Jest.
- Supports Vue components via `@vue/test-utils`.
- Compatible with `@vitest/coverage-v8` for coverage reporting.

## Implementation

- Test files colocated with source: `src/components/atoms/__tests__/*.test.ts`.
- Run: `npm run test` (watch mode) or `npm run coverage` (one-time + report).
- Test config in `vitest.config.ts`; uses Happy DOM by default.

## Constraints

- Tests must not mock Vue Router or translation library unless necessary.
- Snapshot testing avoided; prefer exact assertions.

## Related

- ADR-003: Atomic components make testing easier (no nested complex state).
- ADR-001: SPA nature simplifies test setup.

