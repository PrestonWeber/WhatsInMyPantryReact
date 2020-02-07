const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(req, res) {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
=======
    res.sendFile(path.join(__dirname, "../../client/public/index.html"))
>>>>>>> 067893dc717e313a35703e27184ebf36ac0da1eb
});

module.exports = router;