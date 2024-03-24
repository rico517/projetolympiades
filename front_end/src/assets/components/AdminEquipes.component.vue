<script setup>
import DataServices from "../../services/PasserelleJson.services";
import Equipe from "../../classes/Equipe.class";
import Section from "../../classes/Section.class";
</script>

<template>
<div>
    <div class="element" v-for="equipe in lesEquipes">
        {{ equipe.nom }}
        {{ equipe.score }}
        {{ equipe.section.couleur }}
        <!-- blabla tu peux mettre les autres param de l'equipe stv -->
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
                  DataServices.getUneSection(equipe.idSections).then(response => {
                    response.data.forEach((section) => {
                      const newSection = new Section(section.id,section.nom,section.score,section.couleur);
                      let newEquipe = new Equipe(equipe.id,equipe.nom,equipe.score,newSection);
                      this.lesEquipes.push(newEquipe);
                    });
                  });  
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
</style>