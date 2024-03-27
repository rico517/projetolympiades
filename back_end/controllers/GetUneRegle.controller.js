/*
@description - Controlleur de la methode getUneRegle
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetUneRegle/1
*/

import {getUneRegle} from "../models/Regles.model.js";

export default (req, res) => {
    getUneRegle(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err || "Problemes dans la recuperation d'une regle."
            });
        else res.send(data);
    });
}