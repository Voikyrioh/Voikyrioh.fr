<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useFadeIn } from '@/composables/useFadeIn'
import SectionTitle from '@/components/atoms/section-title.vue'

const sectionRef = useTemplateRef<HTMLElement>('section')
const { visible } = useFadeIn(sectionRef)

const links = [
  {
    label: 'contact.github',
    href: 'https://github.com/Voikyrioh',
    icon: '/github-icon.svg',
    ariaLabel: 'GitHub',
  },
  {
    label: 'contact.linkedin',
    href: 'https://www.linkedin.com/in/voikyrioh',
    icon: '/linkedin-icon.svg',
    ariaLabel: 'LinkedIn',
  },
  {
    label: 'contact.email',
    href: 'mailto:contact@voikyrioh.fr',
    icon: null,
    ariaLabel: 'Email',
  },
]
</script>

<template>
  <section
    id="contact"
    ref="section"
    :class="['section-anchor aurora-bg fade-in-section py-24 px-6 text-center', { visible }]"
  >
    <div class="max-w-2xl mx-auto">
      <SectionTitle titleKey="contact.title" />
      <p
        class="text-neutral-300 text-lg mb-10"
        v-translate:key="'contact.blurb'"
      ></p>

      <div class="flex gap-8 justify-center flex-wrap">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 text-neutral-300 hover:text-purple-400 transition-colors group"
          :aria-label="link.ariaLabel"
        >
          <img
            v-if="link.icon"
            :src="link.icon"
            class="size-6 invert opacity-70 group-hover:opacity-100 transition-opacity"
            :alt="link.ariaLabel"
          />
          <span v-translate:key="link.label"></span>
        </a>
      </div>
    </div>
  </section>
</template>
