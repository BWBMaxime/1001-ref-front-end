<template>
<div>
<Profil></Profil>
</div>
<div>
<ProfilTableProducts></ProfilTableProducts>
</div>
</template>
<script lang="ts">
  
import { Options, Vue } from 'vue-class-component';
import Profil from '../components/Profil.vue'
import ProfilTableProducts from '../components/ProfilTableProducts.vue'


@Options({
  components: {
   
      Profil,
      ProfilTableProducts

  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>