import { createRouter, createWebHistory } from 'vue-router'
import LeftMenuBar from '../components/LeftMenuBar.vue'
import Teachers from '../views/Teachers'
import Classes from '../views/Classes'
import Students from '../views/Students'
import Subjects from '../views/Subjects'

const routes = [
  {
    path: '/LeftMenuBar',
    name: 'LeftMenuBar',
    component: LeftMenuBar
  },
  {
    path: '/Teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/Classes',
    name: 'Classes',
    component: Classes
  },
  {
    path: '/Students',
    name: 'Students',
    component: Students
  },
  {
    path: '/Subjects',
    name: 'Subjects',
    component: Subjects
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
