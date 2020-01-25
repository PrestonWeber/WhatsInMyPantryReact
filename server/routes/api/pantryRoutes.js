const router = require("express").Router();
const pantryController = require("../../controller/pantrydb");

router.route("/members")
  .get(pantryController.findAll)
  .post(pantryController.create)
  .delete(pantryController.remove);

  module.exports = router;