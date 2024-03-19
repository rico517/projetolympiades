/*
@description - Controlleur de la methode getUnUtilisateur
@authors : 
Eric Girard
Julien Demogue
*/

import {getUnUtilisateur} from "../models/Utilisateurs.model.js";

export default (req, res) => {
    getUnUtilisateur(req.params.identifiant,req.params.mdp, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Problemes dans la recuperation d'un utilisateur."
            });
        else res.send(data);
    });
}