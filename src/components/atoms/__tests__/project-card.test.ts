import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '../project-card.vue'
import SkillBadge from '../skill-badge.vue'
import type { Project } from '@/types/project'

const baseProject: Project = {
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

const globalStubs = {
  RouterLink: {
    template: '<a :href="to"><slot /></a>',
    props: ['to'],
  },
}

describe('ProjectCard', () => {
  it('displays the titleKey', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: baseProject },
      global: { stubs: globalStubs },
    })
    expect(wrapper.find('h3').text()).toBe(baseProject.titleKey)
  })

  it('renders correct number of SkillBadge components', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: baseProject },
      global: { stubs: globalStubs },
    })
    const badges = wrapper.findAllComponents(SkillBadge)
    expect(badges.length).toBe(baseProject.stack.length)
  })

  it('RouterLink has correct to prop', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: baseProject },
      global: { stubs: globalStubs },
    })
    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe(`/project/${baseProject.slug}`)
  })

  it('does not show live link when liveUrl is null', () => {
    const project: Project = { ...baseProject, liveUrl: null }
    const wrapper = mount(ProjectCard, {
      props: { project },
      global: { stubs: globalStubs },
    })
    // Only the RouterLink wrapper (main link), no external live link
    const links = wrapper.findAll('a')
    expect(links.length).toBe(1)
  })
})
