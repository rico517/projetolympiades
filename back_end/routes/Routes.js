import express from "express";
import equipes from "../controllers/Equipes.controller.js";
import jeux from "../controllers/Jeux.controller.js";

const router = express.Router();

router.get("/equipes", equipes);
router.get("/jeux/:id", jeux);

export default router;