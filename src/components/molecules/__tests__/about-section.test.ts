import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutSection from '../about-section.vue'

describe('AboutSection', () => {
  it('has id="about"', () => {
    const wrapper = mount(AboutSection, {
      global: { stubs: { SectionTitle: { template: '<div class="section-title" />', props: ['titleKey'] } } },
    })
    expect(wrapper.find('#about').exists()).toBe(true)
  })

  it('passes titleKey="about.title" to SectionTitle', () => {
    const SectionTitleStub = {
      template: '<div class="section-title" />',
      props: ['titleKey'],
    }
    const wrapper = mount(AboutSection, {
      global: { stubs: { SectionTitle: SectionTitleStub } },
    })
    const st = wrapper.findComponent(SectionTitleStub)
    expect(st.props('titleKey')).toBe('about.title')
  })
})
