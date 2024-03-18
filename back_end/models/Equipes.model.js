import sql from "../data/Connection.js";
import Equipe from "../classes/Equipe.class.js";

export function getToutesLesEquipes(res) {
    sql.query(`SELECT * FROM equipes`, (err, result) => {
        if (err) {
          console.log("error: ", err);
          res(null,err)
        }
        else{
          
          res(null,result)


        }
      });
};