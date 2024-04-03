<script setup>
import Card from '../Card.vue';
</script>

<template>
    <div class="main">
      <Card v-for="item of pool"
        :card="cards.find(c => c.id === item)"
      />
    </div>        
</template>

<script>
export default {
    props : {
        pool  : Array,
        cards : Array,
    }
}
</script>

<style scoped>
    .main {
        padding-top: 200px;
    }
</style>