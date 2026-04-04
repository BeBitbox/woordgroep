import { test, expect } from '@playwright/test'

// Puzzeldata dag 1, Gemakkelijk (src/data/index.ts)
const GROEPEN = [
  ['Appel', 'Banaan', 'Mango', 'Peer'],
  ['Leeuw', 'Tijger', 'Olifant', 'Giraf'],
  ['Rood', 'Blauw', 'Groen', 'Geel'],
  // 4e groep (Landen) wordt automatisch opgelost na 3 correcte pogingen
]

test('happy path: voltooi een gemakkelijk spel van begin tot einde', async ({ page }) => {
  // Zet dag vast op 1 zodat altijd puzzel dag=1 geladen wordt (deterministisch)
  await page.addInitScript(() => {
    Date.prototype.getDate = () => 1
  })

  // --- Startscherm ---
  await page.goto('/')

  // Cookie banner accepteren
  await page.getByRole('button', { name: /Accepteer alle cookies/ }).click()

  // Startscherm is zichtbaar
  await expect(page.getByRole('heading', { name: 'Woordgroep' })).toBeVisible()
  await expect(page.getByText('Selecteer een moeilijkheidsgraad')).toBeVisible()

  // Statistieken tonen 0 gespeeld vóór het spel
  await expect(page.getByText('0 gespeeld').first()).toBeVisible()

  // --- Spel starten ---
  // Klik de eerste "Speel"-knop (Gemakkelijk)
  await page.getByRole('button', { name: 'Speel' }).first().click()

  await expect(page).toHaveURL(/\/spel\/gemakkelijk/)
  await expect(page.getByText('Gemakkelijk', { exact: true })).toBeVisible()

  // "Bevestig keuze" is uitgeschakeld zolang er minder dan 4 woorden geselecteerd zijn
  await expect(page.getByRole('button', { name: 'Bevestig keuze' })).toBeDisabled()

  // --- Los 3 groepen op (de 4e wordt automatisch opgelost) ---
  for (const groep of GROEPEN) {
    // Selecteer de 4 woorden van deze groep
    for (const woord of groep) {
      await page.getByRole('button', { name: woord }).click()
    }

    // "Bevestig keuze" is nu ingeschakeld
    await expect(page.getByRole('button', { name: 'Bevestig keuze' })).toBeEnabled()
    await page.getByRole('button', { name: 'Bevestig keuze' }).click()

    // Wacht tot de correcte-feedback-animatie klaar is (1200 ms + marge)
    await page.waitForTimeout(1500)
  }

  // --- Eindscherm ---
  await expect(page.getByRole('heading', { name: 'Gefeliciteerd!' })).toBeVisible()
  await expect(page.getByText('Je hebt alle woordgroepen gevonden.')).toBeVisible()

  // Terug naar startscherm
  await page.getByRole('button', { name: 'Terug naar startscherm' }).click()

  // --- Startscherm na afloop ---
  await expect(page).toHaveURL('/')

  // Gemakkelijk toont "Vandaag al gespeeld"
  await expect(page.getByText('Vandaag al gespeeld')).toBeVisible()

  // Statistieken zijn bijgewerkt: 1/1 gewonnen
  await expect(page.getByText('1 / 1 gewonnen')).toBeVisible()
})
