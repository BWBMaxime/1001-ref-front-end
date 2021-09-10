<template>
<div>
<Stats></Stats>
</div>
</template>
<script lang="ts">
  
import { Options, Vue } from 'vue-class-component';
import Stats from '../components/Stats.vue'


@Options({
  components: {
   
      Stats

  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>
