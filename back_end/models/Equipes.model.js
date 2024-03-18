import sql from "./Connection.js";
import { Equipe } from "../classes/Equipe.js";

export default Equipe.getToutesLesEquipes = (result) => {
    sql.query(`SELECT * FROM equipes`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
          console.log("found tutorial: ", res);
          result(null, res);
          
        
      });
};