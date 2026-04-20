# Spec 002: Cookie Consent en Moeilijkheidsgraad

## Doel

Bij het opstarten van de applicatie wordt de gebruiker verplicht een cookiekeuze te maken vooraleer de applicatie verder toegankelijk is. De cookiebanner informeert de gebruiker over het gebruik van functionele cookies (voor het bijhouden van win/verlies-statistieken per moeilijkheidsgraad). De cookiekeuze wordt éénmalig gevraagd en persistent opgeslagen in de browser.

Na de cookiekeuze wordt de gebruiker naar het startscherm geleid. Het startscherm toont een overzicht van de win/verlies-statistieken per moeilijkheidsgraad en laat de gebruiker een moeilijkheidsgraad selecteren om een nieuw spel te starten. Elke moeilijkheidsgraad kan slechts éénmaal per kalenderdag gespeeld worden. Na het afronden van een spel keert de gebruiker terug naar het startscherm om eventueel een andere moeilijkheidsgraad te kiezen, zonder de applicatie te herladen.

De functionele cookie slaat per moeilijkheidsgraad het totaal aantal gespeelde en gewonnen spellen op. Deze teller wordt nooit gereset, tenzij de cookie expliciet verwijderd wordt door de gebruiker of de browser.

## Notities

- De cookiebanner moet voldoen aan de GDPR-vereisten: functionele cookies zijn verplicht en kunnen niet geweigerd worden.
- De cookiekeuze wordt opgeslagen als een persistente cookie (niet sessie-cookie) zodat de banner niet bij elk bezoek opnieuw verschijnt.
- De "éénmaal per dag"-beperking per moeilijkheidsgraad wordt bepaald op basis van de lokale kalenderdag van de gebruiker (midnight reset). De datum van de laatste speelbeurt per moeilijkheidsgraad moet ook in de functionele cookie bewaard worden.
- De statistieken (totaal gespeeld / gewonnen per moeilijkheidsgraad) worden opgeslagen in de functionele cookie.
- Bij het verwijderen van cookies door de gebruiker (bijv. via browserinstellingen) worden alle statistieken en voorkeuren gereset — dit is het verwachte gedrag en vereist geen extra afhandeling.
- De overstap van cookiebanner → startscherm → spel → startscherm moet volledig client-side verlopen zonder paginaherlading (SPA-navigatie via Vue Router).
- Zorg voor een duidelijke visuele blokkering van de applicatie zolang de cookiekeuze niet is gemaakt (bijv. een modal overlay die de rest van de UI blokkeert).
- De moeilijkheidsgraden zijn: **gemakkelijk**, **gemiddeld**, **moeilijk**.

## Taken

### Taak 1: Cookie-consent store en persistentie

1. Maak een Pinia-store `useCookieConsentStore` aan in `src/stores/cookieConsent.ts`.
2. Definieer de state: `consentGiven: boolean`, `functionalAccepted: boolean` (altijd `true` eens gegeven).
3. Implementeer een actie `loadConsent()` die bij initialisatie de opgeslagen cookiewaarden uitleest en de state vult.
4. Implementeer een actie `saveConsent()` die:
   - `functionalAccepted` op `true` zet,
   - `consentGiven` op `true` zet,
   - de keuze opslaat als persistente cookie (vervaldatum bijv. 365 dagen).
5. Roep `loadConsent()` aan bij het bootstrappen van de app in `src/main.ts`.
6. Resultaat: de consent-staat is beschikbaar in de hele app en overleeft een paginaverversing.

---

### Taak 2: Statistieken-store met functionele cookie

1. Maak een Pinia-store `useStatsStore` aan in `src/stores/stats.ts`.
2. Definieer de state als een record per moeilijkheidsgraad (`gemakkelijk | gemiddeld | moeilijk`), elk met: `gespeeld: number`, `gewonnen: number`, `laatstGespeeldDatum: string | null` (ISO-datumstring `YYYY-MM-DD`).
3. Implementeer `loadStats()`: lees de functionele cookie uit en hydrateer de state.
4. Implementeer `saveStats()`: serialiseer de volledige state en schrijf terug naar de functionele cookie (zelfde vervaldatum als consent-cookie).
5. Implementeer `registreerSpel(moeilijkheid, gewonnen: boolean)`:
   - Verhoog `gespeeld` met 1.
   - Verhoog `gewonnen` met 1 als `gewonnen === true`.
   - Stel `laatstGespeeldDatum` in op de huidige lokale datum (`YYYY-MM-DD`).
   - Roep `saveStats()` aan.
6. Implementeer `kanSpelenVandaag(moeilijkheid): boolean`:
   - Geeft `true` als `laatstGespeeldDatum` voor die moeilijkheid `null` is of niet gelijk is aan de huidige lokale datum.
