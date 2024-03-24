<script setup>
import TypePages from '../../enums/TypePages.enum';
import AdminMenuComponent from '../../assets/components/AdminMenu.component.vue';
import DataServices from "../../services/PasserelleJson.services";
import Jeu from "../../classes/Jeu.class";
/*
Appel du header
Appel de AdminMenuComponent "landscape" lorsque l'ecran est en mode PC
Appel AdminScoreComponent
Appel de AdminMenuComponent "portrait" lorsque l'ecran est en mode TEL
*/    
</script>

<template>
    <div id="contentContainer">
        <AdminMenuComponent :currentPage=TypePages.jeux v-if="isLandscape"/>
        <!-- <AdminScoreComponent/> -->
        <div v-for="jeu in lesJeux">
        {{ jeu.libelle }} 
        {{ jeu.typeJeu }}
        {{ jeu.regles }}
        </div>
    </div>
    
    <AdminMenuComponent :currentPage=TypePages.jeux v-if="isPortrait"/>
</template>

<script>
export default {
    data() {
        return {
            isPortrait: false,
            isLandscape: false,
            lesJeux:[]
        };
    },
    mounted() {
        this.recupLesJeux();
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
        recupLesJeux(){
            DataServices.getTousLesJeux()
            .then((response)=>{
                response.data.forEach((jeu)=>{
                    let jeux = new Jeu(jeu.id,jeu.libelle,jeu.regles,jeu.nbPoints,jeu.typeJeu)
                    this.lesJeux.push(jeux)
                    
                })
            })
            .catch(e => {
                console.log(e)})
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


