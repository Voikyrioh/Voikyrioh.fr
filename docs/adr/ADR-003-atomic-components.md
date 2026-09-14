# ADR-003: Atomic Design Component Hierarchy

**Status**: Acceptée  
**Type**: Architecture  
**Decision Date**: 2024-06-15  

## Context

Components must be reusable and composable. Clear hierarchy improves maintainability and discovery.

## Decision

Organize components using Atomic Design principles:
- **Atoms**: Smallest UI units (buttons, badges, icons, switches).
- **Molecules**: Composite components combining atoms (sections, cards).
- **Pages**: Full-page views combining molecules.

## Rationale

- Atomic Design is widely understood; new contributors immediately know where to look.
- Forces single-responsibility principle at component level.
- Encourages reuse; prevents component duplication.
- Reduces testing burden by testing atoms independently.

## Implementation

- File structure: `src/components/atoms/`, `src/components/molecules/`.
- Each component is a single `.vue` file with `<script setup>` and `defineProps`/`defineEmits`.
- Pages in `src/pages/` compose molecules; not intended for direct reuse.

### Current Components

**Atoms** (8): full-screen-content, icon-link, lang-switcher, project-card, section-title, skill-badge, switch-button, and helpers.

**Molecules** (10): about-section, contact-section, content-card, experience-section, footer, header, hero-section, projects-section, skills-section.

**Pages** (2): home, project-detail.

## Related

- ADR-002: Tailwind CSS ensures styling is scoped per component.

