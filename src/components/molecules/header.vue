<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import LangSwitcher from '@/components/atoms/lang-switcher.vue'

const route = useRoute()

const navLinks = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.about', to: '/#about' },
  { labelKey: 'nav.experience', to: '/#experience' },
  { labelKey: 'nav.projects', to: '/#projects' },
  { labelKey: 'nav.skills', to: '/#skills' },
  { labelKey: 'nav.contact', to: '/#contact' },
]

function isActive(to: string): boolean {
  if (to === '/') return route.path === '/' && !route.hash
  return route.path + route.hash === to
}

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
    <nav class="pointer-events-auto flex items-center gap-8 px-6 py-3 mt-4 rounded-2xl transition-all duration-300"
         :class="scrolled ? 'scrolled-nav' : 'top-nav'">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :class="['text-base font-semibold transition-colors hover:text-purple-300', isActive(link.to) ? 'neon-text' : 'text-neutral-200']"
        v-translate:key="link.labelKey"
      ></RouterLink>
      <div class="w-px h-4 bg-neutral-600/50 flex-shrink-0"></div>
      <LangSwitcher />
    </nav>
  </header>
</template>

<style scoped>
.top-nav {
  background: transparent;
}

.scrolled-nav {
  background: rgba(8, 3, 13, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(168, 61, 255, 0.25);
  box-shadow: 0 0 24px rgba(168, 61, 255, 0.1);
}
</style>
