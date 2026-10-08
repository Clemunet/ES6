<script>
export default {
  data() {
    return {
      name: 'Ma ville',
      weather: 'Peu nuageux',
      temperature: 20.55,
      updatedAt: new Date(),
    }
  },
}
</script>

<template>
  <article class="city-card">
    <h2>{{ name }}</h2>
    <p>{{ weather }}</p>
    <p class="temperature">{{ temperature }} °C</p>
    <p>Mis à jour le {{ updatedAt.toLocaleString('fr-FR') }}</p>
  </article>
</template>
