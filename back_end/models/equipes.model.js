const sql = require("./connection.js");

//constructor 
<<<<<<< HEAD:back_end/models/equipes.modele.js
// const Equipe = require ("../classes/Equipe.ts");
import { Equipe } from "../classes/Equipe.ts";
// const Equipe = function(equipes){
//   this._id = equipes.id;
//   this._nom = equipes.nom;
//   this._score = equipes.score;
//   this._section = equipes.section;
// }
=======
//const Equipe = require ("../../front end/src/classes/Equipe.ts");
const Equipe = function(equipes){
  this._id = equipes.id;
  this._nom = equipes.nom;
  this._score = equipes.score;
  this._section = equipes.section;
};
>>>>>>> cb37b8725e898c1ad9e6ef9a19f46708b5c97f6e:back_end/models/equipes.model.js

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