import http from "../Http-common.js";

class DataService{
    getToutesLesEquipes(){
        return http.get("/GetTouteLesEquipes");
    }

    getTouteLesSections(){
        return http.get("/GetTouteLesSections");
    }

    getTousLesJeux(){
        return http.get("/GetTousLesJeux");
    }

    getTousLesPlannings(){
        return http.get("/GetTousLesPlannings");
    }

    getUnJeu(id){
        return http.get("/GetUnJeu/" + id);
    }

    getUnPlanning(id){
        return http.get("/GetUnPlanning/" + id);
    }

    getUneSection(id){
        return http.get("/GetUneSection/" + id);
    }

    getUnUtilisateur(identifiant, mdp){
        return http.get("/GetUnUtilisateur/" + identifiant + "/" + mdp);
    }

    getEquipesPlanning(idJeu){
        return http.get("/GetEquipesPlanning/" + idJeu);
    }

    ajouterScoreEquipe(id,nombre){
        return http.post("/AjouterScoreEquipe/" + id + "/" + nombre);
    }

    ajouterScoreSection(id,nombre){
        return http.post("/AjouterScoreSection/" + id + "/" + nombre);
    }

    getToutesLesHeures(){
        return http.get("/GetToutesLesHeures");
    }
}

export default new DataService();