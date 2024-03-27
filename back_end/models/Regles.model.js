/*
@description - Modele traitant les liaisons avec le fichier json contenant les regles.
@authors : 
Julien Demogue
*/

import fs from 'fs';
const fichierJson = './regles/regles-jeux.json'

/*
 @description - Renvoie les regles d'un jeu
 @return {String} regle - Les regles du jeu
 @param {Number} id - L'id du jeu concerne
*/
export function getUneRegle(id,res){
    try{
        // Lire le fichier json
        const jsonData = fs.readFileSync(fichierJson, 'utf8');
        const regles = JSON.parse(jsonData);

        // Retourne la règle du jeu avec l'id spécifié
        res(null,regles[id]); 
    }
    catch(err){
        let msg = "erreur dans la recuperation d'une regle : " +  err;
        res(msg,null);
    }
}

/*
 @description - Modifie les regles d'un jeu
 @param {Number} id - L'id du jeu concerne
 @param {String} newRegle - Les nouvelles regles du jeu
*/
export function updateUneRegle(id,newRegle,res){
    try {
        // Lire le fichier json
        const jsonData = fs.readFileSync(fichierJson, 'utf8');
        const regles = JSON.parse(jsonData);

        // Mettre a jour la regle
        regles[id] = newRegle;

        // Ecrire le fichier json
        fs.writeFileSync(fichierJson, JSON.stringify(regles, null, 2));
        res(null,"OK");
    } 
    catch (err) {
        let msg = "erreur dans la modification d'une regle : " +  err;
        res(msg,null);
    }
}