<template>
<div>
  <card-message-detail></card-message-detail>
  <card-message-overview></card-message-overview>
</div>
</template>
<script>
import CardMessageOverview from './components/CardMessageOverview.vue'
import CardMessageDetail from './components/CardMessageDetail.vue'

export default {
  components: { CardMessageOverview, CardMessageDetail },
  CardMessageOverview, 
  CardMessageDetail
}
</script>

<style>


</style>
