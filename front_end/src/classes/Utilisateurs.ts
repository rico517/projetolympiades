/*
Autheur : Julien Demogue
*/

export class Utilisateur{
    _id: number;
    _identifiant: string;
    _mdp: string;
    _niveauCnx: number;

    // Constructeur de la classe
    constructor(id:number,identifiant:string,mdp:string,niveauCnx:number) {
        this._id = id;
        this._identifiant = identifiant;
        this._mdp = mdp;
        this._niveauCnx = niveauCnx;
    }

    // Recuperer l'id
    get id(){return this.id;}
    // Modifier l'id
    set id(nouveauId:number){this.id = nouveauId;}

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