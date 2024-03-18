import {equipes} from "../controllers/equipes";
import {express} from "express";

export default app => {
    var router = express.Router();

    router.get("/equipes", equipes.recupToutesLesEquipes);

    app.use('/api', router);

};