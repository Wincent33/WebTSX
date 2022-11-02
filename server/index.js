const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json);
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "SharkFangs8899",
  database: "webtsx",
});

app.post("/user/create", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user_name = req.body.user_name;

  db.query(
    "INSERT INTO user (email, password, user_name) VALUES (?,?,?)",
    [email, password, user_name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.get("/", (request, response) => {
  response.send("Hello World!");
  console.log("nihao");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
