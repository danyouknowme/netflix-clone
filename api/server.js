const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection using MongoDB is successfully."))
  .catch((err) => console.log("Error", err));

app.listen(8800, () => {
  console.log("Backend server is started on port 8800.");
});
