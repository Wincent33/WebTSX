var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SharkFangs8899",
});

con.connect(function (err) {
  if (err) {throw err}
  else{console.log("Connection Successful!");}
  
});
