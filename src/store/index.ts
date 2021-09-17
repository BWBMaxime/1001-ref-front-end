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

    products: [
      {
        "name": "La goudale",
        "img": "https://via.placeholder.com/100",
        "description": "Rien de tel qu'une bonne bière après une bonne journée de travail ... ",
        "tags": ["Bière","Blonde","Bonne", "fraiche","#soleil", "#vacance", "aaa"],
        "declinaisons": [
               {
                "quantity": "cartons 6 bouteilles",
                "prix": "40€"
            },
            {
                "quantity": "caisse 24 bouteilles",
                "prix": "70€"
            }
        ]
    },
    {
        "name": "Bière blanche rdm",
        "img": "https://via.placeholder.com/100",
        "description": "Un apéritif de dernière minute? Prennez donc un instant fraîcheur avec son goût citronné ... ",
        "tags": ["Bière","Blanche", "bbb"],
        "declinaisons": [
            {
                "quantity": "cartons 6 bouteilles",
                "prix": "40€"
            },
            {
                "quantity": "caisse 24 bouteilles",
                "prix": "70€"
            }
        ]
    },
    {
        "name": "Le p'tit vin rouge",
        "img": "https://via.placeholder.com/100",
        "description": "Il saura merveilleusement accompagner vos meilleures viande grillées ou en sauces ... ",
        "tags": ["Vin","Rouge"],
        "declinaisons": [
            {
                "quantity": "cartons 6 bouteilles",
                "prix": "40€"
            },
            {
                "quantity": "caisse 24 bouteilles",
                "prix": "70€"
            } 
        ]
    }, 
    {
        "name": "Le p'tit vin blanc",
        "img": "https://via.placeholder.com/100",
        "description": "Il saura merveilleusement accompagner vos meilleurs poissons ... ",
        "tags": ["Vin","Blanc"],
        "declinaisons": [ 
            {
                "quantity": "cartons 6 bouteilles",
                "prix": "30€"
            }, 
            {
                "quantity": "caisse 24 bouteilles",
                "prix": "1€"
            } 
        ]
    }
    ],
    tags: [
    {
      name: 'aaa',
      selected: true
    },
    {
      name: 'bbb',
      selected: false
    },
    {
      name: 'ccc',
      selected: false
    }
    ],
    // Liste des poduits affichée dans productlistDistrib 
    filteredProducts: Array<ProductsModel>()
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
