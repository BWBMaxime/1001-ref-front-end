import { hydrate } from '@vue/runtime-dom';
import axios from 'axios';


const ProductController = {
    saveProduct(product) {
        axios.post('http://localhost:8000/product/create', JSON.stringify(product), {withCredentials:false})
        .then(function(response){
            //
        })
        .catch(error => {3
            
            console.log(error)
        })
    },

    
    getCurrentUserProducts(id, products){
        axios.get('http://localhost:8000/getProducts/' + id, {withCredentials:false})
        .then(function(response){
            hydratePage(products, response.data);
        })
        .catch(error => {
            
            console.log(error);
        });
    },

    getProduct(ID, product) {

        axios.get('http://localhost:8000/product/' +ID, {withCredentials:false})
        .then(function(response){
        hydrateProduct(product, response.data);
        })
        .catch(error => {
            console.log(error)
        })
        return product;
    }


}

function hydratePage(products, data){

    for(let keys in data){
        if(data[keys] != null) products[keys] = data[keys];
    }

    products.loaded = true;

}

function hydrateProduct(product, data){

    for(let keys in data){
        if(data[keys] != null) product[keys] = data[keys];
    }

    product.loaded = true;
    return product;
}



export default ProductController;
