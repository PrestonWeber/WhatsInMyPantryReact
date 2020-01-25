const router = require("express").Router();
const userController = require("../../controller/userdb");

router.route("/")
.get(userController.findOne)

router.route("/login")
.get(userController.findOne)

router.route("/signup")
.post(userController.create)

module.exports = router;