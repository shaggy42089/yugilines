<template>
<div class="nav-wrapper">
    <div class="nav">
        <div>    
            <RouterLink :to="{name:'decks'}" class="nav-item">Decks</RouterLink>
            <RouterLink :to="{name:'lines'}" class="nav-item">Lines</RouterLink>
            <RouterLink :to="{name:'menu'}" class="nav-item">Search</RouterLink>
        </div>
        <div>
            <RouterLink :to="{name:'landingPage'}" class="nav-item">YuGiLines</RouterLink>
        </div>
        <div>
            <span class="nav-item" @click="save">Save</span>
            <a class="nav-item download-link" href="/src/assets/json/pool.json">get decks</a>
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
}
</script>

<style scoped>
    .nav {
        display : flex;
        flex-direction : row;
        justify-content: space-between;
        font-size: large;
        height: 100%;
        align-items: center;
    }

    .nav div {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .nav-item {
        display: inline-flex;
        cursor: pointer;
        align-items: center;
        padding: 0 20px;
        height: var(--navbar-height);
    }

    .nav-item:hover{
        filter: brightness(150%);
        background-color: #2D3436;
    }

    .nav-wrapper {
        background-color: black;
        padding: 0px 50px;
        position: fixed;
        top:0;
        width: 100%;
        height: var(--navbar-height);
        z-index: 99;
    }

    .download-link, .nav-item {
        text-decoration: none;
        color: var(--color-text);
    }
</style>