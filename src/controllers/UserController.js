import axios from 'axios';
import store from "../store/index.ts";
import router from "../router"

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
       * vérifie si l'utilisateur demandé existe dans la bdd et renvois son id et son role dans le store
       * @param {*} credentials représente les credentials envoyés par l'utilisateur
       */
      checkLogs(credentials) {
        let logs = {"mail": credentials.mail, "password": credentials.password}
        axios.post('http://localhost:8000/getCred', logs, {withCredentials:false})
        .then(function(response) {
            store.commit('setCurrentUser', response.data.userId)
            store.commit('setCurrentRole', response.data.userRole)
            if(store.state.currentUser.role === "producteur") {
                router.push("/producer/dashboard")
            }else{
                console.log("aaaaa")
                router.push("/distributer/liste")
            }
            
        })
        .catch(err => {
            console.log("err " + err)
        })
    },


    /**
     * Updates a user with a form
     */
    updateUser(user) {
        axios.post('http://127.0.0.1:8000/user/update', JSON.stringify(user), {withCredentials:false})
        .then(function(response){
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },

    //Gets all of the info from an existing user
    getUser(ID, user) {
        axios.get('http://127.0.0.1:8000/user/get/' + ID, {withCredentials:false})
        .then(function(response){
        console.log(user + "  " + response.data);
        hydrateUser(user, response.data);
        })
        .catch(error => {
            console.log(error)
        })
        return user;
    },

}

function hydrateUser(user, data){

    console.log("user to hydrate : " + user);
    console.log("data to hydrate : " + data);


    for(let keys in data){
        if(data[keys] != null) user[keys] = data[keys];
    }

    user.loaded = true;

    console.log(user);
}

export default UserController;
