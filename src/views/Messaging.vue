<template>
<div>
<CardMessageDetail></CardMessageDetail>
<CardMessageOverview></CardMessageOverview>
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