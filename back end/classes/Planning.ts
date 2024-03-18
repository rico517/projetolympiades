/*
Autheur : Julien Demogue
*/
import {Jeu} from './jeu';

export class Planning{
    _id : number;
    _horaire: string;
    _jeu: Jeu;

    // Constructeur de la classe
    constructor(id:number,horaire:string,jeu:Jeu){
        this._id = id;
        this._horaire = horaire;
        this._jeu = jeu;
    }

    // Recuperer l'id
    get id(){return this.id;}
    // Modifier l'id
    set id(nouveauId:number){this.id = nouveauId;}

    // Recuperer l'horaire
    get horaire(){return this.horaire;}
    // Modifier l'horaire
    set horaire(nouveauHoraire:string){this.horaire = nouveauHoraire;}

    // Recuperer le jeu associe
    get jeu(){return this.jeu;}
    // Modifier le jeu associe
    set jeu(nouveauJeu:Jeu){this.jeu = nouveauJeu;}
}