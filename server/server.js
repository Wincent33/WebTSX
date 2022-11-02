const express = require("express");
const cors = require("cors");

<<<<<<< HEAD
const app = express();




var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
=======
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
>>>>>>> 7927c53e8fb9045b5afcd79d2a0bdd0716ca2cc0
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//
const db = require("./Models/index.js");
db.sequelize.sync();
//
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
<<<<<<< HEAD
//
// simple route
app.get("/", (req, res) =>   {
  res.json({ message: "Welcome Nigger!" });
=======

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
>>>>>>> 7927c53e8fb9045b5afcd79d2a0bdd0716ca2cc0
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

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

