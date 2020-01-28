const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    title: { type: String, required: false },
    image: { type: String, required: false },
    link: { type: String, required: false },
    user: {type: Schema.Types.ObjectId, ref: "User"}
});

const Recipe = mongoose.model("Recipe", recipesSchema);

module.exports = Recipe;