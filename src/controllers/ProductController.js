import axios from 'axios';

const ProductController = {
    getProducts(product){
        axios.get('http://localhost:8000/getProducts', JSON.stringify(product), {withCredentials:false})
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