<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useSpelStore } from '@/stores/spelStore'

const store = useSpelStore()

function shuffle(woorden: string[]): string[] {
  const arr = [...woorden]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = arr[i]!
    arr[i] = arr[j]!
    arr[j] = tmp
  }
  return arr
}

const geschudeWoorden = ref<string[]>(
  shuffle(store.puzzelData.groepen.flatMap((g) => g.woorden)),
)

const opgelosteGroepen = computed(() =>
  store.puzzelData.groepen.filter((g) => store.opgelostGroepIds.includes(g.id)),
)

const onopgelosteWoorden = computed(() =>
  geschudeWoorden.value.filter((w) => !store.isOpgelost(w)),
)

const toonIngang = ref(true)
const laatstGeselecteerd = ref<string | null>(null)

onMounted(() => {
  setTimeout(() => {
    toonIngang.value = false
  }, 900)
})

function handleKlik(woord: string) {
  const wasGeselecteerd = store.isGeselecteerd(woord)
  store.selecteerWoord(woord)
  if (!wasGeselecteerd && store.isGeselecteerd(woord)) {
    laatstGeselecteerd.value = woord
    setTimeout(() => {
      laatstGeselecteerd.value = null
    }, 300)
  }
}
</script>

<template>
  <div class="woord-container">
    <TransitionGroup name="banner" tag="div" class="opgeloste-groepen" appear>
      <div
        v-for="groep in opgelosteGroepen"
        :key="'banner-' + groep.id"
        class="groep-banner"
        :style="{ backgroundColor: groep.kleur }"
      >
        <span class="groep-banner__naam">{{ groep.id }}</span>
        <span class="groep-banner__woorden">{{ groep.woorden.join(', ') }}</span>
      </div>
    </TransitionGroup>

    <div v-if="onopgelosteWoorden.length > 0" class="woord-grid">
      <button
        v-for="(woord, index) in onopgelosteWoorden"
        :key="woord"
        class="woord-vak"
        :class="{
          'woord-vak--ingang': toonIngang,
          'woord-vak--geselecteerd': store.isGeselecteerd(woord),
          'woord-vak--bounce': laatstGeselecteerd === woord,
          'woord-vak--schudden': store.isGeselecteerd(woord) && store.feedback?.type === 'fout',
        }"
        :style="toonIngang ? { animationDelay: `${index * 35}ms` } : {}"
        :disabled="store.spelStatus !== 'bezig' || store.feedback !== null"
        @click="handleKlik(woord)"
      >
        {{ woord }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.woord-container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

/* ── Opgeloste groep-banners ── */
.opgeloste-groepen:not(:empty) {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.groep-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border-radius: 0.625rem;
  color: #ffffff;
  min-height: 3.5rem;
  text-align: center;
}

.groep-banner__naam {
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.groep-banner__woorden {
  font-size: 0.8rem;
  opacity: 0.9;
  margin-top: 0.125rem;
}

/* Banner-transitie */
.banner-enter-active {
  animation: banner-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes banner-in {
  from {
    opacity: 0;
    transform: translateY(-8px) scaleY(0.7);
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
}

/* ── Woordgrid ── */
.woord-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

/* ── Woordtegels ── */
.woord-vak {
  padding: 0.875rem 0.375rem;
  font-size: clamp(0.7rem, 2.2vw, 0.95rem);
  font-weight: 600;
  font-family: inherit;
  text-align: center;
  border: 1.5px solid var(--woord-rand);
  border-radius: 0.625rem;
  background-color: var(--woord-bg);
  color: var(--tekst-primair);
  cursor: pointer;
  min-height: 3.5rem;
  line-height: 1.25;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  box-shadow: var(--tegel-schaduw);
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;
}

.woord-vak:hover:not(:disabled) {
  background-color: var(--woord-hover-bg);
  border-color: var(--rand-hover);
  transform: translateY(-2px);
  box-shadow: var(--tegel-schaduw-hover);
}

.woord-vak:active:not(:disabled) {
  transform: translateY(0) scale(0.97);
}

/* Selectie */
.woord-vak--geselecteerd {
  background-color: var(--woord-geselecteerd-bg) !important;
  border-color: var(--woord-geselecteerd-rand) !important;
  color: var(--woord-geselecteerd-tekst) !important;
  box-shadow: 0 0 0 2px var(--woord-geselecteerd-rand), var(--tegel-schaduw) !important;
}

/* Bounce bij selectie */
.woord-vak--bounce {
  animation: bounce-select 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes bounce-select {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

/* Schudden bij foute keuze */
.woord-vak--schudden {
  animation: schudden 0.5s ease;
}

@keyframes schudden {
  0%,
  100% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-6px);
  }
  30% {
    transform: translateX(5px);
  }
  45% {
    transform: translateX(-4px);
  }
  60% {
    transform: translateX(3px);
  }
  75% {
    transform: translateX(-2px);
  }
}

/* Ingangs-animatie (alleen bij eerste mount) */
.woord-vak--ingang {
  animation: tegel-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes tegel-in {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Uitgeschakeld (alleen zichtbaar tijdens feedback, grid verborgen bij einde spel) */
.woord-vak:disabled {
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .woord-grid {
    gap: 0.375rem;
  }

  .woord-vak {
    padding: 0.625rem 0.25rem;
    min-height: 3rem;
  }

  .groep-banner {
    padding: 0.625rem 0.75rem;
    min-height: 3rem;
  }
}
</style>
