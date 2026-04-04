import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStatsStore, vandaagDatum } from '../stores/stats'

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
  vi.useRealTimers()
})

describe('useStatsStore — initiële state', () => {
  it('begint met nullwaarden voor alle moeilijkheden', () => {
    const store = useStatsStore()
    for (const m of ['gemakkelijk', 'gemiddeld', 'moeilijk'] as const) {
      expect(store.stats[m].gespeeld).toBe(0)
      expect(store.stats[m].gewonnen).toBe(0)
      expect(store.stats[m].laatstGespeeldDatum).toBeNull()
    }
  })
})

describe('useStatsStore — registreerSpel', () => {
  it('verhoogt gespeeld met 1', () => {
    const store = useStatsStore()
    store.registreerSpel('gemakkelijk', false)
    expect(store.stats.gemakkelijk.gespeeld).toBe(1)
  })

  it('verhoogt gewonnen met 1 bij winst', () => {
    const store = useStatsStore()
    store.registreerSpel('gemakkelijk', true)
    expect(store.stats.gemakkelijk.gewonnen).toBe(1)
  })

  it('verhoogt gewonnen niet bij verlies', () => {
    const store = useStatsStore()
    store.registreerSpel('gemakkelijk', false)
    expect(store.stats.gemakkelijk.gewonnen).toBe(0)
  })

  it('slaat de datum van vandaag op als laatstGespeeldDatum', () => {
    const store = useStatsStore()
    store.registreerSpel('gemiddeld', true)
    expect(store.stats.gemiddeld.laatstGespeeldDatum).toBe(vandaagDatum())
  })

  it('raakt andere moeilijkheden niet aan', () => {
    const store = useStatsStore()
    store.registreerSpel('gemakkelijk', true)
    expect(store.stats.gemiddeld.gespeeld).toBe(0)
    expect(store.stats.moeilijk.gespeeld).toBe(0)
  })
})

describe('useStatsStore — kanSpelenVandaag', () => {
  it('geeft true terug als datum null is', () => {
    const store = useStatsStore()
    expect(store.kanSpelenVandaag('gemakkelijk')).toBe(true)
  })

  it('geeft false terug als vandaag al gespeeld', () => {
    const store = useStatsStore()
    store.registreerSpel('gemakkelijk', false)
    expect(store.kanSpelenVandaag('gemakkelijk')).toBe(false)
  })

  it('geeft true terug als datum van gisteren is', () => {
    const store = useStatsStore()
    store.stats.gemakkelijk.laatstGespeeldDatum = '2000-01-01'
    expect(store.kanSpelenVandaag('gemakkelijk')).toBe(true)
  })
})

describe('useStatsStore — loadStats', () => {
  it('hydrateert de state vanuit een cookie', () => {
    const cookieData = {
      gemakkelijk: { gespeeld: 5, gewonnen: 3, laatstGespeeldDatum: '2024-06-01' },
      gemiddeld: { gespeeld: 2, gewonnen: 1, laatstGespeeldDatum: null },
      moeilijk: { gespeeld: 0, gewonnen: 0, laatstGespeeldDatum: null },
    }
    document.cookie = `woordgroep-stats=${encodeURIComponent(JSON.stringify(cookieData))};path=/`

    const store = useStatsStore()
    store.loadStats()

    expect(store.stats.gemakkelijk.gespeeld).toBe(5)
    expect(store.stats.gemakkelijk.gewonnen).toBe(3)
    expect(store.stats.gemiddeld.gespeeld).toBe(2)
  })

  it('negeert een ongeldige cookie zonder te crashen', () => {
    document.cookie = `woordgroep-stats=INVALID;path=/`
    const store = useStatsStore()
    expect(() => store.loadStats()).not.toThrow()
  })
})
