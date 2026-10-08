<script>
import City from '../components/City.vue'

export default {
  components: { City },
  data() {
    return {
      city: {
        name: 'Ma ville',
        weather: 'Peu nuageux',
        temperature: 20.55,
        updatedAt: new Date(),
      },
    }
  },
}
</script>

<template>
  <h1>Météo - Liste des villes</h1>
  <City
    :name="city.name"
    :weather="city.weather"
    :temperature="city.temperature"
    :updated-at="city.updatedAt"
  />
</template>
