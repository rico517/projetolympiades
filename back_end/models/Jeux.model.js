/*
@description - Modele traitant les liaisons avec la base de donnees concernant les jeux.
@authors : 
Eric Girard
Julien Demogue
*/

import sql from "../data/Connection.js";

/*
@description - Renvoie un jeu a partir d'un ID
@param {number} id - L'ID du jeu a retourner
@return {Object} result - Le jeu correspondant à l'ID
*/
export function getUnJeu(id,res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM jeux WHERE id = ${id}`, (err, result) =>{
        // Cas d'erreur dans l'execution de la requete
        if (err) {
            let msg = "erreur dans la requete : " +  err;
            res(msg,null);
            return;
        }
        // Si aucun resultat n'est trouve
        else if (result.length === 0) {
            let msg = "Le jeu d'id " + id + " n'existe pas";
            res(msg,null);
            return;
        }
        else{
        // Renvoyer le jeu a l'id correspondant
        res(null,result);}
    })
}

/*
@description - Renvoie un jeu a partir d'un ID utilisateur
@param {number} id - L'ID de l'utilisateur associé au jeu a retourner
@return {Object} result - Le jeu correspondant à l'ID utilisateur
*/
export function getUnJeuUtilisateur(idUtilisateur,res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM jeux WHERE idUtilisateur = ${idUtilisateur}`, (err, result) =>{
        // Cas d'erreur dans l'execution de la requete
        if (err) {
            let msg = "erreur dans la requete : " +  err;
            res(msg,null);
            return;
        }
        // Si aucun resultat n'est trouve
        else if (result.length === 0) {
            let msg = "Le jeu associe a l'utilisateur d'id " + idUtilisateur + " n'existe pas";
            res(msg,null);
            return;
        }
        else{
        // Renvoyer le jeu a l'id correspondant
        res(null,result);}
    })
}

/*
@description - Renvoie l'ensemble des jeux de la base de donnees
@return {Array} result - L'ensemble des jeux de la base de donnees
*/
export function getTousLesJeux(res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM jeux`, (err, result) => {
        // Cas d'erreur dans l'execution de la requete
        if(err) {
            let msg = "erreur dans la requete : " +  err;
            res(msg,null);
            return;
        }
        else{
            // Renvoyer l'ensemble des jeux de la base de donnees
            res(null,result);
        }
    })
}
