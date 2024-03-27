<script setup>
import DataServices from "../../services/PasserelleJson.services";
import Jeu from '../../classes/Jeu.class';
import NomPages from "../../enums/NomPages.enum";
</script>

<template>
    <div id="container">
        <router-link id="boutonRetour" :to="{name: NomPages.jeuxAdmin}"><img src="../img/chevron-left-grey.svg"></router-link>
        <div id="contentContainer">
            <h1> {{ leJeu.libelle }}</h1>
            <p id="infosHolder">
                Points attribuables : {{ leJeu.nbPoints }} <br>
                Type de jeu : {{ leJeu.typeJeu }}
            </p>
            <p id="reglesHolder">
                {{this.laRegle}}
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
            leJeu: Jeu, // Initialisez le jeu a null pour éviter des erreurs lors de son chargement
            laRegle: String
        }
    },
    mounted() {
        this.getLeJeu(this.idJeu); // Appelez la fonction getLeJeu() avec this.idJeu comme paramètre
        this.getLaRegle(this.idJeu); 
    },
    methods: {
        getLeJeu(idJeu){
            DataServices.getUnJeu(idJeu)
            .then(response => {
                const jeu = response.data[0]
                // Assignez le jeu a this.leJeu pour le rendre disponible dans le template
                this.leJeu = new Jeu(jeu.id,jeu.libelle,jeu.regles,jeu.nbPoints,jeu.typeJeu);
            })
            .catch(e => {
                console.log(e);
            });
        },
        getLaRegle(idJeu){
            DataServices.getUneRegle(idJeu)
            .then(response => {
                this.laRegle = response.data
            })
            .catch(e => {
                console.log(e);
            });
        },
        updateLaRegle(idJeu,newRegle){
            DataServices.updateUneRegle(idJeu,newRegle)
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
#boutonRetour{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    position:relative;
    top:2rem;
    left:0;
    width:8rem;
    height:8rem;
    transition: 0.3s ease;
    box-shadow: 0 0 0.5rem #555555;
}
#boutonRetour:hover {
    cursor: pointer;
    box-shadow: 0 0 1rem #555555;
}
#boutonRetour img{
    height: 100%;
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
            font-size: 8rem;
        }

    #infosHolder {
        display: flex;
        justify-content: center;
        text-align: justify;
        padding:0.5rem 3rem 0.5rem 3rem;
        margin: 0 0 5rem 0;
        border-radius: 1rem;
        font-size: 4rem;
        box-shadow: 0 0 1rem #AAAAAA;
        line-height: 6rem;
    }

    #reglesHolder{
        display: flex;
        justify-content: center;
        width:80%;
        margin: 0 0 5rem 0;
        padding: 2rem 2rem 2rem 2rem;
        box-shadow: 0 0 1rem #AAAAAA;
        border-radius: 1rem;
        font-size: 3.5rem;
        line-height: 5rem;
        box-sizing: border-box;
        text-align: justify;
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