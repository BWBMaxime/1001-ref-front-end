import { hydrate } from '@vue/runtime-dom';
import axios from 'axios';
import router from "../router";
import store from "../store"


const ProductController = {

    /**
     * saves a new product in database 
     */
    saveProduct(product) {
        axios.post('http://localhost:34557/product/create', JSON.stringify(product), {withCredentials:false})
        .then(function(response){
        console.log(response.data);
        store.commit('setLoadingOff')
        router.push("/producer/product-list")
        })
        .catch(error => {
            console.log(error)
        })
    },  
    getMiniProds(products){
        axios.get('http://localhost:8000/api/products', {withCredentials: false})
        .then(function(response) {
            console.log(response.data)
            hydratePage(products, response.data)
            store.commit("setProducts", response.data)
            store.commit('setLoadingOff')
        })
        .catch(err => {
            console.log(err)
            store.commit('setLoadingOff')
        })

    }
    ,



    /**
     * gets all products from current user
     */
    getCurrentUserProducts(id, products){
        // console.log(id);
        axios.get('http://localhost:8000/getProducts/' + id, {withCredentials:false})
        .then(function(response){
            console.log(response.data);
            store.commit('setLoadingOff')
            hydratePage(products, response.data);
        })
        .catch(error => {
            store.commit('setLoadingOff')
            console.log(error);
        });
    },



    /**
     * gest all the datas from a product by its id
     */
    getProduct(ID, product) {

        axios.get('http://localhost:34557/product/' +ID, {withCredentials:false})
        .then(function(response){
             store.commit("setLoadingOff")
        hydrateProduct(product, response.data);
        })
        .catch(error => {
            store.commit("setLoadingOff")
            console.log(error)
        })
        return product;
    },



    /**
     * deletes a product variation from database by its id
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
        product['owner'] = null;
        console.log(id);
        console.log(product);
        axios.put('http://localhost:8000/product/update/' + id, JSON.stringify(product), {withCredentials:false})
        .then(function(response){
            console.log(response.data);
            router.push('/producer/product-list');
        })
        .catch(error => {
            console.log(error);
        })
    },

}



/**
 * fills the product list tab of a producer with the right datas 
 */
function hydratePage(products, data){

    // console.log("product to hydrate : " + products);
    // console.log("data to hydrate : " + data);

    for(let keys in data){
        if(data[keys] != null) products[keys] = data[keys];
    }

    products.loaded = true;

}



/**
 * 
 */
function hydrateProduct(product, data){

    for(let keys in data){
        if(data[keys] != null) product[keys] = data[keys];
    }

    product.loaded = true;
    return product;
}



export default ProductController;
