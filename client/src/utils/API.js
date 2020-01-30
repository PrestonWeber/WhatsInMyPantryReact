import axios from "axios";

export default {
    getRecipes: function(userEmail) {
        return axios.get("api/recipeRoutes/recipes/" + userEmail);
    },
    getUser: function() {
        return axios.get("api/users");
    },
    deleteRecipe: function(recipeid) {
        return axios.delete("api/recipeRoutes/recipes/" + recipeid);
    },
    getPantry: function(userId) {
        return axios.get("api/pantryRoutes/pantry/" + userId);
    },
    getApiRecipes: function(queryUrl) {
        return axios.post("api/recipeRoutes/apiRecipes", queryUrl);
    }
}