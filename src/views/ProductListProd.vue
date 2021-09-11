<template>
<div>
<ProductsListProd></ProductsListProd>
</div>
</template>
<script lang="ts">
  
import { Options, Vue } from 'vue-class-component';
import ProductsListProd from '../components/ProductsListProd.vue'


@Options({
  components: {
   
      ProductsListProd

  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>