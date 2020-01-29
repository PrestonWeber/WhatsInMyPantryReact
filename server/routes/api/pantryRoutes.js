const router = require("express").Router();
const pantryController = require("../../controller/pantrydb");

router.route("/pantry")
.post(pantryController.create)

router.route("/pantry/:ingId")
.delete(pantryController.remove)

router.route("/pantry/:userid")
  .get(pantryController.findAll)
  .delete(pantryController.removeAll)

  module.exports = router;