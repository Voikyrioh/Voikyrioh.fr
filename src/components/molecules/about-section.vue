<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useFadeIn } from '@/composables/useFadeIn'
import SectionTitle from '@/components/atoms/section-title.vue'
import logo from '/logo.webp'

const sectionRef = useTemplateRef<HTMLElement>('section')
const { visible } = useFadeIn(sectionRef)

const philosophyCards = [
  {
    titleKey: 'about.approach.learn.title',
    descKey: 'about.approach.learn.desc',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>`,
    color: 'purple',
  },
  {
    titleKey: 'about.approach.build.title',
    descKey: 'about.approach.build.desc',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.653-4.655m5.8-2.02 3.58-3.58a2.652 2.652 0 0 0-3.765-3.765l-3.58 3.58m5.8 2.02-5.8-2.02" /></svg>`,
    color: 'blue',
  },
  {
    titleKey: 'about.approach.curious.title',
    descKey: 'about.approach.curious.desc',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`,
    color: 'green',
  },
]
</script>

<template>
  <section
    id="about"
    ref="section"
    :class="['section-anchor fade-in-section py-24 px-6 max-w-4xl mx-auto', { visible }]"
  >
    <SectionTitle titleKey="about.title" />

    <!-- Speech bubble layout -->
    <div class="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
      <!-- Avatar -->
      <div class="flex-shrink-0">
        <img
          :src="logo"
          class="size-32 md:size-40 rounded-full neon-border object-cover"
          alt="Voikyrioh logo"
        />
      </div>

      <!-- Bubble -->
      <div class="relative w-full speech-bubble neon-border rounded-2xl p-6 md:p-8">
        <p
          class="text-neutral-300 text-lg leading-relaxed"
          v-translate:key="'about.bio'"
        ></p>
      </div>
    </div>

    <!-- Philosophy cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div
        v-for="card in philosophyCards"
        :key="card.titleKey"
        :class="[
          'rounded-2xl p-5 border flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1',
          card.color === 'purple' ? 'border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10' : '',
          card.color === 'blue' ? 'border-blue-400/30 bg-blue-500/5 hover:bg-blue-500/10' : '',
          card.color === 'green' ? 'border-green-400/30 bg-green-500/5 hover:bg-green-500/10' : '',
        ]"
      >
        <div
          :class="[
            'w-10 h-10 rounded-xl flex items-center justify-center',
            card.color === 'purple' ? 'text-purple-400 bg-purple-500/15' : '',
            card.color === 'blue' ? 'text-blue-400 bg-blue-500/15' : '',
            card.color === 'green' ? 'text-green-400 bg-green-500/15' : '',
          ]"
          v-html="card.icon"
        ></div>
        <h3
          class="font-bold text-sm uppercase tracking-wider"
          :class="[
            card.color === 'purple' ? 'text-purple-300' : '',
            card.color === 'blue' ? 'text-blue-300' : '',
            card.color === 'green' ? 'text-green-300' : '',
          ]"
          v-translate:key="card.titleKey"
        ></h3>
        <p
          class="text-neutral-400 text-sm leading-relaxed"
          v-translate:key="card.descKey"
        ></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Speech bubble tail — only on md+ screens */
@media (min-width: 768px) {
  .speech-bubble::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 24px;
    width: 14px;
    height: 14px;
    background: var(--color-neutral-900);
    border-left: 2px solid var(--color-purple-500);
    border-bottom: 2px solid var(--color-purple-500);
    box-shadow: -2px 2px 8px var(--color-purple-500);
    transform: rotate(45deg);
    z-index: 1;
  }
}
</style>
