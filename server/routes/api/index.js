const router = require("express").Router();
const recipeRoutes = require("./recipeRoutes");
const pantryRoutes = require("./pantryRoutes");
const userRoutes = require("./userRoutes");

router.use("/recipeRoutes", recipeRoutes);
router.use("/pantryRoutes", pantryRoutes);
router.use("/userRoutes", userRoutes);
module.exports = router;