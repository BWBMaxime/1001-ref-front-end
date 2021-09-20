import axios from 'axios';
import store from "../store/index.ts";
import router from "../router"

const UserController = {
    
    /**
     * creates a new user account through a form
     * @param {*} user
     */
    saveUser(user) {
        axios.post('http://localhost:8000/register', JSON.stringify(user), {withCredentials:false})
        .then(function(response){
            console.log(response.data);
            store.commit("setLoadingOff")
            router.push('/')
        })
        .catch(error => {
            store.commit("setLoadingOff")
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
            store.commit('setCurrentBio', response.data.bio)
            if(store.state.currentUser.role === "Producteur") {
                if(store.state.currentUser.bio.length == null){
                    store.commit("setLoadingOff")
                    router.push("/producer/first-connection")
                }else {
                    store.commit("setLoadingOff")
                    router.push("/producer/dashboard")
                }
                
            }else{
                if(store.state.currentUser.bio == null){
                    store.commit('setLoadingOff')
                    router.push("/distributer/first-connection")
                }else {
                    store.commit('setLoadingOff')
                    router.push("/distributer/liste")
                }
                
            }
            
        })
        .catch(err => {
            store.commit('setLoadingOff')
            console.log("err " + err)
        })

    },



    /**
     * Update a user through a form
     */
    updateUser(user) {
        axios.post('http://localhost:8000/user/update', JSON.stringify(user), {withCredentials:false})
        .then(function(response){
            //
        })
        .catch(error => {
            console.log(error)
        })
    },    



    /**
     * get all datas from a user by its id
     */
    getUser(ID, user) {
        axios.get('http://localhost:8000/profil/' + ID, {withCredentials:false})
        .then(function(response){
            store.commit('setLoadingOff')
        hydrateUser(user, response.data);
        })
        .catch(error => {
            store.commit('setLoadingOff')
            console.log(error)
        })
        return user;
    },
}

    /**
     * 
     * @param {*} user
     * @param {*} data
     */
    function hydrateUser(user, data){

        for(let keys in data){if(data[keys] != null) user[keys] = data[keys];}
        user.loaded = true;

    }

export default UserController;
