/*
@description - Controlleur de la methode getUnJeu
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetUnJeu/1
*/

import {getUnJeu} from "../models/Jeux.model.js";

export default (req, res) => {
    getUnJeu(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err || "Problemes dans la recuperation du jeu."
            });
        else res.send(data);
    });
}