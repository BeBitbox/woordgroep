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
    <p class="startscherm-uitleg">
      Selecteer een moeilijkheidsgraad om te spelen. Elke graad kan éénmaal per dag gespeeld worden.
    </p>

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
          <span class="kaart-stats" v-if="statsStore.stats[m.waarde].gespeeld <= 0">
            0 gespeeld
          </span>
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
  padding: 2rem 1rem;
  font-family: sans-serif;
}

.startscherm-titel {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.startscherm-uitleg {
  text-align: center;
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.moeilijkheid-lijst {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.moeilijkheid-kaart {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  border: 2px solid transparent;
}

.moeilijkheid-kaart--gemakkelijk {
  background-color: #f0fdf4;
  border-color: #86efac;
}

.moeilijkheid-kaart--gemiddeld {
  background-color: #fffbeb;
  border-color: #fcd34d;
}

.moeilijkheid-kaart--moeilijk {
  background-color: #fef2f2;
  border-color: #fca5a5;
}

.kaart-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.kaart-label {
  font-weight: 700;
  font-size: 1rem;
  color: #111827;
}

.kaart-stats {
  font-size: 0.8rem;
  color: #6b7280;
}

.speel-knop {
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.15s;
  color: #ffffff;
}

.speel-knop--gemakkelijk {
  background-color: #16a34a;
}

.speel-knop--gemakkelijk:hover {
  background-color: #15803d;
}

.speel-knop--gemiddeld {
  background-color: #d97706;
}

.speel-knop--gemiddeld:hover {
  background-color: #b45309;
}

.speel-knop--moeilijk {
  background-color: #dc2626;
}

.speel-knop--moeilijk:hover {
  background-color: #b91c1c;
}

.al-gespeeld {
  font-size: 0.8rem;
  color: #9ca3af;
  font-style: italic;
}
</style>
