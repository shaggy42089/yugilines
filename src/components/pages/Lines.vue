<script setup>
import Card from '/src/components/Card.vue';
import StatusBar from '/src/components/StatusBar.vue';
import { useCardsStore } from '@/stores/cards';
import { useLinesStore } from '@/stores/lines';

const lines = useLinesStore();
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

<script>
</script>