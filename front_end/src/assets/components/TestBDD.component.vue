<script setup lang="ts">
import DataServices from "../../services/PasserelleJson.services";
import Equipe from "../../classes/Equipe.class";
import Section from "../../classes/Section.class";
</script>

<template>
  <div class="test">
    <div class="element" v-for="equipe in lesEquipes">
      {{equipe}}
    </div>
  </div>    
</template>

<script lang="ts">
export default {
    name: "tutorials-list",
    data() {
    return {
      lesEquipes: [],
    };
  },
    methods: {
        getToutesLesEquipes(){
            DataServices.getToutesLesEquipes()
            .then(response => {
                response.data.forEach((equipe:any) => {
                  DataServices.getUneSection(equipe.idSections).then(response => {
                    response.data.forEach((section:any) => {
                      const newSection = new Section(section.id,section.nom,section.score,section.couleur);
                      let newEquipe = new Equipe(equipe.id,equipe.nom,equipe.score,newSection);
                      this.lesEquipes.push(newEquipe);
                    }); 
                  });  
                });
                console.log(this.lesEquipes);})
            .catch(e => {
                console.log(e);
        });
        },
    },
    mounted() {
      
    this.getToutesLesEquipes();
  }};
</script>

<style scoped>
.test{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>