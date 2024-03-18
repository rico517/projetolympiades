import equipes from "../models/Equipes.model.js";

export default (req,res) =>{

  equipes.getToutesLesEquipes( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Problemes dans la recuperation des equipes."
      });
    else res.send(data);
  });
};