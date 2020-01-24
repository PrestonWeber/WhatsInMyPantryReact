const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: false },
    link: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }
});

const Recipe = mongoose.model("Recipe", recipesSchema);

module.exports = Recipe;