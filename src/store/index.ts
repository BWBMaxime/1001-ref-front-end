import { createStore } from 'vuex';
import TagsModel from '@/models/TagsModel'
import ProductsModel from '@/models/ProductsModel'
import DeclinaisonsModel from '@/models/DeclinaisonsModel'

export default createStore({
  state: {
    // product list
    products: [
      {
        "name": "La goudale",
        "img": "https://via.placeholder.com/100",
        "description": "Rien de tel qu'une bonne bière après une bonne journée de travail ... ",
        "tags": ["Bière","Blonde","Bonne", "fraiche","#soleil", "#vacance"],
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
        "tags": ["Bière","Blanche"],
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
    //tags array initialiser
  tags: Array<TagsModel>(),
  filteredProducts: Array<ProductsModel>()
  },
 
  mutations: {
    /**
     * get products.tags in state and feed state.tags array following tagsModel
     * @param state 
     */
    displayTags(state) {
      const temp: Array<TagsModel> =[]
      state.products.forEach((product) => 
        product.tags.forEach(dtag => {
            const tag = new TagsModel()
            tag.name = dtag
            tag.selected = true
            temp.push(tag)
        }))
      const key = 'name'
      state.tags = [...new Map(temp.map(item => 
        [item[key],item])).values()]
    },
    /**
     * filter products with askedTags
     * don't work for the moment ... but not so far
     * @param state 
     */
    getAsked(state){
      const askedTags: Array<TagsModel> = state.tags.filter(tag => tag.selected == true)
      const temp: Array<ProductsModel> = []
      askedTags.forEach(askedTag => {
       state.products.forEach(product => {
         if(product.tags.includes(askedTag.name)){
           const fprod = new ProductsModel()
           fprod.name = product.name
           fprod.img = product.img
           fprod.description = product.description
           product.declinaisons.forEach(declinaison => {
             const pdecli = new DeclinaisonsModel()
             pdecli.quantity = declinaison.quantity
             pdecli.prix = declinaison.prix
             fprod.declinaisons.push(pdecli)
           })
           fprod.tags = product.tags
           temp.push(fprod)
         }
       })
      })
      
      const key = 'name'
      state.filteredProducts = [...new Map(temp.map(item => 
        [item[key],item])).values()]

      console.log(state.filteredProducts)
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
