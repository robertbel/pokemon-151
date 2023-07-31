<template>
  <header class="header">
    <NuxtLink to="./" class="header-logo"
      ><img src="@/assets/images/logo.webp" alt="Pokémon Scarlet & Violet 151"
    /></NuxtLink>
    <nav class="navigation">
      <NuxtLink to="./" class="navigation-item">Home</NuxtLink>
      <NuxtLink to="/producten" class="navigation-item">Producten</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
a.router-link-active {
  font-weight: 700;
}
.header {
  max-width: 65rem;
  display: flex;
  gap: 2rem;
  align-items: center;

  margin-block: var(--space-s-l);
  margin-inline: auto;
  padding-inline: var(--space-l-xl);
}

@media only screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
  }
}

.header-logo {
  width: 8rem;
}

.navigation {
  flex-shrink: 1;
  background-color: #e0e1e2;
  border-radius: 2rem;
  padding-inline: 2rem;
  padding-block: 1rem;
  display: flex;
  gap: 2rem;
}

.navigation-item {
  text-decoration: none;
  color: var(--color-alpha);
}
</style>
