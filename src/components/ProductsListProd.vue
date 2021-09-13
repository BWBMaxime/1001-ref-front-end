<template>
    <section class="container mx-auto px-24 py-8 font-mono flex items-center justify-center">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <!-- Table of products -->
            <div class="w-full 2xl:overflow-hidden overflow-x-auto">
                <div class="flex mt-6 mr-6 items-center pb-5 border-gray-100">
                    <!-- Button -->
                    <a href="http://localhost:8080/create-product" class="flex ml-auto border-0 py-2 px-6 rounded-md bg-yellow-500 text-white text-sm font-semibold hover:bg-yellow-400">
                        Ajouter un produit
                    </a>
                </div>
                <table class="w-full border-separate place-self-center">
                    <h2 class="mb-5 text-xl text-yellow-500 font-semibold uppercase flex justify-center mx-auto">Vos produits (#)</h2>
                    <thead class="opacity-80 bg-yellow-500 flex text-white w-full">
                        <tr class="flex w-full text-center">
                            <th class="px-4 py-3 w-96">Produit</th>
                            <th class="px-4 py-3 w-36 ml-2">Prix</th>
                            <th class="px-4 py-3 w-48">Nouveau</th>
                            <th class="px-4 py-3 w-48">Promotion</th>
                            <th class="px-4 py-3 w-48">Affiché</th>
                            <th class="px-2 py-3 w-48">Modif./ Suppression</th>
                        </tr>
                    </thead>
                    <!-- Table -->
                    <tbody class="bg-white items-center">
                        <div v-for="product in products" v-bind:key="product">
                        <tr class="text-gray-700 h-auto" v-for="variation in product.variations" v-bind:key="variation">
                            <!-- Product Name -->
                            <td class=" mx-4 my-3 border">
                                <div class="w-96 flex items-center text-sm">
                                    <div class="relative w-8 h-8 mx-3 rounded-full md:block inline-flex">
                                        <img class="object-cover w-full h-full rounded-full" src="https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_960_720.jpg" alt="" loading="lazy">
                                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <p class="mt-3 text-base font-bold text-yellow-600 uppercase">{{ product.name }}</p>
                                    </div>
                                </div>
                            </td>
                            <!-- Price -->
                            <td class="mx-4 my-3 w-36 text-sm border text-center">{{ variation.dealerPrice }} €</td>
                            <!-- New -->
                            <td v-if="product.new == true" class="mx-4 my-3 w-48 text-sm border text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </td>
                            <td v-else class="mx-4 my-3 w-48 text-sm border text-center"></td>
                            <!-- Promo -->
                            <td v-if="product.promo == true" class="mx-4 my-3 w-48 text-sm border text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </td>
                            <td v-else class="mx-4 my-3 w-48 text-sm border text-center"></td>
                            <!-- Display -->
                            <td class="mx-4 w-48 text-sm border-2 text-center">
                                <input v-if="product.display == true" class="h-4 w-4" type="radio" checked>
                                <input v-else class="h-4 w-4" type="radio">
                            </td>
                            <!-- Edit/Delete -->
                            <td class="w-48 pl-12 py-3 text-xs border text-center flex items-center">
                                <span class="font-semibold leading-tight rounded-sm w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </span>
                                <span class="font-semibold leading-tight rounded-sm w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </span>
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
        {
            id: 0,
            name: "goudale",
            photo:"img",
            new: false,
            active: false,
            variations: 
            [{
                capacity:"", 
                dealerPrice:"56",
                restaurateurPrice:"",
                sale:false
            }]
        }
        return products;
        
    },

    methods:{
        getAllProducts(){
            ProductController.getProducts(this.product);
        }
    }
}


</script>


<style>

</style>
