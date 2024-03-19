/*
@description - Modele traitant les liaisons avec la base de donnees concernant les utilisateurs.
@authors : 
Eric Girard
Julien Demogue
*/

import sql from "../data/Connection.js";

/*
@description - Renvoie un utilisateur a partir d'un ID
@param {string} identifiant - le login de l'utilisateur
@param {string} mdp - le mot de passe de l'utilisateur
@return {Object} result - Le utilisateur correspondant
*/
export function getUnUtilisateur(identifiant,mdp,res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM utilisateurs WHERE identifiant = '${identifiant}' AND mdp = '${mdp}'`, (err, result) =>{
        // Cas d'erreur dans l'execution de la requete
        if (err) {
            console.log("erreur dans la requete : ", err);
            res(err,null);
            return;
        }
        // Si aucun resultat n'est trouve
        else if (result.length === 0) {
            console.log("Le utilisateur n'existe pas");
            res(err,null);
            return;
        }
        else{
        // Renvoyer le utilisateur correspondant
        res(null,result);}
    })
}
