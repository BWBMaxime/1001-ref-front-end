<template>
<What></What>
<Who></Who>
</template>
<script lang="ts">
  
import { Options, Vue } from 'vue-class-component';
import What from '../components/What.vue'
import Who from '../components/Who.vue'

@Options({
  components: {
   
    What,
    Who


  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>
