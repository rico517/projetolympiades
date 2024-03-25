<script setup>
import DataServices from "../../services/PasserelleJson.services";
import Jeu from "../../classes/Jeu.class";
</script>

<template>
<div>
    <div class="element" v-for="jeu in lesJeux">
        {{ jeu.libelle }}
        {{ jeu.regles }}
        {{ jeu.typeJeu }}
        <!-- blabla tu peux mettre les autres param de jeu stv -->
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            lesJeux: []
        }
    },
    mounted() {
        this.getToutslesJeux();
    },
    methods: {
        getToutslesJeux(){
            DataServices.getTousLesJeux()
            .then(response => {
                response.data.forEach((jeu) => {
                    const newJeu = new Jeu(jeu.id,jeu.libelle,jeu.regles,jeu.nbPoints,jeu.typeJeu);
                    this.lesJeux.push(newJeu);
                });
            })
            .catch(e => {
                console.log(e);
            });
        }
    }
}
</script>

<style scoped>
</style>