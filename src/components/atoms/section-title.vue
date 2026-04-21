<script setup lang="ts">
withDefaults(defineProps<{
  titleKey: string
  align?: 'left' | 'center'
}>(), {
  align: 'center',
})
</script>

<template>
  <div :class="['mb-8', align === 'center' ? 'text-center' : 'text-left']">
    <h2
      class="gradient-text text-3xl font-bold"
      v-translate:key="titleKey"
    ></h2>
    <div :class="['h-px mt-2 neon-border-bottom', align === 'center' ? 'mx-auto w-24' : 'w-24']"></div>
  </div>
</template>
