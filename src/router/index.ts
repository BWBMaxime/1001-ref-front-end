import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Who from '@/components/Who.vue'
import What from '@/components/What.vue'
import FormContactAdmin from '@/components/FormContactAdmin.vue'
import FormContactProducer from '@/components/FormContactProducer.vue'
import Login from '@/components/Login.vue'
import Navbar from '@/components/Navbar.vue'
import SearchBar from '@/components/SearchBar.vue'
import SignIn from '@/components/SignIn.vue'
import TestTailwind from '@/components/TestTailwind.vue'
import ProductsList from '@/components/ProductsList.vue'
import FilterProducts from '@/components/FilterProducts.vue'
import Test from '@/components/Test.vue'
import Registration from '@/components/Registration.vue'
import FirstCoDistributor from '@/components/FirstCoDistributor.vue'
import Profil from '@/components/Profil.vue'
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
    path: '/fca',
    name: "fca",
    component: FormContactAdmin
  },
  {
    path: '/fcp',
    name: "fcp",
    component: FormContactProducer
  },
  {
    path: '/log',
    name: 'log',
    component: Login
  },
  {
    path: '/nav',
    name: "nav",
    component: Navbar
  },
  {
    path: '/sb',
    name: "sb",
    component: SearchBar
  },
  {
    path: '/sign-in',
    name: "sign-in",
    component: SignIn
  },
  {
    path: '/tt',
    name: "tt",
    component: TestTailwind
  },
  {
    path: '/pl',
    name: "pl",
    component: ProductsList
  },
  {
    path: '/fp',
    name: "fp",
    component: FilterProducts
  },
  {
    path: '/test',
    name: "test",
    component: Test
  },
    {
    path: '/register',
    name: "register",
    component: Registration
  },
     {
    path: '/fcd',
    name: "fcd",
    component: FirstCoDistributor
  },
  {
    path: '/prof',
    name: "prof",
    component: Profil
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
