/*
@description : Modele traitant les liaisons avec la base de donees concernant les equipes.
@authors : 
Eric Girard
Julien Demogue
*/

import sql from "../data/Connection.js";

/*
@description - Renvoie une equipe a partir d'un ID
@param {number} id - L'ID de l'equipe a retourner
@return result - L'equipe correspondant à l'ID
*/
export function getUneEquipe(id,res) {
  // Execute la requete SQL
  sql.query(`SELECT * FROM equipes WHERE id = ${id}`, (err, result) =>{
      // Cas d'erreur dans l'execution de la requete
      if (err) {
          console.log("erreur dans la requete : ", err);
          res(err,null);
          return;
      }
      // Si aucun resultat n'est trouve
      else if (result.length === 0) {
          console.log("L'equipe d'id " + id + " n'existe pas");
          return;
      }
      else{
      // Renvoyer l'equipe' a l'id correspondant
      res(null,result);}
  })
}

/*
@description - Renvoie l'ensemble des equipes de la base de donnees
@return result - L'ensemble des equipes de la base de donnees
*/
export function getToutesLesEquipes(res) {
  // Execute la requete SQL
  sql.query(`SELECT * FROM equipes`, (err, result) => {
    // Cas d'erreur dans l'execution de la requete
      if (err) {
        console.log("error: ", err);
        res(err,null)
        return;
      }
      // Renvoyer l'ensemble des equipes de la base de donnees
      else{
        res(null,result)
      }
    });
};