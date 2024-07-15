<template>
    <div class="deck-btn" @click="createDeck">
        <strong>+</strong> Create a deck
    </div>
</template>

<script>
import { usePoolStore } from '@/stores/pool';

export default {
    methods : {
        createDeck() {
            const pool = usePoolStore();
            const deckName = prompt('please enter a deck name');
            if (deckName === null) return;
            pool.addItem({name : deckName, cards : []});
        }
    }
}
</script>

<style lang="scss" scoped>

.deck-btn {
    background-color: black;
    color: white;
    position: fixed;
    bottom: 50px;
    left: 50vw;
    transform: translateX(-50%);
    border-radius: 15px;
    cursor: pointer;
    padding: 10px 25px;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.5);
    overflow: auto;

    strong {
        font-size: larger;
    }
}

</style>