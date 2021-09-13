
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import FirstCoProducer from '../views/FirstCoProducer.vue'
import RegisterProducer from '../views/RegisterProducer.vue'
import Dashboard from '../views/Dashboard.vue'
import Setting from '../views/Setting.vue'
import CreateProduct from '../views/CreateProduct.vue'
import Messaging from '../views/Messaging.vue'
import ProductListProd from '../views/ProductListProd.vue'
import PreviewProd from '../views/PreviewProd.vue'
import Profils from '../views/Profils.vue'
import Test from '../components/Test.vue'
const routes: Array<RouteRecordRaw> = [
  {
    //Utilisateur Non Connecter
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //-----------------------------------------------------------------------------
  //                              User Producer
    {
      // `First-connection-producer` va être rendu à l'intérieur du `<router-view>` de `User`
      // quand `/utilisateur/:id/profil` concorde
      path: '/producer/first-connection',
      name: 'firstCoProducer',
      component: FirstCoProducer
    },
    {
      path: '/producer/register',
      name: 'registerProducer',
      component: RegisterProducer
    },
    {
      path: '/producer/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/producer/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/producer/create-product',
      name: 'createProduct',
      component: CreateProduct
    },
    
    {
      path: '/producer/messaging',
      name: 'messaging',
      component: Messaging
    },
    {
      path: '/producer/product-list',
      name: 'productListProd',
      component: ProductListProd
    },
    {
      path: '/producer/preview',
      name: 'preview',
      component: PreviewProd
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profils
    },

  // -----------------------------------------------
    {
      path: '/test',
      name: 'test',
      component: Test
    }
 
 




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
