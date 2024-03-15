module.exports = app => {
    const equpies = require("../controllers/equipes.controller.js");
  
    var router = require("express").Router();

    
    router.get("/", equpies.getToutesLesEquipes);

    app.use('/api/equipes', router);

};