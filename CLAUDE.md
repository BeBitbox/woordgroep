# CLAUDE.md

## Project
- De naam van dit project is `woordgroep`. Het is een eenvoudig woordspel die 4×4-grid van 16 woorden toont, waarvan er 4 woordgroepen bestaan.
- De website is volledig in het Nederlands.
- De website is mobiel responsief

## Commando's

```sh
npm run dev          # development server met hot-reload
npm run build        # type-check + productie build
npm run test:unit    # unit tests (Vitest, watch mode)
npm run test:e2e     # end-to-end tests (Playwright, vereist eerst npm run build)
npm run lint         # oxlint + ESLint (beide met --fix)
npm run format       # Prettier formattering van src/
```

Enkel test uitvoeren:
```sh
npx vitest run src/__tests__/App.spec.ts
```

Wanneer nieuwe bestanden, worden gemaakt: voeg dit toe met `git add`
## Architectuur

Dit is een Vue 3 + TypeScript applicatie op basis van Vite. De stack:

- **Vue 3** met `<script setup>` Composition API
- **Pinia** voor state management — stores staan in `src/stores/`, geschreven als setup stores (niet options-stijl)
- **Vue Router** — routes worden geregistreerd in `src/router/index.ts`

De app bootstrap zit in `src/main.ts`: Pinia en de router worden daar als plugins toegevoegd.

Unit tests staan in `src/__tests__/` en gebruiken `@vue/test-utils` + Vitest met jsdom als environment.
E2e-tests staan in `e2e/` en draaien via Playwright.

Linting is tweeledig: oxlint (snel, via `.oxlintrc.json`) gevolgd door ESLint. Prettier voor formattering is losgekoppeld van linting (`eslint-config-prettier`).
