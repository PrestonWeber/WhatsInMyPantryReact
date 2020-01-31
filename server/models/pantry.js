const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ingredientSchema = new Schema({ ingredient: String });

// const pantrySchema = new Schema({
//     ingredients: [ingredientSchema],
//     user: {type: Schema.Types.ObjectId, ref: "User"}
// });

const pantrySchema = new Schema({
    ingredient: String,
    user: String
});

const Pantry = mongoose.model("Pantry", pantrySchema);

module.exports = Pantry;