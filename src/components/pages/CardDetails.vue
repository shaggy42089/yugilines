<template>
    <div class="main">
        <div class="left_container">
            <img :src="card.card_images[0].image_url" alt="" class="card_img">
        </div>
        <div class="right_container">
            <span class="top_container">
                {{ card.name }}
            </span>
            <span class="bottom_container">
                {{ card.desc }}
            </span>
        </div>
    </div>        
</template>

<script>
import { useCardsStore } from '@/stores/cards';

export default {
    props: {
        id: String
    },
    computed : {
        card () {
            const cards = useCardsStore();
            return cards.items.find(c => c.id === Number.parseInt(this.id));
        }
    }
}
</script>

<style lang="scss" scoped>
    .main {
        padding-top: 200px;
        margin: 0 15vw;
        display: flex;
        flex-direction: row;
        width: 70vw;

        .right_container {
            flex-grow: 1;
            padding-left: 5vw;
            padding-top: 4vh;
            display: flex;
            flex-direction: column;
            max-width: 45vw;
        }
        
        .top_container {
            font-size: x-large;
        }

        .bottom_container {
            padding-top: 5vh;
            justify-content: space-between;
        }
    }

    .deck-name {
      font-size: x-large;
      text-align: center;
      margin-bottom: 20px;
    }

    .card-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .card_img {
        max-width: 20vw;
        aspect-ratio: auto;
    }
</style>