import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionTitle from '../section-title.vue'

describe('SectionTitle', () => {
  it('renders with the given titleKey', () => {
    const wrapper = mount(SectionTitle, { props: { titleKey: 'test.key' } })
    const h2 = wrapper.find('h2')
    expect(h2.exists()).toBe(true)
    expect(h2.text()).toBe('test.key')
  })

  it('defaults align to center', () => {
    const wrapper = mount(SectionTitle, { props: { titleKey: 'k' } })
    expect(wrapper.find('div').classes()).toContain('text-center')
  })

  it('applies text-left when align="left"', () => {
    const wrapper = mount(SectionTitle, { props: { titleKey: 'k', align: 'left' } })
    expect(wrapper.find('div').classes()).toContain('text-left')
  })
})
