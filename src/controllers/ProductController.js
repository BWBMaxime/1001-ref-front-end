import axios from 'axios';
import store from "../store/index.ts";
import router from "../router"

const ProductController = {

    // Sauvegarde un nouveau produit crée par le producteur
    saveProduct(product) {
        axios.post('http://127.0.0.1:35011/product/create', JSON.stringify(product), {withCredentials:false})
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

}

function hydrateProduct(product, data){

    console.log("product to hydrate : " + product);
    console.log("data to hydrate : " + data);
    product.loaded = true;

    console.log(product);
}

export default ProductController;
