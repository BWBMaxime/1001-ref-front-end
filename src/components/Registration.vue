<template>
<!-- component -->
<div class="py-6 min-h-screen bg-gray-50 flex items-center">
  <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
      <div class="p-9 bg-white rounded-xl">
      <h1 class="mb-6 text-2xl font-semibold text-yellow-500 text-center">
        Je crée mon compte
      </h1>        
      <div class="mb-6">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="role">Qui suis-je ?</label>
        <select v-model="user.role" class="w-full border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2">
          <option class="text-lg">Producteur</option>
          <option class="text-lg">Distributeur - revendeur</option>
          <option class="text-lg">Distributeur - restaurateur</option>
        </select>
      </div>
      
        <!-- Infos Perso -->
      <div class="mb-6">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations personnelles</label>
        <input v-model="user.firstname" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Prénom du responsable"/>
        <input v-model="user.name" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Nom du responsable"/>
        <input v-model="user.mail" type="mail" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Adresse email"/>
      </div>

        <!-- Infos Pro -->
      <div class="mb-6">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations professionnelles</label>
        <input v-model="user.company" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Nom de l'entreprise"/>
        <input v-model="user.siret" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Numéro Siret ou Siren"/>
        <input v-model="user.phone" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Numéro de téléphone"/>
      </div>

        <!-- Infos connexion -->
      <div class="">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations de connexion</label>
        <input v-model="user.password" type="password" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Mot de passe"/>
        <input v-model="confirm" type="password" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Confirmer le mot de passe"/>
        <p v-if="error == true" class="mr-2 text-sm text-red-700 inline-block mb-2">
          Veuillez entrer des mots de passes identiques
        </p>

      </div>

      <button @click="confirmPass" class="w-full mt-6 text-white font-semibold bg-yellow-500 py-3 border rounded-md hover:bg-yellow-400 transition duration-300">Créer un compte</button>
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
        let confirm = "";
        let error = false;

        return {
        user,
        confirm,
        error
        }
    },

    methods:{
        sendUser(){
        UserController.saveUser(this.user);
        },
        confirmPass() {
            if (this.user.password !== this.confirm ) {
                this.error = true;
            } else {
                this.sendUser();
            }
        }
    }
}

</script>

<style>

</style>