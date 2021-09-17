<template>
    <section class="text-gray-600" v-if="user.loaded">
        <div class="pt-16">
            <div class="mx-auto flex flex-wrap justify-center">
                <!-- Image -->
                <img alt="ecommerce" class="lg:w-80 w-full lg:h-80 h-64 object-cover object-center rounded"
                v-bind:src="user.companyPicture">
                <!-- Description -->
                <div class="lg:w-3/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <div class="flex">
                        <h1 class="text-3xl title-font font-medium mb-1 uppercase text-yellow-500"> {{ user.company }}</h1>
                        <img class="ml-4 mt-1 rounded-full h-8 w-auto sm:h-8" v-bind:src="user.companyLogo">
                    </div>
                    <h2 class="mt-1 text-md title-font text-gray-500 tracking-widest">Responsable : {{ user.name }} {{ user.firstname }}</h2>
                    <p class="mt-10 leading-relaxed">
                        {{ user.biography }}
                    </p>
                    <div class="mt-6 flex items-center text-sm text-gray-500">
                        <!-- Heroicon -->
                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        {{ user.address.city }}, {{ user.address.country }}
                    </div>
                    <div class="flex mt-6 items-center pb-5 border-t-2 border-gray-100 mb-5">
                        <!-- Button validate -->
                        <button @click="contactProducer" class="mt-8 mr-1 flex ml-auto py-2 px-6 border rounded-md bg-yellow-500 text-white font-semibold hover:bg-yellow-400">
                            Contacter
                        </button>
                        <!-- Favorite -->
                        <button class="mt-8 mr-1 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <p v-else-if="!user.loaded">Loading...</p>
</template>

<script>

import UserController from  "../controllers/UserController";

export default {
    data() {
         
            let user = 
            {
                id:"",
                name: "",
                firstname: "",
                companyType: "",
                phone: "",
                address: 
                {
                    number: "",
                    road: "",
                    zipcode: "",
                    city: "",
                    country: "",
                },
                website: "",
                facebook: "",
                linkedin: "",
                companyLogo: "",
                companyPicture: "",
                biography: "",
                loaded:false
            }


        return {  
           user
        }
    },
    

    methods: {

        getUser(){
            console.log('Should start getting user : ' + this.$store.state.currentUser.id);
            console.log('this user : ' + this.user);
                    
        
            UserController.getUser(this.$route.params.id,this.user);
            this.user.loaded = true
            console.log( this.user.loaded)
        },
        contactProducer(){
            this.$router.push('../contact');
        },
    },
    
    beforeMount() {
        console.log("user : ");
        console.log(this.user);
        this.getUser();
    },
    
}
</script>

<style>

</style>