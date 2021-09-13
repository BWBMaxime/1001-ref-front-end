<template>

<Login></Login>
<SignIn></SignIn>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import  SignIn  from '../components/SignIn.vue';
import  Login  from '../components/Login.vue';

@Options({
  components: {
   
    Login,
    SignIn,


  },
})
export default class Home extends Vue {}
</script>
