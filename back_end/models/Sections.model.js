/*
@description - Modele traitant les liaisons avec la base de donnees concernant les sections.
@authors : 
Eric Girard
Julien Demogue
*/

import sql from "../data/Connection.js";

/*
@description - Renvoie une section a partir d'un ID
@param {number} id - L'ID de la section a retourner
@return {Object} result - La section correspondant à l'ID
*/
export function getUneSection(id,res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM sections WHERE id = ${id}`, (err, result) =>{
        // Cas d'erreur dans l'execution de la requete
        if (err) {
            let msg = "erreur dans la requete : " +  err;
            res(msg,null);
            return;
        }
        // Si aucun resultat n'est trouve
        else if (result.length === 0) {
            let msg = "La section d'id " + id + " n'existe pas";
            res(msg,null);
            return;
        }
        else{
            // Renvoyer la section a l'id correspondant
            res(null,result);
        }
    })
}

/*
@description - Renvoie l'ensemble des sections de la base de donnees
@return {Array} result - L'ensemble des sections de la base de donnees
*/
export function getToutesLesSections(res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM sections`, (err, result) => {
        // Cas d'erreur dans l'execution de la requete
        if(err) {
            let msg = "erreur dans la requete : " +  err;
            res(msg,null);
            return;
        }
        else{
            // Renvoyer l'ensemble des sections de la base de donnees
            res(null,result);
        }
    })
}

/*
@description - Permet d'ajouter des points au score d'une section
@param {number} id - L'ID de la section a retourner
@param {number} nombre - Le nombre de points a ajouter
@return {String} result - ok si l'ajout a fonctionne
*/
export function ajouterScoreSection(id,nombre,res) {
    // Execute la requete SQL
    sql.query(`UPDATE sections SET scoreTotal = scoreTotal + ${nombre} WHERE id = ${id}`, (err, result) => {
      // Cas d'erreur dans l'execution de la requete
      if (err) {
        let msg = "erreur dans la requete : " +  err;
        res(msg,null);
        return;
      }
      // Si aucun resultat n'est trouve
      else if (result.affectedRows === 0) {
        let msg = "La section d'id " + id + " n'existe pas";
        res(msg, null);
        return;
      }
      // Renvoyer le resultat de la requete
      else{
        let msg = "ok";
        res(null,msg);
      }
    });
  }
