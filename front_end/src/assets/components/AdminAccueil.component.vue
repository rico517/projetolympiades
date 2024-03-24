<script setup>
import TypePages from '../../enums/TypePages.enum';
import NomPages from '../../enums/NomPages.enum';
import DataServices from "../../services/PasserelleJson.services";
</script>

<template>
    <div id="container">
        <div id="topContainer">
            <div class="topContents" id="heure">
                {{heureSysteme}}
            </div>
            <div class="topContents">
                <p>Prochain changement : {{ heureProchainChangement }}</p>
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
      heureSysteme: '',
      heureProchainChangement: '',
      lesHoraires: [],
    };
  },
  mounted() {
    // Mettre à jour l'heure initiale
    this.updateHeure();
    // Mettre à jour l'heure toutes les 5 secondes
    setInterval(this.updateHeure, 5000);

    // Mettre à jour le prochain changement toutes les minutes
    setInterval(this.getProchainChangement, 60000);

    // Recuperer toutes les horaires de la journee
    this.getToutesLesHeures();
  },
  methods: {
    updateHeure() {
      const date = new Date();
      const heures = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const secondes = date.getSeconds().toString().padStart(2, '0');
      this.heureSysteme = `${heures}:${minutes}`;
    },
    getToutesLesHeures(){
        DataServices.getToutesLesHeures().then((response) => {
            response.data.forEach((heure) =>{
                this.lesHoraires.push(heure);
            })
            this.getProchainChangement();
        })
        .catch(e => {
            console.log(e);
        });
    },
    getProchainChangement(){
        // Recuperer la date actuelle
        const dateActuelle = new Date();
        
        let i = 0
        // Parcourir une boucle s'arretant si toutes les horaires ont ete aprcourues ou si le prochain changement a ete defini
        while(i < this.lesHoraires.length && this.heureProchainChangement == ""){
            // Recuperer l'horaire d'index i
            const horaire = this.lesHoraires[i];

            // Creation date vide
            const dateHoraire = new Date();

            // Recuperation d'un horaire en separant heures, minutes et secondes
            const heure = horaire.heure.split(":");

            // Recuperer les heures et minutes
            dateHoraire.setHours(heure[0]);
            dateHoraire.setMinutes(heure[1]);
            
            // Verification si la date du planning est superieure a l'heure actuelle
            // console.log(dateHoraire.toString() + "\n" + dateActuelle.toString());
            if(dateHoraire > dateActuelle) {
                this.heureProchainChangement = horaire.heure;
            }

            i++;
        }
        // Si aucune heure du planning est plus tard que l'heure actuelle, alors le prochain changement est la premiere du planning
        if(this.heureProchainChangement == ""){
            this.heureProchainChangement = this.lesHoraires[0].heure;
        }

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
        width:83%;
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
            text-align: center;
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