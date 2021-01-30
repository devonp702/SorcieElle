const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;
const router = express.Router();
const mongoose = require("mongoose");
let fan = require("./model");

app.use(cors());

app.use("/", router);

mongoose.connect("mongodb://127.0.0.1:27017/mailList", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.listen(PORT, function(){
  console.log("This server is chugging along on port:" + PORT);
});