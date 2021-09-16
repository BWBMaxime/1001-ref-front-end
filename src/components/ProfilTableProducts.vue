<template>
    <section class="container mx-auto px-24 font-mono flex items-center justify-center">
        <div class="w-11/12 mb-8 overflow-hidden rounded-lg shadow-lg">
            <!-- Table of products -->
            <div class="w-full 2xl:overflow-hidden overflow-x-auto">
                <table class="w-11/12 border-separate place-self-center">
                    <h2 class="mb-5 p-2 text-xl text-ye llow-500 font-semibold uppercase">Produits du producteur :</h2>
                    <thead class="opacity-80 bg-yellow-500 flex text-white w-full">
                        <tr class="flex w-full text-center">
                            <th class="px-5 py-3 w-80">Produit</th>
                            <th class="px-4 py-3 w-36">Catégorie</th>
                            <th class="px-4 py-3 w-20">Prix</th>
                            <th class="px-4 py-3 w-28">Capacité</th>
                            <th class="px-4 py-3 w-40">Conditionnement</th>
                            <th class="px-4 py-3 w-32">Contenant</th>
                            <th class="px-4 py-3 w-48">Mots-clé / Tag</th>
                            <th class="px-2 py-3 w-20">Nouveau</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white items-center">
                        <div v-for="product in products" v-bind:key="product">
                        <tr class="text-gray-700 h-auto" v-for="variation in product.variations" v-bind:key="variation">
                            <!-- Product name -->
                            <td class=" mx-4 my-3 border">
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
                            <td class="mx-4 my-3 w-32 text-sm border text-center">{{ product.category }}</td>
                            <!-- Variations -->
                            <td class="mx-4 my-3 w-24 text-sm border text-center">{{ variation.restaurateurPrice }} €</td>
                            <td class="mx-4 my-3 w-24 text-sm border text-center">{{ variation.dealerPrice }} €</td>
                            <td class="mx-4 my-3 w-24 text-sm border text-center">{{ variation.capacity }}</td>
                            <td class="mx-4 my-3 w-40 text-sm border text-center">{{ variation.conditioning }}</td>
                            <td class="mx-4 my-3 w-32 text-sm border text-center">{{ variation.container }}</td>
                            <td class="mx-4 my-3 w-48 text-xs border">
                                <span class="ml-4 mb-1 inline-flex font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-yellow-600 border-yellow-600 border" 
                                    v-for="tag in product.tags" v-bind:key="tag">
                                    {{ tag.name }}
                                </span>
                            </td>
                            <!-- Promotions -->
                            <!-- <td class="w-36 px-4 py-3 text-xs border  text-center">
                                <span class="px-2 py-1 font-semibold leading-tight rounded-sm w-full"
                                    :class="{'text-green-700': promotion.status == true, 'bg-green-100': promotion.status == true, 'text-black-700': promotion.status == false, 'bg-black-200': promotion.status == false}" 
                                    v-for="promotion in product.promotions" v-bind:key="promotion">
                                    {{ promotion.status ? 'En cours' : 'Terminé'}}
                                </span>
                            </td> -->
                            <td v-if="product.new == true" class="mx-4 my-3 w-20 text-sm border text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
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
import ProductController from  "../controllers/ProductController";

export default {
    data() {
         
            let products = 
            {
                id:1,
                name: "",
                category: "",
                description: "",
                photo: "",
                active: false,
                new: false,
                variations: 
                [{
                    capacity:"",
                    conditioning:"",
                    container:"",
                    restaurateurPrice:"",
                    dealerPrice:""
                }],
                tags: []
            }

        return {  
           products
        }
    },
    

    methods: {

        getAllProductsByUser(){
            console.log('Should start getting user : ' + this.$store.state.currentUser.id);
            console.log('this products : ' + this.products);
            ProductController.getProductsByUserId(this.$store.state.currentUser.id,this.products);
        },
        contactProducer(){
            this.$router.push('../contact');
        },
    },
    
    beforeMount() {
        console.log("products : ");
        console.log(this.products);
        this.getAllProductsByUser();
    },
    
}
</script>

<style>

</style>