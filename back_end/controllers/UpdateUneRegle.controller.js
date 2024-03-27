/*
@description - Controlleur de la methode updateUneRegle
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetUneRegle/1
*/

import {updateUneRegle} from "../models/Regles.model.js";

export default (req, res) => {
    updateUneRegle(req.params.id,req.params.newRegle, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err || "Problemes dans la modification d'une regle."
            });
        else res.send(data);
    });
}