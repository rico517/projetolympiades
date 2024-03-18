import express from "express";

import cors from "cors";

import equipes from "./controllers/Equipes.controller.js";
import jeux from "./controllers/Jeux.controllers.js";

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

var router = express.Router();
app.use('/api', router);
router.get("/equipes", equipes);
router.get("/jeux/:id", jeux);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "back-end de projetOlympiaDls" });
});

//import app2 from './routes/route.js';

//app.use(app2);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});