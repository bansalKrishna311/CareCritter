const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const mongoUrl = require("./keys");

mongoose.connect(mongoUrl);

mongoose.connection.on("connect", () => {
  console.log("Successfully Connected to mongo");
});

mongoose.connection.on("error ", () => {
    console.log("not connected to mongodb");
  });
  




app.listen(port, () => console.log("Server is running on port" + " " + port));
