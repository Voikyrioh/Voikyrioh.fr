<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProjects } from '@/composables/useProjects'
import SkillBadge from '@/components/atoms/skill-badge.vue'

const props = defineProps<{ slug: string }>()

const router = useRouter()
const { getBySlug, fetchProjects, loading } = useProjects()

onMounted(async () => {
  await fetchProjects()
  if (!getBySlug(props.slug)) {
    router.push('/')
  }
})

const project = computed(() => getBySlug(props.slug))
const imageError = ref(false)

const statusClass: Record<string, string> = {
  live: 'status-live',
  published: 'status-published',
  'in-progress': 'status-in-progress',
  learning: 'status-learning',
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-16">
    <RouterLink
      to="/"
      class="inline-flex items-center gap-2 text-neutral-400 hover:text-purple-300 transition-colors mb-8"
      v-translate:key="'project.detail.back'"
    ></RouterLink>

    <div v-if="loading" class="text-center py-12">
      <span v-translate:key="'project.detail.loading'" class="text-neutral-400"></span>
    </div>

    <template v-else-if="project">
      <figure
        v-if="project.imageUrl && !imageError"
        class="mb-8 rounded-2xl overflow-hidden neon-border"
      >
        <img
          :src="project.imageUrl"
          alt=""
          class="w-full aspect-video object-cover"
          @error="imageError = true"
        />
      </figure>

      <div class="neon-border p-8 mb-8">
        <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
          <h1 class="gradient-text text-4xl font-black" v-translate:key="project.titleKey"></h1>
          <span :class="['font-mono text-sm', statusClass[project.status]]">
            {{ project.status }}
          </span>
        </div>

        <div class="flex flex-wrap gap-2 mb-6">
          <SkillBadge v-for="tech in project.stack" :key="tech" :label="tech" />
        </div>

        <div class="flex gap-4 flex-wrap">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-400 transition-colors"
            v-translate:key="'project.detail.visit-live'"
          ></a>
          <a
            v-if="project.repoUrl"
            :href="project.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 rounded-lg border border-blue-400 text-blue-400 font-semibold hover:bg-blue-400/10 transition-colors"
            v-translate:key="'project.detail.view-repo'"
          ></a>
        </div>
      </div>

      <div class="text-neutral-300 leading-relaxed" v-translate:key="project.descriptionKey"></div>
    </template>
  </div>
</template>
