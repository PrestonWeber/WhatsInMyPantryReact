const router = require("express").Router();
const pantryController = require("../../controller/pantrydb");

router.route("/pantry")
.post(pantryController.create)

<<<<<<< HEAD
router.route("/pantry/:ingId")
.delete(pantryController.remove)

router.route("/pantry/:userid")
  .get(pantryController.findAll)
  .delete(pantryController.removeAll)
=======
router.route("/pantry/:useremail")
  .get(pantryController.findAll)
  .delete(pantryController.remove);
>>>>>>> 88d2df3f96626dfbd81c46e9741c07edf10ae375

  module.exports = router;