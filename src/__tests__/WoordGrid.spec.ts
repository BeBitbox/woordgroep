import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import WoordGrid from '../components/WoordGrid.vue'
import { useSpelStore } from '../stores/spelStore'
import { allePuzzels} from '@/data'

beforeEach(() => {
  localStorage.clear()
  setActivePinia(createPinia())
})

describe('WoordGrid', () => {
  it('rendert alle 16 woorden', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    const wrapper = mount(WoordGrid)
    const knoppen = wrapper.findAll('button')
    expect(knoppen).toHaveLength(16)
  })

  it('toont de tekst van elk woord', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    const wrapper = mount(WoordGrid)
    const teksten = wrapper.findAll('button').map((b) => b.text())
    for (const groep of allePuzzels[0]!.groepen) {
      for (const woord of groep.woorden) {
        expect(teksten).toContain(woord)
      }
    }
  })

  it('roept selecteerWoord aan bij klik op een woord', async () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    const wrapper = mount(WoordGrid)
    const spy = vi.spyOn(store, 'selecteerWoord')
    await wrapper.find('button').trigger('click')
    expect(spy).toHaveBeenCalledOnce()
  })

  it('geeft opgeloste woorden de klasse woord-vak--opgelost', async () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    const groep = allePuzzels[0]!.groepen[0]!
    groep.woorden.forEach((w) => store.selecteerWoord(w))
    store.bevestigKeuze()

    const wrapper = mount(WoordGrid)
    const opgelosteKnoppen = wrapper.findAll('.woord-vak--opgelost')
    expect(opgelosteKnoppen).toHaveLength(4)
  })
})
