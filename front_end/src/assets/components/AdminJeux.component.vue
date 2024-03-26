<script setup>
import DataServices from "../../services/PasserelleJson.services";
import Jeu from "../../classes/Jeu.class";
import NomPages from '../../enums/NomPages.enum.ts';
</script>

<template>
    <div id="container">
        <div id="jeuxHolder">
            <div class="jeu" v-for="jeu in lesJeux">
                <router-link class="jeuRouter" :to="{ name: NomPages.jeuxTemplateAdmin, params: { idJeu: jeu.id }}">
                    <p> {{ jeu.libelle }} </p>
                    <p> : {{ jeu.typeJeu }} </p>
                    <img src="../img/chevron-right-white.svg">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lesJeux: []
        }
    },
    mounted() {
        this.getToutslesJeux();
    },
    methods: {
        getToutslesJeux(){
            DataServices.getTousLesJeux()
            .then(response => {
                response.data.forEach((jeu) => {
                    const newJeu = new Jeu(jeu.id,jeu.libelle,jeu.regles,jeu.nbPoints,jeu.typeJeu);
                    this.lesJeux.push(newJeu);
                });
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
    align-items: center;
    background-color: white;
    height:100%;
    width:83%;
}
    #jeuxHolder {
        overflow: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: start;
        width:90%;
        height:95%;
    }
    .jeu{
        display: flex;
        align-items: center;
        width: 95%;
        min-height: 6rem;
        /* background:linear-gradient(to bottom, blue, pink); */
        margin: 1rem 0 1rem 0;
        border-radius: 1rem;
        box-shadow: inset 0 0 0.5rem #00000055;
        background-color: #E7181FCC;
    }
        .jeuRouter {
            display: flex;
            align-items: center;
            width:100%;
            height:100%;
            text-decoration: none;
        }

        .jeuRouter p {
            color:whitesmoke;
            font-size: 3rem;
            margin-left: 2rem;
        }
        .jeuRouter img{
            height:80%;
            margin-left:1.5rem;
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