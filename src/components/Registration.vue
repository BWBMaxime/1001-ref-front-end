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
      <div  class="mb-6">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations personnelles</label>
        <input name="test" id="firstname" v-model="user.firstname" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Prénom du responsable"/>
        <input name="test" id="lastname" v-model="user.lastname" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Nom du responsable"/>
        <input name="test" id="mail" v-model="user.mail" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Adresse email"/>
      </div>

        <!-- Infos Pro -->
      <div class="mb-6">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations professionnelles</label>
        <input name="test" id="company" v-model="user.company" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Nom de l'enseigne"/>
        <input name="test" id="siret" v-model="user.siret" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Numéro Siret ou Siren"/>
        <input name="test" id="phone" v-model="user.phone" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Numéro de téléphone"/>
      </div>

        <!-- Infos connexion -->
      <div class="">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations de connexion</label>
        <input name="test" id="password" v-model="user.password" type="password" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Mot de passe"/>
        <input name="test" id="confirm" v-model="user.confirm" type="password" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Confirmer le mot de passe"/>
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
    let check =true
    let user = {
        firstname:"",
        lastname:"",
        mail:"",
        company:"",
        siret:"",
        phone:"",
        password:"",
        confirm:""
      }

    return {
      user,
      check,
      logo:
      {
        img:""
      }
    }
  },

  methods:{

    sendUser(){
      this.check=true
      for (const key in this.user) {
        if (Object.hasOwnProperty.call(this.user, key)) {
          let element = this.user[key];
          if (key === 'firstname' && element === "") {
            this.check = false
          document.getElementById('firstname').classList.add('border-red-500')
          }
          if (key === 'lastname' && element === "") {
            this.check = false
             document.getElementById('lastname').classList.add('border-red-500')
          }if (key === 'mail' && element === "") {
            this.check = false
            document.getElementById('mail').classList.add('border-red-500')
          }if (key === 'company' && element === "") {
            this.check = false
            document.getElementById('company').classList.add('border-red-500')
          }if (key === 'siret' && element === "") {
            this.check = false
            document.getElementById('siret').classList.add('border-red-500')
          }if (key === 'phone' && element === "") {
            this.check = false
            document.getElementById('phone').classList.add('border-red-500')
          }if (key === 'password' && element === "") {
            this.check = false
            document.getElementById('password').classList.add('border-red-500')
          }if (key === 'confirm' && element === "") {
            this.check = false
            document.getElementById('confirm').classList.add('border-red-500')
          }if (this.check === true) {
            
              document.getElementById('firstname').classList.remove('border-red-500','border-gray-500')
          }

        }
      }
     UserController.saveUser(this.user);
    }
  }
}

</script>

<style>

</style>