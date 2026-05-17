<script setup lang="ts">
import { inject, ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

interface I18n {
  activeLanguage: string
  languageRef: Ref<string | undefined>
  availableLanguages: string[]
}

const i18n = inject<I18n>('i18n')
const open = ref(false)
const rootEl = ref<HTMLElement | null>(null)

const flagMap: Record<string, string> = {
  'fr-FR': '🇫🇷',
  'en-US': '🇺🇸',
}

const labelMap: Record<string, string> = {
  'fr-FR': 'FR',
  'en-US': 'EN',
}

function flag(lang: string): string {
  return flagMap[lang] ?? ''
}

function label(lang: string): string {
  return labelMap[lang] ?? lang.split('-')[0].toUpperCase()
}

function selectLang(lang: string) {
  if (i18n) i18n.activeLanguage = lang
  open.value = false
}

function onClickOutside(e: MouseEvent) {
  if (rootEl.value && !rootEl.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div ref="rootEl" class="relative" v-if="i18n">
    <button
      @click.stop="open = !open"
      class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/15 hover:border-purple-400/50 transition-all duration-200 cursor-pointer"
    >
      <span class="text-base leading-none">{{ flag(i18n.languageRef.value ?? '') }}</span>
      <span class="font-mono text-xs font-semibold text-purple-300">{{ label(i18n.languageRef.value ?? '') }}</span>
    </button>

    <Transition name="dropdown">
      <div
        v-if="open"
        class="absolute right-0 top-full mt-2 rounded-xl border border-purple-500/30 bg-neutral-900/95 backdrop-blur-xl shadow-lg shadow-purple-500/10 overflow-hidden z-50 min-w-[7rem]"
      >
        <button
          v-for="lang in i18n.availableLanguages"
          :key="lang"
          @click="selectLang(lang)"
          class="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm hover:bg-purple-500/10 transition-colors text-left cursor-pointer"
          :class="lang === i18n.languageRef.value ? 'text-purple-300 font-semibold' : 'text-neutral-300'"
        >
          <span class="text-base leading-none">{{ flag(lang) }}</span>
          <span class="font-mono text-xs">{{ label(lang) }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
