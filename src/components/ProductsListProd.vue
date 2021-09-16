<template>
    <section class="container mx-auto px-24 py-8 font-mono flex items-center justify-center">
        <div class="w-full mb-8 overflow-hidden rounded shadow-lg">
            <!-- Table of products -->
            <div class="w-full 2xl:overflow-hidden overflow-x-auto">
                <div class="flex mt-6 mr-6 items-center pb-5 border-gray-100">
                    <!-- Button -->
                    <a href="http://localhost:8080/create-product" class="flex ml-auto border-0 py-2 px-6 rounded-md bg-yellow-500 text-white text-sm font-semibold hover:bg-yellow-400">
                        Ajouter un produit
                    </a>
                </div>
                <table id="table" class="w-full border-separate place-self-center">
                    <h2 class="mb-5 text-xl text-yellow-500 font-semibold uppercase flex justify-center mx-auto">Vos produits (#)</h2>
                    <thead class="opacity-80 bg-yellow-500 flex text-white w-full">
                        <tr class="flex w-full text-center justify-between">
                            <th class="px-4 py-3 w-80">Produit</th>
                            <th class="px-4 py-3 w-36 ml-2">Prix Revendeur</th>
                            <th class="px-4 py-3 w-36 ml-2">Prix Distributeur</th>
                            <th class="px-4 py-3 w-24">Nouveau</th>
                            <th class="px-4 py-3 w-24">Affiché</th>
                            <th class="px-2 py-3 w-48">Modif./ Suppression</th>
                        </tr>
                    </thead>
                    <!-- Table -->
                    <tbody class="bg-white items-center">
                        <div v-for="product in products" v-bind:key="product">
                            <tr class="text-gray-700 h-auto" v-for="(variation, index) in product.variations" v-bind:key="variation">
                                <!-- Product Name -->
                                <td class="pt-3 border">
                                    <div class="w-80 flex items-center text-sm">
                                        <div class="relative w-8 h-8 mx-3 rounded-full md:block inline-flex">
                                            <img class="object-cover w-full h-full rounded-full" src="https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_960_720.jpg" alt="" loading="lazy">
                                            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                        </div>
                                        <div>
                                            <p class="mt-3 text-base font-bold text-yellow-600 uppercase">{{ product.name }}</p>
                                        </div>
                                    </div>
                                </td>

                                <!-- Dealer Price -->
                                <td class="mx-4 my-3 w-48 text-sm border text-center">{{ variation.dealerPrice }} €</td>

                                <!-- Restaurateur Price -->
                                <td class="mx-4 my-3 w-48 text-sm border text-center">{{ variation.restaurateurPrice }} €</td>

                                <!-- New -->
                                <td v-if="product.new == true" class="w-32 text-sm border text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </td>
                                <td v-else class="w-32 text-sm border text-center"></td>

                                <!-- Display -->
                                <td class="w-32 text-sm border-2 text-center">
                                    <input v-if="product.display == true" class="h-4 w-4" type="radio" checked>
                                    <input v-else class="h-4 w-4" type="radio">
                                </td>

                                <!-- Edit/Delete -->
                                <td class="py-6 w-48 text-sm border text-center flex justify-evenly">
                                    <button type="button" class="font-semibold leading-tight rounded-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button @click="deleteVariation(variation, index);">
                                        <span class="font-semibold leading-tight rounded-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>

import ProductController from "../controllers/ProductController";

export default {
    data() {

        let products = 
        [{
            name: "",
            category:"",
            description:"",
            tags:[],
            photo:"",
            active:false,
            new:false,
            variations: 
            [{
                container:"", 
                conditionning:"",
                capacity:"",
                dealerPrice:"",
                restaurateurPrice:""
            }],
            id:1
        }]
        
        return {products}
        
    },
    

    methods: {

        getAllProductsByUserId(){
            // console.log("products to hydrate : ");
            // console.log(this.products);
            ProductController.getCurrentUserProducts(this.$store.state.currentUser.id, this.products);
        },

        /** 
        * toggle button that allows the current user to display his product or not
        */
        // productToggle(){
            
        // },

        /**
         * deletes product at given index from the list
         */
        deleteVariation(variation, index){
            console.log("product to delete : ");
            console.log(variation);
            console.log(this.products);
            ProductController.deleteVariationById(variation.id);
            this.products.splice(index, 1);
           
        },

    },

    beforeMount() {
        // console.log(this.products);
        this.getAllProductsByUserId();
    },
}


</script>


<style>

</style>
