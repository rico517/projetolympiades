/*
@description - Ce script permet de lire et ecrire le fichier json contenant les regles des jeux.
@authors : 
Julien Demogue
*/

import fs from 'fs';
import jeux from './regles-jeux.json';

/*
 @description - Renvoie les regles d'un jeu
 @return {String} regle - Les regles du jeu
 @param {Number} id - L'id du jeu concerne
*/
function getUneRegle(id){
    // Retourner la regle de jeu
    return jeux[id];
}

/*
 @description - Modifie les regles d'un jeu
 @param {Number} id - L'id du jeu concerne
 @param {String} newRegle - Les nouvelles regles du jeu
*/
function updateUneRegle(id,newRegle){
    // Actualiser la regle du jeu
    jeux[id] = newRegle;

    // Ecrire l'objet JavaScript dans le fichier JSON
    fs.writeFile('./regles-jeux.json', JSON.stringify(clients, null, 2), err => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

export default {
    getUneRegle,
    updateUneRegle
}