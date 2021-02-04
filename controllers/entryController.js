const db = require("../model.js");

// Defining methods for the entryController
module.exports = {
  create: function(req, res) {
    db.fan
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
