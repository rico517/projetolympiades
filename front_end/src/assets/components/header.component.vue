<script setup>

</script>

<template>
  <div id="header">
    <div id="container">
      <button id="btnDropDown"></button>
      <img src="../img/logo_olympiaDLS.png" />
      <div>{{ heureSysteme }}</div>
      <div>{{ currentPage }}</div>
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
  
  #header{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:6vh;
    background-color: #e7191f;
  }
  #container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:95%;
    height:100%;
    display: flex;
  }
  #container button{
    display: none;
  }
  #container img{
    height:95%;
  }
  #container div{
    color : white;
    font-size: 3rem;
    font-weight: bold;
  }

  @media all and(orientation : portrait){
    #header{
      display: flex;
      justify-content: start;
      align-items: center;
      width:100%;
      height:3vh;
      background-color: #e7191f;
    }
    #container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width:70%;
      height:100%;
      display: flex;
    }
    #container button{
      display:inline-block;
    }
    #container div{
      display:none;
    }
  }
</style>