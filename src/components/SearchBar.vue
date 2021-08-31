<script>

export default {
  data() {
    return {
      categories: 
      {
        Vin:['Bleu','Blanc','Rouge'],
        Bières:['Blonde','Brune','Rousse'],
      },
      subCat:['Subcategories'],
    }
  },

  methods: {
        onChange() {
          this.subCat = this.categories[this.category.select] 
        }
    }
}

</script>

<template>
            <div class="container h-screen mx-auto flex justify-center items-center p-2 md:p-0">
                <div class="border border-gray-300 p-6 w-4/6 gap-6 bg-white shadow-lg rounded-lg">
                    <div class="flex flex-col md:flex-row">
                        <div class="m-4">
                            <label for="category">Catégorie : </label>
                            <select class="border p-2 rounded" id="category" name="category" v-model="category" @change="onChange()">
                                <option v-for="(categorie,index) in categories" :key="index" v-bind:value="{ select: index }">{{index}}</option>
                            </select>
                        </div>
                        <div class="m-4">
                            <label for="sub">Sous-catégorie : </label>
                            <select class="border p-2 rounded" id="sub">
                                <option v-for="(sub,index) in subCat" :key="index" value={{sub}}>{{sub}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="m-4">
                        <div class="border border-gray-200 p-2 rounded m-4">
                            <div class="flex border rounded bg-gray-300 items-center p-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input type="text" placeholder="Que recherchez vous?"
                                       class="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center"><button class="p-2 border w-1/4 rounded-md bg-yellow-500 text-white">Rechercher</button></div>
                </div>
            </div>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
