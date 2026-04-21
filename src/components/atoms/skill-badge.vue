<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="font-mono text-sm rounded-full border border-purple-500/40 px-3 py-1 text-purple-200 bg-purple-900/20">
    {{ label }}
  </span>
</template>
