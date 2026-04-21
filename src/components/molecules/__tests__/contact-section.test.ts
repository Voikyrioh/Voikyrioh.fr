import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from '../contact-section.vue'

describe('ContactSection', () => {
  const mountWithStubs = () =>
    mount(ContactSection, {
      global: {
        stubs: {
          SectionTitle: { template: '<div />', props: ['titleKey'] },
        },
      },
    })

  it('renders 3 external links', () => {
    const wrapper = mountWithStubs()
    const links = wrapper.findAll('a')
    expect(links.length).toBe(3)
  })

  it('all links have target="_blank" and rel="noopener noreferrer"', () => {
    const wrapper = mountWithStubs()
    const links = wrapper.findAll('a')
    for (const link of links) {
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('noopener noreferrer')
    }
  })

  it('contains GitHub, LinkedIn and email hrefs', () => {
    const wrapper = mountWithStubs()
    const hrefs = wrapper.findAll('a').map(a => a.attributes('href'))
    expect(hrefs.some(h => h?.includes('github.com/Voikyrioh'))).toBe(true)
    expect(hrefs.some(h => h?.includes('linkedin.com'))).toBe(true)
    expect(hrefs.some(h => h?.startsWith('mailto:'))).toBe(true)
  })
})
