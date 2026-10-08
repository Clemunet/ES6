import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CitiesList from '../views/CitiesList.vue'
import City from '../components/City.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/villes', component: CitiesList },
    { path: '/ville', component: City },
  ],
})

export default router
