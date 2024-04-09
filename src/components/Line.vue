<script setup>
    import { useCardsStore } from '@/stores/cards';
    import Card from './Card.vue';
    const cards = useCardsStore();
</script>
<template>
    <div class="line-wrapper"> 
        <div class="line">
            <template v-for="(l, index) in line">
                <Card v-if="typeof l === 'number'" :card="cards.getById(l)" :key="index+l"/>
                <span v-else :key="index+l">{{ l }}</span>    
            </template>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        line : Array
    }
}
</script>
<style lang="css" scoped>
    .line-wrapper {
        display: block;
        width:100%;
    }
    .line {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>