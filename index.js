const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
 const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
} 
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/mailList", options, (err)  => { 
    if (err) throw err;
    console.log("DB connection established")
}
);
app.listen(PORT, function(){
  console.log("This server is chugging along on port:" + PORT);
});