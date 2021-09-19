<template>
  <div>
    <FilterProducts />
    <ProductsList />
  </div>
</template>


<script>
import FilterProducts from "./FilterProducts.vue";
import ProductsList from "./ProductsList.vue";

export default {
  components: {
    FilterProducts,
    ProductsList,
  }
};
</script>