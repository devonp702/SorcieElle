const db = require("../models");

// Defining methods for the fanController
module.exports = {
  create: function(req, res) {
    db.Fan
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
