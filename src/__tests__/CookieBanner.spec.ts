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

  it('toont de secties voor functionele en AdSense-cookies', () => {
    const wrapper = mount(CookieBanner)
    const tekst = wrapper.text()
    expect(tekst).toContain('Functionele cookies')
    expect(tekst).toContain('Google AdSense-cookies')
  })

  it('roept saveConsent(true) aan bij klik op "Accepteer alle cookies"', async () => {
    const store = useCookieConsentStore()
    const wrapper = mount(CookieBanner)
    const knoppen = wrapper.findAll('button')
    const accepteerKnop = knoppen.find((b) => b.text().includes('Accepteer alle cookies'))
    await accepteerKnop!.trigger('click')
    expect(store.consentGiven).toBe(true)
    expect(store.adsenseAccepted).toBe(true)
  })

  it('roept saveConsent(false) aan bij klik op "Weiger advertentiecookies"', async () => {
    const store = useCookieConsentStore()
    const wrapper = mount(CookieBanner)
    const knoppen = wrapper.findAll('button')
    const weigerKnop = knoppen.find((b) => b.text().includes('Weiger advertentiecookies'))
    await weigerKnop!.trigger('click')
    expect(store.consentGiven).toBe(true)
    expect(store.adsenseAccepted).toBe(false)
  })

  it('toont de "Altijd actief" badge voor functionele cookies', () => {
    const wrapper = mount(CookieBanner)
    expect(wrapper.text()).toContain('Altijd actief')
  })
})
