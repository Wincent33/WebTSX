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
  database: "cribhousingdatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM tabel_kontak";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
  });
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

app.listen(port, () => {
  console.log("server running on port " + port);
});

// app.post("/user/create", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const user_name = req.body.user_name;

//   db.query(
//     "INSERT INTO user (email, password, user_name) VALUES (?,?,?)",
//     [email, password, user_name],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });
