/*
@description - Controlleur de la methode getToutesLesEquipes
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetTouteLesEquipes
*/

import {getToutesLesEquipes} from "../models/Equipes.model.js";

export default (req,res) =>{
  getToutesLesEquipes( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans la recuperation des equipes."
      });
    else res.send(data);
  });
};