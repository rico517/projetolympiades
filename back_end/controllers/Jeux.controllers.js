import {getUnJeu} from "../models/Jeu.model.js";

export default (req, res) => {
    getUnJeu((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Problemes dans la recuperation du jeu."
            });
        else res.send(data);
    });
}