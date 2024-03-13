/*
Autheur : Julien Demogue
*/

export class Utilisateur{
    // Constructeur de la classe
    constructor(_id,_identifiant,_mdp,_niveauCnx) {
        this.id = id;
        this.identifiant = _identifiant;
        this.mdp = _mdp;
        this.niveauCnx = _niveauCnx;
    }

    // Recuperer l'id
    get id(){return this.id;}
    // Modifier l'id
    set id(_id){this.id = _id;}

    // Recuperer l'identifiant
    get identifiant(){return this.identifiant;}
    // Modifier l'identifiant
    set identifiant(_identifiant){this.identifiant = _identifiant;}

    // Recuperer le mot de passe
    get mdp(){return this.mdp;}
    // Modifier le mot de passe
    set mdp(_mdp){this.mdp = _mdp;}

    // Recuperer le niveau de connexion
    get niveauCnx(){return this.niveauCnx;}
    // Modifier le niveau de connexion
    set niveauCnx(_niveauCnx){this.id = _niveauCnx;}
}