<template>
      <div class="w-7/12 float-right flex flex-col flex-auto h-full p-6 mr-48 mt-4">
        <div class="flex flex-col flex-auto flex-shrink-0 rounded-lg bg-gray-100 h-full p-4">
          <div class="bg-scroll flex flex-col h-full overflow-x-auto mb-4">
            <div class="flex flex-col h-full">
              <div class="grid grid-cols-12 gap-y-2" v-for="message in messages" :key="message">

                <!-- 1er message droite, si le message est envoyé par l'utilisateur courant -->
                <div class="col-start-1 col-end-8 p-3 rounded-lg" v-if="message.target == userID && message.body!=''">
                  <div class="flex flex-row items-center">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        <div v-html="message.icon"></div>
                    </div>
                    <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>
                          {{ message.body }}
                        </div>
                    </div>
                  </div>
                </div>   

                <!-- réponse gauche, si le message est envoyé par le sujet de la conversation -->
                <div class="col-start-6 col-end-13 p-3 rounded-lg" v-if="message.sender == userID">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-500 flex-shrink-0">
                      <div v-html="message.icon"></div>
                    </div>
                    <div class="relative mr-3 text-sm bg-yellow-100 py-2 px-4 shadow rounded-xl">
                      <div>
                        {{ message.body }}
                      </div>
                    </div>
                  </div>
                </div>              

              </div><!-- fin boucle for -->

            </div>
          </div>
          <!-- partie PJ, message, bouton d'envoi -->
          <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div>
              <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex-grow ml-4">
              <div class="relative w-full">
                <input
                  v-model="message.body"
                  type="text"
                  class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  placeholder="Tapez votre message ici.."
                />
              </div>
            </div>
            <div class="ml-4">
              <button @click="sendMessage()"
                id="sendBtn"
                class="flex items-center justify-center flex-shrink-0 px-4 py-1 border  bg-yellow-500 hover:bg-yellow-400 rounded-md text-white font-semibold "
                type="button">
                <span>Send</span>
                <span class="ml-2">
                  <svg
                    class="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

import MessageController from  "../controllers/MessageController";

export default {
  data(){

    let userID = 0
    let messages = [{
        senderID: "",
        targetID: "",
        body: ""
    }];


    let message = {
        senderID: "",
        targetID: "",
        body: ""
    }

    return {
      messages,
      message,
      userID

    }
  },
  methods: {

    sendMessage(){
      MessageController.sendMessage(this.message);
      this.messages.push(this.message);
    },

    getMessages(){
      MessageController.getMessages(this.userID, this.message.targetID, this.messages);
    }
  },

    beforeMount() {
      this.userID =  this.$store.state.currentUser.id;
      this.message.senderID = this.$store.state.currentUser.id;
      if(this.$store.state.currentMessageTarget.id!= null){
        this.getMessages();
      }
    },

    computed: {
      conversationUser () {
        return this.$store.state.currentMessageTarget.id;
      }
    },
    watch:{
    conversationUser(value) {
      console.log(`My store value for 'conversationUser' changed to ${value}`);
      this.message.targetID = this.$store.state.currentMessageTarget.id;
      this.getMessages();
    }
    }

}
</script>

<style>

</style>