/*
@description - Controlleur de la methode getUnJeu
@authors : 
Eric Girard
Julien Demogue
*/

import {getUnJeu} from "../models/Jeux.model.js";

export default (req, res) => {
    getUnJeu(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Problemes dans la recuperation du jeu."
            });
        else res.send(data);
    });
}