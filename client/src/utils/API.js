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
    deletePantry: function(userEmail) {
        return axios.delete("api/pantryRoutes/pantry/" + userEmail);
    },
    deleteIngredient: function(ingId) {
        console.log(ingId);
        return axios.delete("api/pantryRoutes/pantry/" + ingId);
    },
    createIngredient: function(ingredient) {
        return axios.create("api/pantryRoutes/pantry", ingredient);
    }
}