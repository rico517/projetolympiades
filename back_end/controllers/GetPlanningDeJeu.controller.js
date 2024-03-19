/*
@description - Controlleur de la methode getPlanningDeJeu
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetPlanningDeJeu/1
*/

import {getPlanningDeJeu} from "../models/Planning.model.js";

export default (req,res) =>{
  getPlanningDeJeu(req.params.idJeu, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans la recuperation des plannings."
      });
    else res.send(data);
  });
};