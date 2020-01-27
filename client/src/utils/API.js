import axios from "axios";

export default {
    saveUser: function(userData) {
        return axios.post("api/users/signup", userData);
    },
    loginUser: function(userData) {
        return axios.post("api/users/login", userData);
    },
    getRecipes: function(userId) {
        return axios.get("api/recipeRoutes/recipes/" + userId);
    },
    getUser: function() {
        return axios.get("api/users");
    },
    deleteRecipe: function(recipeid) {
        return axios.delete("api/recipeRoutes/recipes/" + recipeid);
    },
    getPantry: function(userId) {
        return axios.get("api/pantryRoutes/pantry/" + userId);
    }
}