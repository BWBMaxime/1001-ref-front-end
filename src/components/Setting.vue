<template>
<div class="flex shadow-md">
      <div class=" mx-auto  h-4/6 mt-8  rounded-md ml-14 mr-14 p-5 w-2/6 text-grey-darkest">
        <hr class="mb-5 mt-5">
            <h1 class="font-semibold text-center font-thin text-xl mt-5">Complément d'informations sur mon commerce</h1>
        <hr class="mb-14 mt-5">
    
            <!--Type de commerce-->
            <div class="w-full flex flex-col mb-3">
                <label for="commerce" class="hidden">Type de commerce</label>
                <input v-model="plop.commerce" type="commerce" name="commerce" id="commerce" placeholder="Type de commerce" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
            </div>

            <!--Telephone-->
            <div class="flex flex-col mt-2">
                <label for="phone" class="hidden">Telephone</label>
                <input v-model="plop.phone" type="phone" name="phone" id="phone" placeholder="Numéro de télèphone" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
            </div>
             <!--Telephone-->
            <div class="flex flex-col mt-2">
                <label for="phone" class="hidden">Adresse</label>
                <input v-model="plop.adresse" type="adresse" name="adresse" id="adresse" placeholder="Adresse" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
            </div>

        <div class="flex flex-col md:flex-row pb-4 mb-4">
            
            <div class="flex-1">
                <div class="flex mx-auto flex-col md:flex-row">
                    <select class="mx-2 flex-1 h-10 mt-2 form-select w-full">
                        <option value="FR">France</option>
                        <option value="Spain">Espagne</option>
                    </select>
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-400 dark:border-gray-700 rounded">
                            <input v-model="plop.departement" placeholder="Département" id="departement" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-400 dark:border-gray-700 rounded">
                            <input v-model="plop.cp" id="cp" placeholder="Code postale" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                </div>
              
            </div>
        </div>
        </div>
        <!--form-->
            <div class=" mx-auto  h-4/6 mt-8 rounded-md p-5 w-2/6 text-grey-darkest">
            <hr class="mb-5 mt-5">
            <h1 class="font-semibold  text-center font-thin text-xl mt-5">Présence sur le web</h1>
        <hr class="mb-5 mt-5">
              <!--Section Site web-->
              <div class="mb-3 space-y-2 w-full text-xs">
                <label class=" font-semibold text-gray-600 py-2">Site Web</label>
                <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div class="flex">
                        <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-yellow-500 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-yellow-500 justify-center items-center  text-xl rounded-lg text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                    </div>
                    <input v-model="plop.site" id="site" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-gray-400 dark:border-gray-700 h-10  rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                </div>
              </div>

              <!--Section Facebook-->
              <div class="mb-3 space-y-2 w-full text-xs">
                <label class=" font-semibold text-gray-600 py-2">Facebook</label>
                <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div class="flex">
                        <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-yellow-500 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-yellow-500 justify-center items-center  text-xl rounded-lg text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                    </div>
                    <input v-model="plop.facebook" id="facebook" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-gray-400 dark:border-gray-700 h-10  rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                </div>
              </div>

              <!--Section Instagram-->
              <div class="mb-3 space-y-2 w-full text-xs">
                <label class=" font-semibold text-gray-600 py-2">Instagram</label>
                <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div class="flex">
                        <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-yellow-500 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-yellow-500 justify-center items-center  text-xl rounded-lg text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                    </div>
                    <input v-model="plop.instagram" id="instagram" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-gray-400 dark:border-gray-700 h-10  rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                </div>
              </div>
          
              <!--Section Linkdin-->
              <div class="mb-3 space-y-2 w-full text-xs">
                <label class=" font-semibold text-gray-600 py-2">Linkedin</label>
                    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                        <div class="flex">
                            <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-yellow-500 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-yellow-500 justify-center items-center  text-xl rounded-lg text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </span>
                        </div>
                        <input v-model="plop.linkedin" id="linkedin" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-gray-400 dark:border-gray-700 h-10  rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                    </div>
              </div>
              <!--Boutton enregistrer-->
                        <div class="py-4 mb-1 text-center">
                            <button @click="getDatas" type="button" class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" >
                                Enregistrer
                            </button>
                        </div>
        </div>
        <br class="mt-10 mb-14">
        <!--form-->
        <div class="mx-auto h-4/6 rounded-md  p-5 ml-14 mt-8 mr-14 w-2/6 text-grey-darkest">
        <hr class="mb-5 mt-5 ">
         <h1 class="font-semibold  text-center font-thin text-xl mt-5">Information sur mon entreprise</h1>
         <hr class="mb-5 mt-5">
            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                    <label class=" font-semibold text-gray-600 py-2">Biographie</label>
                    <textarea v-model="plop.bio" id="bio" class="w-full px-3 py-3 text-gray-700 border border-gray-400 dark:border-gray-700 rounded-lg focus:outline-none" rows="4" placeholder="Description"></textarea>

                    <label class=" font-semibold text-gray-600 py-2">Logo de l'entreprise</label>
                        <input type="file" class="w-full text-gray-700 px-3 py-2 border border-gray-400 dark:border-gray-700 rounded">
                        <label class=" font-semibold text-gray-600 py-2">Images des locaux</label>
                        <input type="file" class="w-full text-gray-700 px-3 py-2 border border-gray-400 dark:border-gray-700 rounded">
            </div>
        </div>
  

  
</div>
  
</template>
<script>
export default {
    
    data() {
        
        let plop = {"commerce": "","phone": "","departement": "","cp": "","adresse": "","site": "","facebook": "","instagram": "","linkedin": "","bio": "",}
        this.getUser(plop)
        //return 
       return {  
           plop,
          
    }
    },
    

methods: {
    getDatas(){
        console.log(this.plop);
    },
    getUser(plop){
       plop.commerce = 'Domaine de Roucas';
       plop.phone = '06.66.80.63.55';
       plop.departement = 'Herault';
       plop.cp = '34070';
       plop.adresse = '500 avenue des aiguilles';
       plop.site = 'https://wwww.mon-site.com';
       plop.facebook = 'https://www.facebook.com/51';
       plop.instagram = '@LemonBlanc';
       plop.linkedin = 'Jean-Luc';
       plop.bio = 'Domaine de Roucas : est une entreprise magnifique producteur de vin depuis 10 ans specialisé dans le vin AOP.';

    }

    
    /**getUser(user){
        user.commerce = 'Domaine de Roucas';
        user.phone = '06.66.80.63.55';
        user.departement = 'Herault';
        user.cp = '34070';
        user.adresse = '500 avenue des aiguilles';
        user.site = 'https://wwww.mon-site.com';
        user.facebook = 'https://www.facebook.com/51';
        user.instagram = '@LemonBlanc';
        user.linkedin = 'Jean-Luc';
        user.bio = 'Domaine de Roucas : est une entreprise magnifique producteur de vin depuis 10 ans specialisé dans le vin AOP.';

    },*/
 

}
}
</script>
<style>
    
</style>