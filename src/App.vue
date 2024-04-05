<script setup>
import Navbar from './components/navbar/Navbar.vue'
import cards from '/src/assets/json/cards.json'
import pool from '/src/assets/json/pool.json'
import lines from '/src/assets/json/lines.json'
import MainMenu from './components/pages/MainMenu.vue'

</script>

<template>
    <!-- <Navbar /> -->
    <!-- <MainMenu 
      :cards="cards.data"
      :pool="pool.data"
      :lines="lines.data"
    /> -->
    <!-- <Pool
      :cards="cards.data"
      :pool="pool.data"
    /> -->
    <a href="#" @click="gotoMain">
      clickme
    </a>
    <router-view></router-view>
</template>

<script>
export default {
  methods:{
    async gotoMain() {
      this.$router.push({
        path:'/home',
        params: {cards:cards.data, pool:pool.data, lines:lines.data}
      })
    }
  }
}
</script>

<style lang="css">
  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>