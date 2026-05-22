import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import StoreView from '@/views/Store.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/refugio',
    name: 'refugio',
    component: StoreView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
