<template>
<div>
<Setting></Setting>
</div>
</template>
<script lang="ts">
  
import { Options, Vue } from 'vue-class-component';
import Setting from '../components/Setting.vue'


@Options({
  components: {
   
      Setting

  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>