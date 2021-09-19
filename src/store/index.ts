import { createStore } from 'vuex';
import ProductsModel from '@/models/ProductsModel'

export default createStore({
  state: {
    // Id et role de l'utilisateur connecté
    currentUser: {
      id: null,
      role: ""
    },

    loading: false,

    currentMessageTarget: {
      id: null
    },

    products: []

  },
 
  mutations: {
    /**
     * Au login actualise le store avec l'id et le role de l'utilisateur
     */
    setCurrentUser(state, id){
      state.currentUser.id = id
      console.log(id)
      console.log("user connecté: " + state.currentUser.id)
    },
    setCurrentRole(state,role){
      state.currentUser.role = role
      console.log("role activé: " + state.currentUser.role)
    },
    logout(state) {
      state.currentUser = { id: null, role: "" }
      console.log(state.currentUser.id)
    },
    setCurrentMessageTarget(state,id){
      state.currentMessageTarget.id = id;
      console.log("Parle avec l'utilisateur : " + state.currentMessageTarget.id)
    },
    // Permet démarer le spinner
    setLoadingOn(state){
      if(state.loading == false){
        state.loading = !state.loading 
        console.log("loading: " + state.loading)
      }
    },
    // Permet de stop le spinner
    setLoadingOff(state){
      if(state.loading == true){
        state.loading = !state.loading 
        console.log("loading: " + state.loading)
      }
    },
    // Récupère la liste des produit 
    setProducts(state, products){
      state.products = products
    }
    
  },
  getters: {

    getState(state) {
      return state
    },

    getCurrentMessageTarget(state) {
      return state.currentMessageTarget.id;
    }

  },
  actions: {
  },
  modules: {
  }
})
