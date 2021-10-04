const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection using MongoDB is successfully."))
  .catch((err) => console.log("Error", err));

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend server is started on port 8800.");
});
