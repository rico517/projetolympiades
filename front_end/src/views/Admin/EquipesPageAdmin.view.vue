<script setup>
import TypePages from '../../enums/TypePages.enum';
import AdminMenuComponent from '../../assets/components/AdminMenu.component.vue';
import AdminEquipesComponent from '../../assets/components/AdminEquipes.component.vue';
/*
Appel du header
Appel de AdminMenuComponent "landscape" lorsque l'ecran est en mode PC
Appel AdminScoreComponent
Appel de AdminMenuComponent "portrait" lorsque l'ecran est en mode TEL
*/    
</script>

<template>
    <div id="contentContainer">
        <AdminMenuComponent :currentPage=TypePages.equipes v-if="isLandscape"/>
        <AdminEquipesComponent />
    </div>
    <AdminMenuComponent :currentPage=TypePages.equipes v-if="isPortrait"/>
</template>

<script>
export default {
    data() {
        return {
            isPortrait: false,
            isLandscape: false
        };
    },
    mounted() {
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
        }
    }
}
</script>

<style scoped>
    /* Mode PC */
    #contentContainer{
        display: flex;
        flex-direction: row;
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


