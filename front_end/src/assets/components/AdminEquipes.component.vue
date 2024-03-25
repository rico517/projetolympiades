<script setup>
import DataServices from "../../services/PasserelleJson.services";
import Equipe from "../../classes/Equipe.class";
import Section from "../../classes/Section.class";
</script>

<template>
    <div id="container">
        <div id="equipesHolder">
            <div class="equipe" v-for="equipe in lesEquipes" :style="{ background: equipe.section.couleur }">
                <p> {{ equipe.nom }} </p>
                <p> : {{ equipe.score }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lesEquipes: []
        }
    },
    mounted() {
        this.getToutesLesEquipes();
    },
    methods: {
        getToutesLesEquipes(){
            DataServices.getToutesLesEquipes()
            .then(response => {
                response.data.forEach((equipe) => {
                    const newEquipe = new Equipe(equipe.id,equipe.nom,equipe.score,equipe.idSections);
                    this.lesEquipes.push(newEquipe);
                });
            }).then(() => {
                this.lesEquipes.forEach(equipe =>{
                    DataServices.getUneSection(equipe.section).then(response => {
                        const section = response.data[0];
                        const newSection = new Section(section.id,section.nom,section.score,section.couleur);
                        equipe.section = newSection;
                    });
                })
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
    #equipesHolder {
        overflow: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: start;
        width:90%;
        height:95%;
    }
        .equipe {
            display: flex;
            align-items: center;
            width: 95%;
            min-height: 4.5rem;
            /* background:linear-gradient(to bottom, blue, pink); */
            margin: 1rem 0 1rem 0;
            border-radius: 0.5rem;
            box-shadow: inset 0 0 0.5rem #00000055;
        }

        .equipe p {
            font-size: 2.5rem;
            margin-left: 2rem;
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