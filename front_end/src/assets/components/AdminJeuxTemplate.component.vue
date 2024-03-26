<script setup>
import DataServices from "../../services/PasserelleJson.services";
import Jeu from '../../classes/Jeu.class';
import Regle from '../regles/regles';
</script>

<template>
    <div id="container">
        <div id="contentContainer">
            <h1> {{ leJeu.libelle }}</h1>
            <p id="infosHolder">
                Points attribuables : {{ leJeu.nbPoints }} <br>
                Type de jeu : {{ leJeu.typeJeu }}
            </p>
            <p id="reglesHolder">
                Règles du jeu appelées depuis le fichier
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        idJeu: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            leJeu: Jeu // Initialisez le jeu à null pour éviter des erreurs lors de son chargement
        }
    },
    mounted() {
        this.getLeJeu(this.idJeu); // Appelez la fonction getLeJeu() avec this.idJeu comme paramètre
    },
    methods: {
        getLeJeu(idJeu){
            DataServices.getUnJeu(idJeu)
            .then(response => {
                const jeu = response.data[0]
                // Assignez le jeu à this.leJeu pour le rendre disponible dans le template
                this.leJeu = new Jeu(jeu.id,jeu.libelle,jeu.regles,jeu.nbPoints,jeu.typeJeu);

                console.log(Regle.getUneRegle(jeu.id))
            })
            .catch(e => {
                console.log(e);
            });
        }
    }
}
</script>

<style scoped>
#container {
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: white;
    height:100%;
    width:83%;
    overflow-y: scroll;
}

    #contentContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width:90%;
    }

        #contentContainer h1{
            padding:0.5rem 3rem 0.5rem 3rem;
            margin: 5rem 0 5rem 0;
            border-radius: 1rem;
            background-color: #E7191F;
            color:whitesmoke;
            font-size: 5rem;
        }

    #infosHolder {
        display: flex;
        justify-content: center;
        text-align: center;
        padding:0.5rem 3rem 0.5rem 3rem;
        margin: 5rem 0 5rem 0;
        border-radius: 1rem;
        font-size: 2rem;
        box-shadow: 0 0 1rem #AAAAAA;
        line-height: 3rem;
    }

    #reglesHolder{
        display: flex;
        justify-content: center;
        width:90%;
        margin: 5rem 0 5rem 0;
        padding: 2rem 0 2rem 0;
        box-shadow: 0 0 1rem #AAAAAA;
        border-radius: 1rem;
        font-size: 2rem;
    }

    

/* 160px + 942px */
@media all and (orientation : portrait) { 
    #container{
        background-color:rgb(255, 255, 255);
        height:100%;
        width:100%;
    } 
}
</style>