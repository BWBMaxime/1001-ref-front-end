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
        <select v-model="user.role" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2">
          <option class="text-lg">Producteur</option>
          <option class="text-lg">Distributeur - revendeur</option>
          <option class="text-lg">Distributeur - restaurateur</option>
        </select>
      </div>
      
        <!-- Infos Perso -->
      <div  class="mb-6">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations personnelles</label>
        <input id="firstname" v-model="user.firstname" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Prénom du responsable"/>
        <input id="name" v-model="user.name" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Nom du responsable"/>
        <input id="mail" v-model="user.mail" type="mail" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Adresse email"/>
      </div>

        <!-- Infos Pro -->
      <div class="mb-6">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations professionnelles</label>
        <input id="company" v-model="user.company" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Nom de l'entreprise"/>
        <input id="siret" v-model="user.siret" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Numéro Siret ou Siren"/>
        <input id="phone" v-model="user.phone" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Numéro de téléphone"/>
      </div>

        <!-- Infos connexion -->
      <div class="">
        <label class="mr-2 text-gray-700 font-bold inline-block mb-2" for="name">Informations de connexion</label>
        <input id="paswword" v-model="user.password" type="password" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Mot de passe"/>
        <input id="confirm" v-model="confirm" type="password" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-400 rounded mb-2" placeholder="Confirmer le mot de passe"/>
        <p v-if="error == true" class="mr-2 text-sm text-red-700 inline-block mb-2">
          Veuillez entrer des mots de passes identiques
        </p>

      </div>

      <button @click="CheckAndSendUser" class="w-full mt-6 text-white font-semibold bg-yellow-500 py-3 border rounded-md hover:bg-yellow-400 transition duration-300">Créer un compte</button>
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
        let check= true ;

        return {
        user,
        confirm,
        error,
        check
        }
    },

    methods:{
    
CheckAndSendUser(){
      this.check=true
      for (const key in this.user) {
        if (Object.hasOwnProperty.call(this.user, key)) {
          let element = this.user[key];
          if (key === 'firstname' && element === "") {
            this.check = false
            //document.getElementById('firstname').classList.add('border-red-500' ,'border')
          }
          if (key === 'name' && element === "") {
            this.check = false
            // document.getElementById('name').classList.add('border-red-500' ,'border')
          }if (key === 'mail' && element === "") {
            this.check = false
          //  document.getElementById('mail').classList.add('border-red-500' ,'border')
          }if (key === 'company' && element === "") {
            this.check = false
            // document.getElementById('company').classList.add('border-red-500' ,'border')
          }if (key === 'siret' && element === "") {
            this.check = false
            // document.getElementById('siret').classList.add('border-red-500' ,'border')
          }if (key === 'phone' && element === "") {
            this.check = false
            // document.getElementById('phone').classList.add('border-red-500' ,'border')
          }if (key === 'password' && element === "") {
            this.check = false
            // document.getElementById('password').classList.add('border-red-500' ,'border')
          }if (key === 'confirm' && element === "") {
            this.check = false
            // document.getElementById('confirm').classList.add('border-red-500' ,'border')
          }
          if (this.check === true) {
            
               if (this.user.password !== this.confirm ) {
                this.error = true;
            } else {
                 UserController.saveUser(this.user);
            }
          }

        
      }
      }
}
    }}
     

      
</script>

<style>

</style>