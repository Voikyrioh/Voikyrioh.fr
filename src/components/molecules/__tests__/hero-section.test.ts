import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../hero-section.vue'

const globalStubs = {
  RouterLink: {
    template: '<a :href="to"><slot /></a>',
    props: ['to'],
  },
}

describe('HeroSection', () => {
  it('has id="hero"', () => {
    const wrapper = mount(HeroSection, { global: { stubs: globalStubs } })
    expect(wrapper.find('#hero').exists()).toBe(true)
  })

  it('has 2 RouterLink elements with correct to props', () => {
    const wrapper = mount(HeroSection, { global: { stubs: globalStubs } })
    const links = wrapper.findAll('a')
    const hrefs = links.map(l => l.attributes('href'))
    expect(hrefs).toContain('/#projects')
    expect(hrefs).toContain('/#contact')
  })
})
