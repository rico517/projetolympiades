/*
Autheur : Eric Girard
*/

export class Equipe {
    constructor(id, nom, score, section) {
        this._id = id
        this._nom = nom;
        this._score = score;
        this._section = section;
    }

    // Getter pour l'id
    get id() {
        return this._id;
    }

    // Setter pour l'id
    set id(nouveauId) {
        this._id = nouveauId;
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

    // Getter pour la section
    get section() {
        return this._section;
    }

    // Setter pour la section
    set section(nouvelleSection) {
        this._section = nouvelleSection;
    }
}