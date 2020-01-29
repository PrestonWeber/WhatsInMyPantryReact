import axios from "axios";

export default {
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