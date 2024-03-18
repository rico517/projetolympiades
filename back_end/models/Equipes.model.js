import sql from "../data/Connection.js";
import { Equipe } from "../classes/Equipe.js";

export function getToutesLesEquipes() {
    sql.query(`SELECT * FROM equipes`, (err, result) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
          console.log("found tutorial: ", result);
          
          
        
      });
};