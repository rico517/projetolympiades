<script setup>

</script>

<template>
  <div id="menuContainer">
    <div id="buttonsHolder">
        <button class="bhBtns">Accueil</button>
        <button class="bhBtns">Jeux</button>
        <button class="bhBtns">Equipes</button>
        <button class="bhBtns">Planning</button>
        <button class="bhBtns">Classement</button>
    </div>
    <button class="mcBtn">Déconnexion</button>
  </div>
</template>

<style scoped>

    #menuContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width:17%;
        height:100%;
        background-color: whitesmoke;
        font-size:2vh;
    }
    .mcBtn{
        font-size:3vh;
        border:none;
        width:90%;
        height:8%;
        background-color: #FF000088;
        border-radius:10px;
    }
    .mcBtn:hover{
        cursor: pointer;
        background-color: #FF0000AA;
    }
    #buttonsHolder{
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:55%;
    }
    .bhBtns{
        font-size:3vh;
        border:none;
        height:10%;
        width:90%;
        text-align: start;
    }
    .bhBtns .active{
        font-weight: bold;
        text-decoration: underline;
    }
    .bhBtns:hover{
        cursor: pointer;
        background-color: #b1b1b1;
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
        .bhBtns .active{

        } 
    }
</style>
