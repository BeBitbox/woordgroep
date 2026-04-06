<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import { useCookieConsentStore } from '@/stores/cookieConsent'

const consentStore = useCookieConsentStore()
const insRef = useTemplateRef<HTMLElement>('insEl')

onMounted(() => {
  if (
    consentStore.adsenseAccepted &&
    insRef.value?.getAttribute('data-adsbygoogle-status') === null
  ) {
    // @ts-expect-error adsbygoogle wordt door het AdSense-script op window gezet
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }
})
</script>

<template>
  <div v-if="consentStore.adsenseAccepted" class="advertentie-wrapper">
    <ins
      ref="insEl"
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-XXXXXXXXXX"
      data-ad-slot="0000000000"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </div>
</template>

<style scoped>
.advertentie-wrapper {
  margin: 1.5rem auto;
  max-width: 480px;
  min-height: 90px;
}
</style>
