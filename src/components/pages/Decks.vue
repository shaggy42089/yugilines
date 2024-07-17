<script setup>
import Card from '/src/components/Card.vue';
import CreateDeck from '/src/components/ui/CreateDeck.vue'
import DeckCardOverlay from '../ui/DeckCardOverlay.vue';
import DeckTitle from '../ui/DeckTitle.vue';
import { useCardsStore } from '@/stores/cards';
import { useDeckStore } from '@/stores/decks';

const cards = useCardsStore();
const deck = useDeckStore();
</script>

<template>
    <div class="main">
      <div class="deck-wrapper" v-for="item of deck.items" :key="item.name">
        <DeckTitle :deck="item"/>
        <div class="card-list">
          <Card v-for="(card, index) in item.cards" :key="index"
            :card="cards.items.find(c => c.id === card)"
          >
            <DeckCardOverlay
              :card="card"
              :deckId="item.name"
            />
          </Card>
        </div>
      </div>
    </div>
    <CreateDeck/>
</template>

<style scoped>
    .deck-wrapper {
      margin-top: 40px;
      width: 100%;
    }

    .card-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
</style>