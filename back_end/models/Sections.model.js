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
export function getTouteLesSections(res) {
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
