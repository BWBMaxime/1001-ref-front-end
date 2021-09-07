<template>
<!-- component -->
<div class="min-h-screen bg-gray-50 flex items-center">
  <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">

      <div class="p-9 bg-white rounded-xl">
      <!-- Logo du site -->
      <img v-bind:src="logo.img">
      <h1 class="my-8 text-xl text-gray-700 text-center">
          Je suis #### . Je crée mon compte
        </h1>
        <!-- Infos Perso -->
      <div class="mb-6">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations personnelles</label>
        <input v-model="user.firstname" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Prénom du responsable"/>
        <input v-model="user.lastname" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Nom du responsable"/>
        <input v-model="user.mail" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Adresse email"/>
      </div>

        <!-- Infos Pro -->
      <div class="mb-6">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations professionnelles</label>
        <input v-model="user.company" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Nom de l'enseigne"/>
        <input v-model="user.siret" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Numéro Siret ou Siren"/>
        <input v-model="user.phone" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Numéro de téléphone"/>
      </div>

        <!-- Infos connexion -->
      <div class="">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations de connexion</label>
        <input v-model="user.password" type="password" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Mot de passe"/>
        <input v-model="user.confirm" type="password" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Confirmer le mot de passe"/>
      </div>  

      <button @click="sendUser" class="w-full mt-6 text-white font-semibold bg-yellow-500 py-3 border rounded-md hover:bg-yellow-400 transition duration-300">Créer un compte</button>
    </div>
  </div>
</div>
</template>

<script>

import UserController from  "../controllers/UserController";

export default {
  data() {

    let user = {
        firstname:"",
        lastname:"",
        mail:"",
        company:"",
        siret:"",
        phone:"",
        password:""
      }

    return {
      user,
      logo:
      {
        img:""
      }
    }
  },

  methods:{

    sendUser(){
     UserController.saveUser(this.user);
    }
  }
}

</script>

<style>

</style>