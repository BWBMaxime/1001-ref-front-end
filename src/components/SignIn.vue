<template>
  <div class="py-5 mt-36 flex items-center mb-20">
    <!-- Card -->
    <div v-for="card in cards" :key="card.role"
      class="
       
        shadow-md
        rounded-md
        overflow-hidden
        mx-auto
        flex-col
        items-center
      "
      style="width: 800px"
    >
      <h5
        class="text-xl font-semibold text-center mt-10 mb-10 h1-style"
        style="font-size: 40px"
      >
        Inscription {{card.role}}
      </h5>
      <img v-bind:src="card.img" class="mx-auto w-max" alt="" />
      <div class="w-full flex justify-center mb-10">
        <button v-bind:href="card.url"
          class="
            text-yellow-500
            border border-solid border-yellow-500
            hover:bg-yellow-500
            hover:text-white
            active:bg-yellow-600
            font-bold
            uppercase
            px-8
            py-3
            rounded
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
          type="button"
        >
          <i class="fas fa-gem"></i> S'inscrire
        </button>
      </div>
    </div>
    <!-- Card End -->
  </div>
</template>

<script lang="ts">
export default {
    data() {
        return { 
            cards: [
            {
                "role" : "Distributeur",
                "img":"assets/distributeur.png",
               "url":"/Form-Distr"
            },
            {
                "role":"Producteur",
                "img":"assets/producteur.png",
               " url":"/Form-Prod"
            }
            ]
        }
    },

};
</script>

<style>
.h1-style{
     color: #f2ba52;
  font-size: 50px;
  font-weight: bold;
}
.shadow-md {
  border-top: solid 1px whitesmoke
}

</style>