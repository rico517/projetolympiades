/*
@description - Gere les chemins d'execution des methodes de l'api
@authors : 
Eric Girard
Julien Demogue
*/
import express from "express";

import GetUneEquipe from "../controllers/GetUneEquipe.controller.js";
import GetTouteLesEquipes from "../controllers/GetToutesLesEquipes.controller.js";

import GetUnJeu from "../controllers/GetUnJeu.controller.js";
import GetTousLesJeux from "../controllers/GetTousLesJeux.controller.js";

import GetUnPlanning from "../controllers/GetUnPlanning.controller.js";
import GetTousLesPlannings from "../controllers/GetTousLesPlannings.controller.js";

import GetUneSection from "../controllers/GetUneSection.controller.js";
import GetTouteLesSections from "../controllers/GetTouteLesSections.controller.js";

import GetUnUtilisateur from "../controllers/GetUnUtilisateur.controller.js";

import GetEquipesPlanning from "../controllers/GetEquipesPlanning.controller.js";

// Initialisation du router
const router = express.Router();

// Routes concernant les equipes
router.get("/GetUneEquipe/:id", GetUneEquipe);
router.get("/GetTouteLesEquipes", GetTouteLesEquipes);

// Routes concernant les jeux
router.get("/GetUnJeu/:id", GetUnJeu);
router.get("/GetTousLesJeux", GetTousLesJeux);

// Routes concernant les plannings
router.get("/GetUnPlanning/:id", GetUnPlanning);
router.get("/GetTousLesPlannings", GetTousLesPlannings);

// Routes concernant les sections
router.get("/GetUneSection/:id", GetUneSection);
router.get("/GetTouteLesSections", GetTouteLesSections);

// Routes concernant les utilisateurs
router.get("/GetUnUtilisateur/:identifiant/:mdp", GetUnUtilisateur);

// Routes concernant le pool 
router.get("/GetEquipesPlanning/:id", GetEquipesPlanning);

// Exportation du router
export default router;