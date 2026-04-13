<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref, useTemplateRef } from "vue";
  import logo from "/logo.webp"
  const header = useTemplateRef('header');
  const scrollY = ref(window.scrollY);
  const retracted = computed(() => {
    return header.value && scrollY.value >= header.value.clientHeight;
  });

  function handleScroll() {
    scrollY.value = window.scrollY;
    console.log(scrollY.value);
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
<header ref="header" :class="{ retracted }" class="flex justify-center items-center w-full shadow-box neon-border-bottom">
  <img :src="logo" class="size-20">
  <h1 class="font-bold text-4xl -ml-4 neon-logo">oikyrioh.fr</h1>

  <SelectLang class="langSelect neon-border p-2 bg-purple-400"></SelectLang>
</header>
</template>

<style scoped>
header {
  height: var(--header-height);
  padding: 1rem;
  position: sticky;
  top: 0;
  background-color: var(--color-neutral-900);
}

.langSelect {
  position: absolute;
  right: 2rem;
  top: 2rem;
}
</style>
