<template>
 <div class="container mx-auto my-5 flex flex-col w-full lg:w-2/3 justify-center">
  
    <Slider v-model="$store.state.slider" />
    <div class="flex mt-5">
      <div v-for="tag in $store.state.tags" :key="tag">
      <button class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" :class="{'bg-yellow-500': tag.selected, 'bg-transparent': !tag.selected}" @click="toggleTag(tag)">{{tag.name}}</button>
    </div>
    </div>
    

  <button @click="$store.commit('getAsked')">test</button>
  <Test />
 </div>
</template>

<script>
  import Slider from '@vueform/slider'

  export default {
    
    components: {
      Slider,  
    },
    methods: {
      toggleTag(tag){
        return tag.selected = !tag.selected
      }
    },
      computed: { 
            tags: {
                get(){
                    return this.$store.state.tags
                },
                set(value) {
                    this.store.commit('setTags',value)
                }
            }
        }
  }
</script>

<style src="@vueform/slider/themes/default.css">

 
</style>