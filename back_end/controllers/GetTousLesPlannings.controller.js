/*
@description - Controlleur de la methode getTousLesPlannings
@authors : 
Eric Girard
Julien Demogue
*/

import {getTousLesPlannings} from "../models/Planning.model.js";

export default (req,res) =>{
  getTousLesPlannings( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Problemes dans la recuperation des plannings."
      });
    else res.send(data);
  });
};