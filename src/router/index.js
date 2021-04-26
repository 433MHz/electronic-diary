import { createRouter, createWebHistory } from 'vue-router'
import LeftMenuBar from '../components/LeftMenuBar.vue'

const routes = [
  {
    path: '/LeftMenuBar',
    name: 'LeftMenuBar',
    component: LeftMenuBar
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
