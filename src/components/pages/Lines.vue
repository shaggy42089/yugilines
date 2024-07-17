<script setup>
import Line from '../Line.vue';
import { useLinesStore } from '@/stores/lines';

</script>

<template>
    <div class="main">
        <Line v-for="l in lines.items" :key="l.name" :line="l"/>
        <!-- <CreateLine/> -->
    </div>        
</template>

<script>
export default {
    computed : {
        lines() {
            return useLinesStore(); 
        }
    }
}
</script>