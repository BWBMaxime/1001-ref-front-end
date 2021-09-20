<template>
<div>
<UpdateProduct></UpdateProduct>
</div>
</template>
<script >
  
import { Options, Vue } from 'vue-class-component';
import UpdateProduct from '../components/UpdateProduct.vue'


@Options({
  components: {
   
      UpdateProduct

  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>
