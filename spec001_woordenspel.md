# Spec 001: Woordenspel

## Doel
De applicatie toont een 4×4-grid van 16 woorden. De woorden zijn verdeeld in 4 geheime groepen van elk 4 woorden die een gemeenschappelijk thema of categorie delen. De gebruiker selecteert telkens precies 4 woorden die hij denkt dat bij elkaar horen en bevestigt zijn keuze.

Bij een correcte keuze worden de 4 vakken groen gekleurd en blijven ze zichtbaar als opgeloste groep. Bij een foute keuze verliest de gebruiker één van zijn drie beschikbare pogingen. Het spel is gewonnen wanneer alle vier groepen correct zijn geïdentificeerd. Het spel is verloren wanneer de gebruiker drie foute pogingen heeft gemaakt, ongeacht hoeveel groepen al gevonden zijn.

De selectiestatus van een woord wordt visueel aangegeven (bijv. een andere achtergrondkleur). De gebruiker kan een geselecteerd woord opnieuw aanklikken om de selectie ongedaan te maken, zolang hij zijn keuze nog niet bevestigd heeft.

## Notities
- **Speldata**: De 16 woorden en hun groepsindeling worden vooraf gedefinieerd als statische data in een JSON-bestand. Voorzie een structuur die later eenvoudig uitbreidbaar is naar meerdere puzzels.
- **Maximaal 4 selecties**: De gebruiker kan nooit meer dan 4 woorden tegelijk geselecteerd hebben. Een vijfde klik vervangt de oudste selectie of blokkeert verdere selectie tot er een woord gedeselecteerd wordt — kies één gedrag en documenteer het.
- **Volgorde maakt niet uit**: Bij de controle van een groep telt alleen welke 4 woorden geselecteerd zijn, niet in welke volgorde ze aangeklikt werden.
- **Persistentie**: Er is geen vereiste voor het opslaan van spelvoortgang tussen sessies in deze versie.
- **Responsiviteit**: Het grid moet bruikbaar zijn op zowel desktop als mobiel (touch-events ondersteunen).
- **Toegankelijkheid**: Zorg voor voldoende kleurcontrast en overweeg een tekst- of iconlabel naast de kleur voor de opgeloste groepen.
- **State management**: Gebruik Pinia voor de spelstatus (geselecteerde woorden, opgeloste groepen, resterend aantal pogingen, speluitkomst).

## Taken

### Taak 1 — Speldata en domeinmodel definiëren

1. Maak een TypeScript-interface `Woord` met velden `id` (string), `tekst` (string) en `groepId` (string).
2. Maak een TypeScript-interface `Groep` met velden `id` (string), `label` (string) en `kleur` (string, bijv. een Tailwind-klasse of hex-waarde).
3. Maak een TypeScript-interface `PuzzelData` die een array van `Groep` en een array van `Woord` combineert.
4. Maak een bestand `src/data/puzzel001.ts` met één concrete `PuzzelData` van 4 groepen × 4 woorden als exporteerbare constante.
5. Verifieer dat TypeScript geen fouten geeft (`npm run build`).

---

### Taak 2 — Pinia-store voor spelstatus

1. Maak `src/stores/spelStore.ts` als een setup-store.
2. Definieer de volgende state:
   - `puzzelData: PuzzelData` — de geladen puzzeldata
   - `geselecteerdeIds: string[]` — ids van geselecteerde woorden (max 4)
   - `opgelostGroepIds: string[]` — ids van correct gevonden groepen
   - `foutePogingen: number` — teller van foute pogingen (start op 0, max 3)
   - `spelStatus: 'bezig' | 'gewonnen' | 'verloren'`
3. Implementeer de volgende acties:
   - `selecteerWoord(id: string)`: voeg woord toe aan selectie als minder dan 4 geselecteerd; deselecteer als al geselecteerd; doe niets als spel niet 'bezig' is.
   - `bevestigKeuze()`: controleer of de 4 geselecteerde woorden tot dezelfde groep behoren.
     - Juist → voeg groepId toe aan `opgelostGroepIds`, maak selectie leeg. Als alle 4 groepen opgelost zijn, zet `spelStatus` op `'gewonnen'`.
     - Fout → verhoog `foutePogingen`. Als `foutePogingen === 3`, zet `spelStatus` op `'verloren'`. Maak selectie leeg.
   - `resetSpel()`: herstel alle state naar beginwaarden.
