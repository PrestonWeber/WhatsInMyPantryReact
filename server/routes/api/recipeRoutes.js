const router = require("express").Router();
const recipeController = require("../../controller/recipedb");

router.route("/recipes")
  .get(recipeController.findAll)
  .post(recipeController.create);

router
  .route("/recipes/:id")
  .post(recipeController.create)
  .delete(recipeController.remove);

  module.exports = router;