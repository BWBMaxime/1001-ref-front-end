import axios from 'axios';
import store from "../store/index.ts";
import router from "../router"

const ProductController = {

    saveProduct(product) {
        axios.post('http://127.0.0.1:43489/product/create', JSON.stringify(product), {withCredentials:false})
        .then(function(response){
        console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    getProduct(ID, product) {
        console.log("Axios get : ");
        console.log(product);
        axios.get('http://127.0.0.1:43489/product/' +ID, {withCredentials:false})
        .then(function(response){
        console.log(product + "  " + response.data);
        hydrateProduct(product, response.data);
        })
        .catch(error => {
            console.log(error)
        })
        return product;
    }

}

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
