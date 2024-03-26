/*
@description - Ce script permet de lire et ecrire le fichier json contenant les regles des jeux.
@authors : 
Julien Demogue
*/

import fs from 'fs';

const cheminJson = './regles.json';

/*
 @description - Renvoie les regles d'un jeu
 @return {String} regle - Les regles du jeu
 @param {Number} id - L'id du jeu concerne
*/
function getUneRegle(id){
    // Charger le fichier JSON contenant les regles des jeux
    const jsonData = fs.readFileSync(cheminJson, 'utf8');
    const reglesJeux = JSON.parse(jsonData);

    // Parcourir le fichier JSON et rechercher l'objet correspondant a l'ID `id`
    let regle = null;
    for (const idJeu in reglesJeux) {
    if (idJeu === id.toString()) {
        regle = reglesJeux[idJeu];
        break;
    }
    }

    // Si l'objet est trouve, retourner la valeur de la propriete `regles`
    // Sinon, retourner `null`
    return regle;
}

/*
 @description - Modifie les regles d'un jeu
 @param {Number} id - L'id du jeu concerne
*/
function updateUneRegle(id){
    // Charger le fichier JSON contenant les regles des jeux
    const jsonData = fs.readFileSync(reglesJeux, 'utf8');
    const reglesJeux = JSON.parse(jsonData);

    // Parcourir le fichier JSON et rechercher l'objet correspondant a l'ID `id`
    let regleTrouve = false;
    for (const idJeu in reglesJeux) {
        if (idJeu === id.toString()) {
            reglesJeux[idJeu] = nouvellesRegles;
            regleTrouve = true;
            break;
        }
    }

    // Si l'objet est trouve, mettre a jour la valeur de la propriete `regles` avec les nouvelles regles
    // Sinon, ne pas modifier le fichier
    if (regleTrouve) {
        const dataJSON = JSON.stringify(reglesJeux);
        fs.writeFileSync(reglesJeux, dataJSON);
    }
}

export default {
    getUneRegle,
    updateUneRegle
}