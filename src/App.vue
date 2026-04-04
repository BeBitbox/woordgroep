<script setup lang="ts">
import CookieBanner from '@/components/CookieBanner.vue'
import { useCookieConsentStore } from '@/stores/cookieConsent'

const consentStore = useCookieConsentStore()
</script>

<template>
  <CookieBanner v-if="!consentStore.consentGiven" />
  <RouterView v-else />
</template>
