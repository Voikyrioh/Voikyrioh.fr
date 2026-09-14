# SwitchButton

**File**: `src/components/atoms/switch-button.vue`

## Purpose

Toggle switch control for boolean states (e.g., dark mode, notifications).

## Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| modelValue | boolean | No | false | Current toggle state |

## Events

| Event | Payload | Description |
|---|---|---|
| update:modelValue | boolean | Emitted when switch is toggled |

## Usage

```vue
<template>
  <SwitchButton v-model="isDarkMode" />
</template>

<script setup>
import { ref } from 'vue'
const isDarkMode = ref(false)
</script>
```

## Implementation Notes

- Uses v-model for two-way binding.
- Styled as a sliding toggle with Tailwind.
- Keyboard accessible (Enter/Space to toggle).

