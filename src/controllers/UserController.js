import axios from 'axios';
import store from "../store/index.ts";
import router from "../router"

const UserController = {
    
    /**
     * creates a new user account through a form
     * @param {*} user
     */
    saveUser(user) {
        //console.log(JSON.stringify(user));
        axios.post('http://localhost:8000/register', JSON.stringify(user), {withCredentials:false})
        .then(function(response){console.log(response.data);})
        .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });
    },



    /**
     * checks if the user requested exist in the database, 
     * if he does sends his id and role in the store
     * @param {*} credentials represent the credentials sent by the user
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
                router.push("/distributer/liste")
            }
            
        })
        .catch(err => {
            console.log("err " + err)
        })

    },



    /**
     * Update a user through a form
     */
    updateUser(user) {
        axios.post('http://localhost:8000/user/update', JSON.stringify(user), {withCredentials:false})
        .then(function(response){
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },    



    /**
     * get all datas from a user by its id
     *
     * @param {*} ID
     * @param {*} user
     * @return {*} 
     */
    getUser(ID, user) {
        axios.get('http://localhost:8000/profil/' + ID, {withCredentials:false})
        .then(function(response){
        //console.log(user + "  " + response.data);
        hydrateUser(user, response.data);
        })
        .catch(error => {
            console.log(error)
        })
        console.log(user)
        return user;
    },


}

/**
 *
 *
 * @param {*} user
 * @param {*} data
 */
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
