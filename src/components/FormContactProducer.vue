<template>
    <div class="mx-auto flex flex-col w-full lg:w-2/3 justify-center">
        <div class="container w-full px-4">
            <div class="flex flex-wrap justify-center pt-20">
                <div class="w-full lg:w-2/3 px-4">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                        <div class="flex-auto p-5 lg:p-10">
                            <h4 class="text-2xl mb-4 text-black font-semibold">Contact</h4>
                            <form id="contactForm" action="" method="">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="message">Contacter "{{ message.target}}"
                                    </label>
                                    <textarea v-model="message.body" maxlength="300" name="message" id="message" rows="4"
                                    cols="100"
                                    class="border-0 px-3 py-3 bg-gray-100 text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                    placeholder="Tapez votre message.." required>
                                    </textarea>
                                </div>
                                <div class="text-center mt-6">
                                    <button @click="sendMessage()"
                                    id="sendBtn"
                                    class="p-2 w-1/4 border rounded-md bg-yellow-500 text-white font-semibold hover:bg-yellow-400"
                                    type="button" style="transition: all 0.15s ease 0s;">Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import MessageController from  "../controllers/MessageController";

export default {
    data() {

    let message = {
        senderID: "",
        targetID: "",
        body: "",
    }

        return {
            message,
        }
    },

    methods:{

        sendMessage(){
            MessageController.sendMessage(this.message, true);
        },


    },

     beforeMount() {
      this.message.senderID = this.$store.state.currentUser.id;
      this.message.targetID = this.$route.params.id;
    },



}
</script>

<style>


</style>