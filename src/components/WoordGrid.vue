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
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  text-align: center;
  border: 1.5px solid var(--woord-rand);
  border-radius: 0.625rem;
  background-color: var(--woord-bg);
  color: var(--tekst-primair);
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    transform 0.1s ease;
  min-height: 3.5rem;
  line-height: 1.3;
}

.woord-vak:hover:not(:disabled) {
  background-color: var(--woord-hover-bg);
  border-color: var(--rand-hover);
  transform: scale(1.02);
}

.woord-vak--geselecteerd {
  background-color: var(--woord-geselecteerd-bg) !important;
  border-color: var(--woord-geselecteerd-rand) !important;
  color: var(--woord-geselecteerd-tekst) !important;
}

.woord-vak--opgelost {
  color: #ffffff !important;
  border-color: transparent !important;
  cursor: default;
  transform: none !important;
}

.woord-vak:disabled:not(.woord-vak--opgelost) {
  opacity: 0.45;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .woord-vak {
    font-size: 0.8rem;
    padding: 0.75rem 0.25rem;
  }
}
</style>
