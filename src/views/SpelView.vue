<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import WoordGrid from '@/components/WoordGrid.vue'
import SpelBesturing from '@/components/SpelBesturing.vue'
import SpelStatus from '@/components/SpelStatus.vue'
import { useSpelStore } from '@/stores/spelStore'
import { useStatsStore, type MoeilijkheidLower } from '@/stores/stats'

const route = useRoute()
const router = useRouter()
const store = useSpelStore()
const statsStore = useStatsStore()

const moeilijkheid = route.params.moeilijkheid as MoeilijkheidLower

if (!statsStore.kanSpelenVandaag(moeilijkheid)) {
  router.replace('/')
} else {
  store.initialiseerSpel(moeilijkheid)
}

watch(
  () => store.spelStatus,
  (status) => {
    if (status === 'gewonnen' || status === 'verloren') {
      statsStore.registreerSpel(moeilijkheid, status === 'gewonnen')
    }
  },
  { once: true },
)
</script>

<template>
  <main class="spel-view">
    <h1 class="spel-titel">Woordgroep</h1>
    <p class="spel-uitleg">Selecteer 4 woorden die bij elkaar horen en bevestig je keuze.</p>
    <p
      class="moeilijkheid-badge"
      :class="`moeilijkheid-badge--${store.puzzelData.moeilijkheid.toLowerCase()}`"
      :aria-label="`Moeilijkheid: ${store.puzzelData.moeilijkheid}`"
    >
      {{ store.puzzelData.moeilijkheid }}
    </p>
    <SpelStatus />
    <div class="feedback-wrapper">
      <WoordGrid />
      <Transition name="feedback">
        <div
          v-if="store.feedback"
          class="feedback-toast"
          :class="store.feedback.type === 'correct' ? 'feedback-toast--correct' : 'feedback-toast--fout'"
        >
          <template v-if="store.feedback.type === 'correct'">
            🎉 {{ store.feedback.groepId }}" 🎉
          </template>
          <template v-else>&#10060;</template>
        </div>
      </Transition>
    </div>
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

.feedback-wrapper {
  position: relative;
}

.feedback-toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 0.6rem 1.25rem;
  border-radius: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.feedback-toast--correct {
  background-color: #dcfce7;
  color: #166534;
  border: 2px solid #16a34a;
}

.feedback-toast--fout {
  background-color: #fee2e2;
  color: #991b1b;
  border: 2px solid #dc2626;
  font-size: 1.5rem;
}

.feedback-enter-active,
.feedback-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.feedback-enter-from,
.feedback-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.85);
}

.feedback-enter-to,
.feedback-leave-from {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
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
