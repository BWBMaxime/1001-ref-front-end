import { hydrate } from '@vue/runtime-dom';
import axios from 'axios';
import store from "../store/index.ts";
import router from "../router"


const ProductController = {

      // Sauvegarde un nouveau produit crée par le producteur
    saveProduct(product) {
        axios.post('http://localhost:8000/product/create', JSON.stringify(product), {withCredentials:false})
        .then(function(response){
        console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },

    // Récupère toutes les informations des produits d'un utilisateur par son id
    getProductsByUserId(ID, products) {
        axios.get('http://localhost:8000/getProducts/' + ID, {withCredentials:false})
        .then(function(response){
        console.log(products + "  " + response.data);
        hydrateProduct(products, response.data);
        })
        .catch(error => {
            console.log(error)
        })
        console.log(products)
        return products;
    },

    hydratePage(products, data){

        console.log("product to hydrate : " + products);
        console.log("data to hydrate : " + data);
    
    
        for(let keys in data){
            if(data[keys] != null) products[keys] = data[keys];
        }
    
        products.loaded = true;
    
        console.log(products);
    }

}

  

export default ProductController;
