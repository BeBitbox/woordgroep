import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpelStore } from '../stores/spelStore'
import puzzel001 from '../data/puzzel001'

beforeEach(() => {
  setActivePinia(createPinia())
})

describe('spelStore — selecteerWoord', () => {
  it('voegt een woord toe aan geselecteerdeIds', () => {
    const store = useSpelStore()
    store.selecteerWoord('w01')
    expect(store.geselecteerdeIds).toContain('w01')
  })

  it('deselecteert een al geselecteerd woord', () => {
    const store = useSpelStore()
    store.selecteerWoord('w01')
    store.selecteerWoord('w01')
    expect(store.geselecteerdeIds).not.toContain('w01')
  })

  it('selecteert maximaal 4 woorden; een vijfde heeft geen effect', () => {
    const store = useSpelStore()
    store.selecteerWoord('w01')
    store.selecteerWoord('w02')
    store.selecteerWoord('w03')
    store.selecteerWoord('w04')
    store.selecteerWoord('w05')
    expect(store.geselecteerdeIds).toHaveLength(4)
    expect(store.geselecteerdeIds).not.toContain('w05')
  })

  it('doet niets als spelStatus niet bezig is', () => {
    const store = useSpelStore()
    store.spelStatus = 'verloren'
    store.selecteerWoord('w01')
    expect(store.geselecteerdeIds).toHaveLength(0)
  })
})

describe('spelStore — bevestigKeuze', () => {
  it('markeert een correcte groep als opgelost en leegt de selectie', () => {
    const store = useSpelStore()
    const groepId = puzzel001.groepen[0]!.id
    const woordenVanGroep = puzzel001.woorden.filter((w) => w.groepId === groepId).slice(0, 4)
    woordenVanGroep.forEach((w) => store.selecteerWoord(w.id))
    store.bevestigKeuze()
    expect(store.opgelostGroepIds).toContain(groepId)
    expect(store.geselecteerdeIds).toHaveLength(0)
  })

  it('verhoogt foutePogingen bij een foute keuze en leegt de selectie', () => {
    const store = useSpelStore()
    // Selecteer woorden van verschillende groepen
    const ids = puzzel001.groepen
      .flatMap((g) => puzzel001.woorden.find((w) => w.groepId === g.id))
      .map((w) => w!.id)
    ids.slice(0, 4).forEach((id) => store.selecteerWoord(id))
    store.bevestigKeuze()
    expect(store.foutePogingen).toBe(1)
    expect(store.geselecteerdeIds).toHaveLength(0)
  })

  it('zet spelStatus op verloren na 3 foute pogingen', () => {
    const store = useSpelStore()
    const foutSelectie = () => {
      const ids = puzzel001.groepen
        .flatMap((g) => puzzel001.woorden.find((w) => w.groepId === g.id))
        .map((w) => w!.id)
      ids.slice(0, 4).forEach((id) => store.selecteerWoord(id))
      store.bevestigKeuze()
    }
    foutSelectie()
    foutSelectie()
    foutSelectie()
    expect(store.spelStatus).toBe('verloren')
  })

  it('zet spelStatus op gewonnen na 4 correct gevonden groepen', () => {
    const store = useSpelStore()
    for (const groep of puzzel001.groepen) {
      const woorden = puzzel001.woorden.filter((w) => w.groepId === groep.id)
      woorden.forEach((w) => store.selecteerWoord(w.id))
      store.bevestigKeuze()
    }
    expect(store.spelStatus).toBe('gewonnen')
  })

  it('lost de laatste groep automatisch op na 3 correcte groepen', () => {
    const store = useSpelStore()
    const eersteDeGroepen = puzzel001.groepen.slice(0, 3)
    const laatste = puzzel001.groepen[3]!
    for (const groep of eersteDeGroepen) {
      const woorden = puzzel001.woorden.filter((w) => w.groepId === groep.id)
      woorden.forEach((w) => store.selecteerWoord(w.id))
      store.bevestigKeuze()
    }
    expect(store.opgelostGroepIds).toContain(laatste.id)
    expect(store.spelStatus).toBe('gewonnen')
  })
})

describe('spelStore — resetSpel', () => {
  it('herstelt alle state naar beginwaarden', () => {
    const store = useSpelStore()
    store.selecteerWoord('w01')
    store.foutePogingen = 2
    store.spelStatus = 'verloren'
    store.resetSpel()
    expect(store.geselecteerdeIds).toHaveLength(0)
    expect(store.opgelostGroepIds).toHaveLength(0)
    expect(store.foutePogingen).toBe(0)
    expect(store.spelStatus).toBe('bezig')
  })
})

describe('spelStore — getters', () => {
  it('isGeselecteerd geeft true terug voor geselecteerde woorden', () => {
    const store = useSpelStore()
    store.selecteerWoord('w01')
    expect(store.isGeselecteerd('w01')).toBe(true)
    expect(store.isGeselecteerd('w02')).toBe(false)
  })

  it('resterendePogingen telt correct af', () => {
    const store = useSpelStore()
    expect(store.resterendePogingen).toBe(3)
    store.foutePogingen = 1
    expect(store.resterendePogingen).toBe(2)
  })
})
