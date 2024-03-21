/*
@description - Controlleur de la methode ajouterScoreSection
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/AjouterScoreSection/1/2/
*/

import {ajouterScoreSection} from "../models/Sections.model.js";

export default (req,res) =>{
  ajouterScoreSection(req.params.id, req.params.nombre, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans l'ajout de score de la section."
      });
    else res.send(data);
  });
};