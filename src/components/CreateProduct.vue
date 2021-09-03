<template>
<main class="lg:w-3/5  sm:w-full p-8 mx-auto">
<p class="text-left md:text-center py4 text-4xl mb-4">Création d'un nouveau produit</p>
            <section class="shadow row">
                <div class="tabs">
                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative">
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                <span class="text-grey-darkest font-thin text-xl">
                                   1 - Informations
                                </span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <!-- icon by feathericons.com -->
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div class="tab-content">
                                <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                   <form class="space-y-4 text-gray-700">


              <!--Type de commerce-->
              <div class="w-full flex flex-col mb-3">
              <label for="name">Nom</label>
              <input v-model="product.name" type="text" name="name" id="name" placeholder="Nom du produit" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
              </div>



              <!--Telephone-->
        <div class="flex flex-col mt-2">
            <label for="category">Catégorie</label>
            <select v-model="product.category" name="category" id="category-select" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                    <option v-for="(item, index) in subcategories" :key="index" :value="item.category">{{item.display}}</option>
            </select>
        </div>

        <div class="w-full flex flex-col mb-3">
              <label for="description" >Description</label>
              <textarea v-model="product.description" type="text" name="description" id="description" placeholder="Description du produit" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-indigo-500 focus:outline-none"></textarea>
        </div>

        <div>
              <label for="keywords" >Mots-Clé : </label>
              <button type="button" v-for="(tag, index) in tags" :key="index" v-on:click="tagToggle(index)"
              class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 border border-black"
              :class="{'bg-yellow-500': tag, 'bg-grey-500': !tag}">
              {{index}}
              </button>
        </div>
        <label class=" font-semibold text-gray-600 py-2 mt-12">Photo du produit</label>
        <input type="file" class="w-full text-gray-700 px-3 py-2 border rounded">

                                   </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative">
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span class="text-grey-darkest font-thin text-xl">
                                  2 - Conditionnement
                                </span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <!-- icon by feathericons.com -->
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div class="tab-content">
                                <span class="flex w-full justify-around mb-8">
                                    <p>Contenant</p>
                                    <p>Conditionnement</p>
                                    <p>Contenance</p>
                                    <p></p>
                                </span>
                                <div class="flex w-full justify-around items-center mb-6" v-for="(declinaison,index) in product.declinaisons" :key="index">
                                    <input v-model="product.declinaisons[index].contenant" type="text" placeholder="Contenant" class="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                                    <input v-model="product.declinaisons[index].conditionnement"  type="text" placeholder="Conditionnement" class="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                                    <input v-model="product.declinaisons[index].contenance"  type="text" placeholder="Contenance" class="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                                    <button v-if="product.declinaisons.length > 1" @click="deleteDeclinaison(index)" class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
                                    <div v-else></div>
                                </div>
                                <span class="flex w-full justify-around mb-8">
                                    <button @click="createDeclinaison" class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">Ajouter une déclinaison au produit</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative">
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck3">
                                <span class="text-grey-darkest font-thin text-xl">
                                    3 - Prix
                                </span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <!-- icon by feathericons.com -->
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div class="tab-content">
                                <span class="flex w-full justify-around mb-8">
                                    <p>Déclinaison</p>
                                    <p>Prix Revendeur</p>
                                    <p>Prix Restaurateur</p>
                                    <p></p>
                                </span>
                                <div class="flex w-full justify-around items-center mb-6" v-for="(declinaison,index) in product.declinaisons" :key="index">
                                    <p  class="w-40">{{product.declinaisons[index].conditionnement}} - {{product.declinaisons[index].contenance}}</p> 
                                    <input v-model="product.declinaisons[index].prixRevendeur"  type="text" placeholder="Prix revendeur" class="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                                    <input v-model="product.declinaisons[index].prixRestaurateur"  type="text" placeholder="Prix restaurateur" class="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                                    <button v-if="product.declinaisons.length > 1" @click="deleteDeclinaison(index)" class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
                                    <div v-else></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative">
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck3">
                                <span class="text-grey-darkest font-thin text-xl">
                                    4 - Promotions
                                </span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <!-- icon by feathericons.com -->
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div class="tab-content">
                                <span class="flex w-full justify-around mb-8">
                                    <p>Déclinaison</p>
                                    <p>Choisir une promotion</p>
                                </span>
                                <div class="flex w-full justify-around items-center mb-6" v-for="(declinaison,index) in product.declinaisons" :key="index">
                                    <p  class="w-40">{{product.declinaisons[index].conditionnement}} - {{product.declinaisons[index].contenance}}</p>
                                    <select v-model="product.declinaisons[index].promotion" name="category" id="category-select" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                                    <option value="" selected>Aucune</option>
                                    <option v-for="(promotion, index) in promotions" :key="index" :value="promotion.id">{{promotion.name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
              
       <!--Boutton enregistrer-->  
        <div class="py-4 mb-1 text-center mt-12">
            <button class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
            Enregistrer le produit
            </button>
        </div>
</main>



</template>

<script >

export default{

    data() {

        let categories = {
            Vin: ['Rosé','Blanc','Rouge']
        ,
            Bière:['Blonde','Brune','Ambrée']
        }

        let tags = 
        {
            'Fruité':false,
            'Sucré':false,
            'Floral':false,
            'Vanille':false,
            'Organique':false,
            'Minérale':false,
            'Miel':false
        }


        let subcategories = this.createSubcategories(categories);

        let declinaisons = [];

         let promotions = 
        [
            {
                id:44,
                name:"Promotion nouveaux clients",
            },

            {
                if:57,
                name:"Promotion nouveaux produits"
            }
        ];

        let product =  
        {
            name:'',
            category:'',
            description:'',
            tags:[],
            picture:'',
            declinaisons:
            [{
                contenant:"",
                conditionnement:"",
                contenance:"",
                prixRevendeur:"",
                prixRestaurateur:""
            }],
            idUser:0
        }

       

        return {
            subcategories,
            tags,
            declinaisons,
            product,
            promotions
        }
    },

    methods: {

        createSubcategories(categories){

        let subcategories = [];

          for (const category in categories) {
                  for (const subcategory in categories[category]) {
                        let newElement = {};
                        newElement["display"] = category + " - " + categories[category][subcategory];
                        newElement["category"] = categories[category][subcategory];
                        subcategories.push(newElement);
                      }
                  }

                  return subcategories;
              },

        createProduct(){
            return true;
        },

        tagToggle(index){

            this.tags[index] = !this.tags[index];

            if(this.tags[index]) this.product.tags.push(index);
            else this.product.tags.pop(index);

            console.log(this.product);
        },

        createDeclinaison(){
            this.product.declinaisons.push(
            {
                contenant:"",
                conditionnement:"",
                contenance:"",
                prixRevendeur:"",
                prixRestaurateur:""
            }
            );
        },

        deleteDeclinaison(index){
            this.product.declinaisons.splice(index,1);
        }

          }

        }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
            
              .tab {
            overflow: hidden;
            }
            .tab-content {
            max-height: 0;
            transition: all 0.5s;
            }
            input:checked + .tab-label .test {
                background-color: #000;
            }
            input:checked + .tab-label .test svg {
                transform: rotate(180deg);
                stroke: #fff;
            }
            input:checked + .tab-label::after {
            transform: rotate(90deg);
            }
            input:checked ~ .tab-content {
            max-height: 100vh;
            }         
            
</style>
