# ProjectDetail Page

**File**: `src/pages/project-detail.vue`  
**Route**: `/project/:slug`  
**Lazy-loaded**: Yes

## Purpose

Individual project showcase with full details, images, description, and related projects.

## Props

| Prop | Type | Description |
|---|---|---|
| slug | string | URL-safe project identifier |

## Implementation Notes

- Slug extracted from route params and used to fetch project details.
- Displays project title, hero image, description, technologies used, links (demo, repo).
- Back button to return to projects section.
- Related/recommended projects shown at bottom.
- Lazy-loaded to reduce initial bundle size.

