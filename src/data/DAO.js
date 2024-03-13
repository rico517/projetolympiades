// npm install mysql
// doc : https://www.w3schools.com/nodejs/nodejs_mysql.asp

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "olympiades"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("connexion réussie")
});