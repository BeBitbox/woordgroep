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
    <div class="spel-header">
      <p
        class="moeilijkheid-badge"
        :class="`moeilijkheid-badge--${store.puzzelData.moeilijkheid.toLowerCase()}`"
        :aria-label="`Moeilijkheid: ${store.puzzelData.moeilijkheid}`"
      >
        {{ store.puzzelData.moeilijkheid }}
      </p>
      <div class="voortgang-stippen" aria-label="Voortgang">
        <span
          v-for="groep in store.puzzelData.groepen"
          :key="groep.id"
          class="voortgang-stip"
          :class="{ 'voortgang-stip--opgelost': store.opgelostGroepIds.includes(groep.id) }"
          :style="
            store.opgelostGroepIds.includes(groep.id) ? { backgroundColor: groep.kleur } : {}
          "
        ></span>
      </div>
    </div>
    <SpelStatus />
    <template v-if="store.spelStatus === 'bezig'">
      <div class="feedback-wrapper">
        <WoordGrid />
        <Transition name="feedback">
          <div
            v-if="store.feedback"
            class="feedback-toast"
            :class="
              store.feedback.type === 'correct'
                ? 'feedback-toast--correct'
                : 'feedback-toast--fout'
            "
          >
            <template v-if="store.feedback.type === 'correct'">
              <svg
                class="feedback-icoon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {{ store.feedback.groepId }}
            </template>
            <template v-else>
              &#10060;
              <span v-if="store.feedback.bijna >= 3" class="feedback-bijna">
                {{ store.feedback.bijna }} van de 4 juist
              </span>
            </template>
          </div>
        </Transition>
      </div>
      <SpelBesturing />
    </template>
  </main>
</template>

<style scoped>
.spel-view {
  max-width: 640px;
  margin: 0 auto;
  padding: 1.5rem 1rem 2rem;
}

@media (max-width: 480px) {
  .spel-view {
    padding: 1rem 0.625rem;
  }
}

/* ── Header met badge + voortgang ── */
.spel-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  animation: header-in 0.4s ease both;
}

@keyframes header-in {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.moeilijkheid-badge {
  padding: 0.25rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.moeilijkheid-badge--gemakkelijk {
  background-color: var(--badge-gemakkelijk-bg);
  color: var(--badge-gemakkelijk-tekst);
}

.moeilijkheid-badge--gemiddeld {
  background-color: var(--badge-gemiddeld-bg);
  color: var(--badge-gemiddeld-tekst);
}

.moeilijkheid-badge--moeilijk {
  background-color: var(--badge-moeilijk-bg);
  color: var(--badge-moeilijk-tekst);
}

/* ── Voortgangsindicator ── */
.voortgang-stippen {
  display: flex;
  gap: 0.375rem;
}

.voortgang-stip {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--rand);
  transition:
    background-color 0.4s ease,
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.voortgang-stip--opgelost {
  transform: scale(1.4);
}

/* ── Feedback ── */
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
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 4px 20px var(--schaduw-groot);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.feedback-icoon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.feedback-toast--correct {
  background-color: var(--toast-correct-bg);
  color: var(--toast-correct-tekst);
  border: 2px solid var(--toast-correct-rand);
}

.feedback-toast--fout {
  background-color: var(--toast-fout-bg);
  color: var(--toast-fout-tekst);
  border: 2px solid var(--toast-fout-rand);
  flex-direction: column;
  animation: pulse-fout 0.6s ease;
}

@keyframes pulse-fout {
  0%,
  100% {
    box-shadow: 0 4px 20px var(--schaduw-groot);
  }
  50% {
    box-shadow:
      0 4px 20px var(--schaduw-groot),
      0 0 30px var(--toast-fout-rand);
  }
}

.feedback-bijna {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
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
</style>
