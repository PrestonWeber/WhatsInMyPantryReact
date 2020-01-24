const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pantrySchema = new Schema({
    ingredients: {type: Array, required: true},
    userId: {type: Schema.Types.ObjectId, ref: "User"}
});

const Pantry = mongoose.model("Pantry", pantrySchema);

module.exports = Pantry;