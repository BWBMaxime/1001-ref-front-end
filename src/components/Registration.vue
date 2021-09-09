<template>
<!-- component -->
<div class="py-6 min-h-screen bg-gray-50 flex items-center">
  <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
      <div class="p-9 bg-white rounded-xl">
      <h1 class="text-2xl font-semibold text-yellow-500 text-center">
        Je crée mon compte
      </h1>
      <h1 class="my-8 text-xl text-gray-700 text-center">
        Je suis
        <div class="relative inline-flex">
          <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
          <select v-model="user.role" class="w-full text-lg border border-gray-400 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            <option class="text-lg">Role...</option>
            <option class="text-lg">Producteur</option>
            <option class="text-lg">Distributeur - revendeur</option>
            <option class="text-lg">Distributeur - restaurateur</option>
          </select>
        </div>
      </h1>

        <!-- Infos Perso -->
      <div class="mb-6">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations personnelles</label>
        <input v-model="user.firstname" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Prénom du responsable"/>
        <input v-model="user.name" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Nom du responsable"/>
        <input v-model="user.mail" type="email" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Adresse email"/>
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
        <input type="password" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Confirmer le mot de passe"/>
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
            role: "",
            firstname:"",
            name:"",
            mail:"",
            company:"",
            siret:"",
            phone:"",
            password:""
        }

    return {
        user
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