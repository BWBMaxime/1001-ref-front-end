<template>
 <div class="container mx-auto my-5 flex flex-col w-full lg:w-2/3 justify-center">
     <div class="flex mt-5">
       <button @click="getTags">get tags</button>
      <div v-for="tag in tags" :key="tag">
      <button class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" :class="{'bg-yellow-500': tag.selected, 'bg-transparent': !tag.selected}" @click="toggleTag(tag)">{{tag.name}}</button>
    </div>
    </div>
    <button @click="getAsked">Asked</button>
 </div>
</template>

<script>
import ProductsModel from "../models/ProductsModel"
import DeclinaisonsModel from "../models/DeclinaisonsModel"
import TagsModel from "../models/TagsModel"
import store from "../store/index.ts"
  export default {
    data(){
      let tags = []

      return {tags}
    },
    components: {
    },
    methods: {
      toggleTag(tag){
        return tag.selected = !tag.selected
      },

      // rempli la liste des tags en fonction des produits stocjé dans le store
      getTags(){
        // liste temporaire 
        let temp = []
        store.state.products.forEach(element => {
          element.tags.forEach(elem => {
            let tag = new TagsModel()
            tag.name = elem.name
            temp.push(tag)
          })
        });
        // pour chaques obj de la liste temporaire on récup uniquement des objets unique discriminés par leur name
           temp.forEach((item) => {
             let i = this.tags.findIndex(x => x.name === item.name)
             if(i <= -1){
               this.tags.push(item)
             }
           })
           console.log(this.tags)
      }
    /**
     * Récupére la liste des tags sélectionnés, et recré les produits correspondants
     * pour les insérer dans la liste des produits filtrés du store
     */
    // getAsked(){
    //   const askedTags = store.state.tags.filter(tag => tag.selected == true)
    //   const temp = []
    //   askedTags.forEach(askedTag => {
    //    store.state.products.forEach(product => {
    //      if(product.tags.includes(askedTag.name)){
    //        const fprod = new ProductsModel()
    //        fprod.name = product.name
    //        fprod.img = product.img
    //        fprod.description = product.description
    //        product.declinaisons.forEach(declinaison => {
    //          const pdecli = new DeclinaisonsModel()
    //          pdecli.quantity = declinaison.quantity
    //          pdecli.prix = declinaison.prix
    //          fprod.declinaisons.push(pdecli)
    //        })
    //        fprod.tags = product.tags
    //        temp.push(fprod)
    //      }
    //    })
    //   })
      
    //   const key = 'name'
    //   store.state.filteredProducts = [...new Map(temp.map(item => 
    //     [item[key],item])).values()]
    // }
    }
  }
</script>

<style src="@vueform/slider/themes/default.css">

 
</style>