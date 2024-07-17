<template>
    <div class="deck-title">
        <h1>{{ deck.name }}</h1>
        <v-icon
            name="fa-regular-trash-alt"
            scale="3.0"
            class="trash-icon pointer"
            @click="deleteDeck"
        ></v-icon>
    </div>
</template>

<script>
import { useDeckStore } from '@/stores/decks';

export default {
    props : {
        deck : Object
    },
    computed : {
        decks() {
            return useDeckStore();
        } 

    },
    methods : {
        deleteDeck() {
            this.decks.deleteDeck(this.deck)
        }
    }
}
</script>

<style lang="scss" scoped>
    .deck-title {
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .trash-icon {
        padding-left: 20px;

        &:hover {
            opacity: 80%;
        }
    }
</style>