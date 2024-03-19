/*
@description - Controlleur de la methode getUneEquipe
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetUneEquipe/1
*/

import {getUneEquipe} from "../models/Equipes.model.js";

export default (req,res) =>{
  getUneEquipe(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans la recuperation de l'equipe."
      });
    else res.send(data);
  });
};