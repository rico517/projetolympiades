<script setup>
import TypePages from '../../enums/TypePages.enum';
import NomPages from '../../enums/NomPages.enum';
</script>

<template>
    <div id="container">
        <div id="topContainer">
            <div class="topContents" id="heure">
                {{heureSysteme}}
            </div>
            <div class="topContents">
                <p>Prochain changement :</p>
                {{ heureProchainChangement }}
            </div>
        </div>
        <div id="botContainer">
            <router-link :to="{name: NomPages.jeuxAdmin}" :id=TypePages.jeux class="btns">Jeux</router-link>
            <router-link :to="{name: NomPages.equipesAdmin}" :id=TypePages.equipes class="btns">Equipes</router-link>
            <router-link :to="{name: NomPages.planningAdmin}" :id=TypePages.planning class="btns">Planning</router-link>
            <router-link :to="{name: NomPages.classementAdmin}" :id=TypePages.classement class="btns">Classement</router-link>
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      heureSysteme: ''
    };
  },
  mounted() {
    // Mettre à jour l'heure initiale
    this.updateHeure();
    // Mettre à jour l'heure toutes les 5 secondes
    setInterval(this.updateHeure, 5000);
  },
  methods: {
    updateHeure() {
      const date = new Date();
      const heures = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const secondes = date.getSeconds().toString().padStart(2, '0');
      this.heureSysteme = `${heures}:${minutes}`;
    }
  }
};
</script>



<style scoped>
    #container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: white;
        height:100%;
        width:100%;
    }

        #topContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:100%;
            height:35%;
        }

        .topContents{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:70%;
            height:45%;

            border-bottom:0.3vh #dfdfdf solid;
        }
        .topContents p {
            font-size: 3.5em;
        }

            #heure{
                font-size: 6em;
            }

        #botContainer{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            width:80%;
            height:65%;
        }
            .btns{
                display: flex;
                justify-content: center;
                align-items: center;
                justify-self: center;
                align-self:center;
                font-size: 5em;
                width:75%;
                height:60%;
                color:white;
                text-decoration: none;
                border-radius: 15px;
                border: none;
                background-color: #FF000088;
            }
            .btns:hover{
                background-color: #FF0000AA;
                cursor: pointer;
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