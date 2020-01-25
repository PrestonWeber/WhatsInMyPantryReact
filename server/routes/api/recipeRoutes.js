const router = require("express").Router();
const recipeController = require("../../controller/recipedb");

router.route("/recipes")
  .post(recipeController.create);

router.route("/recipes/:userid")
  .get(recipeController.findAll);

router
  .route("/recipes/:id")
  .delete(recipeController.remove);

  module.exports = router;