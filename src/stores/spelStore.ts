import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { PuzzelData } from '@/types/spel'
import { allePuzzels } from '@/data/index'

const STORAGE_KEY = 'woordgroep-dagelijks'

interface OpgeslagenVoortgang {
  datum: string
  spelStatus: 'bezig' | 'gewonnen' | 'verloren'
  opgelostGroepIds: string[]
  foutePogingen: number
}

function vandaagDatum(): string {
  const nu = new Date()
  return `${nu.getFullYear()}-${String(nu.getMonth() + 1).padStart(2, '0')}-${String(nu.getDate()).padStart(2, '0')}`
}

function dagelijksPuzzelIndex(): number {
  const epoch = new Date('2024-01-01').getTime()
  const vandaag = new Date()
  vandaag.setHours(0, 0, 0, 0)
  const dagNummer = Math.floor((vandaag.getTime() - epoch) / (1000 * 60 * 60 * 24))
  return ((dagNummer % allePuzzels.length) + allePuzzels.length) % allePuzzels.length
}

function laadVoortgang(datum: string): OpgeslagenVoortgang | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed: OpgeslagenVoortgang = JSON.parse(raw)
    return parsed.datum === datum ? parsed : null
  } catch {
    return null
  }
}

function slaVoortgangOp(voortgang: OpgeslagenVoortgang): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(voortgang))
  } catch {
    // localStorage niet beschikbaar (bijv. privémodus)
  }
}

export const useSpelStore = defineStore('spel', () => {
  const datum = vandaagDatum()
  const puzzelIndex = dagelijksPuzzelIndex()
  const opgeslagen = laadVoortgang(datum)

  const puzzelData = ref<PuzzelData>(allePuzzels[puzzelIndex]!)
  const geselecteerdeIds = ref<string[]>([])
  const opgelostGroepIds = ref<string[]>(opgeslagen?.opgelostGroepIds ?? [])
  const foutePogingen = ref(opgeslagen?.foutePogingen ?? 0)
  const spelStatus = ref<'bezig' | 'gewonnen' | 'verloren'>(opgeslagen?.spelStatus ?? 'bezig')

  const resterendePogingen = computed(() => 3 - foutePogingen.value)

  const vandaagGespeeld = computed(
    () => spelStatus.value === 'gewonnen' || spelStatus.value === 'verloren',
  )

  const puzzelDatum = computed(() => {
    const nu = new Date()
    return nu.toLocaleDateString('nl-NL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  })

  function isGeselecteerd(id: string): boolean {
    return geselecteerdeIds.value.includes(id)
  }

  function isOpgelost(id: string): boolean {
    const woord = puzzelData.value.woorden.find((w) => w.id === id)
    if (!woord) return false
    return opgelostGroepIds.value.includes(woord.groepId)
  }

  function selecteerWoord(id: string): void {
    if (spelStatus.value !== 'bezig') return

    const index = geselecteerdeIds.value.indexOf(id)
    if (index !== -1) {
      geselecteerdeIds.value.splice(index, 1)
      return
    }

    if (geselecteerdeIds.value.length < 4) {
      geselecteerdeIds.value.push(id)
    }
  }

  function _slaOp(): void {
    slaVoortgangOp({
      datum,
      spelStatus: spelStatus.value,
      opgelostGroepIds: opgelostGroepIds.value,
      foutePogingen: foutePogingen.value,
    })
  }

  function bevestigKeuze(): void {
    if (geselecteerdeIds.value.length !== 4) return
    if (spelStatus.value !== 'bezig') return

    const groepIds = geselecteerdeIds.value.map((id) => {
      const woord = puzzelData.value.woorden.find((w) => w.id === id)
      return woord?.groepId
    })

    const alleZelfdeGroep = groepIds.every((gid) => gid === groepIds[0])

    if (alleZelfdeGroep && groepIds[0]) {
      opgelostGroepIds.value.push(groepIds[0])
      geselecteerdeIds.value = []

      const totaalGroepen = puzzelData.value.groepen.length
      if (opgelostGroepIds.value.length === totaalGroepen - 1) {
        const laatste = puzzelData.value.groepen.find((g) => !opgelostGroepIds.value.includes(g.id))
        if (laatste) {
          opgelostGroepIds.value.push(laatste.id)
        }
        spelStatus.value = 'gewonnen'
      } else if (opgelostGroepIds.value.length === totaalGroepen) {
        spelStatus.value = 'gewonnen'
      }
    } else {
      foutePogingen.value++
      geselecteerdeIds.value = []

      if (foutePogingen.value >= 3) {
        spelStatus.value = 'verloren'
      }
    }

    _slaOp()
  }

  function resetSpel(): void {
    geselecteerdeIds.value = []
    opgelostGroepIds.value = []
    foutePogingen.value = 0
    spelStatus.value = 'bezig'
  }

  return {
    puzzelData,
    geselecteerdeIds,
    opgelostGroepIds,
    foutePogingen,
    spelStatus,
    resterendePogingen,
    vandaagGespeeld,
    puzzelDatum,
    isGeselecteerd,
    isOpgelost,
    selecteerWoord,
    bevestigKeuze,
    resetSpel,
  }
})
