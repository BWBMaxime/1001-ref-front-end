<template>
    <main class="lg:w-3/5  sm:w-full p-8 mx-auto">
        <p class="text-left md:text-center py4 h1-style mb-4">Création d'un nouveau produit</p>
            <section class="shadow row">
                <div class="tabs">
                    <div class="border-b tab">
                        <div id="information" class="border-l-2 border-transparent relative">
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
                                            <input  v-model="product.name" type="text" name="name" id="name" placeholder="Nom du produit" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none" 
                                            >
                                        </div>

                                            <!--Telephone-->
                                        <div class="flex flex-col mt-2">
                                            <label for="category">Catégorie</label>
                                            <select  v-model="product.category" name="category" id="category-select" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none">
                                                    <option v-for="(item, index) in subcategories" :key="index" :value="item.category">{{item.display}}</option>
                                            </select>
                                        </div>

                                        <div class="w-full flex flex-col mb-3">
                                            <label for="description" >Description</label>
                                            <textarea v-model="product.description" type="text" name="description" id="description" placeholder="Description du produit" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-yellow-500 focus:outline-none"></textarea>
                                        </div>

                                        <div id="tags" >
                                            <label for="keywords" >Mots-Clé : </label>
                                            <button  type="button" v-for="(tag, index) in tags" :key="index" v-on:click="tagToggle(index)"
                                            class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 border border-black"
                                            :class="{'bg-yellow-500': tag, 'bg-grey-500': !tag}">
                                            {{index}}
                                            </button>
                                        </div>
                                        <label class=" font-semibold text-gray-600 py-2 mt-12">Photo du produit</label>
                                        <input id="picture" @change="onFileChanged" type="file" class="w-full text-gray-700 px-3 py-2 border rounded">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab">
                        <div id="conditionement" class="border-l-2 border-transparent relative">
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
                                <div id ="one" class="flex w-full justify-around items-center mb-6" v-for="(declinaison,index) in product.variations" :key="index">
                                    <input v-model="product.variations[index].contenant" type="text" placeholder="Contenant" class="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none">
                                    <input  v-model="product.variations[index].conditionnement"  type="text" placeholder="Conditionnement" class="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none">
                                    <input  v-model="product.variations[index].contenance"  type="text" placeholder="Contenance" class="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none">
                                    <button v-if="product.variations.length > 1" @click="deleteDeclinaison(index)" class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
                                    <div v-else></div>
                                </div>
                                <span class="flex w-full justify-around mb-8">
                                    <button @click="createDeclinaison" class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">Ajouter une déclinaison au produit</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab">
                        <div id="prix" class="border-l-2 border-transparent relative">
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
                                <div id="two" class="flex w-full justify-around items-center mb-6" v-for="(declinaison,index) in product.variations" :key="index">
                                    <p  class="w-40">{{product.variations[index].conditionnement}} - {{product.variations[index].contenance}}</p> 
                                    <input  v-model="product.variations[index].prixRevendeur"  type="number" min="0" placeholder="Prix revendeur" class="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none">
                                    <input  v-model="product.variations[index].prixRestaurateur"  type="number" min="0" placeholder="Prix restaurateur" class="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none">
                                    <button v-if="product.variations.length > 1" @click="deleteDeclinaison(index)" class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
                                    <div v-else></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab">
                        <div  class="border-l-2 border-transparent relative">
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
                                <div class="flex w-full justify-around items-center mb-6" v-for="(declinaison,index) in product.variations" :key="index">
                                    <p  class="w-40">{{product.variations[index].conditionnement}} - {{product.variations[index].contenance}}</p>
                                    <select v-model="product.variations[index].promotion" name="category" id="category-select" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none">
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
            <button @click="checkAndSendData" v-if="$store.state.loading == false" id="sendData" class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit"> 
            Enregistrer le produit
            </button>
             <Spinner v-else />
        </div>
    </main>
</template>

<script>

