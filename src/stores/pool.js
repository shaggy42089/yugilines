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
        addCard(card, poolId) {
            const pool = this.items.find((p) => p.name === poolId);
            if (!pool) return;
            pool.cards.push(card.id);
        },
        removeCard(poolId, card) {
            const pool = this.items.find((p) => p.name === poolId);
            if (!pool) return;
            const index = pool.cards.indexOf(card);
            pool.cards.splice(index, 1);
        },
    }
})