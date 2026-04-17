import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Moeilijkheid, PuzzelData } from '@/types/spel'
import type { MoeilijkheidLower } from '@/stores/stats'
import { allePuzzels } from '@/data'

const STORAGE_KEY_PREFIX = 'woordgroep-dagelijks'

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

function moeilijkheidNaarType(m: MoeilijkheidLower): Moeilijkheid {
  return (m.charAt(0).toUpperCase() + m.slice(1)) as Moeilijkheid
}

function dagelijksPuzzelVoor(moeilijkheid: Moeilijkheid): PuzzelData {
  const dag = new Date().getDate()
  const gefilterd = allePuzzels.filter((p) => p.dag === dag && p.moeilijkheid === moeilijkheid)
  if (gefilterd.length === 0) return allePuzzels[0]!
  return gefilterd[0]!
}

function storageKey(moeilijkheid: string): string {
  return `${STORAGE_KEY_PREFIX}-${moeilijkheid}`
}

function _laadVoortgang(datum: string, moeilijkheid: string): OpgeslagenVoortgang | null {
  try {
    const raw = localStorage.getItem(storageKey(moeilijkheid))
    if (!raw) return null
    const parsed: OpgeslagenVoortgang = JSON.parse(raw)
    return parsed.datum === datum ? parsed : null
  } catch {
    return null
  }
}

function slaVoortgangOp(voortgang: OpgeslagenVoortgang, moeilijkheid: string): void {
  try {
    localStorage.setItem(storageKey(moeilijkheid), JSON.stringify(voortgang))
  } catch {
    console.error('Local storage niet beschikbaar')
  }
}

export const useSpelStore = defineStore('spel', () => {
  const datum = vandaagDatum()
  const huidigeMoeilijkheid = ref<MoeilijkheidLower>('gemakkelijk')

  const puzzelData = ref<PuzzelData>(
    dagelijksPuzzelVoor(moeilijkheidNaarType(huidigeMoeilijkheid.value)),
  )
  const geselecteerdeWoorden = ref<string[]>([])
  const opgelostGroepIds = ref<string[]>([])
  const foutePogingen = ref(0)
  const spelStatus = ref<'bezig' | 'gewonnen' | 'verloren'>('bezig')
  const feedback = ref<
    { type: 'correct'; groepId: string } | { type: 'fout'; bijna: number } | null
  >(null)

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

  function isGeselecteerd(woord: string): boolean {
    return geselecteerdeWoorden.value.includes(woord)
  }

  function isOpgelost(woord: string): boolean {
    const groep = puzzelData.value.groepen.find((g) => g.woorden.includes(woord))
    if (!groep) return false
    return opgelostGroepIds.value.includes(groep.id)
  }

  function selecteerWoord(woord: string): void {
    if (spelStatus.value !== 'bezig') return
    if (feedback.value !== null) return

    const index = geselecteerdeWoorden.value.indexOf(woord)
    if (index !== -1) {
      geselecteerdeWoorden.value.splice(index, 1)
      return
    }

    if (geselecteerdeWoorden.value.length < 4) {
      geselecteerdeWoorden.value.push(woord)
    }
  }

  function _slaOp(): void {
    slaVoortgangOp(
      {
        datum,
        spelStatus: spelStatus.value,
        opgelostGroepIds: opgelostGroepIds.value,
        foutePogingen: foutePogingen.value,
      },
      huidigeMoeilijkheid.value,
    )
  }

  function initialiseerSpel(moeilijkheid: MoeilijkheidLower): void {
    huidigeMoeilijkheid.value = moeilijkheid
    const moeilijkheidType = moeilijkheidNaarType(moeilijkheid)
    const herstel = _laadVoortgang(datum, moeilijkheid)

    puzzelData.value = dagelijksPuzzelVoor(moeilijkheidType)
    geselecteerdeWoorden.value = []
    opgelostGroepIds.value = herstel?.opgelostGroepIds ?? []
    foutePogingen.value = herstel?.foutePogingen ?? 0
    spelStatus.value = herstel?.spelStatus ?? 'bezig'
    _slaOp()
  }

  function bevestigKeuze(): void {
    if (geselecteerdeWoorden.value.length !== 4) return
    if (spelStatus.value !== 'bezig') return
    if (feedback.value !== null) return

    const groepen = geselecteerdeWoorden.value.map((woord) =>
      puzzelData.value.groepen.find((g) => g.woorden.includes(woord)),
    )

    const alleZelfdeGroep = groepen.every((g) => g?.id === groepen[0]?.id)

    if (alleZelfdeGroep && groepen[0]) {
      const opgelostGroepId = groepen[0].id
      feedback.value = { type: 'correct', groepId: opgelostGroepId }
      setTimeout(() => {
        feedback.value = null
      }, 1200)

      opgelostGroepIds.value.push(opgelostGroepId)
      geselecteerdeWoorden.value = []

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
      const telling = new Map<string, number>()
      for (const g of groepen) {
        if (g) telling.set(g.id, (telling.get(g.id) ?? 0) + 1)
      }
      const bijna = Math.max(...telling.values())
      feedback.value = { type: 'fout', bijna }
      foutePogingen.value++

      setTimeout(() => {
        feedback.value = null
        geselecteerdeWoorden.value = []

        if (foutePogingen.value >= 3) {
          spelStatus.value = 'verloren'
        }
        _slaOp()
      }, 1200)
    }

    if (alleZelfdeGroep) {
      _slaOp()
    }
  }

  function resetSpel(): void {
    geselecteerdeWoorden.value = []
    opgelostGroepIds.value = []
    foutePogingen.value = 0
    spelStatus.value = 'bezig'
  }

  return {
    puzzelData,
    huidigeMoeilijkheid,
    geselecteerdeWoorden,
    opgelostGroepIds,
    foutePogingen,
    spelStatus,
    feedback,
    resterendePogingen,
    vandaagGespeeld,
    puzzelDatum,
    isGeselecteerd,
    isOpgelost,
    selecteerWoord,
    bevestigKeuze,
    resetSpel,
    initialiseerSpel,
  }
})
