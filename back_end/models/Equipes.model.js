import sql from "../data/Connection.js";
import Equipe from "../classes/Equipe.class.js";

export function getToutesLesEquipes() {
    sql.query(`SELECT * FROM equipes`, (err, result) => {
        if (err) {
          console.log("error: ", err);
        }
        else{
          var listFinal = [];
          console.log("found tutorial: ", result);
          result.forEach(element => {
            var equipe=new Equipe();
            equipe.id = element[0];
            equipe.nom = element[1];
            equipe.score = element[2];
          });
        }
      });
};