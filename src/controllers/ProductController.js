import axios from 'axios';
import store from "../store/index.ts";

const ProductController = {

    saveProduct(product) {
        axios.post('http://127.0.0.1:8000/product/create', JSON.stringify(product), {withCredentials:false})
        .then(function(response){
        console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }

}



export default ProductController;
