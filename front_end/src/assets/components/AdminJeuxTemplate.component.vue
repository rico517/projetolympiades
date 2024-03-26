<script setup>
import DataServices from "../../services/PasserelleJson.services";
import Jeu from '../../classes/Jeu.class.ts';
</script>

<template>
    <div id="container">
        {{ idJeu }} 
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
        return {}
    },
    mounted() {

    },
    methods: {},
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

/* 160px + 942px */
@media all and (orientation : portrait) { 
    #container{
        background-color:rgb(255, 255, 255);
        height:100%;
        width:100%;
    } 
}
</style>