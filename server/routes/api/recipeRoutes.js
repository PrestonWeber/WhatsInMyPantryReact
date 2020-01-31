const router = require("express").Router();
const recipeController = require("../../controller/recipedb");

router.route("/recipes").post(recipeController.create);

router.route("/recipes/:useremail")
  .get(recipeController.findAll);

router.route("/recipes/:id").delete(recipeController.remove);

router.route("/apiRecipes").post(recipeController.findApiRecipes);

module.exports = router;
