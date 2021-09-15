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
          v-bind:src="product.photo"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="h1-style">{{product.name}}</h1>
          <h2 class="text-xl title-font text-gray-700 tracking-widest">
            Producteur : {{product.owner.firstname + " " + product.owner.name}}
          </h2>
          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"
          ></div>
          <p class="leading-relaxed">
           {{product.description}}
          </p>
          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"
          >
            <div v-for="tag in product.tags" v-bind:key="tag"
              class="
                ml-4
                text-1xl
                inline-flex
                items-center
                font-bold
                leading-sm
                uppercase
                px-3
                py-1
                rounded-full
                bg-white
                text-yellow-600
                border-yellow-600 border
              "
            >
              {{tag.name}}
            </div>
            
          </div>
          <div class="flex">
            <div v-if="product.sale ==! null ">
                <span  class="mx-auto title-font font-medium text-center text-1xl text-yellow-600">PROMOTION : {{product.sale.name}}</span>
            </div>
            <div v-else>  

            </div>
           <button
            @click="getProfileProducer"
              class="
                flew
                mx-auto
                p-2
                rounded-md
                bg-yellow-500
                text-white
                font-semibold
                hover:bg-yellow-400
                text-center
              "
            >
              Voir le producteur
            </button> 
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <table class="text-left w-full">
        <thead class="opacity-80 bg-yellow-500 flex text-white w-full">
          <tr class="flex w-full text-center">
            <th class="p-4 w-1/4">Contenant</th>
            <th class="p-4 w-1/4">Conditionnement</th>
            <th class="p-4 w-1/4">Contenance</th>
            <th class="p-4 w-1/4">Prix</th>
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
            border-separate border-gray-200
          "
         
        >
          <tr v-for="variation in product.variations" v-bind:key="variation" class=" flex w-full border border-gray-200">
            <td class="border border-gray-200 w-1/4">{{variation.capacity}}</td>
            <td class="border border-gray-200 w-1/4">{{variation.conditioning}}</td>
            <td class="border border-gray-200 w-1/4">{{variation.container}}</td>
            <td v-if="$store.state.currentUser.role == 'Distributeur - revendeur'" class="border border-gray-200 w-1/4">{{variation.dealerPrice}}</td>
            <td v-else-if="$store.state.currentUser.role == 'Distributeur - restaurateur'" class="border border-gray-200 w-1/4">{{variation.restaurateurPrice}}</td>

          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>

import ProductController from  "../controllers/ProductController";
import UserController from  "../controllers/UserController";

export default {

  

  data() {
    
     let product =
        {
          id:"",
          name: "",
          category: "",
          description:"",
          photo:"",
          active:Boolean,
          new:Boolean,
          tags: {
            id:"",
            name:""
          },
          variations: {
            id:"",
            product:"",
            dealerPrice:"",
            restaurateurPrice:"",
            capacity:"",
            conditioning:"",
            container:"",
            sale:"",
          },
          owner:{
            name:"",
            firstname:""
          },
          
          loaded:false
        }
      return {
        product
      }
   
  },
  methods: {
     getProduct(){
       console.log("Should start getting product : ")
       console.log(this.product);
       ProductController.getProduct(this.$route.params.id, this.product);
    },
    getProfileProducer(){
      ProductController.getProduct(this.id,this.product);
        this.$router.push({path:'/distributer/producerprofil/'+ this.product.owner.id });
    },
    // getUser(){
    //     //console.log('Should start getting user : ' + this.user);
    //     UserController.getUser(this.$store.state.currentUser.role,this.user);
    // },


  },
   beforeMount() {
        console.log("before mount");
        console.log(this.product);
        this.getProduct();
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