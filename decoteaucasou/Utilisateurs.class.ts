/*
Autheur : Julien Demogue
*/

export default class Utilisateur{
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
    get id(){return this._id;}
    // Modifier l'id
    set id(nouveauId:number){this._id = nouveauId;}

    // Recuperer l'identifiant
    get identifiant(){return this._identifiant;}
    // Modifier l'identifiant
    set identifiant(nouveauIdentifiant){this._identifiant = nouveauIdentifiant;}

    // Recuperer le mot de passe
    get mdp(){return this._mdp;}
    // Modifier le mot de passe
    set mdp(nouveauMdp){this._mdp = nouveauMdp;}

    // Recuperer le niveau de connexion
    get niveauCnx(){return this._niveauCnx;}
    // Modifier le niveau de connexion
    set niveauCnx(nouveauNiveauCnx){this._niveauCnx = nouveauNiveauCnx;}
}