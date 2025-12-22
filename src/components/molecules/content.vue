<script setup lang="ts">
</script>

<template>
  <main class="flex flex-row w-full justify-center">
    <slot/>
  </main>
</template>

<style scoped>
main {
  padding: 1rem;
  margin: 2rem 0;
  height: calc(100vh - var(--header-height) - 4rem);
  overflow-y: scroll;
  scrollbar-width: none;
}
</style>
