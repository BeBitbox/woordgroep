import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const ADSENSE_PUBLISHER_ID = 'ca-pub-XXXXXXXXXX'

function laadAdSenseScript(): void {
  if (document.getElementById('adsense-script')) return
  const script = document.createElement('script')
  script.id = 'adsense-script'
  script.async = true
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`
  script.crossOrigin = 'anonymous'
  document.head.appendChild(script)
}

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
  const adsenseAccepted = ref(false)

  function loadConsent(): void {
    const raw = leesCookie(COOKIE_NAAM)
    if (!raw) return
    try {
      const data = JSON.parse(decodeURIComponent(raw))
      if (data.consentGiven) {
        consentGiven.value = true
        functionalAccepted.value = true
        adsenseAccepted.value = data.adsenseAccepted ?? false
      }
    } catch {
      // ongeldige cookie, negeer
    }
  }

  function saveConsent(adsense: boolean): void {
    functionalAccepted.value = true
    adsenseAccepted.value = adsense
    consentGiven.value = true
    const data = { consentGiven: true, adsenseAccepted: adsense }
    schrijfCookie(COOKIE_NAAM, encodeURIComponent(JSON.stringify(data)), 365)
  }

  // TODO Laad AdSense zodra toestemming gegeven wordt (ook bij herstel na paginalading)
 /* watch(adsenseAccepted, (gegeven) => {
    if (gegeven) laadAdSenseScript()
  })
*/
  return { consentGiven, functionalAccepted, adsenseAccepted, loadConsent, saveConsent }
})
