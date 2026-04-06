<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useSpelStore } from '@/stores/spelStore'

const store = useSpelStore()
const router = useRouter()

const onopgelostGroepen = computed(() =>
  store.puzzelData.groepen.filter((g) => !store.opgelostGroepIds.includes(g.id)),
)
</script>

<template>
  <div v-if="store.spelStatus !== 'bezig'" class="spel-status">
    <div v-if="store.spelStatus === 'gewonnen'" class="status-kaart status-kaart--gewonnen">
      <h2>Gefeliciteerd!</h2>
      <p>Je hebt alle woordgroepen gevonden.</p>
      <button class="opnieuw-knop" @click="router.push('/')">Terug naar startscherm</button>
    </div>

    <div v-else class="status-kaart status-kaart--verloren">
      <h2>Helaas!</h2>
      <p>Je hebt 3 foute pogingen gemaakt.</p>
      <p v-if="onopgelostGroepen.length > 0" class="onopgelost-label">
        Niet gevonden:
        <strong>{{ onopgelostGroepen.map((g) => g.id).join(', ') }}</strong>
      </p>
      <button class="opnieuw-knop" @click="router.push('/')">Terug naar startscherm</button>
    </div>
  </div>
</template>

<style scoped>
.spel-status {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
}

.status-kaart {
  text-align: center;
  padding: 1.75rem 2rem;
  border-radius: 1rem;
  max-width: 400px;
  width: 100%;
  border: 1.5px solid transparent;
}

.status-kaart--gewonnen {
  background-color: var(--gewonnen-bg);
  border-color: var(--gewonnen-rand);
  color: var(--gewonnen-tekst);
}

.status-kaart--verloren {
  background-color: var(--verloren-bg);
  border-color: var(--verloren-rand);
  color: var(--verloren-tekst);
}

.status-kaart h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.status-kaart p {
  font-size: 0.95rem;
  line-height: 1.5;
}

.onopgelost-label {
  margin-top: 0.5rem;
}

.opnieuw-knop {
  margin-top: 1.25rem;
  padding: 0.65rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: var(--knop-bg);
  color: var(--knop-tekst);
  transition:
    background-color 0.15s ease,
    transform 0.1s ease;
}

.opnieuw-knop:hover {
  background-color: var(--knop-hover);
  transform: scale(1.03);
}
</style>
