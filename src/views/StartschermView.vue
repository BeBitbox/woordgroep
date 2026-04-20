<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStatsStore, type MoeilijkheidLower } from '@/stores/stats'

const router = useRouter()
const statsStore = useStatsStore()

const moeilijkheden: { waarde: MoeilijkheidLower; label: string }[] = [
  { waarde: 'gemakkelijk', label: 'Gemakkelijk' },
  { waarde: 'gemiddeld', label: 'Gemiddeld' },
  { waarde: 'moeilijk', label: 'Moeilijk' },
]

const vandaag = new Date()
const datumTekst = vandaag.toLocaleDateString('nl-NL', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})
const dagVanJaar = Math.floor(
  (vandaag.getTime() - new Date(vandaag.getFullYear(), 0, 0).getTime()) / 86400000,
)

function startSpel(moeilijkheid: MoeilijkheidLower): void {
  router.push(`/spel/${moeilijkheid}`)
}
</script>

<template>
  <main class="startscherm">
    <div class="hero">
      <p class="hero-label">Puzzel #{{ dagVanJaar }}</p>
      <h1 class="hero-datum">{{ datumTekst }}</h1>
      <p class="hero-ondertitel">Dagelijks woordspel</p>
      <div class="hero-decoratie" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>

    <div class="moeilijkheid-lijst">
      <div
        v-for="(m, i) in moeilijkheden"
        :key="m.waarde"
        class="moeilijkheid-kaart"
        :class="`moeilijkheid-kaart--${m.waarde}`"
        :style="{ animationDelay: `${150 + i * 100}ms` }"
      >
        <div class="kaart-info">
          <span class="kaart-label">{{ m.label }}</span>
          <span class="kaart-stats" v-if="statsStore.stats[m.waarde].gespeeld > 0">
            {{ statsStore.stats[m.waarde].gewonnen }} /
            {{ statsStore.stats[m.waarde].gespeeld }} gewonnen
          </span>
          <span class="kaart-stats" v-else>Nog niet gespeeld</span>
        </div>
        <div class="kaart-actie">
          <button
            v-if="statsStore.kanSpelenVandaag(m.waarde)"
            class="speel-knop"
            :class="`speel-knop--${m.waarde}`"
            @click="startSpel(m.waarde)"
          >
            Speel
          </button>
          <span v-else class="al-gespeeld">Vandaag al gespeeld</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.startscherm {
  max-width: 480px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 2rem;
}

/* ── Hero ── */
.hero {
  text-align: center;
  padding: 0.5rem 0 2rem;
  animation: hero-in 0.6s ease both;
}

.hero-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--tekst-gedempt);
  font-weight: 600;
  margin-bottom: 0.375rem;
}

.hero-datum {
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(1.5rem, 5vw, 1.85rem);
  font-weight: 800;
  color: var(--tekst-primair);
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-transform: capitalize;
}

.hero-ondertitel {
  color: var(--tekst-secundair);
  font-size: 0.85rem;
  margin-top: 0.375rem;
}

.hero-decoratie {
  display: flex;
  justify-content: center;
  gap: 0.375rem;
  margin-top: 1.25rem;
}

.hero-decoratie span {
  width: 2rem;
  height: 0.25rem;
  border-radius: 9999px;
  opacity: 0.5;
}

.hero-decoratie span:nth-child(1) {
  background-color: var(--gemakkelijk-knop);
}
.hero-decoratie span:nth-child(2) {
  background-color: var(--gemiddeld-knop);
}
.hero-decoratie span:nth-child(3) {
  background-color: var(--moeilijk-knop);
}
.hero-decoratie span:nth-child(4) {
  background-color: var(--tekst-gedempt);
}

@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Moeilijkheidskaarten ── */
.moeilijkheid-lijst {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.moeilijkheid-kaart {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-radius: 0.875rem;
  border: 1.5px solid transparent;
  animation: kaart-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.moeilijkheid-kaart:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px var(--schaduw);
}

.moeilijkheid-kaart--gemakkelijk {
  background-color: var(--gemakkelijk-bg);
  border-color: var(--gemakkelijk-rand);
}

.moeilijkheid-kaart--gemiddeld {
  background-color: var(--gemiddeld-bg);
  border-color: var(--gemiddeld-rand);
}

.moeilijkheid-kaart--moeilijk {
  background-color: var(--moeilijk-bg);
  border-color: var(--moeilijk-rand);
}

@keyframes kaart-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.kaart-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.kaart-label {
  font-weight: 700;
  font-size: 1rem;
  color: var(--tekst-primair);
}

.kaart-stats {
  font-size: 0.8rem;
  color: var(--tekst-gedempt);
}

.speel-knop {
  padding: 0.55rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition:
    background-color 0.15s,
    transform 0.1s;
  color: #ffffff;
  font-family: inherit;
}

.speel-knop:hover {
  transform: scale(1.06);
}

.speel-knop:active {
  transform: scale(0.98);
}

.speel-knop--gemakkelijk {
  background-color: var(--gemakkelijk-knop);
}

.speel-knop--gemakkelijk:hover {
  background-color: var(--gemakkelijk-knop-hover);
}

.speel-knop--gemiddeld {
  background-color: var(--gemiddeld-knop);
}

.speel-knop--gemiddeld:hover {
  background-color: var(--gemiddeld-knop-hover);
}

.speel-knop--moeilijk {
  background-color: var(--moeilijk-knop);
}

.speel-knop--moeilijk:hover {
  background-color: var(--moeilijk-knop-hover);
}

.al-gespeeld {
  font-size: 0.8rem;
  color: var(--tekst-gedempt);
  font-style: italic;
}
</style>
