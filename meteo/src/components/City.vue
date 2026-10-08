<script>
export default {
  props: {
    name: { type: String, required: true },
    weather: { type: String, required: true },
    temperature: { type: Number, required: true },
    updatedAt: { type: Date, required: true },
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
