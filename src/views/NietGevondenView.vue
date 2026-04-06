<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="niet-gevonden">
    <p class="fout-code">404</p>
    <h1 class="titel">Pagina niet gevonden</h1>
    <p class="uitleg">
      De pagina die je zoekt bestaat niet of is verplaatst.
    </p>
    <button class="terug-knop" @click="router.push('/')">Terug naar startscherm</button>
  </main>
</template>

<style scoped>
.niet-gevonden {
  max-width: 480px;
  margin: 0 auto;
  padding: 4rem 1.25rem;
  text-align: center;
}

.fout-code {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 6rem;
  font-weight: 800;
  color: var(--rand);
  line-height: 1;
  margin-bottom: 1rem;
  letter-spacing: -0.04em;
}

.titel {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--tekst-primair);
  margin-bottom: 0.75rem;
}

.uitleg {
  font-size: 0.95rem;
  color: var(--tekst-secundair);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.terug-knop {
  padding: 0.8rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  background-color: var(--knop-bg);
  color: var(--knop-tekst);
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    transform 0.1s ease;
}

.terug-knop:hover {
  background-color: var(--knop-hover);
  transform: scale(1.03);
}
</style>
