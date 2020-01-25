const router = require("express").Router();
const pantryController = require("../../controller/pantrydb");

router.route("/")
  .get(pantryController.getUser);

// Matches with "/api/books"
router.route("/signup")
  .post(pantryController.createUser);
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/login")
  .post(pantryController.loginUser);
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;