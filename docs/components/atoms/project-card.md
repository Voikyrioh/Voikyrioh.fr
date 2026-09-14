# ProjectCard

**File**: `src/components/atoms/project-card.vue`

## Purpose

Displays a project summary card with image, title, description, status badge, and skills. Clickable to navigate to project detail.

## Props

| Prop | Type | Required | Description |
|---|---|---|---|
| project | Project | Yes | Project object with id, slug, title, image, status, skills |

## Events

None (uses RouterLink for navigation).

## Types

```typescript
interface Project {
  id: string
  slug: string
  title: string
  image?: string
  description?: string
  status: 'live' | 'published' | 'in-progress' | 'learning'
  skills: string[]
}
```

## Usage

```vue
<ProjectCard :project="project" />
```

## Status Styles

- **live**: Green badge
- **published**: Blue badge
- **in-progress**: Yellow badge
- **learning**: Gray badge

## Implementation Notes

- Image fallback for missing `project.image`.
- Uses SkillBadge for each skill.
- Card links to `/project/:slug`.

