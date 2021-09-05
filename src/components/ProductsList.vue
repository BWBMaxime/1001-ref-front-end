<template>
  <div>
    <!-- if state.filteredProd > 0  -->
    <div v-if="$store.state.filteredProducts.length > 0">
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      <div class="rounded overflow-hidden shadow-lg" v-for="product in $store.state.filteredProducts" :key="product.name">
      <img class="w-full" v-bind:src="product.img" alt="">
      <div class="px-6 py-4">
        <div class="font-bold text-yellow-500 text-xl mb-2">{{product.name}}</div>
        <p class="text-gray-700 text-base">
          {{product.description}}
        </p> 
      </div>
      <div class="px-6 pt-2 pb-2">
         <ul>
          <li v-for="declinaison in product.declinaisons" :key="declinaison"
           class="flex justify-between mb-3">
             <span class="inline-block text-sm font-semibold text-yellow-500">{{ declinaison.quantity }}</span>
             <span class="inline-block text-sm font-bold text-yellow-500">{{ declinaison.prix }}</span>
          </li>
        </ul>
        <div class="flex justify-between items-center">
              <p class="text-xs flex flex-nowrap d-ruby">Mot clés: </p>
        <ul class="flex flex-wrap justify-end">
          <li v-for="tag in product.tags" :key="tag">
             <span class="text-1xl inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-yellow-600 border-yellow-600 border text-xs">{{ tag }}</span>
          </li>
        </ul>    
        </div>
      </div>
    </div>
    </div>
    </div>
    <!-- else -->
    <div v-else>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
  <div class="rounded overflow-hidden shadow-lg" v-for="product in $store.state.products" :key="product.name">
      <img class="w-full" v-bind:src="product.img" alt="">
      <div class="px-6 py-4">
        <div class="font-bold text-yellow-500 text-xl mb-2">{{product.name}}</div>
        <p class="text-gray-700 text-base">
          {{product.description}}
        </p> 
      </div>
      <div class="px-6 pt-2 pb-2">
         <ul>
          <li v-for="declinaison in product.declinaisons" :key="declinaison"
           class="flex justify-between mb-3">
             <span class="inline-block text-sm font-semibold text-yellow-500">{{ declinaison.quantity }}</span>
             <span class="inline-block text-sm font-bold text-yellow-500">{{ declinaison.prix }}</span>
          </li>
        </ul>
        <div class="flex justify-between items-center">
              <p class="text-xs flex flex-nowrap d-ruby">Mot clés: </p>
        <ul class="flex flex-wrap justify-end">
          <li v-for="tag in product.tags" :key="tag">
             <span class="text-1xl inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-yellow-600 border-yellow-600 border text-xs">{{ tag }}</span>
          </li>
        </ul>    
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>

export default {
      
}
</script>

<style scoped>
    .d-ruby {
    display: ruby
    }
</style>