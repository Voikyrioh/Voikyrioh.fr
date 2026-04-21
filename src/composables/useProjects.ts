import { ref } from 'vue'
import { ProjectsSchema, type Project } from '@/types/project'

const _projects = ref<Project[]>([])
const _loading = ref(false)
const _error = ref<string | null>(null)
let _fetched = false

export function useProjects() {
  async function fetchProjects() {
    if (_fetched) return
    _fetched = true
    _loading.value = true
    _error.value = null
    try {
      const res = await fetch('/data/projects.json')
      if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`)
      const raw = await res.json()
      _projects.value = ProjectsSchema.parse(raw)
    } catch (e) {
      _error.value = e instanceof Error ? e.message : 'Unknown error'
      _fetched = false
    } finally {
      _loading.value = false
    }
  }

  function getBySlug(slug: string): Project | undefined {
    return _projects.value.find(p => p.slug === slug)
  }

  function getFeatured(): Project[] {
    return _projects.value.filter(p => p.featured)
  }

  return {
    projects: _projects,
    loading: _loading,
    error: _error,
    fetchProjects,
    getBySlug,
    getFeatured,
  }
}
