<template>
  <footer class="site-footer">
    <RouterLink to="/privacybeleid">Privacybeleid</RouterLink>
    <span class="scheidingsteken">·</span>
    <RouterLink to="/disclaimer">Disclaimer</RouterLink>
  </footer>
</template>

<style scoped>
.site-footer {
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.8rem;
  color: #9ca3af;
}

.site-footer a {
  color: #9ca3af;
  text-decoration: none;
}

.site-footer a:hover {
  color: #6b7280;
  text-decoration: underline;
}

.scheidingsteken {
  margin: 0 0.5rem;
}
</style>
