<script setup>
import HeaderComponent from '../../assets/components/Header.component.vue';
/*
Appel du header
Appel de AdminMenuComponent "PC" lorsque l'ecran est en mode PC
Appel AdminScoreComponent
Appel de AdminMenuComponent "TEL" lorsque l'ecran est en mode TEL
*/
</script>

<template>
    <HeaderComponent/>
    <div id="contentContainer">
        <AdminMenuComponent class="pc" />
        <AdminScoreComponent/>
    </div>
    <AdminMenuComponent class="tel"/>
</template>

<style scoped>
    /* Mode PC */
    #contentContainer{
        width:100%;
        height:92vh;
    }
    .tel{
        display:none;
    }

    /* Mode Tel */
    @media all and (orientation: portrait){
        #contentContainer{
            width:100%;
            height:84vh;
        }
        .pc{
            display:none;
        }
        .tel{
            display:block;
        }
    }
</style>
