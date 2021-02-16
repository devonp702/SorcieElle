const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fanSchema = new Schema({
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

const Fan = mongoose.model("Fan", fanSchema);

module.exports = Fan;