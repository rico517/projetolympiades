/*
@description : Modele traitant les liaisons avec la base de donees concernant le planning.
@author : Julien Demogue
*/

import sql from "../data/Connection.js";

/*
@description - Renvoie un planning a partir d'un ID
@param {number} id - L'ID du planning a retourner
@return result - Le planning correspondant à l'ID
*/
export function getUnPlanning(id,res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM planning WHERE id = ${id}`, (err, result) =>{
        // Cas d'erreur dans l'execution de la requete
        if (err) {
            console.log("erreur dans la requete : ", err);
            res(err,null);
            return;
        }
        // Si aucun resultat n'est trouve
        else if (result.length === 0) {
            console.log("Le planning d'id " + id + " n'existe pas");
            return;
        }
        else{
        // Renvoyer le planning a l'id correspondant
        res(null,result);}
    })
}

/*
@description - Renvoie l'ensemble des planning de la base de donnees
@return result - L'ensemble des planning de la base de donnees
*/
export function getTousLesPlanning(res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM planning`, (err, result) => {
        // Cas d'erreur dans l'execution de la requete
        if(err) {
            console.log("erreur dans la requete : ", err);
            res(err,null);
            return;
        }
        else{
            // Renvoyer l'ensemble des planning de la base de donnees
            res(null,result);
        }
    })
}
