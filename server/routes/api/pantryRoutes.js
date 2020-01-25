const router = require("express").Router();
const pantryController = require("../../controller/pantrydb");

router.route("/members")
<<<<<<< HEAD
.post(pantryController.create)

router.route("/members/:userid")
  .get(pantryController.findAll)
=======
  .post(pantryController.create);

router.route("/members/:userid")
  .get(pantryController.findAll)
  .put(pantryController.update)
>>>>>>> 77f328f735e55148374dc1cb8eb32a6131d74a2a
  .delete(pantryController.remove);

  module.exports = router;