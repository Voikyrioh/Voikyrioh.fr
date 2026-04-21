import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { mount, flushPromises } from '@vue/test-utils'
import ProjectDetail from '../project-detail.vue'
import type { Project } from '@/types/project'

const mockProject: Project = {
  slug: 'chess-game',
  titleKey: 'project.chess-game.title',
  summaryKey: 'project.chess-game.summary',
  descriptionKey: 'project.chess-game.description',
  liveUrl: 'https://chess.voikyrioh.fr',
  repoUrl: 'https://github.com/Voikyrioh/my-chess-game',
  stack: ['TypeScript', 'Three.js'],
  status: 'live',
  featured: true,
}

const mockPush = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: mockPush }),
}))

const mockFetchProjects = vi.fn().mockResolvedValue(undefined)
const mockGetBySlug = vi.fn((slug: string) => (slug === 'chess-game' ? mockProject : undefined))
const mockLoading = ref(false)

vi.mock('@/composables/useProjects', () => ({
  useProjects: () => ({
    projects: ref([mockProject]),
    loading: mockLoading,
    error: ref(null),
    fetchProjects: mockFetchProjects,
    getBySlug: mockGetBySlug,
    getFeatured: vi.fn(),
  }),
}))

const globalStubs = {
  RouterLink: { template: '<a :href="to"><slot /></a>', props: ['to'] },
  SkillBadge: { template: '<span />', props: ['label'] },
}

describe('ProjectDetail', () => {
  it('displays the project titleKey', async () => {
    const wrapper = mount(ProjectDetail, {
      props: { slug: 'chess-game' },
      global: { stubs: globalStubs },
    })
    await flushPromises()
    expect(wrapper.find('h1').text()).toBe(mockProject.titleKey)
  })

  it('redirects to / when slug is unknown', async () => {
    mount(ProjectDetail, {
      props: { slug: 'unknown-slug' },
      global: { stubs: globalStubs },
    })
    await flushPromises()
    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('shows live button when liveUrl exists', async () => {
    const wrapper = mount(ProjectDetail, {
      props: { slug: 'chess-game' },
      global: { stubs: globalStubs },
    })
    await flushPromises()
    const hrefs = wrapper.findAll('a').map(a => a.attributes('href'))
    expect(hrefs).toContain(mockProject.liveUrl)
  })

  it('hides live button when liveUrl is null', async () => {
    mockGetBySlug.mockReturnValueOnce({ ...mockProject, liveUrl: null })
    const wrapper = mount(ProjectDetail, {
      props: { slug: 'chess-game' },
      global: { stubs: globalStubs },
    })
    await flushPromises()
    const hrefs = wrapper.findAll('a').map(a => a.attributes('href'))
    expect(hrefs).not.toContain(mockProject.liveUrl)
  })

  it('hides repo button when repoUrl is null', async () => {
    mockGetBySlug.mockReturnValueOnce({ ...mockProject, repoUrl: null })
    const wrapper = mount(ProjectDetail, {
      props: { slug: 'chess-game' },
      global: { stubs: globalStubs },
    })
    await flushPromises()
    const hrefs = wrapper.findAll('a').map(a => a.attributes('href'))
    expect(hrefs).not.toContain(mockProject.repoUrl)
  })
})
