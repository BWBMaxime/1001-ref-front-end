<template>
  <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="
            lg:w-1/3
            w-1/2
            object-cover object-center
            rounded
            border border-gray-200
          "
          v-bind:src="product.img"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-4 lg:mt-0">
          <h1 class="h1-style">{{product.name}}</h1>
          <h2 class="text-xl title-font text-gray-700 tracking-widest">
            Producteur : {{product.producteur}}
          </h2>
             <button
              class="
                w-60
                p-2
                mt-4
                rounded-md
                bg-yellow-500
                text-white
                font-bold
                hover:bg-yellow-400
                text-center
              "
            >
              Voir le producteur
            </button>
          <div
            class="flex mt-3 items-center pb-5 border-b-2 border-gray-200 mb-5"
          ></div>
          <p class="leading-relaxed">
           {{product.description}}
          </p>
          <div
            class="flex flex-wrap mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"
          >
            <div v-for="catégorie in product.catégories" v-bind:key="catégorie"
              class="
                ml-4
                mb-2
                text-xs
                inline-flex
                items-center
                font-bold
                leading-sm
                px-3
                py-1
                rounded-full
                bg-white
                text-yellow-600
                border-yellow-600 border
              "
            >
              {{catégorie}}
            </div>
            
          </div>
          <div class="flex mx-auto text-center items-center">
            <div class="items-center w-full mx-auto border border-yellow-500" v-if="product.promotion !== '' ">
               <h2 class="mb-2 text-xl title-font text-gray-700 tracking-widest">Promotion :</h2>
                <span  class="mx-auto title-font font-bold text-center text-1xl text-yellow-500">{{product.promotion}}</span>
            </div>
            <div v-else>  

            </div>
         
          </div>
        </div>
      </div>
    </div>

    <div class="container -mt-10 mb-20 mx-auto">
      <table class=" w-full">
         <h2 class="mb-5 text-2xl title-font text-gray-700 tracking-widest">Déclinaisons disponibles sur ce produit :</h2>
        <thead class="opacity-80 bg-yellow-500 flex text-white w-full">
          <tr class="flex w-full text-center">
            <th class="p-4 text-xl w-1/4">Contenant</th>
            <th class="p-4 text-xl w-1/4">Conditionnement</th>
            <th class="p-4 text-xl w-1/4">Contenance</th>
            <th class="p-4 text-xl w-1/4">Prix</th>
          </tr>
        </thead>
        <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
        <tbody
          class="
            bg-grey-light
            flex flex-col
            items-center
            text-center
            justify-between
            w-full
          "
         
        >
          <tr v-for="declinaison in product.declinaisons" v-bind:key="declinaison" class="bg-yellow-50 flex w-full border-b border-gray-600">
            <td class="font-bold w-1/4">{{declinaison.contenant}}</td>
            <td class="font-bold w-1/4">{{declinaison.conditionnement}}</td>
            <td class="font-bold w-1/4">{{declinaison.contenance}}</td>
            <td class="font-bold w-1/4">{{declinaison.prix}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {

  data() {
    return {
      product: 
        {
          "name": "Bière Blonde",
          "img": "https://www.maisonlauze.com/539-pdt_771/brasserie-de-lozere-la-48-biere-blonde-5-.jpg",
          "producteur":"Jeam-Marc Leduc",
          "promotion" : "15 Achetés, 2 Offerts !",
          "description":
            "La Pale Ale, plus communément appelé bière Blonde en France, est un style de bière qui fermente entre 18° et 25° à partir de levure à Ale (levure à fermentation haute). ... Moyennement houblonnée, la Pale Ale est dotée d'une amertume légère et son degré d'alcooloscille entre 4% et 6%..",
          "catégories": [
            "Bière",
            "Blonde",
            "Bonne",
            "fraiche",
            "#soleil",
            "#vacances",
             "Bière",
            "Blonde",
            "Bonne",
            "fraiche",
            "#soleil",
            "#vacances",
           
          ],
          "declinaisons": [
            {
              "contenant": "carton x6",
              "conditionnement": "bouteille en verre",
              "contenance":"50 cl",
              "prix": "3.19 €"
            },
            {
              "contenant": "carton x12",
              "conditionnement": "bouteille en verre",
              "contenance":"50 cl",
              "prix": "5.90 €"
            },
            {
              "contenant": "carton x24",
              "conditionnement": "bouteille en verre",
              "contenance":"50 cl",
              "prix": "9.30 €"
            },
            {
              "contenant": "carton x50",
              "conditionnement": "bouteille en verre",
              "contenance":"50 cl",
              "prix": "17.62 €"
            },
          ],
        },
      
    };
  },
};
</script>

<style>
.h1-style {
  color: #f2ba52;
  font-size: 50px;
  font-weight: bold;
}
.line {
  text-decoration: line-through;
}
</style>