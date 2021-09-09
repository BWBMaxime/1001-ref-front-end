<template>
<FormContactAdmin></FormContactAdmin>
</template>
<script lang="ts">
  
import { Options, Vue } from 'vue-class-component';
import FormContactAdmin from '../components/FormContactAdmin.vue'


@Options({
  components: {
   
   FormContactAdmin


  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>
