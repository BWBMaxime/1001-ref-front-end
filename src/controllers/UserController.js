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
    }
,

      /**
       * vérifie si l'utilisateur demandé existe dans la bdd et renvois son id dans le store
       * @param {*} credentials représente les credentials envoyés par l'utilisateur
       */
      checkLogs(credentials) {
        let logs = {"mail": credentials.mail, "password": credentials.password}
        axios.post('http://localhost:8000/getCred', logs, {withCredentials:false})
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
