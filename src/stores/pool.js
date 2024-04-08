import { defineStore } from 'pinia'
import pool from '/src/assets/json/pool.json'

export const usePoolStore = defineStore('pool', {
    state: () => {
        return {items : pool.data}
    },

    actions: {
        addItem(item) {
            this.items.push(item)
        },
        removeItem(item) {
            this.items.push(item)
        }
    }
})