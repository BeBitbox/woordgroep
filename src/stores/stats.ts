import { reactive } from 'vue'
import { defineStore } from 'pinia'

export type MoeilijkheidLower = 'gemakkelijk' | 'gemiddeld' | 'moeilijk'

const MOEILIJKHEDEN: MoeilijkheidLower[] = ['gemakkelijk', 'gemiddeld', 'moeilijk']
const COOKIE_NAAM = 'woordgroep-stats'

interface MoeilijkheidStats {
  gespeeld: number
  gewonnen: number
  laatstGespeeldDatum: string | null
}

type StatsState = Record<MoeilijkheidLower, MoeilijkheidStats>

export function vandaagDatum(): string {
  const nu = new Date()
  return `${nu.getFullYear()}-${String(nu.getMonth() + 1).padStart(2, '0')}-${String(nu.getDate()).padStart(2, '0')}`
}

function leegStats(): StatsState {
  return {
    gemakkelijk: { gespeeld: 0, gewonnen: 0, laatstGespeeldDatum: null },
    gemiddeld: { gespeeld: 0, gewonnen: 0, laatstGespeeldDatum: null },
    moeilijk: { gespeeld: 0, gewonnen: 0, laatstGespeeldDatum: null },
  }
}

function leesCookie(naam: string): string | null {
  const waarde = `; ${document.cookie}`
  const delen = waarde.split(`; ${naam}=`)
  if (delen.length === 2) return delen.pop()!.split(';').shift() ?? null
  return null
}

function schrijfCookie(naam: string, waarde: string, dagen: number): void {
  const datum = new Date()
  datum.setTime(datum.getTime() + dagen * 24 * 60 * 60 * 1000)
  document.cookie = `${naam}=${waarde};expires=${datum.toUTCString()};path=/;SameSite=Lax`
}

export const useStatsStore = defineStore('stats', () => {
  const stats = reactive<StatsState>(leegStats())

  function loadStats(): void {
    const raw = leesCookie(COOKIE_NAAM)
    if (!raw) return
    try {
      const data: StatsState = JSON.parse(decodeURIComponent(raw))
      for (const m of MOEILIJKHEDEN) {
        if (data[m]) {
          stats[m] = data[m]
        }
      }
    } catch {
      // ongeldige cookie, negeer
    }
  }

  function saveStats(): void {
    schrijfCookie(COOKIE_NAAM, encodeURIComponent(JSON.stringify(stats)), 365)
  }

  function registreerSpel(moeilijkheid: MoeilijkheidLower, gewonnen: boolean): void {
    stats[moeilijkheid].gespeeld++
    if (gewonnen) stats[moeilijkheid].gewonnen++
    stats[moeilijkheid].laatstGespeeldDatum = vandaagDatum()
    saveStats()
  }

  function kanSpelenVandaag(moeilijkheid: MoeilijkheidLower): boolean {
    const datum = stats[moeilijkheid].laatstGespeeldDatum
    return datum === null || datum !== vandaagDatum()
  }

  return { stats, loadStats, saveStats, registreerSpel, kanSpelenVandaag }
})
