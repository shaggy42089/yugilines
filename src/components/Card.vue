<template>
    <div class="card-wrapper">
        <img 
            :src="card.card_images[0].image_url_small" 
            :alt="card.name"
        >
        <div class="card-menu">
            <span class="card-menu-item" 
                v-for="opt in options" 
                :key="opt.name" 
                @click="opt.func(card)">
                {{opt.name}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        card : Object,
        options : Array
    }
}
</script>
<style lang="css" scoped>
    img {
        width : 180px;
    }

    .card-wrapper {
        display: inline;
        padding: 10px; 
    }

    .card-wrapper:not(.selected) .card-menu {
        display: none;
    }

    .card-wrapper.selected .card-menu {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20%;
        width:60%;
    }

    .card-wrapper.selected {
        position: relative;
    }

    .card-menu-item {
        display: block;
        margin-bottom: 10px;
        background-color: gray;
        color: white;
        text-align: center;
        cursor:pointer;
        border: 1px solid transparent;
    }

    .card-menu-item:hover {
        border: 1px solid white;
    }
</style>