import { defineStore } from 'pinia'
// import { writeFileSync } from 'fs';
import pool from '/src/assets/json/pool.json'
import { useToast } from "vue-toastification";

const toast = useToast();

export const usePoolStore = defineStore('pool', {
    state: () => {
        return {items : pool.data}
    },

    actions: {
        addItem(item) {
            this.items.push(item)
            toast.success(`deck created successfully`)
        },
        removeItem(poolId) {
            const index = this.items.indexOf(poolId);
            this.items.splice(index, 1);
            toast.success(`deck removed successfully`)
        },
        addCard(card, poolId) {
            const pool = this.items.find((p) => p.name === poolId);
            if (!pool) return;
            pool.cards.push(card);
            toast.success(`card succesfully added to deck`)
        },
        removeCard(card, poolId) {
            const pool = this.items.find((p) => p.name === poolId);
            if (!pool) return;
            const index = pool.cards.indexOf(card);
            pool.cards.splice(index, 1);
            toast.success(`card succesfully removed from deck`)
        },
    }
})