<script setup>
import DataServices from "../../services/PasserelleJson.services";
</script>

<template>
    <div id="container">
        <div id="classementHolder">
            <div class="classe" v-for="(section, index) in lesSections" :key="index" :style="{ background: lesSections[index].couleur }">
                <p> {{ lesSections[index].scoreTotal }} </p>
                <p> {{ lesSections[index].couleur }} </p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      lesSections: [],
    };
  },
  mounted() {
    // Recuperer toutes les horaires de la journee
    this.getToutesLesSections();
  },
  methods: {
    getToutesLesSections(){
        DataServices.getToutesLesSections().then((response) => {
            response.data.forEach((section) =>{
                this.lesSections.push(section);
            })
        })
        .catch(e => {
            console.log(e);
        });
    },
  }
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
    #classementHolder {
        overflow: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: start;
        width:90%;
        height:95%;
    }
        .classe {
            display: flex;
            align-items: center;
            width: 95%;
            min-height: 9vh;
            /* background:linear-gradient(to bottom, blue, pink); */
            margin: 1.5vh 0 1.5vh 0;
            border-radius: 1.5vh;
        }

        .classe p {
            font-size: 5rem;
            margin-left: 2rem;
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