<template>
  <footer class="site-footer">
    <RouterLink to="/privacybeleid">Privacybeleid</RouterLink>
    <span class="scheidingsteken">·</span>
    <RouterLink to="/disclaimer">Disclaimer</RouterLink>
    <span class="scheidingsteken">·</span>
    <span class="cookie-indicator" title="Enkel functionele cookie voor historiek bij te houden">🍪</span>
  </footer>
</template>

<style scoped>
.site-footer {
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.8rem;
  color: var(--footer-tekst);
}

.site-footer a {
  color: var(--footer-tekst);
  text-decoration: none;
  transition: color 0.15s ease;
}

.site-footer a:hover {
  color: var(--footer-tekst-hover);
  text-decoration: underline;
}

.scheidingsteken {
  margin: 0 0.5rem;
}

.cookie-indicator {
  opacity: 0.5;
  font-size: 0.75rem;
  cursor: default;
}
</style>
