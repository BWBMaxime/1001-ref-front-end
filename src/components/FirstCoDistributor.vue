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
                                        <form class="space-y-4 text-gray-700">
                                        <!--Type de commerce-->
                                        <div class="w-full flex flex-col mb-3">
                                            <label for="commerce" class="hidden">Type de commerce</label>
                                            <input v-model="user.companyType" type="commerce" name="commerce" id="commerce" placeholder="Type de commerce" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                                                </div>
              <!--Adresse postale-->
            <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-500">Adresse
            </div>
            <div class="flex flex-col md:flex-row pb-4 mb-4">
                <div class="flex-1">
                <div class="flex flex-col md:flex-row">
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input v-model="user.address.number" placeholder="Numéro" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input v-model="user.address.road" placeholder="Rue" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input v-model="user.address.zipcode" placeholder="Code Postal" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="flex flex-col md:flex-row pb-4 mb-4">
                <div class="flex-1">
                <div class="flex flex-col md:flex-row">
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input v-model="user.address.city" placeholder="Ville" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>
                    <div class="w-full flex-1 mx-2">
                        <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input v-model="user.address.country" placeholder="Pays" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                    </div>

                </div>
            </div>
            </div>
              <!--Section Site web-->
              <div class="mb-3 space-y-2 w-full text-xs">
                      <label class=" font-semibold text-gray-600 py-2">Site Web</label>
                      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                        <div class="flex">
                          <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-blue-300 justify-center  text-xl rounded-lg text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            </span>
                        </div>
                        <input v-model="user.website" id="site" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                          </div>
              </div>

              <!--Section Facebook-->
              <div class="mb-3 space-y-2 w-full text-xs">
                      <label class=" font-semibold text-gray-600 py-2">Facebook</label>
                      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                         <div class="flex">
                        <span class="flex leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </span>
                         </div>
                        <input v-model="user.facebook" id="facebook" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                          </div>
              </div>
          
              <!--Section Linkedin-->
              <div class="mb-3 space-y-2 w-full text-xs">
                      <label class=" font-semibold text-gray-600 py-2">Linkedin</label>
                      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                        <div class="flex">
                          <span class="flex leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                          </span>
                        </div>
                        <input v-model="user.linkedin" id="linkedin" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                      </div>
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
                                            <textarea v-model="user.biography" id="bio" type= "text" class="w-full px-3 py-3 text-gray-700 border rounded-lg focus:outline-none" rows="4" placeholder="Description"></textarea>

                                            <label class=" font-semibold text-gray-600 py-2">Logo de l'entreprise</label>
                                                <input type="file" class="w-full text-gray-700 px-3 py-2 border rounded">
                                                <label class=" font-semibold text-gray-600 py-2">Images des locaux</label>
                                                <input type="file" class="w-full text-gray-700 px-3 py-2 border rounded">
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
            <button @click="updateAndQuit" class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
              Finir plus tard et me déconnecter
              </button>
            <button @click="updateAndContinue" class="transition duration-500 bg-yellow-500 hover: 0 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
              Valider
            </button>
              </div>
              




</template>

<script >

import UserController from  "../controllers/UserController";

export default {
     data() {
        
        let user = this.getDatas(); 

        if(user == null){
            user = 
            {
            id:1,
            companyType: "",
            phone: "",
            address: 
            {
                number:"",
                road:"",
                zipcode:"",
                city:"",
                country:"",
            },
            website: "",
            facebook: "",
            linkedin: "",
            biography:"",
            companyLogo:"",
            companyPicture:""
            }
        }

        return {  
           user,
        }
    },
    

methods: {

    getDatas(){
        this.user = this.$store.state.user;
    },

    updateAndContinue(){
        UserController.updateUser(this.user);
        this.$router.push('dashboard');
    },

    updateAndQuit(){
        UserController.updateUser(this.user);
        this.$store.commit('logout');
    }

}
}

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
