
<template>
<div class="float-left flex bg-gray dark:bg-gray-800 rounded-lg shadow h-full mt-10 ml-24">    
    <ul class="w-84 justify-start flex flex-col divide divide-y">
        <div class="text-xl flex flex-1 items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h1 class="ml-2">Boîte de réception</h1>
        </div>
        <li class="h-20 flex flex-row transition hover:bg-gray-100" v-for="message in messages" :key="message">
            <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium dark:text-white">
                        De : {{ message.sender }}
                    </div>
                    <div class="text-gray-600 dark:text-gray-200">
                        Ets : {{ message.company }}
                    </div>
                    <div class="text-light text-gray-400">
                        <p>Objet : {{ message.object}} </p>
                    </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    {{ message.time }}
                </div>
            </div>
        </li>
    </ul>
</div>


</template>

<script>
export default {
  data(){
    return {
      messages: [
        {
            "sender": "Jean-Michel Primeur",
            "company": "Liddle",
            "object": "En quête de nouvelles bières",
            "time": "09:18"
        },
        {
            "sender": "Mathilde Groseille",
            "company": "Le comptoir de Mathilde",
            "object": "Cherche de l'huile de truffe.",
            "time": "11:15"
        },
        {
            "sender": "Sylvie Reblochon",
            "company": "Les délices de Sylvie",
            "object": "Saison des tartiflettes",
            "time": "12:27"
        }
      ]
    }
  }
}
</script>

<style>

</style>