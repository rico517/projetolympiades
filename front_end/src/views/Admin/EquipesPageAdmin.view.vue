<script setup>
import TypePages from '../../enums/TypePages.enum';
import HeaderComponent from '../../assets/components/Header.component.vue';
import AdminMenuComponent from '../../assets/components/AdminMenu.component.vue';
import DataServices from "../../services/PasserelleJson.services";
import Equipe from "../../classes/Equipe.class";
import Section from "../../classes/Section.class";
/*
Appel du header
Appel de AdminMenuComponent "landscape" lorsque l'ecran est en mode PC
Appel AdminScoreComponent
Appel de AdminMenuComponent "portrait" lorsque l'ecran est en mode TEL
*/    
</script>

<template>
    <HeaderComponent/>
    <div id="contentContainer">
        <AdminMenuComponent :currentPage=TypePages.equipes v-if="isLandscape"/>
        <AdminScoreComponent/>
        <div class="element" v-for="equipe in lesEquipes">
      {{equipe.nom}}
      {{ equipe.score}}
      {{ equipe.section.couleur }}
    </div>
    </div>
    <AdminMenuComponent :currentPage=TypePages.equipes v-if="isPortrait"/>
</template>

<script>
export default {
    data() {
        return {
            lesEquipes:[],
            isPortrait: false,
            isLandscape: false
        };
    },
    mounted() {
        this.getToutesLesEquipes(),
        this.windowOrientation();
        window.addEventListener('resize', this.windowOrientation);
    },
    methods:{
        windowOrientation(){
            if(window.matchMedia("(orientation: landscape)").matches){
                // alert(window.matchMedia("(orientation: landscape)").matches);
                this.isLandscape = true;
                this.isPortrait = false;
            }else{
                this.isLandscape = false;
                this.isPortrait = true;
            }
        },
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
                console.log(this.lesEquipes);})
            .catch(e => {
                console.log(e);
        });
        }
    }
}
</script>

<style scoped>
    /* Mode PC */
    #contentContainer{
        width:100%;
        height:92vh;
        
    }
    /* Mode Tel */
    @media all and (orientation: portrait){
        #contentContainer{
            width:100%;
            height:84vh;
        }
    }
</style>


