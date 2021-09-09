import axios from 'axios';

const UserController = {
    saveUser(user) {
        axios.post('http://127.0.0.1:8000/register', {user}, {withCredentials:false}).then(function(response){
        console.log(response.data);
    })
    return ;
}
}

export default UserController;
