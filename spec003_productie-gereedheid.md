# Spec 003: Productie-gereedheid

## Doel

De website Woordgroep dient volledig productie-klaar gemaakt te worden vóór publieke lancering. Dit omvat alle niet-functionele vereisten die los staan van de spellogica zelf: zoekmachineoptimalisatie (SEO), juridische verplichtingen (privacybeleid, disclaimer, gebruiksvoorwaarden), technische meta-informatie en toegankelijkheid.
Het resultaat is een website die indexeerbaar is door zoekmachines, juridisch compliant is voor de Belgische/Nederlandse markt (AVG/GDPR), en een professionele uitstraling heeft richting bezoekers.

## Notities

- De website is Nederlandstalig en richt zich op de Belgische en Nederlandse markt — AVG/GDPR-compliance is verplicht.
- Google AdSense is reeds voorzien in de cookie-consent flow; de AdSense-publisher-ID moet nog geconfigureerd worden.
- De site is een SPA (Vue 3 + Vite) gehost op AWS S3 + CloudFront — traditionele server-side SEO-technieken (SSR) zijn niet beschikbaar. Focus ligt op correcte `<meta>`-tags, `sitemap.xml` en `robots.txt` als statische bestanden in de `public/`-map.
- `robots.txt` en `sitemap.xml` komen in `public/` zodat Vite ze ongewijzigd naar `dist/` kopieert.
- Open Graph- en Twitter Card-tags verhogen de deelbaarheid op sociale media.
- Juridische pagina's (privacybeleid, disclaimer) kunnen als aparte Vue-routes worden toegevoegd of als statische HTML-bestanden — kies voor Vue-routes om consistent te blijven met de bestaande architectuur.
- De `<title>`-tag en `<meta name="description">` in `index.html` zijn momenteel nog de Vite-standaardwaarden en moeten aangepast worden.
- Controleer of het `lang`-attribuut op `<html>` correct op `nl` staat.

## Taken

### Taak 1: SEO-basisoptimalisatie

1. Open `index.html` in de projectroot.
2. Pas het `lang`-attribuut aan op de `<html>`-tag: `<html lang="nl">`.
3. Vervang de `<title>` door: `Woordgroep — Dagelijks Nederlands woordspel`.
4. Voeg een `<meta name="description">` toe:
   `Speel elke dag een nieuw Nederlands woordspel. Vind de vier woordgroepen in drie moeilijkheidsgraden: Gemakkelijk, Gemiddeld en Moeilijk.`
