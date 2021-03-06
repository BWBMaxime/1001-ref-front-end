import axios from 'axios';
import store from "../store/index.ts";
import router from "../router"


const MessageController = {

    sendMessage(message, redirect) {
        axios.post('http://localhost:8000/message/send', JSON.stringify(message), {withCredentials:false})
        .then(function(response){
        message.body = "";
        if(redirect) router.push('/distributer/messaging');
        })
        .catch(error => {
            console.log(error)
        })
    },

    //Gets all of the info from an existing user
    getMessages(userID, targetID ,messages) {
        axios.get('http://localhost:8000/message/get/' + userID + "/" + targetID, {withCredentials:false})
        .then(function(response){
        hydrateMessages(messages, response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },

    getHeaders(userID, messages){
        console.log("Axios starting...")
        axios.get('http://localhost:8000/message/header/' + userID, {withCredentials:false})
        .then(function(response){
        hydrateMessages(messages, response.data);
        console.log(messages);
        })
        .catch(error => {
            console.log(error)
        })
    }
}

function hydrateMessages(messages, data){

    for(let keys in data){
        if(data[keys] != null) messages[keys] = data[keys]
    }
    return messages;

}

export default MessageController;
