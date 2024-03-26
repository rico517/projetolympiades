/*
Autheur : Julien Demogue
*/
export default class Planning{
    // Constructeur de la classe
    constructor(id,horaire,jeu){
        this._id = id;
        this._horaire = horaire;
        this._jeu = jeu;
    }

    // Recuperer l'id
    get id(){return this.id;}
    // Modifier l'id
    set id(nouveauId){this.id = nouveauId;}

    // Recuperer l'horaire
    get horaire(){return this.horaire;}
    // Modifier l'horaire
    set horaire(nouveauHoraire){this.horaire = nouveauHoraire;}

    // Recuperer le jeu associe
    get jeu(){return this.jeu;}
    // Modifier le jeu associe
    set jeu(nouveauJeu){this.jeu = nouveauJeu;}
}