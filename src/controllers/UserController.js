import axios from 'axios';
import store from "../store/index.ts";

const UserController = {
    saveUser(user) {
        //console.log(JSON.stringify(user));
        axios.post('http://localhost:8000/register', JSON.stringify(user), {withCredentials:false})
        .then(function(response){console.log(response.data);})
        .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });
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
    }
}

export default UserController;
