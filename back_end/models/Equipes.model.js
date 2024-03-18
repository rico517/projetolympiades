import sql from "../data/Connection.js";
import { Equipe } from "../classes/Equipe.js";

export function getToutesLesEquipes() {
    sql.query(`SELECT * FROM equipes`, (err, result) => {
        if (err) {
          console.log("error: ", err);
        }
        else{
          var listFinal = [];
          //console.log("found tutorial: ", result);
          result.forEach(element => {
            var equipe=new Equipe();
            equipe.setId(element[0]);
            equipe.setNom(element[1])
            equipe.setScore(element[2])
          });



        }
      });
};