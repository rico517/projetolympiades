<script setup>

</script>

<template>
    <div id="container">
        <button>jeux</button>
        <button>classement</button>
        <button>planning</button>
        <button>equipes</button>
    </div>
</template>

<style scoped>
    #container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: burlywood;
        height:92vh;
        width:83%;
    }
    /* 160px + 942px */
    @media all and (min-width : 1102px) { 
        #container{
            background-color:grey;
            height:92vh;
            width:83%;
        }
        
    }
</style>