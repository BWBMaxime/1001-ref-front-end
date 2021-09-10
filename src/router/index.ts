
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
const routes: Array<RouteRecordRaw> = [
  {
    //Utilisateur Non Connecter
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //-----------------------------------------------------------------------------
  //                              User Producer
  
   { path: '/producer/:id', component: Dashboard,
   children: [
    {
      // `First-connection-producer` va être rendu à l'intérieur du `<router-view>` de `User`
      // quand `/utilisateur/:id/profil` concorde
      path: 'first-connection',
      name: 'FirstCoProducer',
      component: FirstCoProducer
    },
    {
      path: 'register',
      name: 'RegisterProducer',
      component: RegisterProducer
    },
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: 'setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: 'create-product',
      name: 'CreateProduct',
      component: CreateProduct
    },
    
    {
      path: 'messaging',
      name: 'Messaging',
      component: Messaging
    },
    {
      path: 'product-list',
      name: 'ProductListProd',
      component: ProductListProd
    },
    {
      path: 'preview',
      name: 'Preview',
      component: PreviewProd
    },
  ]
}
  // -----------------------------------------------

 
 




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
