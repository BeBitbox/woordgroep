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
  padding: 2rem;
  border-radius: 0.75rem;
  max-width: 400px;
  width: 100%;
}

.status-kaart--gewonnen {
  background-color: #dcfce7;
  border: 2px solid #16a34a;
  color: #14532d;
}

.status-kaart--verloren {
  background-color: #fee2e2;
  border: 2px solid #dc2626;
  color: #7f1d1d;
}

.status-kaart h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.onopgelost-label {
  margin-top: 0.5rem;
}

.opnieuw-knop {
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #1f2937;
  color: #ffffff;
  transition: background-color 0.15s;
}

.opnieuw-knop:hover {
  background-color: #374151;
}
</style>
