import { defineStore } from 'pinia'
import lines from '/src/assets/json/lines.json'

export const useLinesStore = defineStore('lines', {
    state: () => {
        return {items : lines.data}
    },

    actions: {
        addLine(line) {
            this.items.push(line)
        }
    }
})