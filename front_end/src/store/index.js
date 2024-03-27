import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            niveauCnx: localStorage.getItem('niveauCnx') || 0,
            idUtilisateur: localStorage.getItem('idUtilisateur') || -1,
        }
    },
    mutations: {
        setNiveauCnx(state, role) {
            state.niveauCnx = role;
            localStorage.setItem('niveauCnx', role);
        },
        setIdUtilisateur(state, id) {
            state.idUtilisateur = id;
            localStorage.setItem('idUtilisateur', id);
        },
    },
});

export default store;