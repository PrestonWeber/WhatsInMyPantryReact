const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/pantry_db"
);

const recipeSeed = 
    {
        title: "Fluffy Pancakes",
        image: "https://images.media-allrecipes.com/userphotos/560x315/5079227.jpg",
        link: "https://www.allrecipes.com/recipe/162760/fluffy-pancakes/?internalSource=rotd&referringId=78&referringContentType=Recipe%20Hub",
        userEmail: "georgey@gmail.com"
    };

// const pantrySeed = {
//     ingredients: ["Chicken", "Pork", "Rice", "Beans", "lettuce", "cheese", "bread"],
//     user: 1
// };


// db.Recipe
//   .create({})
//   .then(() => db.Recipe.collection.insertOne(recipeSeed))
//   .then(data => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//   }).catch(err => {
//       console.error(err);
//       process.exit(1);
//   });

//   db.Pantry
//     .create({})
//     .then(() => db.Pantry.collection.insertMany(pantrySeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     }).catch(err => {
//         console.error(err);
//         process.exit(1);
//     });

// db.Recipe
//   .deleteMany({})
//   .then(() => db.Recipe.collection.insertOne(recipeSeed))
//   .then(data => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//   }).catch(err => {
//       console.error(err);
//       process.exit(1);
//   });

db.Recipe.create(recipeSeed)
    .then(data => {
        // console.log(data.result.n + " records created!");
        process.exit(0);
    }).catch(err => {
        console.error(err);
        process.exit(1);
    });
