<template>
    <div class="card-wrapper">
        <img 
            :src="card.card_images[0].image_url_small" 
            :alt="card.name"
        >
        <div class="card-menu">
            <span 
                class="card-menu-item"
                @mouseover="selectOption(opt)"
                @click="opt?.choices?.length ? undefined : opt.func(card)"
                v-for="opt in options" 
                :key="opt.name" 
            >
                {{opt.name + (opt?.choices?.length ? ' >' : '')}}
                <span class="card-menu-subitem-wrapper"
                    v-if="opt.name === selectedChoice">
                    <span class="card-menu-subitem"
                        v-for="choice in opt.choices"
                        @click="opt.func(card, choice)"
                        :key="choice"
                        >
                        {{ choice }}
                    </span>
                </span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        card : Object,
        options : Array
    },
    data() {
        return {
            selectedChoice : ""
        }
    },
    methods : {
        selectOption(opt) {
            this.selectedChoice = opt.name
        }
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
        position: relative;
        display: block;
        margin-bottom: 10px;
        background-color: gray;
        color: white;
        text-align: center;
        cursor:pointer;
        border: 1px solid transparent;
    }

    .card-menu-subitem-wrapper {
        display: block;
        width: 120px;
        position: absolute;
        top: -1px;
        left: 100%;
        margin-left: 5px;
    }
    
    .card-menu-subitem {
        display: block;
        background-color: gray;
        color: white;
        text-align: center;
        cursor:pointer;
        border: 1px solid transparent;
        margin-bottom: 2px; 
    }

    .card-menu-item:hover, .card-menu-subitem:hover{
        border: 1px solid white;
    }
    
    .card-wrapper.selected img{
        position:relative;
        transition: opacity 0.2s ease-out 0s;
        opacity: 50%;
        transform: scale(0.95);
        transition: 0.15s all ease;
    }
</style>