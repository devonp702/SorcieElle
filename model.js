const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let fan = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports = mongoose.model("fan", fan);