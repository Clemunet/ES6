<script>
import City from '../components/City.vue'

export default {
  components: { City },
  data() {
    return {
      cities: [
        {
          id: 1,
          name: 'Ville 1',
          weather: 'Ensoleillé',
          temperature: 22.0,
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Ville 2',
          weather: 'Peu nuageux',
          temperature: 19.5,
          updatedAt: new Date(),
        },
      ],
    }
  },
  computed: {
    displayedCities() {
      const [firstCity, secondCity] = this.cities

      return `${firstCity.name} et ${secondCity.name}`
    },
  },
}
</script>

<template>
  <h1>Météo - Liste des villes</h1>
  <p>Villes affichées : {{ displayedCities }}</p>
  <div class="cities-list">
    <City
      v-for="city in cities"
      :key="city.id"
      :name="city.name"
      :weather="city.weather"
      :temperature="city.temperature"
      :updated-at="city.updatedAt"
    />
  </div>
</template>
