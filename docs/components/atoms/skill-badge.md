# SkillBadge

**File**: `src/components/atoms/skill-badge.vue`

## Purpose

Tag/badge for displaying a skill name. Optional color customization.

## Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| skill | string | Yes | — | Skill name (e.g., "TypeScript", "Vue") |
| color | string | No | "gray" | CSS color class prefix (e.g., "blue", "green") |

## Events

None.

## Usage

```vue
<SkillBadge skill="TypeScript" color="blue" />
<SkillBadge skill="Vue" color="green" />
```

## Implementation Notes

- Renders as a small pill-shaped badge with Tailwind classes.
- Color applied to background (`bg-{color}-100`) and text (`text-{color}-800`).

