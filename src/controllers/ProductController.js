import { hydrate } from '@vue/runtime-dom';
import axios from 'axios';


const ProductController = {
    saveProduct(product) {
        axios.post('http://localhost:8000/product/create', JSON.stringify(product), {withCredentials:false})
        .then(function(response){
        console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },

    
    getCurrentUserProducts(id, products){
        console.log(id);
        axios.get('http://localhost:8000/getProducts/' + id, {withCredentials:false})
        .then(function(response){
            console.log(response.data);
            hydratePage(products, response.data);
        })
        .catch(error => {
            
            console.log(error);
        });
    },

}

function hydratePage(products, data){

    console.log("product to hydrate : " + products);
    console.log("data to hydrate : " + data);


    for(let keys in data){
        if(data[keys] != null) products[keys] = data[keys];
    }

    products.loaded = true;

    console.log(products);
}


export default ProductController;
