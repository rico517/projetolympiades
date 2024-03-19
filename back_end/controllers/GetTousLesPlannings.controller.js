/*
@description - Controlleur de la methode getTousLesPlannings
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetTousLesPlannings
*/

import {getTousLesPlannings} from "../models/Planning.model.js";

export default (req,res) =>{
  getTousLesPlannings( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans la recuperation des plannings."
      });
    else res.send(data);
  });
};