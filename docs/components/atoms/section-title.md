# SectionTitle

**File**: `src/components/atoms/section-title.vue`

## Purpose

Styled heading for section introductions. Displays title and optional subtitle.

## Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| title | string | Yes | — | Main section heading |
| subtitle | string | No | — | Optional secondary text |

## Events

None.

## Usage

```vue
<SectionTitle 
  title="My Projects"
  subtitle="Explore my recent work"
/>
```

## Implementation Notes

- Uses Tailwind typography classes (`text-4xl`, `font-bold`, etc.).
- Subtitle styled smaller and with reduced opacity.

