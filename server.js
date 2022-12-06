const conn = require("./db");
const express = require("express");
const cors = require('cors');
require('dotenv').config();
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.use("/auth", authRoutes);



app.listen(port, () => {
    console.log("API REST started on port", port);
    console.log("API url:", "http://localhost:" + port)
    conn();
  });