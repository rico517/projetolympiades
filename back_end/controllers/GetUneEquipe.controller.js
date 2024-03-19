/*
@description - Controlleur de la methode getUneEquipe
@authors : 
Eric Girard
Julien Demogue
*/

import {getUneEquipe} from "../models/Equipes.model.js";

export default (req,res) =>{
  getUneEquipe(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Problemes dans la recuperation de l'equipe."
      });
    else res.send(data);
  });
};