import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useCookieConsentStore } from './stores/cookieConsent'
import { useStatsStore } from './stores/stats'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// Laad persistent opgeslagen consent en stats vóór de router actief wordt
useCookieConsentStore().loadConsent()
useStatsStore().loadStats()

app.use(router)

app.mount('#app')
