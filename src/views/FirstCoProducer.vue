<template>
<div>
<FirstCoProducer></FirstCoProducer>
</div>
</template>
<script lang="ts">
  
import { Options, Vue } from 'vue-class-component';
import FirstCoProducer from '../components/FirstCoProducer.vue'


@Options({
  components: {
   
      FirstCoProducer

  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>
