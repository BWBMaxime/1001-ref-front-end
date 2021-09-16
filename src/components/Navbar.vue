<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="relative flex justify-between lg:w-1/3  px-4 lg:static lg:block lg:justify-start">
    
          <img src="@/assets/logo.jpg" style="width: 300px" alt="logo 1001ref">
        <button class="text-yellow-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow justify-end">
        <!-- User non connecté -->
        <div v-if="$store.state.currentUser.role === ''">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li v-for="link in linksNotCo" :key="link" class="nav-item">
            <router-link v-bind:to="link.path" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-yellow-500 hover:opacity-75" >
              {{link.name}}
            </router-link>
          </li>
        </ul>  
        </div>
        <!-- producteur -->
   <div v-if="$store.state.currentUser.role === 'producteur'">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li v-for="link in linksProducteur" :key="link" class="nav-item">
            <router-link v-bind:to="link.path" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-yellow-500 hover:opacity-75" >
              {{link.name}}
            </router-link>
          </li>
          <li class="nav-item">
            <button @click="logout" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-yellow-500 hover:opacity-75">Logout</button>  
          </li>         
        </ul>  
        </div>
        <!-- distributeur -->
     <div v-if="$store.state.currentUser.role === 'Distributeur - revendeur' || $store.state.currentUser.role === 'Distributeur - restaurateur' ">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li v-for="link in linksDistributeur" :key="link" class="nav-item">
            <router-link v-bind:to="link.path" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-yellow-500 hover:opacity-75" >
              {{link.name}}
            </router-link>
          </li>
          <li class="nav-item">
            <button @click="logout" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-yellow-500 hover:opacity-75">Logout</button>  
          </li>         
        </ul>  
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import store from "../store"
import router from "../router"
export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
      linksNotCo:[
        //Utilisateur non connecter
        { path: "/", name: "Acceuil" },
        { path: "/about", name: "Présentation" },
        { path: "/contact", name: "Nous contacter" },
        ],
        linksProducteur: [
           // User Producer
        { path: "/producer/dashboard", name: "Dashboard" },
        { path: "/producer/setting", name: "Paramètres" },
        { path: "/producer/create-product", name: "Créer un produit" },
        { path: "/producer/messaging", name: "Messagerie" },
        { path: "/producer/product-list", name: "Liste des produits" },
        { path: "/producer/preview", name: "Preview" },
        { path: "/profil", name: "Profil" },
        // 
        ],
        linksDistributeur: [
           { path: "/distributer/liste", name: "Liste des produits" },
             { path: "/distributer/messaging", name: "Messagerie" },
            { path: "/distributer/detailproduct/5", name: "test" },
        ]
        
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    },
    logout() {
      store.commit("logout")
      router.push("/")        
    }
  }
}
</script>

<style>

</style>