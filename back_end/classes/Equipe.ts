/*
Autheur : Eric Girard
*/

import { Section } from "./Section";

export class Equipe {
    _id: number;
    _nom: string;
    _score: number;
    _section: Section;

    constructor(id:number, nom:string, score:number, couleur:string, section:Section) {
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
    set id(nouveauId:number) {
        this._id = nouveauId;
    }

    // Getter pour le nom
    get nom() {
        return this._nom;
    }

    // Setter pour le nom
    set nom(nouveauNom:string) {
        this._nom = nouveauNom;
    }

    // Getter pour le score total
    get score() {
        return this._score;
    }

    // Setter pour le score total
    set score(nouveauScore:number) {
        this._score = nouveauScore;
    }

    // Getter pour la section
    get section() {
        return this._section;
    }

    // Setter pour la section
    set section(nouvelleSection:Section) {
        this._section = nouvelleSection;
    }
}