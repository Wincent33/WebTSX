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
app.use(bodyParser.urlencoded)({ extended: true });

// app.get("/api/get", (req, res) => {
//   // res.json({ users: ["userOne"] });
//   const sqlSelect = "SELECT * FROM tabel_kontak";
// });

app.get("/users", (req, res) => {
  res.send("Users Page");
});

app.listen(port, () => {
  console.log("server started on port 5000");
});

app.post("/api/insert", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const nama = req.body.nama;
  const isiPesan = req.body.isiPesan;

  const query =
    "INSERT INTO `tabel_kontak` (`nama`, `email`, `isiPesan`) VALUES (?, ?, ?);";

  db.query(query, [email, nama, isiPesan], (err, result) => {
    console.log(err, result);
    if (err) {
      res.send(err);
    } else {
      res.send("successfully added to db");
    }
    // console.log(err);
    //console.log(result)
  });
});

app.get("/test", (req, res) => {
  res.send("server is healthy");
});
