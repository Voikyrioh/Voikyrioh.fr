import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillBadge from '../skill-badge.vue'

describe('SkillBadge', () => {
  it('renders the label', () => {
    const wrapper = mount(SkillBadge, { props: { label: 'TypeScript' } })
    expect(wrapper.text()).toBe('TypeScript')
  })

  it('has font-mono class', () => {
    const wrapper = mount(SkillBadge, { props: { label: 'Vue' } })
    expect(wrapper.find('span').classes()).toContain('font-mono')
  })

  it('matches snapshot', () => {
    const wrapper = mount(SkillBadge, { props: { label: 'Rust' } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
