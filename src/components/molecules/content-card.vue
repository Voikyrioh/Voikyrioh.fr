<script setup lang="ts">
const {title, text} = defineProps<{title?: string, text: string}>()
</script>

<template>
  <div class="w-2/3 neon-border">
    <div v-if="title" class="card-title neon-text" v-translate:key="title"></div>
    <div class="card-body"><p v-translate:key="text"></p></div>
  </div>
</template>

<style scoped>
  .card-title, .card-body {
    padding: 1rem;
  }
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
</style>
