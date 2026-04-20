import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useCookieConsentStore } from '../stores/cookieConsent'
import CookieBanner from '../components/CookieBanner.vue'

beforeEach(() => {
  setActivePinia(createPinia())
  document.cookie.split(';').forEach((c) => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date(0).toUTCString() + ';path=/')
  })
})

afterEach(() => {
  document.cookie.split(';').forEach((c) => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date(0).toUTCString() + ';path=/')
  })
})

describe('CookieBanner', () => {
  it('rendert de banner met een titel', () => {
    const wrapper = mount(CookieBanner)
    expect(wrapper.find('h2').text()).toBe('Cookiebeleid')
  })

  it('toont de sectie voor functionele cookies', () => {
    const wrapper = mount(CookieBanner)
    expect(wrapper.text()).toContain('Functionele cookies')
  })

  it('roept saveConsent() aan bij klik op "Accepteer cookies"', async () => {
    const store = useCookieConsentStore()
    const wrapper = mount(CookieBanner)
    const knop = wrapper.find('button')
    await knop.trigger('click')
    expect(store.consentGiven).toBe(true)
  })

  it('toont de "Altijd actief" badge voor functionele cookies', () => {
    const wrapper = mount(CookieBanner)
    expect(wrapper.text()).toContain('Altijd actief')
  })
})
