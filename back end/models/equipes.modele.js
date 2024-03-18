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
    
          console.log("found tutorial: ", res);
          result(null, res);
          return;
        
      });
};