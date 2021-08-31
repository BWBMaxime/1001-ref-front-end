import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Who from '@/components/Who.vue'
import What from '@/components/What.vue'
import FormContactProducer from '@/components/FormContactProducer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/qui',
    name: "Who",
    component: Who
  },
  {
    path: '/quoi',
    name: "What",
    component: What
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact-producer',
    name: "FormContactProducer",
    component: FormContactProducer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
