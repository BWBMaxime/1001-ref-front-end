
<template>

<div class="float-left flex bg-gray dark:bg-gray-800 rounded-lg shadow mt-20 ml-20">
    <ul class="w-72 justify-start flex flex-col divide divide-y">
        <li class="h-20 flex flex-row" v-for="message in messages" :key="message">
            <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium dark:text-white">
                        {{ message.sender }}
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
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
            "sender": "Jean Michel",
            "object": "Vendeur d'engrais",
            "time": "11:15"
        },
        {
            "sender": "José Groseille",
            "object": "J'aime les pommes de terres",
            "time": "12:27"
        },
        {
            "sender": "Sylvie Reblochon",
            "object": "Saison des tartiflettes",
            "time": "09:18"
        }
      ]
    }
  }
}
</script>

<style>

</style>