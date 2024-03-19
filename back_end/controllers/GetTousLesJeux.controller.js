/*
@description - Controlleur de la methode getTousLesJeux
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetTousLesJeux
*/

import {getTousLesJeux} from "../models/Jeux.model.js";

export default (req,res) =>{
  getTousLesJeux( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans la recuperation des jeux."
      });
    else res.send(data);
  });
};