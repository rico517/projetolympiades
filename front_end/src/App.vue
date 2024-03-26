<script setup>
import {RouterView } from 'vue-router'
import HeaderComponent from './assets/components/Header.component.vue';
import NomPages from './enums/NomPages.enum';
</script>

<template>
  <HeaderComponent  v-if="this.$route.path != '/' && this.$route.name != NomPages.erreur"/>
  <router-view/>
</template>
