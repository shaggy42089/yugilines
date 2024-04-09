<script setup>
import Line from '../Line.vue';
import StatusBar from '/src/components/StatusBar.vue';
import { useLinesStore } from '@/stores/lines';

const lines = useLinesStore();
</script>

<template>
    <StatusBar />
    <div class="main">
        <template v-for="l in lines.items" :key="l+Math.ceil(Math.random()*100000)">
            <Line :line="l"/>
        </template>
    </div>        
</template>

<script>
</script>