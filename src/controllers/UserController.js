import axios from 'axios';



const UserController = {

    saveUser(user) {
        axios.post('http://127.0.0.1:8000/sign-in/', {user}, {withCredentials:false})
        .then(function(response){
        console.log(response.data);
        })
    },


    /**
     * Updates a user with a form
     */
    updateUser(user) {
        console.log(JSON.stringify(user));
        axios.post('http://127.0.0.1:44869/user/update', JSON.stringify(user), {withCredentials:false})
        .then(function(response){
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },


}



export default UserController;
