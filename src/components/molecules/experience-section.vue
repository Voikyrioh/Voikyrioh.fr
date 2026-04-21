<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useFadeIn } from '@/composables/useFadeIn'
import SectionTitle from '@/components/atoms/section-title.vue'

const sectionRef = useTemplateRef<HTMLElement>('section')
const { visible } = useFadeIn(sectionRef)

const periods = [
  {
    periodKey: 'experience.shopopop.period2',
    roleKey: 'experience.shopopop.role2',
    descKey: 'experience.shopopop.desc2',
    tags: ['TypeScript', 'Express/Koa', 'Clean architecture', 'MySQL', 'Postgres', 'Jest', 'Biome', 'React', 'Keycloak', 'Docker', 'CI/CD', 'Kubernetes'],
    accent: 'purple',
  },
  {
    periodKey: 'experience.shopopop.period1',
    roleKey: 'experience.shopopop.role1',
    descKey: 'experience.shopopop.desc1',
    tags: ['Angular', 'TypeScript', 'Express', 'MySQL'],
    accent: 'cyan',
  },
  {
    periodKey: 'experience.school.period2',
    roleKey: 'experience.school.role2',
    descKey: 'experience.school.desc2',
    tags: ['C++', 'Electronics', 'MySQL', 'Linux', 'PHP', 'Network'],
    accent: 'cyan',
  },
  {
    periodKey: 'experience.school.period1',
    roleKey: 'experience.school.role1',
    descKey: 'experience.school.desc1',
    tags: ['Electronics', 'Linux', 'Network' ],
    accent: 'blue',
  },
]
</script>

<template>
  <section
    id="experience"
    ref="section"
    :class="['section-anchor fade-in-section py-24 px-6 max-w-4xl mx-auto w-full', { visible }]"
  >
    <SectionTitle titleKey="experience.title" align="left" />

    <!-- Shopopop card -->
    <div class="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/10 via-neutral-800/60 to-neutral-800/80 p-8">
      <!-- Top neon line -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <!-- Company header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <div>
          <h3 class="text-2xl font-black gradient-text">Shopopop</h3>
          <p class="text-neutral-400 text-sm mt-1">2018 — 2026 · Nantes</p>
        </div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/60 via-blue-500/40 to-transparent"></div>

        <div class="flex flex-col gap-8">
          <div
            v-for="period in periods"
            :key="period.periodKey"
            class="pl-10 relative"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center"
              :class="{
                'border-purple-500 bg-purple-500/20': period.accent === 'purple',
                'border-cyan-500 bg-cyan-500/20': period.accent === 'cyan',
                'border-blue-500 bg-blue-500/20': period.accent === 'blue',
              }"
            >
              <div
                class="w-2 h-2 rounded-full"
                :class="{
                  'bg-purple-400': period.accent === 'purple',
                  'bg-cyan-400': period.accent === 'cyan',
                  'bg-blue-400': period.accent === 'blue',
                }"
              ></div>
            </div>

            <!-- Content -->
            <div>
              <div class="flex flex-wrap items-center gap-3 mb-1">
                <span
                  class="text-xs font-mono px-2 py-0.5 rounded-full border"
                  :class="{
                    'text-purple-300 border-purple-500/40 bg-purple-500/10': period.accent === 'purple',
                    'text-cyan-300 border-cyan-500/40 bg-cyan-500/10': period.accent === 'cyan',
                    'text-blue-300 border-blue-500/40 bg-blue-500/10': period.accent === 'blue',
                  }"
                  v-translate:key="period.periodKey"
                ></span>
              </div>
              <h4 class="font-bold text-neutral-100 text-lg mb-2" v-translate:key="period.roleKey"></h4>
              <p class="text-neutral-400 text-sm leading-relaxed mb-4" v-translate:key="period.descKey"></p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in period.tags"
                  :key="tag"
                  class="text-xs font-mono px-2 py-1 rounded-lg bg-white/5 text-neutral-300 border border-white/10"
                >{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
