import { hydrate } from '@vue/runtime-dom';
import axios from 'axios';


const ProductController = {

    /**
     * saves a new product in database 
     */
    saveProduct(product) {
        axios.post('http://localhost:8000/product/create', JSON.stringify(product), {withCredentials:false})
        .then(function(response){
        // console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },

    /**
     * get all products from current user
     */
    getCurrentUserProducts(id, products){
        // console.log(id);
        axios.get('http://localhost:8000/getProducts/' + id, {withCredentials:false})
        .then(function(response){
            // console.log(response.data);
            hydratePage(products, response.data);
        })
        .catch(error => {
            
            console.log(error);
        });
    },


    /**
     * delete a product variation from database by its id
     */
    deleteVariationById(id){
        axios.delete('http://localhost:8000/variation/delete/' + id, {withCredentials:false})
        .then(function(response){
            // console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

}

/**
 * fills the tab with the right datas 
 * @param {*} products
 * @param {*} data
 */
function hydratePage(products, data){

    // console.log("product to hydrate : " + products);
    // console.log("data to hydrate : " + data);


    for(let keys in data){
        if(data[keys] != null) products[keys] = data[keys];
    }

    products.loaded = true;

    console.log(products);
}


export default ProductController;
