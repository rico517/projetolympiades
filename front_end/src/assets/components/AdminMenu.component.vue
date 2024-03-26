<script setup>
import TypePages from '../../enums/TypePages.enum';
import NomPages from '../../enums/NomPages.enum';
</script>

<template>
  <div id="menuContainer">
    <div id="buttonsHolder">
        <router-link :to="{name: NomPages.accueilAdmin}" :id=TypePages.accueil class="bhBtns">Accueil</router-link> 
        <router-link :to="{name: NomPages.jeuxAdmin}" :id=TypePages.jeux class="bhBtns">Jeux</router-link>
        <router-link :to="{name: NomPages.equipesAdmin}" :id=TypePages.equipes class="bhBtns">Equipes</router-link>
        <router-link :to="{name: NomPages.planningAdmin}" :id=TypePages.planning class="bhBtns">Planning</router-link>
        <router-link :to="{name: NomPages.classementAdmin}" :id=TypePages.classement class="bhBtns">Classement</router-link>
    </div>
    <button class="mcBtn">Déconnexion</button>
  </div>
</template>

<script>
export default {
    props : 
    {
        currentPage:{
            type:String,
            required:true
        }
    },
    mounted(){
        console.log(this.currentPage);
        const btnActive = document.getElementById(this.currentPage);
        btnActive.classList.remove('bhBtns');
        btnActive.classList.add('active');
    }
}

</script>

<style scoped>

    #menuContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-width:160px;
        width:17%;
        height:100%;
        background-color: whitesmoke;
        font-size:2vh;
    }
    .mcBtn{
        color:whitesmoke;
        font-size:3vh;
        border:none;
        width:90%;
        height:8%;
        background-color: #FF000088;
        border-radius:0.5em;
        margin-bottom: 0.75em;
        transition:0.3s ease;
    }
    .mcBtn:hover{
        cursor: pointer;
        background-color: #FF0000AA;
    }
    #buttonsHolder{  
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width:100%;
        height:55%;
    }
    .bhBtns{
        display:flex;
        justify-content: start;
        align-items: center;
        font-size:3vh;
        border:none;
        height:15%;
        width:90%;
        padding-left:5%;
        border-radius:0.5em;
        transition:0.3s ease;
        background-color: #dfdfdf55;
        text-decoration: none;
    }
    .active{
        display:flex;
        justify-content: start;
        align-items: center;
        font-size:3vh;
        border:none;
        height:15%;
        width:90%;
        padding-left:5%;
        border-radius:0.5em;
        font-weight: bold;
        text-decoration: none;
        box-shadow:inset 0 0 0.4em rgba(0, 0, 0, 0.2);
    }
    .bhBtns:hover{
        cursor: pointer;
        background-color: #dfdfdf;
    }
    @media all and (orientation: portrait){
        #menuContainer{
            display: flex;
            justify-content: center;
            align-items: center;
            width:100%;
            height:8vh;
            background-color: whitesmoke;
        }
        .mcBtn{
           display: none; 
        }
        #buttonsHolder{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width:100%;
            height:100%;
        }
        .bhBtns{
            font-size:3vh;
            border:none;
            height:95%;
            width:15%;
            text-align: start;
        }
        /* .bhBtns .active{

        }  */
    }
</style>
