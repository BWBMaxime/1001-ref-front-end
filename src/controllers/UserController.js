import axios from 'axios';



const UserController = {
    saveUser(user) {axios.post('http://127.0.0.1:8000/sign-in/', {user}, {withCredentials:false}).then(function(response){
        console.log(response.data);
    })
}
}


export default UserController;
