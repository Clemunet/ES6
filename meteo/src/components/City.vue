<script>
import { format, register } from 'timeago.js'
import fr from 'timeago.js/lib/lang/fr'
import { formatTemperature } from '../utils/formatTemperature.js'

register('fr', fr)

export default {
  props: {
    name: { type: String, required: true },
    weather: { type: String, required: true },
    temperature: { type: Number, required: true },
    updatedAt: { type: Date, required: true },
  },
  methods: {
    formatDate(date) {
      return format(date, 'fr')
    },
    formatTemperature,
  },
}
</script>

<template>
  <article class="city-card">
    <h2>{{ name }}</h2>
    <p>{{ weather }}</p>
    <p class="temperature">{{ formatTemperature(temperature) }}</p>
    <p>
      Mis à jour
      <time :datetime="updatedAt.toISOString()" :title="updatedAt.toLocaleString('fr-FR')">
        {{ formatDate(updatedAt) }}
      </time>
    </p>
  </article>
</template>
