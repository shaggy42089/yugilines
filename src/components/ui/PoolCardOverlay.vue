<template>
    <div class="card-menu">
        <div class="btn-container">
            <v-icon animation="spin" speed="fast" class="pointer qty-btn" label="delete card from deck" @click="addCardToDeck" hover>
                <v-icon name="bi-circle-fill" scale="3.0" fill="white"></v-icon>
                <v-icon name="hi-solid-plus-circle" scale="3.0" fill="#4ade80"></v-icon>
            </v-icon>
            <v-icon animation="spin" speed="fast" class="pointer qty-btn" label="add card to deck" @click="removeCardFromDeck" hover>
                <v-icon name="bi-circle-fill" scale="3.0" fill="white"></v-icon>
                <v-icon name="hi-solid-minus-circle" scale="3.0" fill="#f87171"></v-icon>
            </v-icon>
        </div>
    </div>
</template>

<script>
import { usePoolStore } from '@/stores/pool';

export default {
    props: {
        card: Number,
        poolId: String
    },
    computed: {
        pools() {
            return usePoolStore();
        }
    },
    methods: {
        addCardToDeck() {
            this.pools.addCard(this.card, this.poolId);
        },

        removeCardFromDeck() {
            this.pools.removeCard(this.card, this.poolId);
        }
    }
}
</script>

<style lang="scss" scoped>
.card-menu {
    position: absolute;
    top: 0px;
    left: 0px;
    display: block;
    width: 100%;
    height: 100%;
}

.card-menu {
    opacity: 0%;
    
    &:hover {
        opacity: 100%;
    }
}

.btn-container {
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    left: 20%;
}

.qty-btn {
    opacity: 100%;
    &:hover {
        opacity: 90%;
    }
}
</style>