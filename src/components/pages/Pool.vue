<script setup>
import Card from '/src/components/Card.vue';
import { useCardsStore } from '@/stores/cards';
import { usePoolStore } from '@/stores/pool';

const cards = useCardsStore();
const pool = usePoolStore();
</script>

<template>
    <div class="main">
      <div v-for="item of pool.items" :key="item.name">
        <div class="deck-name">{{ item.name }}</div>
        <div class="card-list">
          <Card v-for="(card, index) in item.cards" :key="index"
            :card="cards.items.find(c => c.id === card)"
          />
        </div>
      </div>
    </div>        
</template>

<style scoped>
    .main {
        padding-top: 200px;
    }

    .deck-name {
      font-size: x-large;
      text-align: center;
      margin-bottom: 20px;
    }

    .card-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
</style>