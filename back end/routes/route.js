module.exports = app => {
    const equpies = require("../controllers/equipes.controller.js");
  
    var router = require("express").Router();

    
    router.get("/equipes", equpies.recupToutesLesEquipes);

    app.use('/api', router);

};