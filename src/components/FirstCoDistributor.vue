<template>

<main class="w-3/5 p-8 mx-auto">
        <p class="text-left md:text-center py4 text-4xl ">Bienvenue! C'est votre première connexion ! </p>
           <p class="text-left md:text-center py-4 text-2xl extrabold ">Veuillez valider les 2 sections avant d'accéder à votre tableau de bord </p>
             <section class="shadow row">
                <div class="tabs">
                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative">
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1">
                                 <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                    <span class="text-grey-darkest font-thin text-xl">1 - Complément d'informations sur mon commerce</span>
<<<<<<< HEAD
                                        <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <!-- icon by feathericons.com -->
                                            <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                 <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                     </div>
                                 </header>
                            <div class="tab-content">
=======
                                      <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                                <!-- icon by feathericons.com -->
                                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                 <polyline points="6 9 12 15 18 9">
                                                 </polyline>
                                                </svg>
                                      </div>
                                 </header>
                        <div class="tab-content">
>>>>>>> first-connection-distributor
                            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                   <form class="space-y-4 text-gray-700">

              <!--Type de commerce-->
              <div class="w-full flex flex-col mb-3">
              <label for="commerce" class="hidden">Type de commerce</label>
<<<<<<< HEAD
              <input type="commerce" name="commerce" id="commerce" placeholder="Type de commerce" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
=======
              <input v-model="plop.commerce" type="commerce" name="commerce" id="commerce" placeholder="Type de commerce" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
>>>>>>> first-connection-distributor
              </div>


              <!--Telephone-->
              <div class="flex flex-col mt-2">
              <label for="phone" class="hidden">Telephone</label>
<<<<<<< HEAD
              <input type="phone" name="phone" id="phone" placeholder="Numéro de télèphone" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
              </div>

            <div class="flex flex-col md:flex-row pb-4 mb-4">
            <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-500">Adresse
            </div>
            <div class="flex-1">
=======
              <input v-model="plop.phone" type="phone" name="phone" id="phone" placeholder="Numéro de télèphone" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
              </div>


              <!--Adresse postale-->
            <div class="flex flex-col md:flex-row pb-4 mb-4">
                <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-500">Adresse
                </div>
                <div class="flex-1">
>>>>>>> first-connection-distributor
                <div class="flex flex-col md:flex-row">
                    <select class="mx-2 flex-1 h-10 mt-2 form-select w-full">
                        <option value="FR">France</option>
                        <option value="Spain">Espagne</option>
                    </select>
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
<<<<<<< HEAD
                            <input placeholder="Département" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                            <input placeholder="Code postale" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
=======
                        <input v-model="plop.departement" placeholder="Département" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                            <input v-model="plop.cp" placeholder="Code postale" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
>>>>>>> first-connection-distributor
                    </div>
                </div>
                <div class="m-2">
                    <div class="w-full flex-1">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
<<<<<<< HEAD
                        <input placeholder="Adresse" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                </div>
            </div>
        </div>
=======
                        <input v-model="plop.adresse" placeholder="Adresse" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                </div>
            </div>
            </div>
>>>>>>> first-connection-distributor


              <!--Section Site web-->
              <div class="mb-3 space-y-2 w-full text-xs">
                      <label class=" font-semibold text-gray-600 py-2">Site Web</label>
                      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                        <div class="flex">
                          <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            </span>
                        </div>
<<<<<<< HEAD
                        <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
=======
                        <input v-model="plop.site" id="site" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
>>>>>>> first-connection-distributor
                          </div>
              </div>

              <!--Section Facebook-->
              <div class="mb-3 space-y-2 w-full text-xs">
                      <label class=" font-semibold text-gray-600 py-2">Facebook</label>
                      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
<<<<<<< HEAD
                        <div class="flex">
                        <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                         </span>
                        </div>
                        <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
=======
                         <div class="flex">
                        <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </span>
                         </div>
                        <input v-model="plop.facebook" id="facebook" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
>>>>>>> first-connection-distributor
                          </div>
              </div>

              <!--Section Instagram-->
              <div class="mb-3 space-y-2 w-full text-xs">
                      <label class=" font-semibold text-gray-600 py-2">Instagram</label>
