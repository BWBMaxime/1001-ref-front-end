import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        "name": "La goudale",
        "img": "https://via.placeholder.com/100",
        "description": "Rien de tel qu'une bonne bière après une bonne journée de travail ... ",
        "catégories": ["Bière","Blonde","Bonne", "fraiche","#soleil", "#vacance"],
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
        "catégories": ["Bière","Blanche"],
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
        "catégories": ["Vin","Rouge"],
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
        "catégories": ["Vin","Blanc"],
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
    slider: [20,40],
    tags: [
      {
      "name" : "biere",
      "selected": true
    }, 
    {
      "name" : "Blonde",
      "selected": true
    }, 
    {
      "name" : "Bonne",
      "selected": true
    }, 
    {
      "name" : "fraiche",
      "selected": true
    }, 
    {
      "name" : "#soleil",
      "selected": true
    }, 
    {
      "name" : "#vacance",
      "selected": true
    }, 
    {
      "name" : "Blanche",
      "selected": true
    }, 
    {
      "name" : "vin",
      "selected": true
    }, 
    {
      "name" : "Rouge",
      "selected": true
    }, 
    {
      "name" : "Blanc",
      "selected": true
    }, 
  ] 
  },
  mutations: {
    // displayTags(state) {
    //   state.products.forEach((element) => state.tags.push(element.catégories));
    // },
    getAsked(state){
      const askedPrice = state.slider
      const askedTags = state.tags.filter(tag => tag.selected == true)
      console.log(askedTags, askedPrice)
    }
  },
  getters: {
    getState(state) {
      return state
    }
  },
  actions: {
  },
  modules: {
  }
})
