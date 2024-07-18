<script setup>
    import { useCardsStore } from '@/stores/cards';
    import { useLinesStore } from '@/stores/lines';
    import Card from './Card.vue';
    const cards = useCardsStore();
</script>
<template>
    <div class="line-wrapper"> 
        <div class="line">
            <div class="line-title">
                <h1>{{ line.name }}</h1>
                <v-icon 
                    name="fa-regular-trash-alt"
                    scale="3.0"
                    class="trash-icon pointer"
                    @click="deleteLine"
                ></v-icon>
            </div>
            <div class="line-body">
                <div 
                    class="line-step"
                    v-for="(step, stepIndex) in line.steps"
                    :key="line.name + '-' + stepIndex"
                >
                    <h2>{{ (stepIndex+1) + '. ' + step.type }}</h2>
    
                    <!-- help i'm stuck step card ! -->
                    <div class="step-cards">
                        <Card
                        v-for="(c, cardIndex) in step.cards"
                        :key="stepIndex + '-' + cardIndex" 
                            :card="cards.getById(c)">
                            <!-- <LineCardOverlay/> -->
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        line : Object
    },
    computed : {
        lines() {
            return useLinesStore();
        }
    },
    methods : {
        deleteLine() {
            this.lines.deleteLine(this.line.name)
        }
    }
}
</script>
<style lang="scss" scoped>
    .line-wrapper {
        margin-top: 20px;
    }

    .line-title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 20px 0px;
    }

    .line-step, .step-cards {
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 620px;
        width: 230px;
        flex-wrap: nowrap;
        overflow: auto;

        & h2 {
            display: inline;
        }
    }

    .line-body {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: center;
    }

    .trash-icon {
        padding-left: 20px;

        &:hover {
            opacity: 80%;
        }
    }
</style>