import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import StartschermView from '../views/StartschermView.vue'
import { useStatsStore } from '../stores/stats'

function maakRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: StartschermView },
      { path: '/spel/:moeilijkheid', component: { template: '<div>Spel</div>' } },
    ],
  })
}

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

describe('StartschermView', () => {
  it('toont de drie moeilijkheidsgraden', () => {
    const router = maakRouter()
    const wrapper = mount(StartschermView, { global: { plugins: [router] } })
    const tekst = wrapper.text()
    expect(tekst).toContain('Gemakkelijk')
    expect(tekst).toContain('Gemiddeld')
    expect(tekst).toContain('Moeilijk')
  })

  it('toont statistieken per moeilijkheidsgraad', () => {
    const store = useStatsStore()
    store.stats.gemakkelijk.gespeeld = 4
    store.stats.gemakkelijk.gewonnen = 2

    const router = maakRouter()
    const wrapper = mount(StartschermView, { global: { plugins: [router] } })
    expect(wrapper.text()).toContain('2 / 4 gewonnen')
  })

  it('toont een Speel-knop als kanSpelenVandaag true is', () => {
    const router = maakRouter()
    const wrapper = mount(StartschermView, { global: { plugins: [router] } })
    const knoppen = wrapper.findAll('button')
    expect(knoppen.length).toBeGreaterThan(0)
  })

  it('toont "Vandaag al gespeeld" als kanSpelenVandaag false is', () => {
    const store = useStatsStore()
    store.registreerSpel('gemakkelijk', true)

    const router = maakRouter()
    const wrapper = mount(StartschermView, { global: { plugins: [router] } })
    expect(wrapper.text()).toContain('Vandaag al gespeeld')
  })

  it('navigeert naar /spel/gemakkelijk bij klik op Speel', async () => {
    const router = maakRouter()
    await router.push('/')
    await router.isReady()

    const wrapper = mount(StartschermView, { global: { plugins: [router] } })
    const spelKnoppen = wrapper.findAll('.speel-knop')
    expect(spelKnoppen.length).toBeGreaterThan(0)
    await spelKnoppen[0]!.trigger('click')
    await flushPromises()
    expect(router.currentRoute.value.path).toBe('/spel/gemakkelijk')
  })
})
