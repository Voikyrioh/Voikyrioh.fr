# FullScreenContent

**File**: `src/components/atoms/full-screen-content.vue`

## Purpose

Wrapper component for sections that should span full viewport width/height. Centers content vertically and horizontally.

## Props

None.

## Slots

- **default** — Content to be centered.

## Usage

```vue
<FullScreenContent>
  <div>Content centered on screen</div>
</FullScreenContent>
```

## Implementation Notes

- Uses flexbox `flex items-center justify-center h-screen`.
- Responsive padding for mobile.

