/*
Autheur : Julien Demogue
*/
import Jeu from './Jeu.class';

export default class Planning{
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
    get id(){return this._id;}
    // Modifier l'id
    set id(nouveauId:number){this._id = nouveauId;}

    // Recuperer l'horaire
    get horaire(){return this._horaire;}
    // Modifier l'horaire
    set horaire(nouveauHoraire:string){this._horaire = nouveauHoraire;}

    // Recuperer le jeu associe
    get jeu(){return this._jeu;}
    // Modifier le jeu associe
    set jeu(nouveauJeu:Jeu){this._jeu = nouveauJeu;}
}