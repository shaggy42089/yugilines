<script setup>
import Line from '../Line.vue';
import CreateLine from '../ui/CreateLine.vue';
import CardPicker from '/src/components/line_editor/CardPicker.vue';
import { useLinesStore } from '@/stores/lines';

</script>

<template>
    <div class="main">
        <div class="line-list" :class="{ splitted : cardPickerEnabled }">
            <div class="editor-btn pointer" :class="{ enabled : cardPickerEnabled }" @click="() => {cardPickerEnabled = ! cardPickerEnabled}">
                <v-icon v-if="!cardPickerEnabled" name="gi-card-draw" scale="3.0" fille="gray"></v-icon>
                <v-icon v-else name="md-close" scale="3.0" fille="gray"></v-icon>
            </div>
            <Line v-for="l in lines.items" :key="l.name" :line="l"/>
            <CreateLine/>
        </div>
        <CardPicker class="card-picker" :class="{ enabled : cardPickerEnabled }"/>
    </div>        
</template>

<script>
export default {
    data () {
        return {
            cardPickerEnabled: false
        }
    },
    computed : {
        lines() {
            return useLinesStore(); 
        }
    },
    methods: {
        toggleCardPicker() {
            this.cardPickerEnabled = !this.cardPickerEnabled;
        }
    }
}
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
        flex-direction: row;
        width: calc(133vw - 20px);
    }

    .card-picker {
        width: 33vw;
        padding: 0px 10px;
    }
    
    .line-list {
        transition: width 0.5s ease-in-out;
        position: relative;
        width: 100vw;
        
        &.splitted {
            width: 67vw;
        }
    }

    .editor-btn {
        position: absolute;
        top: 80px;
        right: 0vw;

        border-radius: 5px 0px 0px 5px;
        border: 5px solid gray;
        border-right: none;

        &:hover {
            opacity: 80%;
        }
    }
</style>