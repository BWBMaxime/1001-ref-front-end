<template>
 <div class="container mx-auto my-5 flex flex-col w-full lg:w-2/3 justify-center">
     <div class="flex mt-5">
       <button @click="getTags">get Tags</button>
      <div v-for="tag in tags" :key="tag">
      <button class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" :class="{'bg-yellow-500': tag.selected, 'bg-transparent': !tag.selected}" @click="toggleTag(tag)">{{tag.name}}</button>
    </div>
    </div>
    <button @click="selectTags">Asked</button>
 </div>
</template>

<script>
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
           // rempli la liste des tags en fonction des produits stocké dans le store
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
      },

      selectTags(){
        let selectedTags = []
        this.tags.forEach((tag) => {
          if(tag.selected) {
            selectedTags.push(tag)
          }
        })
        store.commit('setSelectedTags', selectedTags)
      }
    }
  }
</script>

<style>

 
</style>