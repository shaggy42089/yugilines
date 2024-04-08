<script setup>
import { useCardsStore } from '@/stores/cards';
import Card from '../Card.vue';
import StatusBar from '../StatusBar.vue';

const cards = useCardsStore();
</script>

<template>
    <StatusBar />
    <div class="main">
      <Card v-for="card in cards.items.slice(0,100)"
        :card="card"
      />
    </div>         
</template>