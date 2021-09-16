<template>
<div class="flex justify-center">
<CardMessageOverview></CardMessageOverview>
<CardMessageDetail class="self-end"></CardMessageDetail>
</div>
</template>
<script lang="ts">
  
import { Options, Vue } from 'vue-class-component';
import CardMessageDetail from '../components/CardMessageDetail.vue'
import CardMessageOverview from '../components/CardMessageOverview.vue'


@Options({
  components: {
   
      CardMessageDetail,CardMessageOverview

  },
})
export default class About extends Vue {}
</script>
<style >
  
</style>