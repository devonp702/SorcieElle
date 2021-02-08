const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;
const bodyParser = require("body-parser");
const router = express.Router();
const mongoose = require("mongoose");
const entryController = require("./controllers/entryController");
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.post('/', function (req, res) {
  res.post(entryController.create);
})

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