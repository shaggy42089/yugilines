<script setup>
import Card from '/src/components/Card.vue'
</script>

<template>
    <div class="line-editor-wrapper">
        <div class="deck" v-for="(deck, deckIndex) in decks.refinedDecks()" :key="'deck-' + deckIndex">
            <h1>{{ deck.name }}</h1>
            <Card v-for="(card, cardIndex) in deck.cards" :key="deckIndex + '-' + cardIndex" :card="cards.getById(card)">
            </Card>
        </div>
    </div>
</template>

<script>
import { useDeckStore } from '@/stores/decks';
import { useCardsStore } from '@/stores/cards';

export default {
    props: {
        cardPickerEnabled: Boolean
    },
    computed : {
        cards() {
            return useCardsStore();
        },
        decks() {
            return useDeckStore();
        }
    },
}
</script>

<style scoped>
    h1 {
        text-align: center;
        margin: 30px 0px;;
    }

    .line-editor-wrapper {
        border-left: 5px solid gray;
    }
</style>