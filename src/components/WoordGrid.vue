<script setup lang="ts">
import { ref } from 'vue'
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

const alleWoorden = store.puzzelData.groepen.flatMap((g) => g.woorden)
const geschudeWoorden = ref<string[]>(shuffle(alleWoorden))

function groepKleur(woord: string): string {
  const groep = store.puzzelData.groepen.find((g) => g.woorden.includes(woord))
  return groep?.kleur ?? '#16a34a'
}
</script>

<template>
  <div class="woord-grid">
    <button
      v-for="woord in geschudeWoorden"
      :key="woord"
      class="woord-vak"
      :class="{
        'woord-vak--geselecteerd': store.isGeselecteerd(woord),
        'woord-vak--opgelost': store.isOpgelost(woord),
      }"
      :style="store.isOpgelost(woord) ? { backgroundColor: groepKleur(woord) } : {}"
      :disabled="store.isOpgelost(woord) || store.spelStatus !== 'bezig'"
      @click="store.selecteerWoord(woord)"
    >
      {{ woord }}
    </button>
  </div>
</template>

<style scoped>
.woord-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  max-width: 600px;
  margin: 0 auto;
}

.woord-vak {
  padding: 1rem 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border: 2px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: #f9fafb;
  cursor: pointer;
  transition:
    background-color 0.15s,
    border-color 0.15s;
  min-height: 3.5rem;
  color: #111827;
}

.woord-vak:hover:not(:disabled) {
  background-color: #e5e7eb;
}

.woord-vak--geselecteerd {
  background-color: #bfdbfe !important;
  border-color: #2563eb;
  color: #1e3a8a;
}

.woord-vak--opgelost {
  color: #ffffff;
  border-color: transparent;
  cursor: default;
}

.woord-vak:disabled:not(.woord-vak--opgelost) {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .woord-vak {
    font-size: 0.875rem;
    padding: 0.75rem 0.25rem;
  }
}
</style>
