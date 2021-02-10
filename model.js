const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let fanSchema = new Schema({  name: {    type: String  },  email: {    type: String  }});
const Fan = mongoose.model("Fan", fanSchema);
module.exports = Fan;