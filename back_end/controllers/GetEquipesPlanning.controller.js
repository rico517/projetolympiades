/*
@description - Controlleur de la methode getEquipesPlanning
@authors : 
Eric Girard
Julien Demogue
*/

import {getEquipesPlanning} from "../models/Pool.model.js";

export default (req,res) =>{
  getEquipesPlanning(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Problemes dans la recuperation des equipes du planning."
      });
    else res.send(data);
  });
};