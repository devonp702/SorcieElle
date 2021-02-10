const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FanSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  }
});

const Fan = mongoose.model("Fan", FanSchema);

module.exports = Fan;