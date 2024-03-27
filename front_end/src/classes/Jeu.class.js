/*
Autheur : Eric Girard
*/

export default class Jeu {
    constructor(id, libelle, regles, nbPoints, typeJeu, idUtilisateur) {
        this._id = id;
        this._libelle = libelle;
        this._regles = regles;
        this._nbPoints = nbPoints;
        this._typeJeu = typeJeu;
        this._idUtilisateur = idUtilisateur;
    }

    // Getter pour l'ID
    get id() {
        return this._id;
    }

    // Setter pour l'ID
    set id(nouvelId) {
        this._id = nouvelId;
    }

    // Getter pour le libellé
    get libelle() {
        return this._libelle;
    }

    // Setter pour le libellé
    set libelle(nouveauLibelle) {
        this._libelle = nouveauLibelle;
    }

    // Getter pour les règles
    get regles() {
        return this._regles;
    }

    // Setter pour les règles
    set regles(nouvellesRegles) {
        this._regles = nouvellesRegles;
    }

    // Getter pour le nombre de points
    get nbPoints() {
        return this._nbPoints;
    }

    // Setter pour le nombre de points
    set nbPoints(nouveauNbPoints) {
        this._nbPoints = nouveauNbPoints;
    }

    // Getter pour le type de jeu
    get typeJeu() {
        return this._typeJeu;
    }

    // Setter pour le type de jeu
    set typeJeu(nouveauTypeJeu) {
        this._typeJeu = nouveauTypeJeu;
    }

    // Getter pour l'id utilisateur'
    get idUtilisateur() {
        return this._idUtilisateur;
    }

    // Setter pour l'id utilisateur
    set idUtilisateur(nouvelIdUtilisateur) { 
        this._idUtilisateur = nouvelIdUtilisateur;
    }
}