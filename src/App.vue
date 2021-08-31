<template>
  <test-tailwind></test-tailwind>
  <form-contact-admin></form-contact-admin>

</template>
<script>
import TestTailwind from '@/components/TestTailwind.vue'
import FormContactAdmin from './components/FormContactAdmin.vue'


export default {
  components: { TestTailwind, FormContactAdmin }

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
  font-size: 60px;
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
