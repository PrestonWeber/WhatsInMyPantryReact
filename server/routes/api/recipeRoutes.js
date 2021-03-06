const router = require("express").Router();
const recipeController = require("../../controller/recipedb");

router.route("/recipe")
  .post(recipeController.create);

router.route("/recipes/:useremail")
  .get(recipeController.findAll);

router
  .route("/recipes/:id")
  .delete(recipeController.remove);

  module.exports = router;