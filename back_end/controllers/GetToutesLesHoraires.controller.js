/*
@description - Controlleur de la methode getToutesLesHoraires
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetToutesLesHoraires/
*/

import {getToutesLesHoraires} from "../models/Horaires.model.js";

export default (req,res) =>{
  getToutesLesHoraires((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans la recuperation des horaires"
      });
    else res.send(data);
  });
};