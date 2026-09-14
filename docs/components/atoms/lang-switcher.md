# LangSwitcher

**File**: `src/components/atoms/lang-switcher.vue`

## Purpose

Language selection dropdown. Integrates with @Voikyrioh/vue-translate to switch UI language.

## Props

None.

## Events

None (communicates via global i18n context).

## Usage

```vue
<LangSwitcher />
```

## Implementation Notes

- Fetches available languages from translation service.
- Uses `country-flag-icons` for flag display.
- Triggers full UI re-render when language changes via vue-translate.

