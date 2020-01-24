import axios from "axios";

export default {
    saveUser: function(userData) {
        return axios.post("api/users/signup", userData);
    },
    loginUser: function(userData) {
        return axios.post("api/users/login", userData);
    }
}