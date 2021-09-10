import axios from 'axios';

const ProfilController = {
    getProfil(user) {
        axios.get('http://localhost:8000/profil', JSON.stringify(user), {withCredentials:false})
        .then(function(response){console.log(response);})
        .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });
    }
}

export default ProfilController;
