import { defineStore } from 'pinia'
import lines from '/src/assets/json/lines.json'
import { useToast } from "vue-toastification";

const toast = useToast();

export const useLinesStore = defineStore('lines', {
    state: () => {
        return {items : lines.data}
    },

    actions: {
        createLine(name) {
            this.items.push({"name": name, steps:[]});
        },

        deleteLine(name) {
            const index = this.items.indexOf(this.items.find(l => l.name === name));
            if (index === -1) {
                toast.error('error finding line');
                return;
            }
            this.items.splice(index, 1);
            toast.success(`line removed successfully`)
        },

        addStep(lineId, type, cards) {
            const line = this.items.find(l => l.name === lineId);
            if (!line) {
                toast.error('error finding line');
                return;
            }
            line.steps.push({type, cards});
            toast.success('line created successfully')
        },

        removeStep(lineId, stepId) {
            if (stepId < 0 || stepId >= this.items.length) {
                toast.error('invalid step index');
                return;
            }

            this.items.splice(stepId, 1);
        }


    }
})