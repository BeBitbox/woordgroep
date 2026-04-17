<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useSpelStore } from '@/stores/spelStore'

const store = useSpelStore()
const router = useRouter()

const confetti = computed(() => {
  if (store.spelStatus !== 'gewonnen') return []
  const kleuren = store.puzzelData.groepen.map((g) => g.kleur)
  return Array.from({ length: 50 }, (_, i) => ({
    id: i,
    kleur: kleuren[i % kleuren.length]!,
    left: `${2 + Math.random() * 96}%`,
    delay: `${Math.random() * 1.8}s`,
    duur: `${2 + Math.random() * 2}s`,
    breedte: `${5 + Math.random() * 7}px`,
    hoogte: `${5 + Math.random() * 12}px`,
    radius: Math.random() > 0.5 ? '50%' : `${Math.random() * 3}px`,
  }))
})
</script>

<template>
  <div v-if="store.spelStatus !== 'bezig'" class="spel-status">
    <div v-if="confetti.length > 0" class="confetti-container" aria-hidden="true">
      <div
        v-for="c in confetti"
        :key="c.id"
        class="confetti-stuk"
        :class="c.id % 2 === 0 ? 'confetti-stuk--a' : 'confetti-stuk--b'"
        :style="{
          left: c.left,
          backgroundColor: c.kleur,
          width: c.breedte,
          height: c.hoogte,
          borderRadius: c.radius,
          animationDelay: c.delay,
          animationDuration: c.duur,
        }"
      ></div>
    </div>

    <div
      class="status-kaart"
      :class="
        store.spelStatus === 'gewonnen' ? 'status-kaart--gewonnen' : 'status-kaart--verloren'
      "
    >
      <h2>{{ store.spelStatus === 'gewonnen' ? 'Gefeliciteerd!' : 'Helaas!' }}</h2>
      <p v-if="store.spelStatus === 'gewonnen'">Je hebt alle woordgroepen gevonden.</p>
      <p v-else>Je hebt 3 foute pogingen gemaakt.</p>

      <div class="oplossing">
        <h3>Oplossing</h3>
        <div
          v-for="groep in store.puzzelData.groepen"
          :key="groep.id"
          class="oplossing-groep"
          :style="{ backgroundColor: groep.kleur }"
        >
          <span class="oplossing-groep__naam">{{ groep.id }}</span>
          <span class="oplossing-groep__woorden">{{ groep.woorden.join(', ') }}</span>
        </div>
      </div>

      <button class="opnieuw-knop" @click="router.push('/')">Terug naar startscherm</button>
    </div>
  </div>
</template>

<style scoped>
.spel-status {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  position: relative;
  animation: status-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes status-in {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(12px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* ── Confetti ── */
.confetti-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 200;
  overflow: hidden;
}

.confetti-stuk {
  position: absolute;
  top: -20px;
}

.confetti-stuk--a {
  animation: confetti-val-a linear forwards;
}

.confetti-stuk--b {
  animation: confetti-val-b linear forwards;
}

@keyframes confetti-val-a {
  0% {
    transform: translateY(0) rotate(0deg) translateX(0);
    opacity: 1;
  }
  25% {
    transform: translateY(25vh) rotate(180deg) translateX(18px);
  }
  50% {
    transform: translateY(50vh) rotate(360deg) translateX(-12px);
    opacity: 0.8;
  }
  75% {
    transform: translateY(75vh) rotate(540deg) translateX(22px);
  }
  100% {
    transform: translateY(105vh) rotate(720deg) translateX(-8px);
    opacity: 0;
  }
}

@keyframes confetti-val-b {
  0% {
    transform: translateY(0) rotate(0deg) translateX(0);
    opacity: 1;
  }
  25% {
    transform: translateY(25vh) rotate(-150deg) translateX(-22px);
  }
  50% {
    transform: translateY(50vh) rotate(-300deg) translateX(15px);
    opacity: 0.8;
  }
  75% {
    transform: translateY(75vh) rotate(-450deg) translateX(-18px);
  }
  100% {
    transform: translateY(105vh) rotate(-600deg) translateX(10px);
    opacity: 0;
  }
}

/* ── Status-kaart ── */
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

/* ── Oplossing ── */
.oplossing {
  margin-top: 1.25rem;
  text-align: left;
}

.oplossing h3 {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.625rem;
  text-align: center;
}

.oplossing-groep {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;
  color: #ffffff;
  margin-bottom: 0.375rem;
}

.oplossing-groep__naam {
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.oplossing-groep__woorden {
  font-size: 0.8rem;
  opacity: 0.9;
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
