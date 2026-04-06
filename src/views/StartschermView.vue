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

function startSpel(moeilijkheid: MoeilijkheidLower): void {
  router.push(`/spel/${moeilijkheid}`)
}
</script>

<template>
  <main class="startscherm">
    <h1 class="startscherm-titel">Woordgroep</h1>
    <p class="startscherm-ondertitel">Dagelijks woordspel</p>

    <div class="moeilijkheid-lijst">
      <div
        v-for="m in moeilijkheden"
        :key="m.waarde"
        class="moeilijkheid-kaart"
        :class="`moeilijkheid-kaart--${m.waarde}`"
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
<!-- TODO -->
<!--    <AdSenseBlok />-->
  </main>
</template>

<style scoped>
.startscherm {
  max-width: 480px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 2rem;
}

.startscherm-titel {
  text-align: center;
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--tekst-primair);
  margin-bottom: 0.25rem;
}

.startscherm-ondertitel {
  text-align: center;
  color: var(--tekst-gedempt);
  margin-bottom: 2.5rem;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 500;
}

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
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
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
  transform: scale(1.04);
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
