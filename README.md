# Woordgroep

Een dagelijks woordspel in het Nederlands. Vind de vier groepen van vier woorden die bij elkaar horen — elke moeilijkheidsgraad één keer per dag.

![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)
![Playwright](https://img.shields.io/badge/getest_met-Playwright-2EAD33?logo=playwright&logoColor=white)

---

## Hoe werkt het?

Je ziet een 4×4-grid van 16 woorden. Jouw taak: vind de vier groepen van vier woorden die een gemeenschappelijk thema hebben. Je hebt **drie pogingen** voordat het spel voorbij is.

Er zijn drie moeilijkheidsgraden — **Gemakkelijk**, **Gemiddeld** en **Moeilijk** — elk met een eigen dagelijkse puzzel. De puzzels wisselen automatisch per dag.

---

## Technische stack

| Laag       | Technologie                                |
|------------|--------------------------------------------|
| Framework  | Vue 3 met `<script setup>` Composition API |
| State      | Pinia (setup stores)                       |
| Routing    | Vue Router 5                               |
| Build      | Vite 8                                     |
| Taal       | TypeScript 6 (strict mode)                 |
| Unit tests | Vitest + `@vue/test-utils`                 |
| E2E tests  | Playwright (Chromium, Firefox, WebKit)     |
| Linting    | oxlint + ESLint + Prettier                 |
| Hosting    | AWS S3 + CloudFront                        |

---

## Lokaal draaien

```sh
# Afhankelijkheden installeren
npm install

# Development server met hot-reload
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in je browser.

---

## Commando's

```sh
npm run dev          # Development server
npm run build        # Type-check + productie build
npm run test:unit    # Unit tests (Vitest)
npm run test:e2e     # End-to-end tests (Playwright)
npm run lint         # oxlint + ESLint (met --fix)
npm run format       # Prettier formattering
```

### E2E tests

```sh
# Eenmalig: browsers installeren
npx playwright install

# Eerst bouwen, dan testen
npm run build
npm run test:e2e

# Alleen Chromium
npm run test:e2e -- --project=chromium

# Met visuele browser (debug)
npm run test:e2e -- --debug
```

---

## Projectstructuur

```
src/
├── components/       # WoordGrid, CookieBanner, SpelBesturing, SpelStatus
├── views/            # StartschermView, SpelView
├── stores/           # spelStore, stats, cookieConsent (Pinia)
├── data/             # Dagelijkse puzzels
├── types/            # TypeScript-interfaces
└── router/           # Vue Router-configuratie

e2e/                  # Playwright end-to-end tests
```

---

## Deployment

De applicatie wordt automatisch gebouwd en gedeployed via GitHub Actions bij elke push naar `master`. De statische build (`dist/`) wordt gesynchroniseerd naar een AWS S3-bucket en geserveerd via
CloudFront.
