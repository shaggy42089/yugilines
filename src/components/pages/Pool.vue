<script setup>
import Card from '/src/components/Card.vue';
import { useCardsStore } from '@/stores/cards';
import { usePoolStore } from '@/stores/pool';

const cards = useCardsStore();
const pool = usePoolStore();
</script>

<template>
    <div class="main">
      <Card v-for="item of pool.items"
        :card="cards.items.find(c => c.id === item)"
      />
    </div>        
</template>

<style scoped>
    .main {
        padding-top: 200px;
    }
</style>