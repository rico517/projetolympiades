import http from "../Http-common.js";

class DataService{
    getToutesLesEquipes(){
        return http.get("/GetTouteLesEquipes");
    }

    getToutesLesSections(){
        return http.get("/getToutesLesSections");
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

    getUnJeuUtilisateur(idUtilisateur){
        return http.get("/GetUnJeu/" + idUtilisateur);
    }

    getUnPlanning(id){
        return http.get("/GetUnPlanning/" + id);
    }

    getUneSection(id){
        return http.get("/GetUneSection/" + id);
    }

    getUneRegle(id){
        return http.get("/GetUneRegle/" + id);
    }

    updateUneRegle(id,newRegle){
        return http.get("/UpdateUneRegle/" + id + "/" + newRegle);
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
        return http.get("/GetToutesLesHoraires");
    }
}

export default new DataService();