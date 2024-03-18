/*
description : Modele traitant les liaisons avec la base de donees concernant les jeux.
auteur : Julien Demogue
*/

import sql from "../data/Connection.js";
import Jeu from '../classes/Jeu.class.js';

/*
Renvoie un jeu a partir d'un ID
@param {number} id - L'ID du jeu a retourner
@return {Jeu} - Le jeu correspondant à l'ID
*/
export function getUnJeu(id,res) {
    // Execute la requete SQL
    sql.query(`SELECT * FROM jeux WHERE id = ${id}`, (err, result) =>{
        // Cas d'erreur dans l'execution de la requete
        if (err) {
            console.log("erreur dans la requete : ", err);
            res(null,err);
            return;
        }
        // Si aucun resultat n'est trouve
        else if (result.length === 0) {
            console.log("Le jeu d'id " + id + " n'existe pas");
            //res (null);
        }
        else{
        // Si un resultat est trouve, envoyer un objet de type Jeu avec les parametres du resultat
        res(null,result);}
    })
}
