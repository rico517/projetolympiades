/*
@description - Controlleur de la methode getUnPlanning
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetUnPlanning/1
*/

import {getUnPlanning} from "../models/Planning.model.js";

export default (req,res) =>{
  getUnPlanning(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans la recuperation d'un planning."
      });
    else res.send(data);
  });
};