const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;
app.use(cors());
app.listen(PORT, function(){
  console.log("This server is chugging along on port:" + PORT);
});