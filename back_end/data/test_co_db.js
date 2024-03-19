const express = require('express');
const mysql = require('mysql');

const app = express();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "projetolympiadls"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('select nom from equipes', function (err, result) {
      if (err) throw err;
      console.log("result: " + result);
    });
});
app.use(express.json());

module.exports = app;