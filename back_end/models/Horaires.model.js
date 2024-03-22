/*
@description - Modele traitant les liaisons avec la base de donnees concernant les horaires.
@authors : 
Eric Girard
Julien Demogue
*/

import sql from "../data/Connection.js";

/*
@description - Renvoie toute les horaires de la table d'horaires
@return {Array} result - Les horaires de la table d'horaires
*/
export function getToutesLesHoraires(res) {
  // Execute la requete SQL
  sql.query(`SELECT heure FROM horaires`, (err, result) =>{
      // Cas d'erreur dans l'execution de la requete
      if (err) {
          let msg = "erreur dans la requete : " +  err;
          res(msg,null);
          return;
      }
      else{
      // Renvoyer l'equipe' a l'id correspondant
      res(null,result);}
  })
}