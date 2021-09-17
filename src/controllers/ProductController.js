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
     * get all datas from a product with its id
     */
    getProduct(ID, product) {
        console.log("Axios get : ");
        console.log(product);
        axios.get('http://localhost:8000/product/' +ID, {withCredentials:false})
        .then(function(response){
        // console.log(product + "  " + response.data);
        hydrateProduct(product, response.data);
        })
        .catch(error => {
            console.log(error)
        })
        return product;
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



    /**
     * updates a product
     */
    updateProduct(id, product){
        axios.put('http://localhost:8000/product/update' + id, JSON.stringify(product), {withCredentials:false})
        .then(function(response){
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

}



/**
 * fills the product list tab of a producer with the right datas 
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



/**
 * 
 */
function hydrateProduct(product, data){

    //console.log("user to hydrate : " + product);
    console.log(data);


    for(let keys in data){
        if(data[keys] != null) product[keys] = data[keys];
    }

    product.loaded = true;

    console.log(product);

    return product;
}



export default ProductController;
