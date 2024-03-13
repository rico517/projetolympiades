/*
Autheur : Julien Demogue
*/

export class Planning{
    // Constructeur de la classe
    constructor(_id,_horaire,_jeu){
        this.id = _id;
        this.horaire = _horaire;
        this.jeu = _jeu;
    }

    // Recuperer l'id
    get id(){return this.id;}
    // Modifier l'id
    set id(_id){this.id = _id;}

    // Recuperer l'horaire
    get horaire(){return this.horaire;}
    // Modifier l'horaire
    set horaire(_horaire){this.horaire = _horaire;}

    // Recuperer le jeu associe
    get jeu(){return this.jeu;}
    // Modifier le jeu associe
    set jeu(_jeu){this.jeu = _jeu;}
}