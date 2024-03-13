/*
Autheur : Julien Demogue
*/

export class Section{
    // Constructeur de la classe
    constructor(_id,_nom,_scoreTotal,_couleur){
        this._id = _id;
        this._nom = _nom;
        this._scoreTotal = _scoreTotal;
        this._couleur = _couleur;
    }

    // Recuperer l'id
    get id(){return this.id;}
    // Modifier l'id
    set id(_id){this.id = _id;}

    // Recuperer le nom
    get nom(){return this.nom;}
    // Modifier le nom
    set nom(_nom){this.nom = _nom;}

    // Recuperer le score total
    get scoreTotal(){return this.scoreTotal;}
    // Modifier le score total
    set scoreTotal(_scoreTotal){this.scoreTotal = _scoreTotal;}
    
    // Recuperer la couleur
    get couleur(){return this.couleur;}
    // Modifier la couleur
    set couleur(_couleur){this.couleur = _couleur;}
}