/*
@description - Controlleur de la methode getTouteLesSections
@authors : 
Eric Girard
Julien Demogue

@link - http://localhost:8080/api/GetTouteLesSections
*/

import {getTouteLesSections} from "../models/Sections.model.js";

export default (req,res) =>{
  getTouteLesSections( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err || "Problemes dans la recuperation des sections."
      });
    else res.send(data);
  });
};