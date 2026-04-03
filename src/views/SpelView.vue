<script setup lang="ts">
import WoordGrid from '@/components/WoordGrid.vue'
import SpelBesturing from '@/components/SpelBesturing.vue'
import SpelStatus from '@/components/SpelStatus.vue'
import { useSpelStore } from '@/stores/spelStore'

const store = useSpelStore()
</script>

<template>
  <main class="spel-view">
    <h1 class="spel-titel">Woordgroep</h1>
    <p class="spel-uitleg">Selecteer 4 woorden die bij elkaar horen en bevestig je keuze.</p>
    <p
      class="moeilijkheid-badge"
      :class="`moeilijkheid-badge--${store.puzzelData.moeilijkheid.toLowerCase()}`"
      aria-label="`Moeilijkheid: ${store.puzzelData.moeilijkheid}`"
    >
      {{ store.puzzelData.moeilijkheid }}
    </p>
    <SpelStatus />
    <WoordGrid />
    <SpelBesturing />
  </main>
</template>

<style scoped>
.spel-view {
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: sans-serif;
}

.spel-titel {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.spel-uitleg {
  text-align: center;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.moeilijkheid-badge {
  display: inline-block;
  margin: 0 auto 1.5rem;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;
  width: fit-content;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
}

.moeilijkheid-badge--gemakkelijk {
  background-color: #dcfce7;
  color: #166534;
}

.moeilijkheid-badge--gemiddeld {
  background-color: #fef3c7;
  color: #92400e;
}

.moeilijkheid-badge--moeilijk {
  background-color: #fee2e2;
  color: #991b1b;
}
</style>
