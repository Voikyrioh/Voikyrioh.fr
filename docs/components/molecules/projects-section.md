# ProjectsSection

**File**: `src/components/molecules/projects-section.vue`

## Purpose

Displays grid of project cards (excluding learning projects). Composed from SectionTitle and ProjectCard components.

## Props

None.

## Events

None.

## Usage

```vue
<ProjectsSection />
```

## Implementation Notes

- Fetches projects via useProjects composable.
- Filters out projects with `status === 'learning'`.
- Responsive grid (1 column mobile, 2-3 columns desktop).

