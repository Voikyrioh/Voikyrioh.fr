<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/types/project'
import SkillBadge from './skill-badge.vue'

const props = defineProps<{ project: Project }>()

const imageError = ref(false)

const statusClass: Record<Project['status'], string> = {
  live: 'status-live',
  published: 'status-published',
  'in-progress': 'status-in-progress',
  learning: 'status-learning',
}
</script>

<template>
  <RouterLink
    :to="`/project/${props.project.slug}`"
    class="neon-border overflow-hidden rounded-2xl flex flex-col group cursor-pointer"
  >
    <!-- Image -->
    <figure v-if="props.project.imageUrl && !imageError" class="relative overflow-hidden flex-shrink-0">
      <img
        :src="props.project.imageUrl"
        alt=""
        loading="lazy"
        class="w-full aspect-video object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        @error="imageError = true"
      />
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-inset ring-purple-500/60 pointer-events-none shadow-[inset_0_0_24px_rgba(168,61,255,0.3)]"></div>
    </figure>

    <!-- Placeholder -->
    <div v-else class="w-full aspect-video aurora-bg flex-shrink-0 flex items-center justify-center relative overflow-hidden">
      <!-- Blobs décoratifs -->
      <div class="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-1/4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl pointer-events-none"></div>
      <!-- Icône code -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-12 h-12 text-purple-500/40">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    </div>

    <!-- Corps -->
    <div class="p-4 flex flex-col gap-3 flex-1">
      <div class="flex items-center justify-between gap-2">
        <h3 class="font-bold text-lg leading-tight" v-translate:key="props.project.titleKey"></h3>
        <span :class="['text-sm font-mono shrink-0', statusClass[props.project.status]]">
          {{ props.project.status }}
        </span>
      </div>

      <p class="text-neutral-400 text-sm" v-translate:key="props.project.summaryKey"></p>

      <div class="flex flex-wrap gap-2">
        <SkillBadge v-for="tech in props.project.stack" :key="tech" :label="tech" />
      </div>

      <a
        v-if="props.project.liveUrl"
        :href="props.project.liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-400 text-sm hover:underline mt-auto"
        @click.stop
        v-translate:key="'project.card.view-live'"
      ></a>
    </div>
  </RouterLink>
</template>