5. Voeg Open Graph-tags toe (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`).
6. Voeg Twitter Card-tags toe (`twitter:card`, `twitter:title`, `twitter:description`).
7. Voeg een `<link rel="canonical">` toe met de productie-URL.
8. Maak `public/robots.txt` aan met toestemming voor alle crawlers en een verwijzing naar `sitemap.xml`.
9. Maak `public/sitemap.xml` aan met de startpagina als enige URL (de spelpagina's zijn niet afzonderlijk indexeerbaar).
10. Controleer na `npm run build` of `robots.txt` en `sitemap.xml` aanwezig zijn in `dist/`.

**Resultaat:** De website is correct vindbaar en indexeerbaar door zoekmachines en deelbaar op sociale media.

---

### Taak 2: Juridische pagina's

1. Maak een nieuwe route `/privacybeleid` aan in `src/router/index.ts`.
2. Maak een nieuwe route `/disclaimer` aan in `src/router/index.ts`.
3. Maak `src/views/PrivacybeleidView.vue` aan met de volledige privacyverklaring:
   - Verwerkingsverantwoordelijke (naam + contactgegevens invullen).
   - Welke persoonsgegevens worden verwerkt: spelstatistieken (lokaal via cookies), AdSense (optioneel na consent).
   - Rechtsgrond: toestemming (art. 6 lid 1 sub a AVG).
   - Bewaartermijn: cookies verlopen na 365 dagen.
   - Rechten van de betrokkene: inzage, correctie, verwijdering, intrekking toestemming.
   - Contactgegevens voor uitoefening van rechten.
4. Maak `src/views/DisclaimerView.vue` aan met:
   - Aansprakelijkheidsbeperking voor de spelinhoud.
   - Mededeling dat de website geen garanties biedt op beschikbaarheid.
   - Intellectueel eigendom: alle content is eigendom van de beheerder.
5. Voeg in de `CookieBanner.vue` een klikbare link toe naar `/privacybeleid`.
6. Voeg een eenvoudige footer toe in `App.vue` (of als apart `FooterComponent.vue`) met links naar `/privacybeleid` en `/disclaimer`, zichtbaar op alle pagina's.

**Resultaat:** De website voldoet aan de minimale juridische vereisten voor AVG/GDPR en heeft aanklikbare juridische pagina's.

---

### Taak 3: Google AdSense-integratie

1. Voeg in `index.html` het AdSense-script toe als `async`-tag met de correcte publisher-ID (`ca-pub-XXXXXXXXXX`), maar enkel conditioneel geladen na expliciete toestemming van de gebruiker.
2. Pas `src/stores/cookieConsent.ts` aan: voeg een `watch` toe op `adsenseAccepted` die het AdSense-script dynamisch inlaadt via een `<script>`-element als de waarde `true` wordt.
3. Verifieer dat het script NIET geladen wordt als de gebruiker "Weiger advertentiecookies" klikt.
4. Voeg een AdSense-advertentieblok toe als Vue-component `src/components/AdSenseBlok.vue` dat alleen rendert als `adsenseAccepted === true`.
5. Plaats het advertentieblok op een logische plek in `StartschermView.vue` (onder de moeilijkheidskaarten).

**Resultaat:** AdSense laadt enkel na expliciete toestemming, conform de AVG.

---

### Taak 4: Technische productie-afwerking

1. Voeg een `<link rel="icon">` toe in `index.html` die verwijst naar een favicon (`/favicon.ico` of SVG).
2. Maak een eenvoudig favicon aan (bijv. de letter "W" in het groen) en plaats het in `public/`.
3. Voeg een `<meta name="theme-color">` toe met de primaire kleur van de app (`#16a34a`).
4. Voeg een `<meta name="viewport">` toe indien nog niet aanwezig (mobile-first).
5. Controleer de GitHub Actions workflow (`.github/workflows/deploy-frontend.yml`):
   - Vervang `npm run generate` door `npm run build`.
   - Corrigeer het S3-bronpad naar `dist/`.
   - Verwijder de verwijzing naar `ollander-front/`.
   - Zorg dat de CloudFront-invalidatie correct geconfigureerd is (`/*`).
6. Test de volledige deploypipeline via een push naar `master` of via de handmatige `workflow_dispatch`.

**Resultaat:** De website heeft een volledig functionele CI/CD-pipeline en voldoet aan technische minimumvereisten voor een productie-omgeving.

---

### Taak 5: Testplan

#### 5.1 Automatische tests

1. Voer `npm run build` uit en controleer of `dist/robots.txt` en `dist/sitemap.xml` aanwezig zijn.
2. Voer `npm run test:unit` uit — alle 47 bestaande tests moeten slagen; voeg waar nodig tests toe voor de nieuwe stores/componenten.
3. Voer `npm run test:e2e -- --project=chromium` uit — de bestaande happy-path test moet slagen.

#### 5.2 Handmatige SEO-controle

1. Open de gebouwde `dist/index.html` en verifieer:
   - `<html lang="nl">` aanwezig.
   - `<title>` bevat "Woordgroep".
   - `<meta name="description">` is ingevuld.
   - Open Graph-tags aanwezig (`og:title`, `og:description`, `og:url`, `og:image`).
   - `<link rel="canonical">` verwijst naar de productie-URL.
2. Controleer `dist/robots.txt` op de juiste inhoud (`User-agent: *`, `Allow: /`, `Sitemap: https://...`).
3. Plak de productie-URL in de [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) en verifieer de Open Graph-preview.

#### 5.3 Juridische controle

1. Navigeer naar `/privacybeleid` — de pagina laadt zonder fouten.
2. Navigeer naar `/disclaimer` — de pagina laadt zonder fouten.
3. Verifieer dat de CookieBanner een klikbare link naar `/privacybeleid` toont.
4. Verifieer dat de footer zichtbaar is op het startscherm én op de spelpagina.

#### 5.4 AdSense-controle

1. Accepteer cookies in de banner → het AdSense-script wordt geladen (controleer via DevTools → Network).
2. Weiger cookies → het AdSense-script wordt NIET geladen.
3. Wis cookies → herlaad de pagina → de banner verschijnt opnieuw.

#### 5.5 Deployment-controle

1. Push naar `master` en volg de GitHub Actions-run.
2. Verifieer dat de S3-sync slaagt en de CloudFront-invalidatie uitgevoerd wordt.
3. Open de productie-URL en controleer: startscherm laadt, spel werkt, juridische pagina's zijn bereikbaar.

**Resultaat:** De volledige productie-checklist is afgevinkt en de website is klaar voor publieke lancering.
