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
<<<<<<< HEAD
    getPantry: function(userId) {
        return axios.get("api/pantryRoutes/pantry/" + userId);
    },
    deletePantry: function(userId) {
        return axios.delete("api/pantryRoutes/pantry/" + userId);
    },
    deleteIngredient: function(ingId) {
        return axios.delete("api/pantryRoutes/pantry/" + ingId);
    },
    createIngredient: function(ingredient) {
        return axios.create("api/pantryRoutes/pantry", ingredient);
=======
    getPantry: function(userEmail) {
        return axios.get("api/pantryRoutes/pantry/" + userEmail);
>>>>>>> 88d2df3f96626dfbd81c46e9741c07edf10ae375
    }
}