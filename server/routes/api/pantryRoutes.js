const router = require("express").Router();
const pantryController = require("../../controller/pantrydb");

router.route("/members")
.post(pantryController.create)

router.route("/api/pantryRoutes/pantry/:userid")
  .get(pantryController.findAll)
  // .put(pantryController.update)
  .delete(pantryController.remove);

  module.exports = router;