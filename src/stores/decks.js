import { defineStore } from 'pinia'
// import { writeFileSync } from 'fs';
import deck from '/src/assets/json/pool.json'
import { useToast } from "vue-toastification";

const toast = useToast();

export const useDeckStore = defineStore('deck', {
    state: () => {
        return {items : deck.data}
    },

    actions: {
        createDeck(item) {
            this.items.push(item)
            toast.success(`deck created successfully`)
        },
        deleteDeck(deckId) {
            const index = this.items.indexOf(deckId);
            if (index === -1) {
                toast.error('error finding deck');
                return;
            }
            this.items.splice(index, 1);
            toast.success(`deck removed successfully`)
        },
        addCard(card, deckId) {
            const deck = this.items.find((p) => p.name === deckId);
            if (!deck) {
                toast.error(`error finding deck`)
                return
            };
            deck.cards.push(card);
            toast.success(`card succesfully added to deck`)
        },
        removeCard(card, deckId) {
            const deck = this.items.find((p) => p.name === deckId);
            if (!deck) {
                toast.error(`error finding deck`)
                return
            };
            const index = deck.cards.indexOf(card);
            deck.cards.splice(index, 1);
            toast.success(`card succesfully removed from deck`)
        },
    }
})