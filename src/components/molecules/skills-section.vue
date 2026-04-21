<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useFadeIn } from '@/composables/useFadeIn'
import SectionTitle from '@/components/atoms/section-title.vue'

const sectionRef = useTemplateRef<HTMLElement>('section')
const { visible } = useFadeIn(sectionRef)

type Accent = 'blue' | 'green' | 'purple' | 'teal'

const groups: { titleKey: string; skills: string[]; accent: Accent }[] = [
  {
    titleKey: 'skills.group.frontend',
    skills: ['Vue 3', 'React', 'Angular', 'TypeScript', 'Tailwind', 'Three.js', 'WebGPU'],
    accent: 'blue',
  },
  {
    titleKey: 'skills.group.backend',
    skills: ['Node.js', 'Express/Koa', 'Fastify', 'MySQL', 'Rust', 'C#', 'C++'],
    accent: 'green',
  },
  {
    titleKey: 'skills.group.testing',
    skills: ['Jest', 'Storybook', 'Mocha', 'Zod'],
    accent: 'purple',
  },
  {
    titleKey: 'skills.group.tools',
    skills: ['Vite', 'Git', 'Docker', 'nginx'],
    accent: 'teal',
  },
]

const skillIconUrl: Record<string, string | null> = {
  'Vue 3':       'https://cdn.simpleicons.org/vuedotjs/4FC08D',
  'React':       'https://cdn.simpleicons.org/react/61DAFB',
  'Angular':     'https://cdn.simpleicons.org/angular/DD0031',
  'TypeScript':  'https://cdn.simpleicons.org/typescript/3178C6',
  'Tailwind':    'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Three.js':    'https://cdn.simpleicons.org/threedotjs/ffffff',
  'WebGPU':      null,
  'Node.js':     'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  'Express/Koa': null,
  'Fastify':     'https://cdn.simpleicons.org/fastify/ffffff',
  'MySQL':       'https://cdn.simpleicons.org/mysql/4479A1',
  'Rust':        'https://cdn.simpleicons.org/rust/CE422B',
  'C#':          'https://cdn.simpleicons.org/csharp/9B4F96',
  'C++':         'https://cdn.simpleicons.org/cplusplus/00599C',
  'Jest':        'https://cdn.simpleicons.org/jest/C21325',
  'Storybook':   'https://cdn.simpleicons.org/storybook/FF4785',
  'Mocha':       'https://cdn.simpleicons.org/mocha/8D6748',
  'Zod':         null,
  'Vite':        'https://cdn.simpleicons.org/vite/646CFF',
  'Git':         'https://cdn.simpleicons.org/git/F05032',
  'Docker':      'https://cdn.simpleicons.org/docker/2496ED',
  'nginx':       'https://cdn.simpleicons.org/nginx/009639',
}
</script>

<template>
  <section
    id="skills"
    ref="section"
    :class="['section-anchor fade-in-section py-24 px-6 max-w-6xl mx-auto w-full', { visible }]"
  >
    <SectionTitle titleKey="skills.title" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(group, idx) in groups"
        :key="group.titleKey"
        class="relative overflow-hidden rounded-2xl border p-6"
        :class="{
          'border-blue-500/30   bg-gradient-to-br from-blue-900/20   via-neutral-800/60 to-neutral-800/80': group.accent === 'blue',
          'border-green-500/30  bg-gradient-to-br from-green-900/20  via-neutral-800/60 to-neutral-800/80': group.accent === 'green',
          'border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-neutral-800/60 to-neutral-800/80': group.accent === 'purple',
          'border-blue-400/30   bg-gradient-to-br from-blue-800/15   via-neutral-800/60 to-neutral-800/80': group.accent === 'teal',
        }"
      >
        <!-- Top accent line -->
        <div
          class="absolute top-0 left-0 right-0 h-px"
          :class="{
            'bg-gradient-to-r from-transparent via-blue-500   to-transparent': group.accent === 'blue',
            'bg-gradient-to-r from-transparent via-green-500  to-transparent': group.accent === 'green',
            'bg-gradient-to-r from-transparent via-purple-500 to-transparent': group.accent === 'purple',
            'bg-gradient-to-r from-transparent via-blue-400   to-transparent': group.accent === 'teal',
          }"
        ></div>

        <!-- Group header -->
        <div class="flex items-center gap-3 mb-5">
          <div
            class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            :class="{
              'bg-blue-500/15   text-blue-400':   group.accent === 'blue',
              'bg-green-500/15  text-green-400':  group.accent === 'green',
              'bg-purple-500/15 text-purple-400': group.accent === 'purple',
              'bg-blue-400/15   text-blue-300':   group.accent === 'teal',
            }"
          >
            <!-- Frontend: code brackets -->
            <svg v-if="idx === 0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
            <!-- Backend: terminal -->
            <svg v-else-if="idx === 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5 9.75 9.75 6.75 12m4.5 0h3M5.25 20.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <!-- Testing: beaker -->
            <svg v-else-if="idx === 2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
            <!-- Tools: wrench -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
            </svg>
          </div>

          <h3
            class="font-bold text-sm uppercase tracking-widest"
            :class="{
              'text-blue-400':   group.accent === 'blue',
              'text-green-400':  group.accent === 'green',
              'text-purple-400': group.accent === 'purple',
              'text-blue-300':   group.accent === 'teal',
            }"
            v-translate:key="group.titleKey"
          ></h3>
        </div>

        <!-- Skill items -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <div
            v-for="skill in group.skills"
            :key="skill"
            class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/[0.08] transition-colors"
          >
            <img
              v-if="skillIconUrl[skill]"
              :src="skillIconUrl[skill]!"
              :alt="skill"
              class="w-5 h-5 flex-shrink-0"
              loading="lazy"
            />
            <div
              v-else
              class="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center text-xs font-bold text-neutral-400 bg-neutral-600/50 select-none"
            >
              {{ skill[0] }}
            </div>
            <span class="text-sm font-medium text-neutral-200 truncate">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
