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
    
}

/*
 @description - Modifie les regles d'un jeu
 @param {Number} id - L'id du jeu concerne
*/
function updateUneRegle(id){
    
}

export default {
    getUneRegle,
    updateUneRegle
}