<template>
    <div class="card-menu">
        <div class="btn-container">
            <v-icon animation="spin" speed="fast" class="pointer qty-btn" label="delete card from deck" @click="addCardToDeck" hover>
                <v-icon name="bi-circle-fill" scale="3.0" fill="white"></v-icon>
                <v-icon name="hi-solid-plus-circle" scale="3.0" fill="#4ade80"></v-icon>
            </v-icon>
            <v-icon animation="spin" speed="fast" class="pointer qty-btn" label="add card to deck" @click="removeCardFromDeck" hover>
                <v-icon name="bi-circle-fill" scale="3.0" fill="white"></v-icon>
                <v-icon name="hi-solid-minus-circle" scale="3.0" fill="#f87171"></v-icon>
            </v-icon>
        </div>
    </div>
</template>

<script>
import { useDeckStore } from '@/stores/decks';

export default {
    props: {
        card: Number,
        deckId: String
    },
    computed: {
        decks() {
            return useDeckStore();
        }
    },
    methods: {
        addCardToDeck() {
            this.decks.addCard(this.card, this.deckId);
        },

        removeCardFromDeck() {
            this.decks.removeCard(this.card, this.deckId);
        }
    }
}
</script>

<style lang="scss" scoped>
.card-menu {
    opacity: 0%;
    
    &:hover {
        opacity: 100%;
    }
}

.btn-container {
    position: absolute;
    display: block;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 100%;
    text-align: center;
}

.qty-btn {
    opacity: 100%;
    &:hover {
        opacity: 90%;
    }
}
</style>