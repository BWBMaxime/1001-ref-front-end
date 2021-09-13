<template>
<div>
<CreateProduct></CreateProduct>
</div>
</template>
<script >
  
import { Options, Vue } from 'vue-class-component';
import CreateProduct from '../components/CreateProduct.vue'


@Options({
  components: {
   
      CreateProduct

  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>
