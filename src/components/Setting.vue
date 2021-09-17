<template>
    <div class="flex shadow-md m-6">
        <div class=" mx-auto h-4/6 mt-2 text-sm rounded-md ml-14 mr-14 p-5 w-2/6 text-grey-darkest">
            <hr class="mb-5 mt-5">
                <h1 class="text-center font-semibold text-xl mt-5 text-yellow-500">Mon commerce</h1>
            <hr class="mb-5 mt-5">
            <!--Type de commerce-->
            <div class="w-full flex flex-col mb-3">
                <label class="font-semibold text-sm text-gray-600" for="commerce">Type de commerce</label>
                <input v-model="user.companyType" type="commerce" name="commerce" placeholder="Restaurant, bar, épicerie" class="w-100 mt-2 mb-1 py-3 px-3 rounded-lg h-10 bg-white border border-gray-300 text-gray-800 focus:border-yellow-500 focus:outline-none">
            </div>
             <!--Adresse-->
            <div class="flex flex-col mt-2">
                <label class="font-semibold text-sm text-gray-600" for="phone">Adresse postale</label>
                    <label class="mt-2 font-semibold text-xs text-gray-600" for="phone">Numéro</label>
                        <input v-model="user.address.number" type="number" placeholder="10" class="w-100 mt-2 py-3 px-3 rounded-lg h-10 bg-white border border-gray-300 text-gray-800 focus:border-yellow-500 focus:outline-none">
                    <label class="mt-1 font-semibold text-xs text-gray-600" for="phone">Voie</label>
                        <input v-model="user.address.road" type="text" placeholder="Rue de Villeneuve" class="w-100 mt-2 py-3 px-3 rounded-lg h-10 bg-white border border-gray-300 text-gray-800 focus:border-yellow-500 focus:outline-none">
                    <label class="mt-1 font-semibold text-xs text-gray-600" for="phone">Code postal</label>
                        <input v-model="user.address.zipcode" type="number" placeholder="75000" class="w-100 mt-2 py-3 px-3 rounded-lg h-10 bg-white border border-gray-300 text-gray-800 focus:border-yellow-500 focus:outline-none">
                    <label class="mt-1 font-semibold text-xs text-gray-600" for="phone">Ville</label>
                        <input v-model="user.address.city" type="text" placeholder="Paris" class="w-100 mt-2 py-3 px-3 rounded-lg h-10 bg-white border border-gray-300 text-gray-800 focus:border-yellow-500 focus:outline-none">
                    <label class="mt-1 font-semibold text-xs text-gray-600" for="phone">Pays</label>
                        <input v-model="user.address.country" type="text" placeholder="France" class="w-100 mt-2 mb-3 py-3 px-3 rounded-lg h-10 bg-white border border-gray-300 text-gray-800 focus:border-yellow-500 focus:outline-none">
            </div>
        </div>
        <!-- Formulaire -->
        <div class=" mx-auto  h-4/6 mt-2 rounded-md p-5 w-2/6 text-grey-darkest">
            <hr class="mb-5 mt-5">
                <h1 class="text-center text-xl mt-5 font-semibold text-yellow-500">Présence sur le web</h1>
            <hr class="mb-5 mt-5">
            <!-- Site web -->
            <div class="mb-3 space-y-2 w-full text-sm">
                <label class="text-sm font-semibold text-gray-600 py-2">Site Web</label>
                <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div class="flex">
                        <span class="flex leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-yellow-500 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-yellow-500 justify-center items-center  text-xl rounded-lg text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                    </div>
                    <input v-model="user.website" type="text" class="flex-shrink flex-grow leading-normal w-px flex-1 border border-gray-300 h-10 rounded-lg rounded-l-none px-3 relative focus:border-yellow-500 focus:outline-none" placeholder="https://">
                </div>
            </div>
            <!-- Facebook -->
            <div class="mb-3 space-y-2 w-full text-sm">
                <label class="text-sm font-semibold text-gray-600 py-2">Facebook</label>
                <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div class="flex">
                        <span class="flex leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-yellow-500 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-yellow-500 justify-center items-center text-xl rounded-lg text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                    </div>
                    <input v-model="user.facebook" type="text" class="flex-shrink flex-grow leading-normal w-px flex-1 border border-gray-300 h-10 rounded-lg rounded-l-none px-3 relative focus:border-yellow-500 focus:outline-none" placeholder="https://">
                </div>
            </div>
            <!-- Linkedin -->
            <div class="mb-3 space-y-2 w-full text-sm">
                <label class="text-sm font-semibold text-gray-600 py-2">Linkedin</label>
                <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div class="flex">
                        <span class="flex leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-yellow-500 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-yellow-500 justify-center items-center  text-xl rounded-lg text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                    </div>
                    <input v-model="user.linkedin" type="text" class="flex-shrink flex-grow leading-normal w-px flex-1 border border-gray-300 h-10 rounded-lg rounded-l-none px-3 relative focus:border-yellow-500 focus:outline-none" placeholder="https://">
                </div>
            </div>
            <!-- Boutton Enregistrer -->
            <div class="py-4 mb-1 text-center">
                <button @click="updateAndContinue" class="mt-32 transition duration-500 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" >
                    Enregistrer
                </button>
            </div>
        </div>
        <br class="mt-10 mb-14">
        <!-- Formulaire -->
        <div class=" mx-auto h-4/6 mt-2 text-sm rounded-md ml-14 mr-14 p-5 w-2/6 text-grey-darkest">
            <hr class="mb-5 mt-5">
                <h1 class="text-center text-xl mt-5 font-semibold text-yellow-500">Informations</h1>
            <hr class="mb-5 mt-5">
            <!--Type de commerce-->
            <div class="w-full flex flex-col mb-3">
                <label class="font-semibold text-sm text-gray-600" for="biography">Biographie</label>
                <textarea v-model="user.biography" class="my-2 w-100 px-3 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none" rows="5" placeholder="Description"></textarea>
            </div>
            <!--Telephone-->
            <div class="flex flex-col mt-2">
                <label class="font-semibold text-sm text-gray-600" for="logo">Logo de l'entreprise</label>
                <input v-model="user.companyLogo" type="url" placeholder="https://" class="w-100 my-2 py-3 px-3 rounded-lg h-10 bg-white border border-gray-300 text-gray-700 focus:border-yellow-500 focus:outline-none">
            </div>
             <!--Adresse-->
            <div class="flex flex-col mt-2">
                <label class="font-semibold text-sm text-gray-600" for="image">Image de l'entreprise</label>
                <input v-model="user.companyPicture" type="url" placeholder="https://" class="w-100 my-2 py-3 px-3 rounded-lg h-10 bg-white border border-gray-300 text-gray-700 focus:border-yellow-500 focus:outline-none">
            </div>
        </div>
    </div>
</template>


<script>
import UserController from  "../controllers/UserController";

export default {
     data() {
         
            let user = 
            {
                id:1,
                companyType: "",
                phone: "",
                address: 
                {
                    number:"",
                    road:"",
                    zipcode:"",
                    city:"",
                    country:"",
                },
                website: "",
                facebook: "",
                linkedin: "",
                biography:"",
                companyLogo:"",
                companyPicture:"",
                loaded:false
            }

        return { 
            user
        }
    },
    

    methods: {

        getUser(){
            UserController.getUser(this.$store.state.currentUser.id,this.user);
        },

        updateAndContinue(){
            UserController.updateUser(this.user);
            this.$router.push('dashboard');
        }

    },

    beforeMount() {
        this.getUser();
    },

}
</script>


<style>
    
</style>