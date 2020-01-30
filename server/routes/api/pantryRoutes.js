const router = require("express").Router();
const pantryController = require("../../controller/pantrydb");

router.route("/home")
.post(pantryController.create)

router.route("/pantry/:useremail")
  .get(pantryController.findAll)
  .delete(pantryController.remove);

  module.exports = router;