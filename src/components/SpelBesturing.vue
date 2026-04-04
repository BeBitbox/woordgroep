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
      >
        ♥
      </span>
      <span class="pogingen-label"
        >{{ store.resterendePogingen }} <span v-if="store.resterendePogingen > 1">pogingen</span
        ><span v-else>poging</span> over</span
      >
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
  margin: 1rem 0;
}

.pogingen {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
}

.hart {
  color: #dc2626;
  font-size: 1.5rem;
  transition: opacity 0.2s;
}

.hart--weg {
  color: #d1d5db;
}

.pogingen-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-left: 0.5rem;
}

.bevestig-knop {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.15s;
}

.bevestig-knop:hover:not(:disabled) {
  background-color: #1d4ed8;
}

.bevestig-knop:disabled {
  background-color: #93c5fd;
  cursor: not-allowed;
}
</style>
