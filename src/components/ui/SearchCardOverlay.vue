<template>
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
</template>

<script>
import { usePoolStore } from '@/stores/pool';

export default {
    props : {
        card : Object
    },
    data() {
        return {
            selectedChoice : ""
        }
    },
    computed: {
        options () {
            return [
                {'name' : 'View details', 'func' : (card) => {$router.push(`/cardDetails/${card.id}`)}}, 
                {'name' : 'Add to deck', 'choices' : this.pools.items.map(p => p.name), 'func' : this.pools.addCard}, 
                {'name' : 'Mark as favorite', 'func' : console.log}
            ]
        },
        pools () {
            return usePoolStore();
        }
    },
    methods : {
        selectOption(opt) {
            this.selectedChoice = opt.name
        }
    }
}
</script>

<style scoped>
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
</style>