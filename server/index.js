const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");

const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "SharkFangs8899",
  database: "webtsx",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM user";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/user/create", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const user_name = req.body.user_name;

  const query = "INSERT INTO user (email, password, user_name) VALUES (?,?,?)";

  db.query(query, [email, password, user_name], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  });
});

app.get("/user/get", (req, res) => {
  const query = "SELECT * from user";
  db.query(query, (err, result) => {
    if (err) {
      console.log("error:", err);
      return;
    } else res.send(result);
  });
});

app.get("/test", (req, res) => {
  res.send("server is healthy");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/listing/get", (req, res) => {
  const query = "SELECT * from properti_detail";
});
