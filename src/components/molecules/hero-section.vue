<script setup lang="ts">
</script>

<template>
  <section
    id="hero"
    class="aurora-bg section-anchor flex flex-col items-center justify-center min-h-svh relative overflow-hidden"
  >
    <!-- Blob glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-3xl">
      <h1 class="gradient-text text-6xl md:text-8xl font-black mb-4">Voikyrioh</h1>

      <p
        class="text-2xl md:text-3xl font-semibold text-neutral-200 mb-3"
        v-translate:key="'hero.tagline'"
      ></p>
      <p
        class="text-lg text-neutral-400 mb-10"
        v-translate:key="'hero.subtitle'"
      ></p>

      <div class="flex gap-4 justify-center flex-wrap">
        <RouterLink
          to="/#projects"
          class="px-6 py-3 rounded-lg bg-purple-500 text-white font-semibold shadow-[0_0_20px_var(--color-purple-500)] hover:bg-purple-400 transition-colors"
          v-translate:key="'hero.cta.projects'"
        ></RouterLink>
        <RouterLink
          to="/#contact"
          class="px-6 py-3 rounded-lg border border-blue-400 text-blue-400 font-semibold hover:bg-blue-400/10 transition-colors"
          v-translate:key="'hero.cta.contact'"
        ></RouterLink>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-neutral-400 text-2xl select-none">
      ↓
    </div>
  </section>
</template>
