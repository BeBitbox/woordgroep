<script setup lang="ts">
import { computed } from 'vue'
import { useSpelStore } from '@/stores/spelStore'

const store = useSpelStore()

const kanBevestigen = computed(
  () => store.geselecteerdeWoorden.length === 4 && store.spelStatus === 'bezig',
)
</script>

<template>
  <div class="spel-besturing">
    <div class="pogingen">
      <span
        v-for="n in 3"
        :key="n"
        class="hart"
        :class="{ 'hart--weg': n > store.resterendePogingen }"
        aria-hidden="true"
      >
        ♥
      </span>
      <span class="pogingen-label">
        {{ store.resterendePogingen }}
        <span v-if="store.resterendePogingen !== 1">pogingen</span>
        <span v-else>poging</span>
        over
      </span>
    </div>
    <button class="bevestig-knop" :disabled="!kanBevestigen" @click="store.bevestigKeuze()">
      Bevestig keuze
    </button>
  </div>
</template>

<style scoped>
.spel-besturing {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1.25rem 0;
}

.pogingen {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.hart {
  color: var(--hart-actief);
  font-size: 1.375rem;
  transition:
    color 0.2s ease,
    opacity 0.2s ease;
  line-height: 1;
}

.hart--weg {
  color: var(--hart-inactief);
  opacity: 0.6;
}

.pogingen-label {
  font-size: 0.85rem;
  color: var(--tekst-gedempt);
  margin-left: 0.375rem;
}

.bevestig-knop {
  padding: 0.8rem 2.25rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  background-color: var(--knop-bg);
  color: var(--knop-tekst);
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    transform 0.1s ease,
    opacity 0.15s ease;
  letter-spacing: 0.01em;
}

.bevestig-knop:hover:not(:disabled) {
  background-color: var(--knop-hover);
  transform: scale(1.02);
}

.bevestig-knop:disabled {
  background-color: var(--knop-uitgeschakeld);
  color: var(--tekst-gedempt);
  cursor: not-allowed;
  transform: none;
}
</style>
