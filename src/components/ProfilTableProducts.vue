<template>
<section>
    <h2 class="px-24 pb-4 text-xl font-semibold uppercase">Produits du producteur</h2>
    <section class="container mx-auto px-24 font-mono flex items-center justify-center">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div class="w-full lg:overflow-hidden overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th class="px-5 py-3">Produit</th>
                            <th class="px-4 py-3">Prix</th>
                            <th class="px-4 py-3">Conditionnement</th>
                            <th class="px-4 py-3">Tags</th>
                            <th class="px-2 py-3">En promotion</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">

                        <tr class="text-gray-700" v-for="product in products" :key="product.name">
                            <td class="px-4 py-3 border">
                                <div class="flex items-center text-sm">
                                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                        <img class="object-cover w-full h-full rounded-full" src="https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_960_720.jpg" alt="" loading="lazy" />
                                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <p class="text-base font-bold text-yellow-600 uppercase">{{ product.name }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-3 text-sm border">{{ declinaison.prix }}€</td>
                            <td class="px-4 py-3 text-sm border"></td>
                            <td class="px-4 py-3 text-xs border" v-for="product in products" :key="product.categories">
                                <span class="ml-4 text-1xl inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-yellow-600 border-yellow-600 border"> {{ categories }} </span>
                            </td>
                            <td class="px-4 py-3 text-xs border">
                                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {{ promotions.status }} </span>
                            </td>
                        </tr>
                            <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                                <div class="flex items-center text-sm">
                                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                        <img class="object-cover w-full h-full rounded-full" src="https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_960_720.jpg" alt="" loading="lazy" />
                                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <p class="text-base font-bold text-yellow-600 uppercase">{{ product.name }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-3 text-sm border">{{ declinaison.prix }}€</td>
                            <td class="px-4 py-3 text-sm border">{{ declinaison.quantity }}</td>
                            <td class="px-4 py-3 text-xs border" v-for="product in products" :key="product.categories">
                                <span class="ml-4 text-1xl inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-yellow-600 border-yellow-600 border">{{ products.categories }}</span>
                            </td>
                            <td class="px-4 py-3 text-xs border">
                                <span class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> {{ promotions.status }} </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
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
                            "prix": "22,90"
                        },
                        {
                            "quantity": "carton de 6 bouteilles",
                            "prix": "24,90"
                        },
                        {
                            "quantity": "carton de 6 bouteilles",
                            "prix": "21,90"
                        }
                    ],
                    "promotions": [
                        {
                            "name": "Promo d'été",
                            "status": "En cours"
                        },
                        {
                            "name": "Promo de Noël",
                            "status": "Terminé"
                        }
                    ]
                }
            ]
        }
    },
}
</script>

<style>

</style>