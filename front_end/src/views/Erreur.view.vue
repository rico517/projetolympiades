<script setup lang="ts">
import NomPages from '../enums/NomPages.enum';
</script>

<template>
<body id="error-body">
    <div class="errorHolder">
        <p class="error-title">Erreur 404</p>  
        <router-link :to="{name: NomPages.accueilUser}" class="error-btn">
            Redirection
            <img class="ok" src="../assets/img/ooookayyyyy.png" >
        </router-link>
    </div>
</body>
</template>

<style scoped>
#error-body{
    /* background-image: url("../assets/img/gifBg.gif"); */
    /* background-image: url("../assets/img/testBg.jpg"); */
    background-size: cover;
    height: 100vh;
}

.errorHolder {
    border: rgba(0, 0, 0, 0.397) solid .5rem;
    border-radius: 8px;
    width:30%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4%;
    box-sizing: border-box;
    background-color: rgb(22, 22, 22);
    backdrop-filter: blur(10px);
}

.error-title{
    font-size: 6rem;
    font-weight: bold;
    background: linear-gradient(to right, #00ff00, #0099ff , #6666ff, #ff3399, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 4s ease-in-out infinite;
    background-size: 400% 100%;
}

@keyframes rainbow_animation {
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
}

.error-btn{
    margin-top: 7%;
    border: rgba(0, 0, 0, 0.397) solid .2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 1.8rem;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
    padding: 1% 2% 1% 2%;
    box-sizing: border-box;
    transition: 0.2s ease;
    color: rgb(54, 54, 54);
    gap: 1rem;
}

.error-btn:hover{
    border: rgba(255, 50, 50, 0.562) solid .2rem;
    box-shadow: 0 0 .5rem rgba(255, 33, 33, 0.562);
    background: #ff6a6a;
    color: white;
    font-size: 2rem;
}

.error-btn:hover .ok{
    height: 4rem;
    transform: rotate(720deg);
}

.ok{
    height: 0rem;
    transition: 0.4s ease;
}
</style>