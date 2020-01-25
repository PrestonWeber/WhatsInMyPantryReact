const router = require("express").Router();
const recipeRoutes = require("./recipeRoutes");
const pantryRoutes = require("./pantryRoutes");

router.use("/recipeRoutes", recipeRoutes);
router.use("/pantryRoutes", pantryRoutes);

module.exports = router;