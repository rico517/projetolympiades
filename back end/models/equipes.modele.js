const sql = require("./connection.js");

//constructor 
//const Equipe = require ("../../front end/src/classes/Equipe.ts");
const Equipe = function(equipes){
  this._id = equipes.id;
  this._nom = equipes.nom;
  this._score = equipes.score;
  this._section = equipes.section;
}

Equipe.getToutesLesEquipes = (result) => {
    sql.query(`SELECT * FROM equipes`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) {
          console.log("found tutorial: ", res[0]);
          result(null, res[0]);
          return;
        }
    
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
      });
};