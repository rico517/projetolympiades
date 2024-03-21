/*
@description - Controlleur de la methode ajouterScoreEquipe
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/AjouterScoreEquipe/1/2/
*/

import {ajouterScoreEquipe} from "../models/Equipes.model.js";

export default (req,res) =>{
  ajouterScoreEquipe(req.params.id, req.params.nombre, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans l'ajout de score de l'equipe."
      });
    else res.send(data);
  });
};