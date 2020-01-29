const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pantrySchema = new Schema({
    ingredients: {type: Array, required: true},
    userEmail: {type: String, required: true}
});

const Pantry = mongoose.model("Pantry", pantrySchema);

module.exports = Pantry;