/*
@description - Controlleur de la methode getTouteLesSections
@authors : 
Eric Girard
Julien Demogue
*/

import {getTouteLesSections} from "../models/Sections.model.js";

export default (req,res) =>{
  getTouteLesSections( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Problemes dans la recuperation des sections."
      });
    else res.send(data);
  });
};