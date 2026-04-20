import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'
import App from '../App.vue'
import StartschermView from '../views/StartschermView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/', component: StartschermView }],
})

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

describe('App', () => {
  it('toont de CookieBanner als er geen consent is', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, createPinia()],
      },
    })
    await router.isReady()
    expect(wrapper.text()).toContain('Cookiebeleid')
  })

  it('rendert de RouterView na consent', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)

    // Simuleer opgeslagen consent
    const data = encodeURIComponent(JSON.stringify({ consentGiven: true }))
    document.cookie = `woordgroep-consent=${data};path=/`

    const { useCookieConsentStore } = await import('../stores/cookieConsent')
    const consentStore = useCookieConsentStore()
    consentStore.loadConsent()

    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia],
      },
    })
    await router.isReady()
    expect(wrapper.html()).toBeTruthy()
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
  })
})
