<script setup lang="ts">
import { ref } from 'vue'
import CookieBanner from '@/components/CookieBanner.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import SpeluitlegModal from '@/components/SpeluitlegModal.vue'
import { useCookieConsentStore } from '@/stores/cookieConsent'

const consentStore = useCookieConsentStore()
const speluitlegOpen = ref(false)

// Feature flag: VITE_COOKIE_CONSENT_ACTIEF=false verbergt het cookie consent-scherm
const cookieConsentActief = import.meta.env.VITE_COOKIE_CONSENT_ACTIEF !== 'false'
</script>

<template>
  <CookieBanner v-if="cookieConsentActief && !consentStore.consentGiven" />
  <template v-if="!cookieConsentActief || consentStore.consentGiven">
    <header class="site-header">
      <RouterLink to="/" class="header-logo" aria-label="Terug naar startscherm">
        <span class="logo-letter" aria-hidden="true">W</span>oordgroep
      </RouterLink>
      <div class="header-rechts">
        <button
          class="info-knop"
          aria-label="Speluitleg bekijken"
          title="Speluitleg"
          @click="speluitlegOpen = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </button>
        <ThemeToggle />
      </div>
    </header>

    <RouterView />
    <SiteFooter />

    <SpeluitlegModal :open="speluitlegOpen" @sluit="speluitlegOpen = false" />
  </template>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid var(--rand);
  background-color: var(--bg-pagina);
  transition: background-color 0.25s ease;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-rechts {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header-logo {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--tekst-primair);
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: opacity 0.15s ease;
}

.header-logo:hover {
  opacity: 0.7;
}

.logo-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #16a34a;
  color: #ffffff;
  border-radius: 0.3rem;
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1rem;
  font-weight: 700;
  margin-right: 0.1em;
  vertical-align: middle;
  position: relative;
  top: -0.05em;
}

.info-knop {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: 1.5px solid var(--rand);
  background-color: var(--schakelaar-bg);
  color: var(--schakelaar-tekst);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.15s ease;
}

.info-knop:hover {
  background-color: var(--schakelaar-hover);
  border-color: var(--rand-hover);
  transform: scale(1.08);
}
</style>
