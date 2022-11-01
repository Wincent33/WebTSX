const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "SharkFangs8899",
  database: "webtsx",
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// con.connect(function (err) {
//   if (err) {throw err}
//   else
//   {console.log("Connection Successful!");}
// });

// con.connect(function (err) {
//   if (err) throw err
//   console.log("Connection Successful!");
// });
app.post("/api/signin/post", (req, res) => {
  const { email, user_name, password } = req.body;
  const sqlInsert =
    "INSERT INTO user (email, user_name, password) VALUES (?, ?, ?)";
  db.query(sqlInsert, [email, password, user_name], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
});
app.get("/api/signin/get", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const user_name = req.body.user_name;
  const password = req.body.password;

  const query = "SELECT * from `user`";

  db.query(query, [email, user_name, password], (err, result) => {
    console.log(err, result);
    if (err) {
      res.send(err);
    } else {
      console.log("success");
      res.send(result);
    }
    // console.log(err);
    //console.log(result)
  });
});
// app.post("/api/signin/post", (req, res) => {
//   console.log(req.body);
//   const email = req.body.email;
//   const user_name = req.body.user_name;
//   const password = req.body.password;

//   const query =
//     "INSERT INTO `user` (`email`, `user_name`, `password`) VALUES ('wincent, 'asddcsa', 'fdanlj');";

//   con.query(query, [email, user_name, password], (err, result) => {
//     console.log(err, result);
//     if (err) {
//       res.send(err);
//     } else {
//       console.log("success");
//       res.send("successfully added to db");
//     }
//     // console.log(err);
//     //console.log(result)
//   });
// });

app.get("/", (req, res) => {
  console.log("Responding to root route");
  res.send("Hello");
});

// app.post("/api/login", (req, res) => {
//   console.log(req.body);
// });
app.get("/test", (req, res) => {
  res.send("Server is Healthy!");
});
// app.get("/api/signin/get", (req, res) => {
//   const sqlSelect = "SELECT * FROM user";
//   db.query(sqlSelect, (err, result) => {
//     console.log(result);
//   });
// });
