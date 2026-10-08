<template>
  <header>
    <nav aria-label="Navigation principale">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/villes">Voir la météo des villes</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
