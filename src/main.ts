import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useCookieConsentStore } from './stores/cookieConsent'
import { useStatsStore } from './stores/stats'
import { useThemeStore } from './stores/themeStore'
import './assets/theme.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// Laad persistent opgeslagen consent, stats en thema vóór de router actief wordt
useCookieConsentStore().loadConsent()
useStatsStore().loadStats()
useThemeStore().laadThema()

app.use(router)

app.mount('#app')
