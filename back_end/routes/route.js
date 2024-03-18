import equipes from "../controllers/equipes.controller.js";
import express from "express";

export default app => {
    var router = express.Router();

    router.get("/equipes", equipes.recupToutesLesEquipes);

    app.use('/api', router);

};