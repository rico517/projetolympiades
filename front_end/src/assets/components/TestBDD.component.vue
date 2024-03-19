<script setup>
</script>

<template>
    <div>
        <h4>Tutorials List</h4>
      <ul>
        <li           
          v-for="(tutorial, index) in tutorials"
          :key="index"
          
        >
          {{ tutorial.title }}
        </li>
        </ul>
      </div>
</template>




<script>
import DataServices from "../../services/PasserelleJson.services";

export default {
    name: "tutorials-list",
    data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
    methods: {
        getToutesLesEquipes(){
            DataServices.getToutesLesEquipes()
            .then(response => {
                this.tutorials = response.data;
                console.log(response.data);})
            .catch(e => {
                console.log(e);
        });
        },
    },
    mounted() {
      
    this.getToutesLesEquipes();
  }};
</script>