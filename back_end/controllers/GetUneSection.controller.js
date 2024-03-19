/*
@description - Controlleur de la methode getUneSection
@authors : 
Eric Girard
Julien Demogue
*/

import {getUneSection} from "../models/Sections.model.js";

export default (req,res) =>{
  getUneSection(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Problemes dans la recuperation de la section."
      });
    else res.send(data);
  });
};