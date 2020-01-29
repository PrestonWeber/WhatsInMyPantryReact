const router = require("express").Router();
const pantryController = require("../../controller/pantrydb");

router.route("/home")
.post(pantryController.create)

router.route("/pantry/:userid")
  .get(pantryController.findAll)
  // .put(pantryController.update)
  .delete(pantryController.remove);

  module.exports = router;