<<<<<<< HEAD
                      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                        <div class="flex">
                          <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                          </span>
                        </div>
                        <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                          </div>
              </div>
          
              <!--Section Instagram-->
=======
                     <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                        <div class="flex">
                          <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                          </span>
                        </div>
                        <input v-model="plop.instagram" id="instagram" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                     </div>
              </div>
          
              <!--Section Linkedin-->
>>>>>>> first-connection-distributor
              <div class="mb-3 space-y-2 w-full text-xs">
                      <label class=" font-semibold text-gray-600 py-2">Linkedin</label>
                      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                        <div class="flex">
                          <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
<<<<<<< HEAD
                                          </span>
                        </div>
                        <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                          </div>
              </div>

              <!--Boutton enregistrer-->  
              <div class="py-4 mb-1 text-center">
            <button class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
              Enregistrer
              </button>
=======
                          </span>
                        </div>
                        <input v-model="plop.linkedin" id="linkedin" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                      </div>
              </div>


              <!--Boutton enregistrer-->  
              <div class="py-4 mb-1 text-center">
                <button @click="getDatas" type="button" class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
                Enregistrer
                </button>
>>>>>>> first-connection-distributor
              </div>
                                   </form>
                                </div>
                            </div>


                            
                        </div>
                    </div>


                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative">
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span class="text-grey-darkest font-thin text-xl">
                                  2 - Information sur mon entreprise
                                </span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <!-- icon by feathericons.com -->
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div class="tab-content">
                                <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                    <form class="space-y-3 text-gray-700">

                                         <label class=" font-semibold text-gray-600 py-2">Biographie</label>
<<<<<<< HEAD
                                            <textarea class="w-full px-3 py-3 text-gray-700 border rounded-lg focus:outline-none" rows="4" placeholder="Description"></textarea>
=======
                                            <textarea v-model="test.bio" id="bio" type= "text" class="w-full px-3 py-3 text-gray-700 border rounded-lg focus:outline-none" rows="4" placeholder="Description"></textarea>
>>>>>>> first-connection-distributor

                                            <label class=" font-semibold text-gray-600 py-2">Logo de l'entreprise</label>
                                                <input type="file" class="w-full text-gray-700 px-3 py-2 border rounded">
                                                <label class=" font-semibold text-gray-600 py-2">Images des locaux</label>
                                                <input type="file" class="w-full text-gray-700 px-3 py-2 border rounded">

                                                <!--Boutton enregistrer-->  
                                                <div class="py-4 mb-1 text-center">
<<<<<<< HEAD
                                                <button class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
=======
                                                <button @click="getToto" type="button" class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
>>>>>>> first-connection-distributor
                                                Enregistrer
                                                </button>
                                                </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>
        </main>
              
       <!--Boutton enregistrer-->  
              <div class="space-x-10 py-4 mb-1 text-center">
            <button class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
              Finir plus tard, me déconnecter
              </button>
            <button class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
              C'est partie
<<<<<<< HEAD
              </button>
=======
            </button>
>>>>>>> first-connection-distributor
              </div>
              




</template>

<script >
<<<<<<< HEAD

=======
export default {
     data() {
        
        let plop = {"commerce": "","phone": "","departement": "","cp": "","adresse": "","site": "","facebook": "","instagram": "","linkedin": "",}
        let test = {"bio": "",}
        this.getUser(plop),this.getTiti(test)
       return {  
           plop,test,
          
    }
    },
    

methods: {
    getDatas(){
        console.log(this.plop);
    },
        getToto(){
        console.log(this.test)
    },
    getTiti(test){
        test.bio = 'Domaine de Roucas : est une entreprise magnifique producteur de vin depuis 10 ans specialisé dans le vin AOP.';
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


}
}
>>>>>>> first-connection-distributor

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
            
              .tab {
            overflow: hidden;
            }
            .tab-content {
            max-height: 0;
            transition: all 0.5s;
            }
            input:checked + .tab-label .test {
                background-color: #000;
            }
            input:checked + .tab-label .test svg {
                transform: rotate(180deg);
                stroke: #fff;
            }
            input:checked + .tab-label::after {
            transform: rotate(90deg);
            }
            input:checked ~ .tab-content {
            max-height: 100vh;
            }         
            
</style>
