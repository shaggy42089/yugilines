import { defineStore } from 'pinia'
// import { writeFileSync } from 'fs';
import pool from '/src/assets/json/pool.json'

export const usePoolStore = defineStore('pool', {
    state: () => {
        return {items : pool.data}
    },

    actions: {
        addItem(item) {
            this.items.push(item)
        },
        removeItem(poolId) {
            const index = this.items.indexOf(poolId);
            this.items.splice(index, 1);
        },
        addCard(poolId, card) {
            this.items[poolId].cards.push(card);
        },
        removeCard(poolId, card) {
            const index = this.items[poolId].cards.indexOf(card);
            this.items[poolId].cards.splice(index, 1);
        },
    }
})