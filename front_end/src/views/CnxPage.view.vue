<script setup lang="ts">
import NomPages from "../enums/NomPages.enum";
import DataServices from "../services/PasserelleJson.services";
import Utilisateur from '../classes/Utilisateurs.class';
</script>

<template>
<body>
    <div id="container">
        <div id="containerLogo">
            <img src="../assets/img/logo_olympiaDLS.png">
        </div>
        <div id="loginHolder">
            <h1>Connexion</h1>
            <div id="inputLoginHolder">
                <div class="inputTextHolder">
                    <p>Identifiant :</p>
                    <input id="inputLogin" type="text" v-model="pseudo" @keydown.enter="logIn"/>
                </div>
                <div class="inputTextHolder">
                    <p>Mot de passe :</p>
                    <div id="passwordHolder">
                        <input id="inputMdp" :type="this.mdpVisible ? 'text' : 'password'" v-model="mdp" @keydown.enter="logIn"/>
                        <img @click="changerVisibiliteMdp" src="../assets/img/oeilOuvert.png" v-if="this.mdpVisible"/>
                        <img @click="changerVisibiliteMdp" src="../assets/img/oeilFerme.png" v-if="!this.mdpVisible"/>
                    </div>
                </div>
                <div id="errorLabel">
                    {{ errMsg }}
                </div>
                <button id="seConnecter" @click="logIn">Se connecter</button>
            </div>
        </div>
    </div>
</body>

</template>

<script lang="ts">
export default {
    data() {
        return {
            mdp: "",
            pseudo: "",
            errMsg: "",
            mdpVisible: false,
        }
    },
    methods: {
        logIn(){
            // Erreur si l'identifiant n'est pas entre
            if(this.pseudo == ""){
                this.errMsg = "Veuillez saisir un identifiant";
                return;
            }
            // erreur si le mot de passe n'est pas entre
            if(this.mdp == ""){
                this.errMsg = "Veuillez saisir un mot de passe";
                return;
            }

            // Recuperer l'utilisateur 
            DataServices.getUnUtilisateur(this.pseudo,this.mdp)
            .then((response) => {
                var donnees = response.data[0];
                const newUtilisateur = new Utilisateur(donnees.id,this.pseudo,this.mdp,donnees.niveauCnx);
                // Envoyer l'utilisateur vers la page de score version admin si le niveau de connexion est 2
                if(newUtilisateur.niveauCnx == 2){
                    this.$router.push(NomPages.accueilAdmin);
                }
                // Envoyer l'utilisateur vers la page de score version user si le niveau de connexion est 1
                else if (newUtilisateur.niveauCnx == 1){
                    this.$router.push(NomPages.accueilUser);
                }
            })
            .catch(e => {
                this.errMsg = "Identifiant ou mot de passe incorrect";
                return;
            });
        },
        changerVisibiliteMdp(){
            this.mdpVisible = !this.mdpVisible;
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


#inputLogin{
    width:90%;
    height:65%;
    border:none;
    font-size: 2.5vh;
    font-weight: normal;
    margin-left: 5%;
}
#inputLogin:focus{
    outline:none;
}

#errorLabel{
    color:red;
    font-size: 2.4em;
    font-weight: bold;
    text-align:center;
}

#passwordHolder{
    display: flex;
    align-items: center;
    width:95%;
    height:65%;
    margin-left: 5%;
}

#passwordHolder img{
    width:10%;
    border:none;
    margin-left:0.5%;
    margin-right:3%;
    user-select: none;
}

#inputMdp{
    width:89%;
    height:100%;
    border:none;
    font-size: 2.5vh;
    font-weight: normal;
    text-align: start;
}

#inputMdp:focus{
    outline:none;
}

#passwordHolder img:hover{
    cursor: pointer;
}


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
</style>