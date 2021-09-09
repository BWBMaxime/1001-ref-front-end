import axios from 'axios';

const UserController = {
    saveUser(user) {
        console.log(JSON.stringify(user));
        axios.post('http://localhost:8000/register', JSON.stringify(user), {withCredentials:false})
        .then(function(response){
            console.log(response.data);
        })
        .catch(error => {
            console.log('Error !!', error)
        });
    }
}

export default UserController;
