const express = require("express");
const app = express();const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

mongoose.set("strictQuery",true)
app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGO_URL);
console.log("db connected");
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials","true")
  res.send("hello ");
});

const userRoutes = require("./routes/user.router");
app.use("/users", userRoutes);
const visitRoutes = require("./routes/visit.router");
app.use("/visit", visitRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app listening on port${process.env.PORT}`);
});
