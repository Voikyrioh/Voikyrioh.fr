<script setup lang="ts">
const {title, text} = defineProps<{title?: string, text: string}>()
</script>

<template>
  <div class="w-80 neon-border">
    <div v-if="title" class="neon-border card-title">{{title}}</div>
    <p>{{text}}</p>
  </div>
</template>

<style scoped>
  .card-title {
    border-radius: 0;
    padding: 1rem;
  }
</style>
