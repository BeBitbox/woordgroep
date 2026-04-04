<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <main class="juridisch-pagina">
    <button class="terug-knop" @click="router.push('/')">← Terug</button>

    <h1>Privacybeleid</h1>
    <p class="datum">Laatst bijgewerkt: april 2026</p>

    <section>
      <h2>1. Verwerkingsverantwoordelijke</h2>
      <p>
        Dit privacybeleid is van toepassing op de website <strong>Woordgroep</strong>
        (woordgroep.site). Voor vragen over dit beleid kunt u contact opnemen via
        <a href="mailto:woordgroep@bitbox.be">woordgroep@bitbox.be</a>.
      </p>
    </section>

    <section>
      <h2>2. Welke gegevens verwerken wij?</h2>
      <p>Woordgroep verwerkt uitsluitend de volgende gegevens, opgeslagen in uw eigen browser:</p>
      <ul>
        <li>
          <strong>Spelstatistieken</strong> — het aantal gespeelde en gewonnen spellen per
          moeilijkheidsgraad, en de datum van het laatste spel. Deze gegevens verlaten uw toestel
          nooit.
        </li>
        <li>
          <strong>Spelvoortgang</strong> — de toestand van het actieve spel (geselecteerde groepen,
          aantal foute pogingen) wordt tijdelijk opgeslagen zodat u het spel kunt hervatten.
        </li>
        <li>
          <strong>Cookievoorkeur</strong> — uw keuze omtrent cookies (accepteren of weigeren) wordt
          onthouden gedurende 365 dagen.
        </li>
        <li>
          <strong>Google AdSense</strong> (alleen na uw toestemming) — als u advertentiecookies
          accepteert, plaatst Google AdSense cookies om gepersonaliseerde advertenties te tonen.
          Raadpleeg het
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
            >privacybeleid van Google</a
          >
          voor meer informatie.
        </li>
      </ul>
    </section>

    <section>
      <h2>3. Rechtsgrond</h2>
      <p>
        De verwerking van spelstatistieken en voortgang is gebaseerd op het
        <strong>gerechtvaardigd belang</strong> (art. 6 lid 1 sub f AVG) om u een functionerende
        spelbeleving te bieden. De verwerking via Google AdSense is gebaseerd op uw uitdrukkelijke
        <strong>toestemming</strong> (art. 6 lid 1 sub a AVG).
      </p>
    </section>

    <section>
      <h2>4. Bewaartermijn</h2>
      <p>
        Alle gegevens worden lokaal in uw browser bewaard via cookies en localStorage. Cookies
        verlopen na <strong>365 dagen</strong>. U kunt uw browsergegevens te allen tijde wissen via
        de instellingen van uw browser.
      </p>
    </section>

    <section>
      <h2>5. Uw rechten</h2>
      <p>Op grond van de AVG heeft u de volgende rechten:</p>
      <ul>
        <li><strong>Recht op inzage</strong> — u kunt opvragen welke gegevens wij verwerken.</li>
        <li>
          <strong>Recht op verwijdering</strong> — u kunt uw gegevens laten verwijderen. Omdat alle
          gegevens lokaal staan, kunt u dit zelf doen door uw browsercookies en localStorage te
          wissen.
        </li>
        <li>
          <strong>Recht op intrekking van toestemming</strong> — u kunt uw toestemming voor
          advertentiecookies te allen tijde intrekken door uw cookies te wissen en de banner opnieuw
          te weigeren.
        </li>
        <li>
          <strong>Recht op klacht</strong> — u kunt een klacht indienen bij de Gegevensbeschermingsautoriteit
          (België: <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer">gegevensbeschermingsautoriteit.be</a>)
          of de Autoriteit Persoonsgegevens (Nederland: <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>).
        </li>
      </ul>
    </section>

    <section>
      <h2>6. Contact</h2>
      <p>
        Voor vragen of verzoeken met betrekking tot uw persoonsgegevens kunt u ons bereiken via
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

ul {
  padding-left: 1.25rem;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: #2563eb;
  text-decoration: underline;
}
</style>
