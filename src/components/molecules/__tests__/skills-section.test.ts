import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillsSection from '../skills-section.vue'

describe('SkillsSection', () => {
  const mountWithStubs = () =>
    mount(SkillsSection, {
      global: {
        stubs: {
          SectionTitle: { template: '<div />', props: ['titleKey'] },
          SkillBadge: { template: '<span class="skill-badge" />', props: ['label'] },
        },
      },
    })

  it('renders 4 skill groups', () => {
    const wrapper = mountWithStubs()
    // Each group has a card with neon-border
    const groups = wrapper.findAll('.neon-border')
    expect(groups.length).toBe(4)
  })

  it('passes correct titleKey to SectionTitle', () => {
    const SectionTitleStub = { template: '<div />', props: ['titleKey'] }
    const wrapper = mount(SkillsSection, {
      global: {
        stubs: {
          SectionTitle: SectionTitleStub,
          SkillBadge: { template: '<span />', props: ['label'] },
        },
      },
    })
    const st = wrapper.findComponent(SectionTitleStub)
    expect(st.props('titleKey')).toBe('skills.title')
  })

  it('renders correct number of badges per group', () => {
    const wrapper = mountWithStubs()
    const badges = wrapper.findAll('.skill-badge')
    // Frontend: 5, Backend: 4, Tools: 4, Other: 3 = 16
    expect(badges.length).toBe(16)
  })
})
