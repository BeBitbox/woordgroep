<script setup lang="ts">
defineProps<{ open: boolean }>()
const emit = defineEmits<{ sluit: [] }>()

function sluitOpEsc(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('sluit')
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="speluitleg-titel"
        @click.self="emit('sluit')"
        @keydown="sluitOpEsc"
      >
        <div class="modal-inhoud">
          <div class="modal-header">
            <h2 id="speluitleg-titel" class="modal-titel">Speluitleg</h2>
            <button class="sluit-knop" aria-label="Speluitleg sluiten" @click="emit('sluit')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div class="modal-sectie">
            <h3 class="sectie-titel">Hoe speel je?</h3>
            <ol class="stappen-lijst">
              <li class="stap">
                <span class="stap-nr">1</span>
                <p>
                  Je ziet een grid van <strong>16 woorden</strong>. Die zijn verdeeld in 4 verborgen
                  groepen van elk 4 woorden.
                </p>
              </li>
              <li class="stap">
                <span class="stap-nr">2</span>
                <p>Selecteer <strong>4 woorden</strong> die je denkt dat bij elkaar horen.</p>
              </li>
              <li class="stap">
                <span class="stap-nr">3</span>
                <p>
                  Klik op <strong>Bevestig keuze</strong>. Is je keuze correct? Dan verschijnt de
                  groep in kleur. Fout? Je verliest een poging.
                </p>
              </li>
              <li class="stap">
                <span class="stap-nr">4</span>
                <p>Je hebt <strong>3 pogingen</strong>. Vind alle 4 groepen om te winnen!</p>
              </li>
            </ol>
          </div>

          <div class="modal-sectie">
            <h3 class="sectie-titel">Moeilijkheidsgraden</h3>
            <div class="graad-lijst">
              <div class="graad graad--gemakkelijk">
                <span class="graad-label">Gemakkelijk</span>
                <span class="graad-uitleg">Duidelijke, concrete categorieën</span>
              </div>
              <div class="graad graad--gemiddeld">
                <span class="graad-label">Gemiddeld</span>
                <span class="graad-uitleg">Subtielere verbanden</span>
              </div>
              <div class="graad graad--moeilijk">
                <span class="graad-label">Moeilijk</span>
                <span class="graad-uitleg">Verrassende, abstracte verbindingen</span>
              </div>
            </div>
          </div>

          <p class="dag-regel">
            Elke moeilijkheidsgraad kan <strong>éénmaal per dag</strong> gespeeld worden. Kom morgen
            terug voor nieuwe puzzels!
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: var(--overlay);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  backdrop-filter: blur(2px);
}

.modal-inhoud {
  background-color: var(--modal-bg);
  border: 1px solid var(--modal-rand);
  border-radius: 1rem;
  padding: 1.75rem;
  max-width: 500px;
  width: 100%;
  max-height: 90dvh;
  overflow-y: auto;
  box-shadow: 0 24px 64px var(--schaduw-groot);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.modal-titel {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--tekst-primair);
}

.sluit-knop {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  background-color: var(--bg-invoer);
  color: var(--tekst-secundair);
  cursor: pointer;
  transition:
    background-color 0.15s,
    color 0.15s;
  flex-shrink: 0;
}

.sluit-knop:hover {
  background-color: var(--rand);
  color: var(--tekst-primair);
}

.modal-sectie {
  margin-bottom: 1.5rem;
}

.sectie-titel {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--tekst-gedempt);
  margin-bottom: 0.875rem;
}

.stappen-lijst {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.stap {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
}

.stap-nr {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  min-width: 1.75rem;
  border-radius: 50%;
  background-color: var(--instructie-stap-bg);
  color: var(--instructie-stap-nr);
  font-size: 0.8rem;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
}

.stap p {
  font-size: 0.9rem;
  color: var(--tekst-secundair);
  line-height: 1.55;
  padding-top: 0.2rem;
}

.stap p strong {
  color: var(--tekst-primair);
  font-weight: 600;
}

.graad-lijst {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.graad {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.625rem 0.875rem;
  border-radius: 0.625rem;
  border: 1px solid transparent;
}

.graad--gemakkelijk {
  background-color: var(--gemakkelijk-bg);
  border-color: var(--gemakkelijk-rand);
}

.graad--gemiddeld {
  background-color: var(--gemiddeld-bg);
  border-color: var(--gemiddeld-rand);
}

.graad--moeilijk {
  background-color: var(--moeilijk-bg);
  border-color: var(--moeilijk-rand);
}

.graad-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--tekst-primair);
  min-width: 6rem;
}

.graad-uitleg {
  font-size: 0.825rem;
  color: var(--tekst-secundair);
}

.dag-regel {
  font-size: 0.85rem;
  color: var(--tekst-secundair);
  line-height: 1.55;
  padding: 0.875rem 1rem;
  background-color: var(--bg-kaart-subtiel);
  border-radius: 0.5rem;
  border: 1px solid var(--rand);
}

.dag-regel strong {
  color: var(--tekst-primair);
}

/* Modal-animatie */
.modal-enter-active,
.modal-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.modal-enter-active .modal-inhoud,
.modal-leave-active .modal-inhoud {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-from .modal-inhoud {
  opacity: 0;
  transform: scale(0.95) translateY(8px);
}

.modal-leave-to {
  opacity: 0;
}

.modal-leave-to .modal-inhoud {
  opacity: 0;
  transform: scale(0.95) translateY(8px);
}
</style>
