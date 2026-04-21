<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import { useProjects } from '@/composables/useProjects'
import { useFadeIn } from '@/composables/useFadeIn'
import SectionTitle from '@/components/atoms/section-title.vue'
import ProjectCard from '@/components/atoms/project-card.vue'

const sectionRef = useTemplateRef<HTMLElement>('section')
const { visible } = useFadeIn(sectionRef)

const { projects, loading, fetchProjects, getFeatured } = useProjects()

const showAll = ref(false)

const displayedProjects = computed(() =>
  showAll.value ? projects.value : getFeatured(),
)

onMounted(() => {
  fetchProjects()
})
</script>

<template>
  <section
    id="projects"
    ref="section"
    :class="['section-anchor fade-in-section py-24 px-6 max-w-6xl mx-auto w-full', { visible }]"
  >
    <SectionTitle titleKey="projects.title" />

    <p
      class="text-neutral-400 text-base leading-relaxed mb-8 max-w-2xl italic"
      v-translate:key="'projects.philosophy'"
    ></p>

    <div v-if="loading" class="text-center text-neutral-400 py-12">
      <span v-translate:key="'projects.loading'"></span>
    </div>

    <template v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="(project, i) in displayedProjects"
          :key="project.slug"
          :project="project"
          :class="{ 'md:col-span-2': i === 0 && !showAll }"
        />
      </div>

      <div class="text-center mt-8">
        <button
          class="px-4 py-2 border border-purple-500/40 rounded-lg text-purple-300 hover:bg-purple-500/10 transition-colors"
          @click="showAll = !showAll"
        >
          <span v-if="showAll" v-translate:key="'projects.show-less'"></span>
          <span v-else v-translate:key="'projects.show-all'"></span>
        </button>
      </div>
    </template>
  </section>
</template>
