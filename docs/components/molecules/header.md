# Header

**File**: `src/components/molecules/header.vue`

## Purpose

Navigation header with site logo, navigation links, and language switcher.

## Props

None.

## Events

None.

## Usage

```vue
<Header />
```

## Implementation Notes

- Navigation links hardcoded: home, about, experience, projects, skills, contact.
- Links include scroll-to-id support via hash routing (`/#about`, etc.).
- Active link styling based on current route and hash.
- LangSwitcher integrated in header.
- Sticky positioning (fixed or relative based on scroll).

