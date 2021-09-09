<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-1/2  px-4 lg:static lg:block lg:justify-start">
    
          <img src="@/assets/logo.jpg" class="w-1/3" alt="logo 1001ref">
        <button class="text-yellow-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li v-for="link in links" :key="link" class="nav-item">
            <router-link v-bind:to="link.path" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-yellow-500 hover:opacity-75" >
              {{link.name}}
            </router-link>
          </li>         
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
      links: [
        { path: "/", name: "Acceuil" },
        { path: "/about", name: "Présentation" },
        { path: "/contact", name: "Nous contacter" },
        ]

    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style>

</style>