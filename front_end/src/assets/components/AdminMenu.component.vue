<script setup>

</script>

<template>
  <div id="menuContainer">
    <div id="buttonsHolder">
        <button>Accueil</button>
        <button>Jeux</button>
        <button>Equipes</button>
        <button>Planning</button>
        <button>Classement</button>
    </div>
    <button>Déconnexion</button>
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
    #menuContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width:17%;
        height:100%;
    }
    #menuContainer button{

    }
    #buttonsHolder{
        
    }
    #buttonsHolder button{

    }
    @media all and (orientation: portrait){
    }
</style>