import ProductController from "../controllers/ProductController";
import Spinner from "./Spinner.vue";
import store from "../store"
export default{
     components: {
    Spinner
  },

    data() {
        let check=true
        let checkC=true
       
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

        let variations = [];

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
            picture: "",
            variations:
            [{
                contenant:"",
                conditionnement:"",
                contenance:"",
                prixRevendeur:"",
                prixRestaurateur:""
            }],
            userId:1
        }

        product.userId = this.getUserId();


        return {
            subcategories,
            tags,
            variations,
            product,
            promotions,
            selectedFile: null,
            check,
            checkC,
            Spinner
        }
    },

    methods: {
        
        //Creates subcategories from the category arry to fill the selection
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


        //Sends the filled form to persist the entity in the DB
        createProduct(product){
            ProductController.saveProduct(product);
        },

        getUserId(){
        return this.$store.state.currentUser.id;
    },

        //Toggles a tag on and off in the view and adds/removes it from the product accordingly
        tagToggle(index){

            this.tags[index] = !this.tags[index];

            if(this.tags[index]) this.product.tags.push(index);
            else this.product.tags.pop(index);

            //console.log(this.product);
        },

        //Creates a new product variation for the user to fill
        createDeclinaison(){
            this.product.variations.push(
            {
                contenant:"",
                conditionnement:"",
                contenance:"",
                prixRevendeur:"",
                prixRestaurateur:""
            }
            );
        },

        //Deletes declinaison at given index from the list
        deleteDeclinaison(index){
            this.product.variations.splice(index,1);
        },
        
        onFileChanged (event) {
            this.product.picture = event.target.files[0]
            
        },
        checkAndSendData() {
            store.commit('setLoadingOn')
            // Affectation de check a true
            this.check=true
            this.checkC=true
            //boucle for-in sur mon objet product sur chaque propriétées
           for (const key in this.product) {
               //key represente les propriétées qui sont tester pour verifier que se sont bien des propriete de l'objet product
               if (Object.hasOwnProperty.call(this.product, key)) {
                   //Variable qui contient ma  propriété verifier
                   let element = this.product[key];
                   // Si la Key est bien egale a la chaine de caractère je rentre dans ma condition
                   if (key === 'name' && element === "") {
                       //si l'element = a une chaine de caractère vide je passe check a false
                           this.check = false
                       // Si la Key est bien egale a la chaine de caractère je rentre
                   }if (key === 'category' && element === ''){
                       //si l'element = a une chaine de caractère vide je passe check a false
                            this.check = false                      
                       // Si la Key est bien egale a la chaine de caractère je rentre
                       }if (key === 'description' && element === ''){
                            //si l'element = a une chaine de caractère vide je passe check a false
                            this.check = false                       
                       // Si la Key est bien egale a la chaine de caractère je rentre
                   }if (key === 'tags' && element.length == 0){
                        //si l'element = a une chaine de caractère vide je passe check a false
                             this.check = false
                             //Si a la fin check est false ma bordur passe en rouge
                       }if (this.check === false) {
                           document.getElementById('information').classList.add('border-red-300', 'border')
                           //si check a la fin est true je remplace mes bordur rouge par noir
                       }if (this.check===true) {
                            document.getElementById('information').classList.remove('border-red-300', 'border-gray-500')
                       
                       //Si la key = a la chaine de caractère
                   }if (key === 'variations'){
                      // je boucle dans le tableau declinaison
                     for (let i = 0; i < element.length; i++) {
                         //Je boucle a l'interieux de chaque objet
                         for (const key in element) {
                            // je verifie si tout les propriete font bien parti de l'objet
                             if (Object.hasOwnProperty.call(element, key)) {
                                 // je stock la propriéte dans une variable
                                 let dec = element[key];
                                 //Je boucle sur chaque objet
                                for (const key in dec) {
                                    if (Object.hasOwnProperty.call(dec, key)) {
                                        const decli = dec[key];
                                        //si l'element = a une chaine de caractère vide je passe check a false
                                        if (decli === '') {
                                          this.checkC = false
                                            }if (this.checkC === false) {
                                                document.getElementById('conditionement').classList.add('border-red-300', 'border')
                                                document.getElementById('prix').classList.add('border-red-300', 'border')
                                            }if (this.checkC === true) {
                                                document.getElementById('conditionement').classList.remove('border-red-300', 'border-gray-500')
                                                document.getElementById('prix').classList.remove('border-red-300', 'border-gray-500')
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.check === true && this.checkC === true) {
                this.createProduct(this.product);
            }
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1-style {
    color: #f2ba52;
   font-size: 50px;
   font-weight: bold;
}
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