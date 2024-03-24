/*
@description - Controlleur de la methode getToutesLesSections
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/getToutesLesSections
*/

import {getToutesLesSections} from "../models/Sections.model.js";

export default (req,res) =>{
  getToutesLesSections( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans la recuperation des sections."
      });
    else res.send(data);
  });
};