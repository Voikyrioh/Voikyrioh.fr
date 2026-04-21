import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { mount, flushPromises } from '@vue/test-utils'
import ProjectsSection from '../projects-section.vue'

const featuredProject = {
  slug: 'chess-game',
  titleKey: 'project.chess-game.title',
  summaryKey: 'project.chess-game.summary',
  descriptionKey: 'project.chess-game.description',
  liveUrl: 'https://chess.voikyrioh.fr',
  repoUrl: 'https://github.com/Voikyrioh/my-chess-game',
  stack: ['TypeScript', 'Three.js'],
  status: 'live' as const,
  featured: true,
}

const mockFetchProjects = vi.fn()
const mockGetFeatured = vi.fn(() => [featuredProject])
const mockProjects = ref([featuredProject])
const mockLoading = ref(false)

vi.mock('@/composables/useProjects', () => ({
  useProjects: () => ({
    projects: mockProjects,
    loading: mockLoading,
    error: ref(null),
    fetchProjects: mockFetchProjects,
    getFeatured: mockGetFeatured,
    getBySlug: vi.fn(),
  }),
}))

const globalStubs = {
  SectionTitle: { template: '<div />', props: ['titleKey'] },
  ProjectCard: { template: '<div class="project-card" />', props: ['project'] },
  RouterLink: { template: '<a />', props: ['to'] },
}

describe('ProjectsSection', () => {
  beforeEach(() => {
    mockFetchProjects.mockClear()
    mockLoading.value = false
  })

  it('calls fetchProjects on mount', async () => {
    mount(ProjectsSection, { global: { stubs: globalStubs } })
    await flushPromises()
    expect(mockFetchProjects).toHaveBeenCalledOnce()
  })

  it('renders ProjectCard for each featured project', async () => {
    const wrapper = mount(ProjectsSection, { global: { stubs: globalStubs } })
    await flushPromises()
    const cards = wrapper.findAll('.project-card')
    expect(cards.length).toBe(mockGetFeatured().length)
  })

  it('shows loading state when loading is true', async () => {
    mockLoading.value = true
    const wrapper = mount(ProjectsSection, { global: { stubs: globalStubs } })
    await flushPromises()
    expect(wrapper.find('.project-card').exists()).toBe(false)
  })

  it('toggles between featured and all projects', async () => {
    const wrapper = mount(ProjectsSection, { global: { stubs: globalStubs } })
    await flushPromises()
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    await button.trigger('click')
    // After click showAll = true, projects.value is used
    expect(wrapper.findAll('.project-card').length).toBe(mockProjects.value.length)
  })
})
