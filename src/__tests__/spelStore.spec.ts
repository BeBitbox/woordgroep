import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpelStore } from '../stores/spelStore'
import { allePuzzels } from '@/data'

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date(2026, 0, 1)) // dag 1 → puzzel dag=1 wordt geladen
  localStorage.clear()
  setActivePinia(createPinia())
})

afterEach(() => {
  vi.useRealTimers()
})

describe('spelStore — selecteerWoord', () => {
  it('voegt een woord toe aan geselecteerdeWoorden', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    store.selecteerWoord('Appel')
    expect(store.geselecteerdeWoorden).toContain('Appel')
  })

  it('deselecteert een al geselecteerd woord', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    store.selecteerWoord('Appel')
    store.selecteerWoord('Appel')
    expect(store.geselecteerdeWoorden).not.toContain('Appel')
  })

  it('selecteert maximaal 4 woorden; een vijfde heeft geen effect', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    store.selecteerWoord('Appel')
    store.selecteerWoord('Banaan')
    store.selecteerWoord('Mango')
    store.selecteerWoord('Peer')
    store.selecteerWoord('Leeuw')
    expect(store.geselecteerdeWoorden).toHaveLength(4)
    expect(store.geselecteerdeWoorden).not.toContain('Leeuw')
  })

  it('doet niets als spelStatus niet bezig is', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    store.spelStatus = 'verloren'
    store.selecteerWoord('Appel')
    expect(store.geselecteerdeWoorden).toHaveLength(0)
  })
})

describe('spelStore — bevestigKeuze', () => {
  it('markeert een correcte groep als opgelost en leegt de selectie', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    const groep = allePuzzels[0]!.groepen[0]!
    groep.woorden.forEach((w) => store.selecteerWoord(w))
    store.bevestigKeuze()
    expect(store.opgelostGroepIds).toContain(groep.id)
    expect(store.geselecteerdeWoorden).toHaveLength(0)
  })

  it('verhoogt foutePogingen bij een foute keuze en leegt de selectie', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    // Selecteer één woord per groep (gemengde selectie)
    const foutSelectie = allePuzzels[0]!.groepen.map((g) => g.woorden[0]!)
    foutSelectie.slice(0, 4).forEach((w) => store.selecteerWoord(w))
    store.bevestigKeuze()
    expect(store.foutePogingen).toBe(1)
    vi.runAllTimers()
    expect(store.geselecteerdeWoorden).toHaveLength(0)
  })

  it('zet spelStatus op verloren na 3 foute pogingen', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    const foutSelectie = () => {
      const woorden = allePuzzels[0]!.groepen.map((g) => g.woorden[0]!)
      woorden.slice(0, 4).forEach((w) => store.selecteerWoord(w))
      store.bevestigKeuze()
      vi.runAllTimers()
    }
    foutSelectie()
    foutSelectie()
    foutSelectie()
    expect(store.spelStatus).toBe('verloren')
  })

  it('zet spelStatus op gewonnen na 4 correct gevonden groepen', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    for (const groep of allePuzzels[0]!.groepen) {
      groep.woorden.forEach((w) => store.selecteerWoord(w))
      store.bevestigKeuze()
      vi.runAllTimers()
    }
    expect(store.spelStatus).toBe('gewonnen')
  })

  it('lost de laatste groep automatisch op na 3 correcte groepen', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    const eersteDeGroepen = allePuzzels[0]!.groepen.slice(0, 3)
    const laatste = allePuzzels[0]!.groepen[3]!
    for (const groep of eersteDeGroepen) {
      groep.woorden.forEach((w) => store.selecteerWoord(w))
      store.bevestigKeuze()
      vi.runAllTimers()
    }
    expect(store.opgelostGroepIds).toContain(laatste.id)
    expect(store.spelStatus).toBe('gewonnen')
  })
})

describe('spelStore — resetSpel', () => {
  it('herstelt alle state naar beginwaarden', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    store.selecteerWoord('Appel')
    store.foutePogingen = 2
    store.spelStatus = 'verloren'
    store.resetSpel()
    expect(store.geselecteerdeWoorden).toHaveLength(0)
    expect(store.opgelostGroepIds).toHaveLength(0)
    expect(store.foutePogingen).toBe(0)
    expect(store.spelStatus).toBe('bezig')
  })
})

describe('spelStore — getters', () => {
  it('isGeselecteerd geeft true terug voor geselecteerde woorden', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    store.selecteerWoord('Appel')
    expect(store.isGeselecteerd('Appel')).toBe(true)
    expect(store.isGeselecteerd('Banaan')).toBe(false)
  })

  it('resterendePogingen telt correct af', () => {
    const store = useSpelStore()
    store.initialiseerSpel('gemakkelijk')
    expect(store.resterendePogingen).toBe(3)
    store.foutePogingen = 1
    expect(store.resterendePogingen).toBe(2)
  })
})
