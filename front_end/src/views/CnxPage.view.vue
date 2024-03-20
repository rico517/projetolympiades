<script setup>
import TestBDDComponent from '../assets/components/TestBDD.component.vue';
import DataServices from "../services/PasserelleJson.services";
import Utilisateur from '../classes/Utilisateurs.class.ts';
</script>

<template>
<body>
    <HeaderComponent/>
    <div id="container">
        <div id="containerLogo">
            <img src="../assets/img/logo_olympiaDLS.png">
        </div>
        <div id="loginHolder">
            <h1>Connexion</h1>
            <div id="inputLoginHolder">
                <div class="inputTextHolder">
                    <p>Identifiant :</p>
                    <input type="text" v-model="pseudo"/>
                </div>
                <div class="inputTextHolder">
                    <p>Mot de passe :</p>
                    <input type="text" v-model="mdp"/>
                </div>
                <!-- <div id="inputCheckboxHolder">
                    <div id="checkbox"><img src="../assets/img/check.png"></div>
                    <p>Rester connecter ?</p>
                </div> -->
                <button id="seConnecter" @click="logIn">Se connecter</button>
            </div>
        </div>
    </div>
</body>
<!--  <router-link to="/score-admin"><button>Page gestion score admin</button></router-link> -->
<!-- <router-link :to="{name: 'score-user'}"><button>Page gestion score user</button></router-link> -->
</template>

<script>
export default {
    methods: {
        logIn(){
            // Recuperer l'utilisateur 
            DataServices.getUnUtilisateur(this.pseudo,this.mdp)
            .then((response) => {
                var donnees = response.data[0];
                const newUtilisateur = new Utilisateur(donnees.id,this.pseudo,this.mdp,donnees.niveauCnx);
                if(newUtilisateur.niveauCnx == 2){
                    this.$router.push("/score-admin");
                }
                else if (newUtilisateur.niveauCnx == 1){
                    this.$router.push("/score-user");
                }
            })
            .catch(e => {
                console.log(e);
            });

            // Envoyer l'utilisateur vers la page de score version admin
            // this.$router.push("/score-admin");
        }
    }
}


</script>

<style scoped>
#container{
    aspect-ratio: 50/89;
    height:80%;
    background: linear-gradient(to right,#8c8e8f,#383a40);
    box-shadow: 0 0 10px #00000055;
    border-radius: 2vh;
    user-select: none;
}

#containerLogo{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:20%;
}
#containerLogo img{
    width:90%;
}


#loginHolder{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width:100%;
    height:80%;
    background: #EFEFEF;
    border-radius: 4.5vh 0 0 0;
}

#loginHolder h1{
    font-size: 4.5rem;
}

#inputLoginHolder{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width:80%;
    height:60%;
}

.inputTextHolder{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width:100%;
    aspect-ratio:40/9;
    box-shadow: 2px 2px 2px #00000055;
    background-color: white;
}
.inputTextHolder p{
    padding-top:2%;
    font-size: 1.8vh;
    margin-left: 5%;
}


input[type="text"]{
    width:90%;
    height:65%;
    border:none;
    font-size: 3.5vh;
    font-weight: normal;
    margin-left: 5%;
}
input[type="text"]:focus{
    outline:none;
}


/* #inputCheckboxHolder{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:60%;
    height:10%;
    font-weight: bold;
}

#inputCheckboxHolder p{
    font-size: 1.75rem;
}

#checkbox{
    height:70%;
    aspect-ratio: 1/1;
    border:0.25vh #555555 solid;
    border-radius: 15%;
}

#checkbox:hover{
    cursor: pointer;
}

#checkbox img{
    height:100%;
} */


#seConnecter{
    width:100%;
    aspect-ratio:40/9;
    border-radius:2vh;
    border: none;
    background: linear-gradient(to right,#8c8e8f,#383a40);
    color:#EFEFEF;
    font-size:2.5rem;
    box-shadow: none;
}
#seConnecter:hover{
    cursor: pointer;
    background: linear-gradient(to bottom,#8c8e8f,#383a40);
}
</style>../../../back end/data/DAO