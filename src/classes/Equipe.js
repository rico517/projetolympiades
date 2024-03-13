/*
Autheur : Eric Girard
*/

export class Equipe {
    constructor(nom, score, couleur, id) {
        this._couleur = couleur;
        this._nom = nom;
        this._score = score;
        this.id = id
    }

    // Getter pour la couleur
    get couleur() {
        return this._couleur;
    }

    // Setter pour la couleur
    set couleur(nouvelleCouleur) {
        this._couleur = nouvelleCouleur;
    }

    // Getter pour le nom
    get nom() {
        return this._nom;
    }

    // Setter pour le nom
    set nom(nouveauNom) {
        this._nom = nouveauNom;
    }

    // Getter pour le score total
    get score() {
        return this._score;
    }

    // Setter pour le score total
    set score(nouveauScore) {
        this._score = nouveauScore;
    }

    // Getter pour l'id
    get id() {
        return this._id;
    }

    // Setter pour l'id
    set id(nouveauId) {
        this._id = nouveauId;
    }
}