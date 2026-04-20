import { ref } from 'vue'
import { defineStore } from 'pinia'

const COOKIE_NAAM = 'woordgroep-consent'

function leesCookie(naam: string): string | null {
  const waarde = `; ${document.cookie}`
  const delen = waarde.split(`; ${naam}=`)
  if (delen.length === 2) return delen.pop()!.split(';').shift() ?? null
  return null
}

function schrijfCookie(naam: string, waarde: string, dagen: number): void {
  const datum = new Date()
  datum.setTime(datum.getTime() + dagen * 24 * 60 * 60 * 1000)
  document.cookie = `${naam}=${waarde};expires=${datum.toUTCString()};path=/;SameSite=Lax`
}

export const useCookieConsentStore = defineStore('cookieConsent', () => {
  const consentGiven = ref(false)
  const functionalAccepted = ref(false)

  function loadConsent(): void {
    const raw = leesCookie(COOKIE_NAAM)
    if (!raw) return
    try {
      const data = JSON.parse(decodeURIComponent(raw))
      if (data.consentGiven) {
        consentGiven.value = true
        functionalAccepted.value = true
      }
    } catch {
      // ongeldige cookie, negeer
    }
  }

  function saveConsent(): void {
    functionalAccepted.value = true
    consentGiven.value = true
    const data = { consentGiven: true }
    schrijfCookie(COOKIE_NAAM, encodeURIComponent(JSON.stringify(data)), 365)
  }

  return { consentGiven, functionalAccepted, loadConsent, saveConsent }
})
