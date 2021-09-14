import axios from 'axios';

const ProductController = {
    saveProduct(product) {
        axios.post('http://127.0.0.1:8000/product/create', JSON.stringify(product), {withCredentials:false})
        .then(function(response){
        console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },

    
    getCurrentUserProducts(id){
        console.log(JSON.stringify(id));
        axios.get('http://localhost:8000/getProducts/' + id, JSON.stringify(id), {withCredentials:false})
        .then(function(response){
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        })
        .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            // using toJSON you get an object with more information about the HTTP error
            console.log(error.toJSON());
        });
    }

}

export default ProductController;
