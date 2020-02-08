const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    title: { type: String, required: false },
    image: { type: String, required: false },
    instructions: { type: String, required: false },
    ingredients: { type: String, required: false },
    userEmail: {type: String, required: true},
    apiId: {type: String, required: true} 
});

const Recipe = mongoose.model("Recipe", recipesSchema);

module.exports = Recipe;