/*
Autheur : Julien Demogue
*/

export default class Utilisateur{
    // Constructeur de la classe
    constructor(id,identifiant,mdp,niveauCnx) {
        this._id = id;
        this._identifiant = identifiant;
        this._mdp = mdp;
        this._niveauCnx = niveauCnx;
    }

    // Recuperer l'id
    get id(){return this.id;}
    // Modifier l'id
    set id(nouveauId){this.id = nouveauId;}

    // Recuperer l'identifiant
    get identifiant(){return this.identifiant;}
    // Modifier l'identifiant
    set identifiant(nouveauIdentifiant){this.identifiant = nouveauIdentifiant;}

    // Recuperer le mot de passe
    get mdp(){return this.mdp;}
    // Modifier le mot de passe
    set mdp(nouveauMdp){this.mdp = nouveauMdp;}

    // Recuperer le niveau de connexion
    get niveauCnx(){return this.niveauCnx;}
    // Modifier le niveau de connexion
    set niveauCnx(nouveauNiveauCnx){this.id = nouveauNiveauCnx;}
}