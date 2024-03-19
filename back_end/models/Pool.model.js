/*
@description - Modele traitant les liaisons avec la base de donnees concernant les pool.
@authors : 
Eric Girard
Julien Demogue
*/

import sql from "../data/Connection.js";

/*
@description - Renvoie les id d'equipes asssociees a un planning
@param {number} idPlanning - L'ID du planning concerne
@return {Array} result - Les id d'equipes associees a un planning
*/
export function getEquipesPlanning(idPlanning,res) {
    // Execute la requete SQL
    sql.query(`SELECT equipes.* FROM pool JOIN equipes ON equipes.id = pool.idEquipe WHERE idPlanning = ${idPlanning}`, (err, result) =>{
        // Cas d'erreur dans l'execution de la requete
        if (err) {
            let msg = "erreur dans la requete : " +  err;
            res(msg,null);
            return;
        }
        // Si aucun resultat n'est trouve
        else if (result.length === 0) {
            let msg = "Aucune equipe associee au planning d'id " + idPlanning;
            res(msg,null);
            return;
        }
        else{
            // Renvoyer les id d'equipes associees au planning
            res(null,result);
        }
    })
}