const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

mongoose.connect="mongodb+srv://CareCritter:<password>@carecritter.9unm2ks.mongodb.net/?retryWrites=true&w=majority"

app.listen(port, () => console.log("Server is running on port" + " " + port));
