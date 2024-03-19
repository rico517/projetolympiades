/*
@description - Controlleur de la methode getUnPlanning
@authors : 
Eric Girard
Julien Demogue
*/

import {getUnPlanning} from "../models/Planning.model.js";

export default (req,res) =>{
  getUnPlanning(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Problemes dans la recuperation d'un planning."
      });
    else res.send(data);
  });
};