7. Resultaat: statistieken zijn persistent en de dagelijkse beperking is afdwingbaar.

---

### Taak 3: CookieBanner-component

1. Maak `src/components/CookieBanner.vue` aan als een modal overlay-component.
2. De overlay blokkeert visueel de volledige UI (bijv. `position: fixed`, `z-index` hoog, halftransparante achtergrond).
3. De banner toont:
   - Een titel en korte uitleg over de cookies.
   - Een bullet/sectie "Functionele cookies" met uitleg dat deze verplicht zijn en altijd geactiveerd worden.
   - Een knop "Accepteer cookies".
4. Klik op "Accepteer cookies": roept `saveConsent()` aan op de store.
6. Na opslaan verdwijnt de overlay automatisch (reactief via `consentGiven`).
7. Resultaat: de gebruiker kan de cookiebanner zien en een keuze maken.

---

### Taak 4: Startscherm-component en routing

1. Maak `src/views/StartschermView.vue` aan.
2. Het startscherm toont voor elke moeilijkheidsgraad (gemakkelijk, gemiddeld, moeilijk):
   - Aantal gewonnen / gespeeld (bijv. "3 / 7 gewonnen").
   - Een knop "Speel" die navigeert naar het spelscherm met de gekozen moeilijkheid als route-parameter.
   - Als `kanSpelenVandaag(moeilijkheid)` `false` teruggeeft: de knop is uitgeschakeld en toont een melding "Vandaag al gespeeld".
3. Voeg de route `/` toe aan `src/router/index.ts` die naar `StartschermView` wijst.
4. Voeg de route `/spel/:moeilijkheid` toe die naar de bestaande spelview wijst (of een placeholder als die nog niet bestaat).
5. Na afloop van een spel navigeert de spelview terug naar `/` via `router.push('/')`.
6. Resultaat: de gebruiker kan het startscherm zien, statistieken bekijken en een moeilijkheid kiezen.

---

### Taak 5: Integratie in App.vue en routebescherming

1. Voeg in `src/App.vue` de `CookieBanner`-component toe.
2. Toon de `CookieBanner` conditioneel: als `!consentGiven` uit de consent-store.
3. Voeg een navigatieguard toe in `src/router/index.ts` (`router.beforeEach`):
   - Als `consentGiven` `false` is: blokkeer navigatie (of redirect naar `/`) en laat de banner tonen.
   - Als `consentGiven` `true` is: laat navigatie door.
4. Zorg dat `loadConsent()` en `loadStats()` aangeroepen worden vóór de router guard actief wordt (in `src/main.ts` na store-initialisatie).
5. Resultaat: de applicatie is volledig geblokkeerd totdat de cookiekeuze is gemaakt; daarna is alle navigatie toegestaan.

---

### Taak 6: Testplan

**Unit tests (Vitest + @vue/test-utils):**

1. `useCookieConsentStore`:
   - `loadConsent()` vult de state correct vanuit een gesimuleerde cookie.
   - `saveConsent()` schrijft de keuze naar de cookie en zet `consentGiven` op `true`.
   - Na een versversing (opnieuw aanroepen `loadConsent()`) is de staat hersteld.

2. `useStatsStore`:
   - `loadStats()` hydrateert correct vanuit een gesimuleerde cookie.
   - `registreerSpel('gemakkelijk', true)` verhoogt `gespeeld` en `gewonnen` en slaat de datum op.
   - `kanSpelenVandaag()` geeft `false` terug als `laatstGespeeldDatum` de huidige datum is.
   - `kanSpelenVandaag()` geeft `true` terug als datum `null` is of een andere dag.

3. `CookieBanner.vue`:
   - De component rendert wanneer `consentGiven === false`.
   - Klik "Accepteer cookies" roept `saveConsent()` aan.
   - De component verdwijnt nadat consent is gegeven.

4. `StartschermView.vue`:
   - Statistieken per moeilijkheidsgraad worden correct weergegeven.
   - Knop is uitgeschakeld als `kanSpelenVandaag()` `false` is.
   - Knop navigeert naar het juiste spelroute-pad.

**E2e tests (Playwright):**

1. Eerste bezoek: cookiebanner is zichtbaar, de rest van de app is geblokkeerd.
2. Klik "Accepteer alle cookies": banner verdwijnt, startscherm is zichtbaar.
3. Herladen van de pagina: cookiebanner verschijnt niet opnieuw.
4. Selecteer een moeilijkheidsgraad en speel een spel: na afloop is de statistiek bijgewerkt op het startscherm.
5. Na het spelen is de knop voor die moeilijkheidsgraad uitgeschakeld voor de rest van de dag.
6. Verwijder cookies in de browser: bij herbezoek verschijnt de banner opnieuw en zijn statistieken gereset.
