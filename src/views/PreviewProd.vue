<template>
<div>
<Profil></Profil>
</div>
</template>
<script lang="ts">
  
import { Options, Vue } from 'vue-class-component';
import Profil from '../components/Profil.vue'


@Options({
  components: {
   
      Profil

  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>