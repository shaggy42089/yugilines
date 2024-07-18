<template>
    <div class="line-btn" @click="createLine">
        <strong>+</strong> Create a line
    </div>
</template>

<script>
import { useLinesStore } from '@/stores/lines';

export default {
    methods : {
        createLine() {
            const lines = useLinesStore();
            const lineName = prompt('please enter a line name');
            if (lineName === null) return;
            lines.createLine(lineName);
        }
    }
}
</script>

<style lang="scss" scoped>

.line-btn {
    background-color: black;
    color: white;
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    cursor: pointer;
    padding: 10px 25px;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.5);
    overflow: auto;
    z-index: 99;

    strong {
        font-size: larger;
    }
}

</style>