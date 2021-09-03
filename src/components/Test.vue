<template>
    <div>
        <SearchBar />
        <FilterProducts />
        <ProductsList />
      
    </div>   
</template>


<script>
import FilterProducts from '@/components/FilterProducts.vue'
import SearchBar from '@/components/SearchBar.vue'
import ProductsList from '@/components/ProductsList.vue'
    export default {
      components: {
          SearchBar,
          FilterProducts,
          ProductsList
      }
    }
</script>