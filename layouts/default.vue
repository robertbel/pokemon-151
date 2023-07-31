<template>
  <TheHeader />
  <main class="main">
    <slot></slot>
  </main>
</template>

<style scoped>
.main {
  max-width: 65rem;
  margin-inline: auto;
}
</style>
