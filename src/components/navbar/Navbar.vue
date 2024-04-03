<template>
<div class="nav-wrapper">
    <div class="nav">
        <div>
            <span class="nav-item">Pool</span>
            <span class="nav-item">Lines</span>
            <span class="nav-item">Search</span>
        </div>
        <div>
            <span class="nav-item">YuGiLines</span>
        </div>
        <div>
            <span class="nav-item" @click="save">Save</span>
            <a class="nav-item download-link" href="/src/assets/json/pool.json">get pool</a>
            <a class="nav-item download-link" href="/src/assets/json/lines.json">get lines</a>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    methods: {
        async save () {
            // console.log(await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.phps'))
        }
    },
    computed: {
        cards () {
            let toto = 1;
            console.log(toto)
            return toto;
        }
    },
}
</script>

<style scoped>
    .nav {
        display : flex;
        flex-direction : row;
        justify-content: space-between;
        font-size: large;
        height: 100%;
    }

    .nav div {
        height: 100%;
    }

    .nav-item {
        display: inline-block;
        cursor: pointer;
        min-height: 100%;
        padding: 20px 20px;
    }

    .nav-item:hover{
        filter: brightness(150%);
        background-color: #2D3436;
    }

    .nav-wrapper {
        background-color: black;
        padding: 0px 50px;
        position: fixed;
        width: 100%;
    }

    .download-link {
        text-decoration: none;
        color: var(--color-text);
    }
</style>