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
        Lees hieronder welke cookies we gebruiken en maak je keuze.
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

      <div class="cookie-sectie">
        <div class="cookie-sectie-header">
          <span class="cookie-sectie-naam">Google AdSense-cookies</span>
          <span class="cookie-badge cookie-badge--optioneel">Optioneel</span>
        </div>
        <p class="cookie-sectie-uitleg">
          Wij maken gebruik van Google AdSense om gepersonaliseerde advertenties te tonen. Je kan
          dit accepteren of weigeren.
        </p>
      </div>

      <div class="banner-acties">
        <button class="knop knop--secundair" @click="store.saveConsent(false)">
          Weiger advertentiecookies
        </button>
        <button class="knop knop--primair" @click="store.saveConsent(true)">
          Accepteer alle cookies 🍪
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
}

@media (min-width: 640px) {
  .overlay {
    align-items: center;
  }
}

.banner {
  background-color: #ffffff;
  border-radius: 0.75rem;
  padding: 1.5rem;
  max-width: 560px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.banner-titel {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #111827;
  text-align: center;
}

.banner-uitleg {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.cookie-sectie {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
}

.cookie-sectie-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.cookie-sectie-naam {
  font-weight: 600;
  font-size: 0.9rem;
  color: #111827;
}

.cookie-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.cookie-badge--verplicht {
  background-color: #dcfce7;
  color: #166534;
}

.cookie-badge--optioneel {
  background-color: #fef3c7;
  color: #92400e;
}

.cookie-sectie-uitleg {
  font-size: 0.8rem;
  color: #6b7280;
  line-height: 1.4;
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
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s;
}

.knop--primair {
  background-color: #2563eb;
  color: #ffffff;
}

.knop--primair:hover {
  background-color: #1d4ed8;
}

.knop--secundair {
  background-color: #f3f4f6;
  color: #374151;
}

.knop--secundair:hover {
  background-color: #e5e7eb;
}
</style>
