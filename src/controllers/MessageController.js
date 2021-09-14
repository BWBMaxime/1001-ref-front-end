import axios from 'axios';
import store from "../store/index.ts";

const MessageController = {

    sendMessage(message) {
        axios.post('http://127.0.0.1:8000/message/send', JSON.stringify(message), {withCredentials:false})
        .then(function(response){
        console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },

    //Gets all of the info from an existing user
    getMessages(userID, targetID ,messages) {
        axios.get('http://127.0.0.1:8000/messages/get/' + userID + "/" + targetID, {withCredentials:false})
        .then(function(response){
        hydrateMessages(messages, response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },

}

function hydrateMessages(user, data){

    for(let keys in data){
        if(data[keys] != null) user[keys] = data[keys];
    }

    user.loaded = true;
}

export default MessageController;
