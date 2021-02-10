const db = require("../model.js");

// Defining methods for the fanController
module.exports = {
  findAll: function (req, res) {
    db.Fan
      .find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Fan
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
