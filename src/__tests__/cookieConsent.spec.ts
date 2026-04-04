import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCookieConsentStore } from '../stores/cookieConsent'

beforeEach(() => {
  setActivePinia(createPinia())
  // Wis alle cookies voor elke test
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

describe('useCookieConsentStore — saveConsent', () => {
  it('zet consentGiven op true na saveConsent', () => {
    const store = useCookieConsentStore()
    expect(store.consentGiven).toBe(false)
    store.saveConsent(true)
    expect(store.consentGiven).toBe(true)
  })

  it('zet functionalAccepted altijd op true', () => {
    const store = useCookieConsentStore()
    store.saveConsent(false)
    expect(store.functionalAccepted).toBe(true)
  })

  it('slaat adsenseAccepted correct op (true)', () => {
    const store = useCookieConsentStore()
    store.saveConsent(true)
    expect(store.adsenseAccepted).toBe(true)
  })

  it('slaat adsenseAccepted correct op (false)', () => {
    const store = useCookieConsentStore()
    store.saveConsent(false)
    expect(store.adsenseAccepted).toBe(false)
  })
})

describe('useCookieConsentStore — loadConsent', () => {
  it('herstelt de consent-staat vanuit een cookie', () => {
    // Simuleer een opgeslagen consent-cookie
    const data = encodeURIComponent(JSON.stringify({ consentGiven: true, adsenseAccepted: true }))
    document.cookie = `woordgroep-consent=${data};path=/`

    const store = useCookieConsentStore()
    store.loadConsent()

    expect(store.consentGiven).toBe(true)
    expect(store.functionalAccepted).toBe(true)
    expect(store.adsenseAccepted).toBe(true)
  })

  it('laat state op false als er geen cookie is', () => {
    const store = useCookieConsentStore()
    store.loadConsent()
    expect(store.consentGiven).toBe(false)
  })

  it('negeert een ongeldige cookie zonder te crashen', () => {
    document.cookie = `woordgroep-consent=INVALID_JSON;path=/`
    const store = useCookieConsentStore()
    expect(() => store.loadConsent()).not.toThrow()
    expect(store.consentGiven).toBe(false)
  })

  it('herstelt adsenseAccepted=false correct', () => {
    const data = encodeURIComponent(JSON.stringify({ consentGiven: true, adsenseAccepted: false }))
    document.cookie = `woordgroep-consent=${data};path=/`

    const store = useCookieConsentStore()
    store.loadConsent()

    expect(store.adsenseAccepted).toBe(false)
    expect(store.consentGiven).toBe(true)
  })
})
