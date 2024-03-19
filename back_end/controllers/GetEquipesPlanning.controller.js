/*
@description - Controlleur de la methode getEquipesPlanning
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetEquipesPlanning/1
*/

import {getEquipesPlanning} from "../models/Pool.model.js";

export default (req,res) =>{
  getEquipesPlanning(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans la recuperation des equipes du planning."
      });
    else res.send(data);
  });
};