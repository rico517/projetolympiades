const equipes = require("../models/equipes.model.js");

exports.recupToutesLesEquipes = (req,res) =>{
    const nom = req.query.nom;

  equipes.getToutesLesEquipes(nom, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Problemes dans la recuperation des equipes."
      });
    else res.send(data);
  });
};