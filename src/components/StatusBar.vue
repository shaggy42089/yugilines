<script setup>
import { useCardsStore } from '@/stores/cards';
import { useLinesStore } from '@/stores/lines';
import { usePoolStore } from '@/stores/pool';

const cards = useCardsStore();
const lines = useLinesStore();
const pool = usePoolStore();
</script>

<template>
    <div class="statusbar-superwrapper">
        <div class="statusbar-wrapper">
            <div>Cards in pool : {{ pool.items.length }}</div>
            <div>Cards loaded : {{ cards.items.length }}</div>
            <div>Lines loaded : {{ lines.items.length }}</div>
        </div>
    </div>
</template>
<style lang="css">
  .statusbar-wrapper {
    display:inline
   }

  .statusbar-superwrapper {
    padding: 0 50px;
    padding-top: 100px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
  }
</style>