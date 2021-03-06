import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import FirstCoProducer from '../views/FirstCoProducer.vue'
import firstCoDistributer from '../components/FirstCoDistributor.vue'
import RegisterProducer from '../views/RegisterProducer.vue'
import Dashboard from '../views/Dashboard.vue'
import Setting from '../views/Setting.vue'
import CreateProduct from '../views/CreateProduct.vue'
import Messaging from '../views/Messaging.vue'
import ProductListProd from '../views/ProductListProd.vue'
import PreviewProd from '../views/PreviewProd.vue'
import Profils from '../views/Profils.vue'
import Test from '../components/Test.vue'
import DetailProduct from '../components/DetailProduct.vue'
import Registration from '../components/Registration.vue'
import FormContactProducer from '../components/FormContactProducer.vue'
import store from '../store/index'
import UpdateProduct from '../views/UpdateProduct.vue'

const routes: Array<RouteRecordRaw> = [
  {
    //Utilisateur Non Connecté
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
    path: '/signup',
    name: 'signup',
    component: Registration
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
      component: RegisterProducer,
      beforeEnter(to, from,next){
        if(store.state.currentUser.role == "Producteur"){
          next()
        }else{
          next("/")
        }
      }
    },
    {
      path: '/producer/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter(to, from,next){
        if(store.state.currentUser.role == "Producteur"){
          next()
        }else{
          next("/")
        }
      }
    },
    {
      path: '/producer/setting',
      name: 'setting',
      component: Setting,
      beforeEnter(to, from,next){
        if(store.state.currentUser.role == "Producteur"){
          next()
        }else{
          next("/")
        }
      }
    },
    {
      path: '/producer/create-product',
      name: 'createProduct',
      component: CreateProduct,
      beforeEnter(to, from,next){
        if(store.state.currentUser.role == "Producteur"){
          next()
        }else{
          next("/")
        }
      }
    },

    {
      path: '/producer/update-product/:id',
      name: 'updateProduct',
      component: UpdateProduct,
      beforeEnter(to, from, next){
        if(store.state.currentUser.role == "Producteur"){
          next()
        }else{
          next("/")
        }
      }
    },
    
    {
      path: '/producer/messaging',
      name: 'messagingProd',
      component: Messaging,
      beforeEnter(to, from,next){
        if(store.state.currentUser.role == "Producteur"){
          next()
        }else{
          next("/")
        }
      }
    },
    {
      path: '/producer/product-list',
      name: 'productListProd',
      component: ProductListProd,
      beforeEnter(to, from,next){
        if(store.state.currentUser.role == "Producteur"){
          next()
        }else{
          next("/")
        }
      }
    },
    {
      path: '/producer/preview',
      name: 'preview',
      component: PreviewProd,
      beforeEnter(to, from,next){
        if(store.state.currentUser.role == "Producteur"){
          next()
        }else{
          next("/")
        }
      }
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profils,
      beforeEnter(to, from,next){
        if(store.state.currentUser.role == "Producteur"){
          next()
        }else{
          next("/")
        }
      }
    },

  // ----------------------------- distributeur
    {
      path: '/distributer/liste',
      name: 'Chercher un produit',
      component: Test,
      beforeEnter(to,from,next){
        if(store.state.currentUser.role == "Distributeur - revendeur" || store.state.currentUser.role == "Distributeur - restaurateur"){
          next()
        }else{
          next("/")
        }
      }
    },
   
    {
      path: '/distributer/producerprofil/:id',
      name: 'Profil Producteur',
      component: Profils,
      beforeEnter(to,from,next){
        if(store.state.currentUser.role == "Distributeur - revendeur" || store.state.currentUser.role == "Distributeur - restaurateur"){
          next()
        }else{
          next("/")
        }
      }
    },
    {
      path: '/distributer/contact/:id',
      name: 'Contact Producteur',
      component: FormContactProducer,
      beforeEnter(to,from,next){
        if(store.state.currentUser.role == "Distributeur - revendeur" || store.state.currentUser.role == "Distributeur - restaurateur"){
          next()
        }else{
          next("/")
        }
      }
    },
    {
      path: '/distributer/detailproduct/:id',
      name: 'Detail Product',
      component: DetailProduct,
      beforeEnter(to,from,next){
        if(store.state.currentUser.role == "Distributeur - revendeur" || store.state.currentUser.role == "Distributeur - restaurateur"){
          next()
        }else{
          next("/")
        }
      }
    },
    {
      path: '/distributer/messaging',
      name: 'messagingDist',
      component: Messaging,
      beforeEnter(to, from,next){
        if(store.state.currentUser.role == "Distributeur - revendeur" || store.state.currentUser.role == "Distributeur - restaurateur"){
          next()
        }else{
          next("/")
        }
      }
    },
    {
      // `First-connection-producer` va être rendu à l'intérieur du `<router-view>` de `User`
      // quand `/utilisateur/:id/profil` concorde
      path: '/distributer/first-connection',
      name: 'firstCoDistributer',
      component: firstCoDistributer
    },
 




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
