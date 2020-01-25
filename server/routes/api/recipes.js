const router = require("express").Router();
const pantryController = require("../../controller/pantrydb");

router.route("/")
    .post(pantryController.getRecipes);

module.exports = router;