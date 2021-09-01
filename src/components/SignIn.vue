<template>
  <div class="margin-card mt-36 flex items-center">
    <!-- Card -->
    <div
      class="
        mr-5
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
        class="text-xl font-semibold mb-2 text-center"
        style="font-size: 40px"
      >
        Inscription Producteur
      </h5>
      <img src="../assets/producteur.png" class="mx-auto" alt="" />
      <div class="w-full flex justify-center mb-10">
        <button
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
    <!-- Card -->
    <div
      class="
        ml-5
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
        class="text-xl font-semibold mb-2 text-center"
        style="font-size: 40px"
      >
        Inscription Distributeur
      </h5>
      <img src="../assets/distributeur.png" class="mx-auto" alt="" />
      <div class="w-full flex justify-center mb-10">
        <button
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
export default {};
</script>
<style>
.shadow-md {
  border-top: solid 1px whitesmoke;
}
.margin-card {
  margin-bottom: 3%;
}
</style>