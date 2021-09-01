<template>
  <profil></profil>
  <profil-table-products></profil-table-products>
</template>
<script>
import Profil from '@/components/Profil.vue'
import ProfilTableProducts from '@/components/ProfilTableProducts.vue'

export default {
  components: { Profil, ProfilTableProducts }
}
</script>

<style>
h1 {
    color: #f2ba52;
   font-size: 50px;
   font-weight: bold;
}
h2 {
    color: #f2ba52;
   font-size: 40px;
   font-weight: bold;
}
h3 {
   color: #f2ba52;
   font-size: 30px;
   font-weight: bold;
}
h4 {
   color: #f2ba52;
   font-size: 20px;
   font-weight: bold;
}
.btn {
 background: #f2ba52;
 color: #2c3e50;
}
</style>
