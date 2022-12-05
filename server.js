const conn = require("./db");
const express = require("express");
require('dotenv').config();
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const app = express();


app.use(express.json())
app.use(cookieParser())


app.use("/auth", authRoutes);



app.listen(4000, () => {
    console.log("API REST started ...");
    conn();
  });