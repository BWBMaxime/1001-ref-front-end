import axios from 'axios';
import store from "../store/index.ts";

const UserController = {

    saveUser(user) {
        axios.post('http://127.0.0.1:8000/sign-in/', {user}, {withCredentials:false})
        .then(function(response){
        console.log(response.data);
        })
    },

      // permets de vérifier les logs envoyés par l'utilisateur
      checkLogs(credentials) {
        let logs = {"mail": credentials.mail, "password": credentials.password}
        axios.post('http://localhost:8000/getCred', logs, {withCredentials:false})
        // si on trouve un utilisateur correspondant, on envoies son id dans le current user du store
        .then(function(response) {
            store.commit('setCurrentUser', response.data)
        })
        .catch(err => {
            console.log("err " + err)
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
