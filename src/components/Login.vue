<template>
  <div class="mx-auto container flex items-center" id="nav">
    <div class="w-full pt-2 p-4">
      <p class="text-center h1-style">
        Bienvenue sur la plateforme 1001 Références
      </p>
      <div class="mx-auto md:p-6 md:w-1/2">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-8">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              <span class="text-yellow-500">&nbsp;*</span>
              Identifiant
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <input
                id="username"
                class="block pr-10 shadow appearance-none border-2 border-orange-100 rounded
                  w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none
                focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                v-model="credentials.mail"
                placeholder="Dupont@example.com"
              />
            </div>
          </div>

          <div class="mb-8">
            <label
              for="password"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              <span class="text-yellow-500">&nbsp;*</span>
              Mot de passe
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <input
                name="password"
                id="password"
                type="password"
                class="block pr-10 shadow appearance-none border-2 border-orange-100
                  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none 
                  focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                v-model="credentials.password"
                placeholder="xxxxxxxxxxx"
              />
            </div>
          </div>

          <div class="mb-6">
            <div class="flex items-center justify-between">
              <div>
                <label class="block text-gray-500 font-bold" for="remember">
                  <input
                    class="ml-2 leading-tight"
                    type="checkbox"
                    id="remember"
                    name="remember"
                  />
                  <span class="text-sm"> Se souvenir de moi </span>
                </label>
              </div>
              <div>
                <a
                  class="font-bold text-sm text-gray-500 hover:text-gray-800"
                  href="#password-request"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
          </div>

          <div class="mb-4 text-center">
            <button v-if="spinner == false"
              class="text-yellow-500 border border-solid border-yellow-500 hover:bg-yellow-500
                hover:text-white active:bg-yellow-600 font-bold uppercase px-8 py-3 rounded
                outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              @click="checkLogs"
            >
              Login
            </button>
          <Spinner v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserController from "../controllers/UserController";
import Spinner from "./Spinner.vue"

export default {
  name: "login",
  components: {
    Spinner
  },
  data() {
    return {
      credentials: {
        mail: "",
        password: "",
      },
      Spinner,
      spinner: false
    };
  },
  methods: {
    checkLogs() {
      this.spinner = true;
      UserController.checkLogs(this.credentials, this.router);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1-style {
  color: #f2ba52;
  font-size: 50px;
  font-weight: bold;
}
.spinner {
  margin-right: 80px;
}

</style>

