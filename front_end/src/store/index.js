import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            niveauCnx: localStorage.getItem('niveauCnx') || 0
        }
    },
    mutations: {
        setNiveauCnx(state, role) {
            state.niveauCnx = role;
            localStorage.setItem('niveauCnx', role);
        },
    },
});

export default store;