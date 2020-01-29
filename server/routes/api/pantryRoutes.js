const router = require("express").Router();
const pantryController = require("../../controller/pantrydb");

router.route("/members")
.post(pantryController.create)

router.route("/pantry/:useremail")
  .get(pantryController.findAll)
  .delete(pantryController.remove);

  module.exports = router;