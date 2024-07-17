<template>
    <div class="deck-btn" @click="createDeck">
        <strong>+</strong> Create a deck
    </div>
</template>

<script>
import { useDeckStore } from '@/stores/decks';

export default {
    methods : {
        createDeck() {
            const deck = useDeckStore();
            const deckName = prompt('please enter a deck name');
            if (deckName === null) return;
            deck.createDeck({name : deckName, cards : []});
        }
    }
}
</script>

<style lang="scss" scoped>

.deck-btn {
    background-color: black;
    color: white;
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    cursor: pointer;
    padding: 10px 25px;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.5);
    overflow: auto;
    z-index: 99;

    strong {
        font-size: larger;
    }
}

</style>