import { defineStore } from 'pinia'
import cards from '/src/assets/json/cards.json'

export const useCardsStore = defineStore('cards', {
    state: () => {
        return {items : cards.data}
    },

    actions: {
        // filters the cards with the provided filters.
        // ex : filter = {type: 'magic', subtype:'equipment'} 
        // => returns cards that have type='magic' and subtype='equipment'
        filter(filters) {
            return this.items.filter((i) => {
                return Object.keys(filters).every(f => i[f] === filters[f]);
            })
        } 
    }
})