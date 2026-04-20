<script setup lang="ts">
import { useCookieConsentStore } from '@/stores/cookieConsent'

const store = useCookieConsentStore()
</script>

<template>
  <div class="overlay" role="dialog" aria-modal="true" aria-labelledby="cookie-titel">
    <div class="banner">
      <h2 id="cookie-titel" class="banner-titel">Cookiebeleid</h2>
      <p class="banner-uitleg">
        <strong>Woordgroep</strong> maakt gebruik van cookies om jouw spelervaring bij te houden.
        Lees hieronder welke cookies we gebruiken en maak je keuze. Meer info in ons
        <RouterLink to="/privacybeleid" class="privacy-link">privacybeleid</RouterLink>.
      </p>

      <div class="cookie-sectie">
        <div class="cookie-sectie-header">
          <span class="cookie-sectie-naam">Functionele cookies</span>
          <span class="cookie-badge cookie-badge--verplicht">Altijd actief</span>
        </div>
        <p class="cookie-sectie-uitleg">
          Deze cookies zijn noodzakelijk voor het bijhouden van je geschiedenis. Ze kunnen niet
          worden uitgeschakeld.
        </p>
      </div>

      <div class="banner-acties">
        <button class="knop knop--primair" @click="store.saveConsent()">
          Accepteer cookies 🍪
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: var(--overlay);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  backdrop-filter: blur(2px);
}

@media (min-width: 640px) {
  .overlay {
    align-items: center;
  }
}

.banner {
  background-color: var(--cookie-bg);
  border-radius: 1rem;
  padding: 1.75rem;
  max-width: 560px;
  width: 100%;
  box-shadow: 0 24px 64px var(--schaduw-groot);
  border: 1px solid var(--cookie-rand);
}

.banner-titel {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 0.625rem;
  color: var(--tekst-primair);
  text-align: center;
}

.banner-uitleg {
  font-size: 0.875rem;
  color: var(--tekst-secundair);
  margin-bottom: 1.25rem;
  line-height: 1.55;
}

.privacy-link {
  color: var(--tekst-link);
  text-decoration: underline;
}

.cookie-sectie {
  border: 1px solid var(--cookie-rand);
  border-radius: 0.625rem;
  padding: 0.875rem 1rem;
  margin-bottom: 0.75rem;
  background-color: var(--bg-kaart-subtiel);
}

.cookie-sectie-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
}

.cookie-sectie-naam {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--tekst-primair);
}

.cookie-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cookie-badge--verplicht {
  background-color: var(--cookie-badge-verplicht-bg);
  color: var(--cookie-badge-verplicht-tekst);
}


.cookie-sectie-uitleg {
  font-size: 0.8rem;
  color: var(--tekst-gedempt);
  line-height: 1.45;
}

.banner-acties {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

@media (min-width: 480px) {
  .banner-acties {
    flex-direction: row;
  }
}

.knop {
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: inherit;
  border-radius: 0.625rem;
  border: none;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    transform 0.1s ease;
}

.knop:hover {
  transform: scale(1.02);
}

.knop--primair {
  background-color: var(--knop-bg);
  color: var(--knop-tekst);
}

.knop--primair:hover {
  background-color: var(--knop-hover);
}

</style>
