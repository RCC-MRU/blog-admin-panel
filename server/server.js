const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// For Environment variables
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Calling database and authenticate
const db = require("./database/db");
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MYSQL database connected");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});