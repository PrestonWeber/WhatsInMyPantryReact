import axios from "axios";

export default {
    saveUser: function(userData) {
        return axios.post("api/users/signup", userData);
    },
    loginUser: function(userData) {
        return axios.post("api/users/login", userData);
    },
    getRecipes: function(favoriteRecipes) {
        return axios.post("api/recipes", favoriteRecipes);
    },
    getUser: function() {
        return axios.get("api/users");
    }
}