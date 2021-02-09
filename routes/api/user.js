const router = require("express").Router();
const entryController = require("../../controllers/entryController");
// Matches with "/api/user"
router.route("/user")
  .get(entryController.findAll)
  .post(entryController.create);
module.exports = router;