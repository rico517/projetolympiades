<script setup>
import {RouterView } from 'vue-router'
import HeaderComponent from './assets/components/Header.component.vue';
</script>

<template>
  <HeaderComponent  v-if="$route.path != '/'"/>
  <router-view/>
</template>
