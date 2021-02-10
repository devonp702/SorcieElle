const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
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
    if (err) console.log("no database");
    console.log("DB connection established")
}
);
app.listen(PORT, function(){
  console.log("This server is chugging along on port:" + PORT);
});