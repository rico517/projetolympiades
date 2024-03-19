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
    sql.query(`SELECT plannings.*,horaires.heure FROM plannings JOIN horaires ON horaires.id = plannings.idHoraire WHERE plannings.id = ${id}`, (err, result) =>{
        // Cas d'erreur dans l'execution de la requete
        if (err) {
            let msg = "erreur dans la requete : " +  err;
            res(msg,null);
            return;
        }
        // Si aucun resultat n'est trouve
        else if (result.length === 0) {
            let msg = "Le planning d'id " + id + " n'existe pas";
            res(msg,null);
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
    sql.query(`SELECT plannings.*,horaires.heure FROM plannings JOIN horaires ON horaires.id = plannings.idHoraire`, (err, result) => {
        // Cas d'erreur dans l'execution de la requete
        if(err) {
            let msg = "erreur dans la requete : " +  err;
            res(msg,null);
            return;
        }
        else{
            // Renvoyer l'ensemble des plannings de la base de donnees
            res(null,result);
        }
    })
}

/*
@description - Renvoie l'ensemble des plannings de la base de donnees
@param {number} idJeu - L'ID du jeu dont on veut obtenir le planning
@return {Array} result - L'ensemble des plannings associes a un jeu
*/
export function getPlanningDeJeu(idJeu,res) {
    // Execute la requete SQL
    sql.query(`SELECT plannings.*,horaires.heure FROM plannings JOIN horaires ON horaires.id = plannings.idHoraire WHERE plannings.idJeu = ${idJeu}`, (err, result) => {
        // Cas d'erreur dans l'execution de la requete
        if(err) {
            let msg = "erreur dans la requete : " +  err;
            res(msg,null);
            return;
        }
        else if(result.length === 0){
            let msg = "Aucun planning n'est associee au jeu d'id " + idJeu;
            res(msg,null);
        }
        else{
            // Renvoyer l'ensemble des plannings de la base de donnees
            res(null,result);
        }
    })
}
