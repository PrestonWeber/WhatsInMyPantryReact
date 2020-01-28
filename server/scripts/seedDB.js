const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/pantry_db"
);
const recipeSeed = 
    {
        title: "Chicken Soup",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F17638.jpg",
        link: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix65DbvZ_nAhVI7J4KHVS5ANYQjhx6BAgBEAI&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F8814%2Fhomemade-chicken-soup%2F&psig=AOvVaw1g2qVRCjy8fJkzXrc6dfdP&ust=1580066785345935",
        user: {
            username: "",
            password: ""
        }
    };

db.Recipe
  .deleteMany({})
  .then(() => db.Recipe.collection.insertOne(recipeSeed))
  .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
  }).catch(err => {
      console.error(err);
      process.exit(1);
  });