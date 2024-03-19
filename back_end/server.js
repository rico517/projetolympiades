import express from "express";
import router from "./routes/Routes.js";
import cors from "cors";

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Parser les donnees recues en JSON
app.use(express.json());

// Formatage des donnees recues en JSON
app.set('json spaces', 2)

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Utiliser le router
app.use('/api', router);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "back-end de projetOlympiaDls" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});