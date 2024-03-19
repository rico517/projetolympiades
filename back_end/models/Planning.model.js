/*
@description - Modele traitant les liaisons avec la base de donnees concernant le planning.
@authors : 
Eric Girard
Julien Demogue
*/

import sql from "../data/Connection.js";

/*
@description - Renvoie un planning a partir d'un ID
@param {number} id - L'ID du planning a retourner
@return {Object} result - Le planning correspondant à l'ID
*/
export function getUnPlanning(id,res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM plannings WHERE id = ${id}`, (err, result) =>{
        // Cas d'erreur dans l'execution de la requete
        if (err) {
            console.log("erreur dans la requete : ", err);
            res(err,null);
            return;
        }
        // Si aucun resultat n'est trouve
        else if (result.length === 0) {
            console.log("Le planning d'id " + id + " n'existe pas");
            res(err,null);
            return;
        }
        else{
            // Renvoyer le planning a l'id correspondant
            res(null,result);
        }
    })
}

/*
@description - Renvoie l'ensemble des plannings de la base de donnees
@return {Array} result - L'ensemble des plannings de la base de donnees
*/
export function getTousLesPlannings(res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM plannings`, (err, result) => {
        // Cas d'erreur dans l'execution de la requete
        if(err) {
            console.log("erreur dans la requete : ", err);
            res(err,null);
            return;
        }
        else{
            // Renvoyer l'ensemble des plannings de la base de donnees
            res(null,result);
        }
    })
}
