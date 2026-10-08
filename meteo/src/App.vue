<script>
export default {
  methods: {
    onListClick() {
      alert('Vous avez demandé la liste des villes.')
    },
  },
}
</script>

<template>
  <h1>Bienvenue sur Météo des villes</h1>
  <a href="#villes" @click.prevent="onListClick">Voir la météo des villes</a>
</template>

<style scoped></style>
