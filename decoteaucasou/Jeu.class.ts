/*
Autheur : Eric Girard
*/

export default class Jeu {
    _id : number;
    _libelle : string;
    _regles : string;
    _nbPoints : number;
    _typeJeu : string;

    constructor(id:number, libelle:string, regles:string, nbPoints:number, typeJeu:string) {
        this._id = id;
        this._libelle = libelle;
        this._regles = regles;
        this._nbPoints = nbPoints;
        this._typeJeu = typeJeu;
    }

    // Getter pour l'ID
    get id() {
        return this._id;
    }

    // Setter pour l'ID
    set id(nouvelId:number) {
        this._id = nouvelId;
    }

    // Getter pour le libellé
    get libelle() {
        return this._libelle;
    }

    // Setter pour le libellé
    set libelle(nouveauLibelle:string) {
        this._libelle = nouveauLibelle;
    }

    // Getter pour les règles
    get regles() {
        return this._regles;
    }

    // Setter pour les règles
    set regles(nouvellesRegles:string) {
        this._regles = nouvellesRegles;
    }

    // Getter pour le nombre de points
    get nbPoints() {
        return this._nbPoints;
    }

    // Setter pour le nombre de points
    set nbPoints(nouveauNbPoints:number) {
        this._nbPoints = nouveauNbPoints;
    }

    // Getter pour le type de jeu
    get typeJeu() {
        return this._typeJeu;
    }

    // Setter pour le type de jeu
    set typeJeu(nouveauTypeJeu:string) {
        this._typeJeu = nouveauTypeJeu;
    }
}