4. Exporteer berekende getters: `isGeselecteerd(id)`, `isOpgelost(id)`, `resterendePogingen`.

---

### Taak 3 — Grid-component

1. Maak `src/components/WoordGrid.vue`.
2. Toon alle 16 woorden als klikbare vakken in een 4×4-grid (CSS Grid).
3. Koppel elk vak aan `spelStore.selecteerWoord(woord.id)` bij klik.
4. Visuele staten per vak:
   - **Standaard**: neutrale achtergrond
   - **Geselecteerd**: gemarkeerde achtergrond (bijv. blauw omlijnd of andere kleur)
   - **Opgelost**: groene achtergrond (of de groepskleur uit `Groep.kleur`), niet klikbaar
5. De volgorde van de woorden in het grid wordt bij het laden van het spel éénmalig willekeurig geschud (Fisher-Yates of `Array.sort(() => Math.random() - 0.5)`).
6. Woorden in opgeloste groepen worden bovenaan of apart getoond, of blijven op hun plek — kies één aanpak en voer die consistent door.

---

### Taak 4 — Spelbesturing en statusbalk

1. Maak `src/components/SpelBesturing.vue`.
2. Toon een "Bevestig keuze"-knop die alleen actief is als precies 4 woorden geselecteerd zijn én `spelStatus === 'bezig'`.
3. Koppel de knop aan `spelStore.bevestigKeuze()`.
4. Toon het aantal resterende pogingen (bijv. als 3 hartjes of een teller).
5. Maak `src/components/SpelStatus.vue` voor de eindschermen:
   - **Gewonnen**: felicitatietekst + "Opnieuw spelen"-knop.
   - **Verloren**: "Helaas"-tekst met vermelding van de onopgeloste groepen + "Opnieuw spelen"-knop.
   - Koppel de knop aan `spelStore.resetSpel()`.

---

### Taak 5 — Integratie in de applicatie

1. Registreer een route `/` in `src/router/index.ts` die de spelweergave toont.
2. Maak `src/views/SpelView.vue` die `WoordGrid`, `SpelBesturing` en `SpelStatus` samenvoegt.
3. Pas `src/App.vue` aan zodat `<RouterView />` correct gerenderd wordt.
4. Start de dev-server (`npm run dev`) en verifieer het basisspel handmatig in de browser.

---

### Taak 6 — Testplan

1. **Unit tests (`src/__tests__/`)**
   - `spelStore.spec.ts`:
     - Selecteren van een woord voegt het toe aan `geselecteerdeIds`.
     - Een vijfde woord selecteren heeft geen effect (max 4).
     - Hetzelfde woord tweemaal selecteren deselecteert het.
     - `bevestigKeuze()` met 4 woorden van dezelfde groep → groepId in `opgelostGroepIds`, selectie leeg.
     - `bevestigKeuze()` met foute combinatie → `foutePogingen` +1, selectie leeg.
     - Na 3 foute pogingen → `spelStatus === 'verloren'`.
     - Na 4 correct gevonden groepen → `spelStatus === 'gewonnen'`.
     - `resetSpel()` herstelt alle state.
   - `WoordGrid.spec.ts`:
     - Alle 16 woorden worden gerenderd.
     - Klik op een woord roept `selecteerWoord` aan.
     - Opgeloste woorden hebben de juiste CSS-klasse.

2. **E2e-tests (`e2e/`)**
   - Volledig spelverloop — winnend pad: selecteer 4 keer een correcte groep → winnende melding zichtbaar.
   - Verliezend pad: maak 3 foute pogingen → verliezende melding zichtbaar.
   - "Opnieuw spelen" reset het grid naar de begintoestand.

3. **Handmatige controle**
   - Test op mobiel formaat (Chrome DevTools, 375 px breed): vakken zijn aanraakbaar en het grid is leesbaar.
   - Controleer kleurcontrast van geselecteerde en opgeloste vakken met een contrastchecker (WCAG AA, minimaal 4,5:1).
