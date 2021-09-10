<template>
<div>
  <h2 class="py-6 text-2xl font-semibold flex justify-center">Contacter l'administrateur</h2>
    <div class="m-auto p-5 flex flex-col lg:w-2/5 justify-center shadow w-full">
      <form
        class="col-4"
        id="app"
        @submit="checkForm"
        action="https://vuejs.org/"
        method="post"
        novalidate="true"
      >
        <div class="mb-3">
          <label for="name" class="block text-sm font-medium text-gray-800">Nom</label>
          <input class="mt-1 mb-1 p-2 block shadow sm:text-sm border-gray-400 rounded-sm bg-gray-200 w-full focus:ring-yellow-400"
          type="name" id="name" placeholder="Jean Dupont">
        </div>
        <div class="mb-3">
          <label for="company" class="block text-sm font-medium text-gray-800">Nom de l'entreprise</label>
          <input class="mt-1 mb-1 p-2 block  sm:text-sm border-gray-400 rounded-sm bg-gray-200 w-full focus:ring-2 focus:border-yellow-400"
          type="company" id="company" placeholder="Entreprise Berton">
        </div>
        <div class="mb-3">
          <label for="email" class="block text-sm font-medium text-gray-800">Email</label>
          <input v-model="email" class="mt-1 mb-1 p-2 block shadow sm:text-sm border-gray-400 rounded-sm bg-gray-200 w-full focus:ring-yellow-400"
          type="email" id="email" placeholder="jean.dupont@mail.com">
        </div>
        <div class="mb-3">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea class="mt-1 mb-1 p-2 block shadow sm:text-sm border-gray-400 rounded-sm bg-gray-200 w-full focus:ring-yellow-400" 
          id="message" rows="5" placeholder="Taper votre message..."></textarea>
        </div>
        <button type="submit" class="btn m-auto flex justify-center py-2 px-4 border shadow text-sm font-medium rounded-md text-white hover:bg-yellow-400">Envoyer</button>
      </form>
    </div>
</div>
</template>

<script>
export default {
  name: "FormContactAdmin"
}
</script>

<style>

</style>