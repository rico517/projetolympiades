import mysql from 'mysql';

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
      console.log("Result: " + result);
    });
});


