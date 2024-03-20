/*
Autheur : Julien Demogue
*/

export default class Section{
    _id: number;
    _nom: string;
    _scoreTotal: number;
    _couleur: string;

    // Constructeur de la classe
    constructor(id:number,nom:string,scoreTotal:number,couleur:string){
        this._id = id;
        this._nom = nom;
        this._scoreTotal = scoreTotal;
        this._couleur = couleur;
    }

    // Recuperer l'id
    get id(){return this.id;}
    // Modifier l'id
    set id(nouveauId:number){this.id = nouveauId;}

    // Recuperer le nom
    get nom(){return this.nom;}
    // Modifier le nom
    set nom(nouveauNom){this.nom = nouveauNom;}

    // Recuperer le score total
    get scoreTotal(){return this.scoreTotal;}
    // Modifier le score total
    set scoreTotal(nouveauScoreTotal){this.scoreTotal = nouveauScoreTotal;}
    
    // Recuperer la couleur
    get couleur(){return this.couleur;}
    // Modifier la couleur
    set couleur(nouveauCouleur){this.couleur = nouveauCouleur;}
}