<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <main class="juridisch-pagina">
    <button class="terug-knop" @click="router.push('/')">← Terug</button>

    <h1>Disclaimer</h1>
    <p class="datum">Laatst bijgewerkt: april 2026</p>

    <section>
      <h2>1. Aansprakelijkheidsbeperking</h2>
      <p>
        De beheerder van Woordgroep (woordgroep.site) stelt alles in het werk om de inhoud van deze
        website correct en actueel te houden. Desondanks kunnen er fouten of onnauwkeurigheden
        voorkomen in de puzzels, woordgroepen of andere inhoud. De beheerder is niet aansprakelijk
        voor directe of indirecte schade die voortvloeit uit het gebruik van de website of de
        onmogelijkheid de website te raadplegen.
      </p>
    </section>

    <section>
      <h2>2. Beschikbaarheid</h2>
      <p>
        Woordgroep streeft naar een continue beschikbaarheid van de website, maar geeft geen
        garanties omtrent ononderbroken toegang. De website kan tijdelijk onbeschikbaar zijn wegens
        onderhoud, updates of technische storingen. De beheerder is niet aansprakelijk voor enig
        verlies of ongemak als gevolg van tijdelijke onbeschikbaarheid.
      </p>
    </section>

    <section>
      <h2>3. Intellectueel eigendom</h2>
      <p>
        Alle inhoud op deze website — inclusief maar niet beperkt tot teksten, puzzels,
        woordgroepen, vormgeving en code — is eigendom van de beheerder van Woordgroep of wordt
        gebruikt met toestemming van de rechthebbende. Het is niet toegestaan enige inhoud te
        kopiëren, verspreiden, openbaar te maken of te bewerken zonder voorafgaande schriftelijke
        toestemming.
      </p>
    </section>

    <section>
      <h2>4. Links naar externe websites</h2>
      <p>
        Deze website kan links bevatten naar externe websites. De beheerder heeft geen controle over
        de inhoud van die websites en aanvaardt geen aansprakelijkheid voor de inhoud of het
        privacybeleid van gelinkte websites.
      </p>
    </section>

    <section>
      <h2>5. Toepasselijk recht</h2>
      <p>
        Op deze disclaimer is het Belgisch recht van toepassing. Geschillen worden voorgelegd aan de
        bevoegde rechtbanken in België.
      </p>
    </section>

    <section>
      <h2>6. Contact</h2>
      <p>
        Voor vragen over deze disclaimer kunt u contact opnemen via
        <a href="mailto:woordgroep@bitbox.be">woordgroep@bitbox.be</a>.
      </p>
    </section>
  </main>
</template>

<style scoped>
.juridisch-pagina {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  font-family: sans-serif;
  color: #111827;
  line-height: 1.7;
}

.terug-knop {
  background: none;
  border: none;
  color: #2563eb;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0;
  margin-bottom: 1.5rem;
  display: inline-block;
}

.terug-knop:hover {
  text-decoration: underline;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.datum {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

a {
  color: #2563eb;
  text-decoration: underline;
}
</style>
