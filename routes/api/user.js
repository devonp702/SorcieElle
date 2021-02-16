const router = require("express").Router();
const fanController = require("../../controllers/fanController");
// Matches with "/api/user"
router.route("/")
  .post(fanController.create);
  
module.exports = router;