import http from "../Http-common.js";

class DataService{
    getToutesLesEquipes(){
        return http.get('/equipes');
    }
}

export default new DataService();