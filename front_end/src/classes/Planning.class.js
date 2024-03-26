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
    get id(){return this._id;}
    // Modifier l'id
    set id(nouveauId){this._id = nouveauId;}

    // Recuperer l'horaire
    get horaire(){return this._horaire;}
    // Modifier l'horaire
    set horaire(nouveauHoraire){this._horaire = nouveauHoraire;}

    // Recuperer le jeu associe
    get jeu(){return this._jeu;}
    // Modifier le jeu associe
    set jeu(nouveauJeu){this._jeu = nouveauJeu;}
}