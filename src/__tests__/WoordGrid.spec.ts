import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import WoordGrid from '../components/WoordGrid.vue'
import { useSpelStore } from '../stores/spelStore'
import puzzel001 from '../data/puzzel001'

beforeEach(() => {
  setActivePinia(createPinia())
})

describe('WoordGrid', () => {
  it('rendert alle 16 woorden', () => {
    const wrapper = mount(WoordGrid)
    const knoppen = wrapper.findAll('button')
    expect(knoppen).toHaveLength(16)
  })

  it('toont de tekst van elk woord', () => {
    const wrapper = mount(WoordGrid)
    const teksten = wrapper.findAll('button').map((b) => b.text())
    for (const woord of puzzel001.woorden) {
      expect(teksten).toContain(woord.tekst)
    }
  })

  it('roept selecteerWoord aan bij klik op een woord', async () => {
    const wrapper = mount(WoordGrid)
    const store = useSpelStore()
    const spy = vi.spyOn(store, 'selecteerWoord')
    await wrapper.find('button').trigger('click')
    expect(spy).toHaveBeenCalledOnce()
  })

  it('geeft opgeloste woorden de klasse woord-vak--opgelost', async () => {
    const store = useSpelStore()
    const groep = puzzel001.groepen[0]!
    const woorden = puzzel001.woorden.filter((w) => w.groepId === groep.id)
    woorden.forEach((w) => store.selecteerWoord(w.id))
    store.bevestigKeuze()

    const wrapper = mount(WoordGrid)
    const opgelosteKnoppen = wrapper.findAll('.woord-vak--opgelost')
    expect(opgelosteKnoppen).toHaveLength(4)
  })
})
