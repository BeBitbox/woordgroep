<script setup lang="ts">
import CookieBanner from '@/components/CookieBanner.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { useCookieConsentStore } from '@/stores/cookieConsent'

const consentStore = useCookieConsentStore()
</script>

<template>
  <CookieBanner v-if="!consentStore.consentGiven" />
  <template v-else>
    <RouterView />
    <SiteFooter />
  </template>
</template>
