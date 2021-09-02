<template>
    <section class="container mx-auto px-24 font-mono flex items-center justify-center">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <!-- Table of products -->
            <div class="w-full 2xl:overflow-hidden overflow-x-auto">
                <table class="w-full border-separate place-self-center">
                    <h2 class="mb-5 p-2 text-xl text-ye llow-500 font-semibold uppercase">Produits du producteur :</h2>
                    <thead class="opacity-80 bg-yellow-500 flex text-white w-full">
                        <tr class="flex w-full text-center">
                            <th class="px-5 py-3 w-96">Produit</th>
                            <th class="px-4 py-3 w-32">Prix</th>
                            <th class="px-4 py-3 w-80">Conditionnement</th>
                            <th class="px-4 py-3 w-80">Mots-clé / Tag</th>
                            <th class="px-2 py-3 w-36">Promotion</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white items-center">
                        <div v-for="product in products" v-bind:key="product">
                        <tr class="text-gray-700 h-auto" v-for="declinaison in product.declinaisons" v-bind:key="declinaison">
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
                            <td class="mx-4 my-3 w-32 text-sm border text-center">{{ declinaison.price }} €</td>
                            <td class="mx-4 my-3 w-80 text-sm border text-center">{{ declinaison.quantity }}</td>
                            <td class="mx-4 my-3 w-80 text-xs border">
                                <span class="ml-4 mb-1 text-1xl inline-flex font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-yellow-600 border-yellow-600 border" 
                                    v-for="categorie in product.categories" v-bind:key="categorie">
                                    {{ categorie }}
                                </span>
                            </td>
                            <td class="w-36 px-4 py-3 text-xs border  text-center">
                                <span class="px-2 py-1 font-semibold leading-tight rounded-sm w-full"
                                    :class="{'text-green-700': promotion.status == true, 'bg-green-100': promotion.status == true, 'text-black-700': promotion.status == false, 'bg-black-200': promotion.status == false}" 
                                    v-for="promotion in product.promotions" v-bind:key="promotion">
                                    {{ promotion.status ? 'En cours' : 'Terminé'}}
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
export default {
    data() {
        return {
            products: [
                {
                    "name": "La goudale",
                    "img": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_960_720.jpg",
                    "description": "Cette bière est brassée depuis 2020 dans l’ancienne écurie de l’abbaye de Vaucelles qui fut fondé en 1131 par le moine Bernard de Clairvaux et qui abritait une brasserie. Totalement rénovée, par Benjamin Dalmas et Alexis Dujardin, les écuries accueillent aujourd’hui une salle de brassage neuve. Simon, fort de 5 années d’expérience au sein de belles brasseries artisanales Françaises comme Rouget de l’Isle et Page 24, élabore des recettes inspirées de l’authenticité des lieux.  A ce jour, elle propose 3 bières, réalisées à partir de l’eau de source de Vaucelles et d’orge français, de houblons du Nord.",
                    "categories": ["Bière", "Blonde", "Brune"],
                    "declinaisons": [
                        {
                            "quantity": "carton de 6 bouteilles",
                            "price": "22,90"
                        },
                        {
                            "quantity": "carton de 4 bouteilles",
                            "price": "14,90"
                        },
                        {
                            "quantity": "unité",
                            "price": "3,90"
                        }
                    ],
                    "promotions": [
                        {
                            "name": "Promo d'été",
                            "status": true
                        }
                    ]
                },
                {
                    "name": "La bière de Noël",
                    "img": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_960_720.jpg",
                    "description": "Cette bière est brassée depuis 2020 dans l’ancienne écurie de l’abbaye de Vaucelles qui fut fondé en 1131 par le moine Bernard de Clairvaux et qui abritait une brasserie. Totalement rénovée, par Benjamin Dalmas et Alexis Dujardin, les écuries accueillent aujourd’hui une salle de brassage neuve. Simon, fort de 5 années d’expérience au sein de belles brasseries artisanales Françaises comme Rouget de l’Isle et Page 24, élabore des recettes inspirées de l’authenticité des lieux.  A ce jour, elle propose 3 bières, réalisées à partir de l’eau de source de Vaucelles et d’orge français, de houblons du Nord.",
                    "categories": ["Bière", "Blonde", "Brune"],
                    "declinaisons": [
                        {
                            "quantity": "carton de 6 bouteilles",
                            "price": "24,90"
                        },
                        {
                            "quantity": "carton de 4 bouteilles",
                            "price": "16,90"
                        },
                        {
                            "quantity": "unité",
                            "price": "4,50"
                        }
                    ],
                    "promotions": [
                        {
                            "name": "Promo de Noël",
                            "status": false
                        }
                    ]
                }
            ]
        }
    }
}


</script>

<style>

</style>