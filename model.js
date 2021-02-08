const mongoose = require("mongoose");const Schema = mongoose.Schema;
let fanSchema = new Schema({  name: {    type: String  },  email: {    type: String  }});
const fan = mongoose.model("fan", fanSchema);
module.exports = fan;