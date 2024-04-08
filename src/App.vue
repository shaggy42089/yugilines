<script setup>
import Navbar from './components/navbar/Navbar.vue'
</script>

<template>
    <Navbar />
    <router-view></router-view>
</template>

<style lang="css">
  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>