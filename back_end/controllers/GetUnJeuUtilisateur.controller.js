/*
@description - Controlleur de la methode getUnJeuUtilisateur
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetUnJeuUtilisateur/1
*/

import {getUnJeuUtilisateur} from "../models/Jeux.model.js";

export default (req, res) => {
    getUnJeuUtilisateur(req.params.idUtilisateur, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err || "Problemes dans la recuperation du jeu."
            });
        else res.send(data);
    });
}