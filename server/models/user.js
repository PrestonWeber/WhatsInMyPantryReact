const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    favoriteRecipes: {type: Array, default: []}
});

const User = mongoose.model("Book", userSchema);

module.exports = User;