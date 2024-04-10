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
            console.log(filters)
            return this.items.filter((i) => {
                let accumulator = true;
                Object.keys(filters).forEach(f => {
                    if (f === 'name') accumulator &= (i.name.toUpperCase().includes(filters[f]));
                    else if (f === 'types') accumulator &= (filters[f].includes(i.type.toUpperCase()));
                     else accumulator &= (i[f] === filters[f]);
                })
                return accumulator;
            })
        },
        getById(id) {
            return this.items.find(c => c.id === id);
        }
    }
})