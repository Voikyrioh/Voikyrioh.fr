# IconLink

**File**: `src/components/atoms/icon-link.vue`

## Purpose

Hyperlink with an icon and optional label. Used for social media links, external references.

## Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| href | string | Yes | — | URL target |
| icon | string | Yes | — | Icon name or emoji |
| label | string | No | — | Accessibility label or title text |

## Events

None.

## Usage

```vue
<IconLink 
  href="https://github.com/voikyrioh" 
  icon="github"
  label="GitHub Profile"
/>
```

## Implementation Notes

- Uses country-flag-icons or Material Symbols for icon rendering.
- Opens links in new tab (`target="_blank"`).
- Includes accessibility attributes (aria-label, title).

