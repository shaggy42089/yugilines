<script setup>
import Card from '../Card.vue';
import StatusBar from '../StatusBar.vue';
import { useCardsStore } from '@/stores/cards';
import { usePoolStore } from '@/stores/pool';
import { ref } from 'vue';
import Checkbox from '../ui/Checkbox.vue';
import SearchCardOverlay from '../ui/SearchCardOverlay.vue';
const allTypes = [
  [
    'Spell Card',
    'Trap Card'
  ],
  [
    'Normal Monster',
    'Effect Monster',
    'Fusion Monster',
    'Synchro Monster',
    'XYZ Monster',
    'Ritual Monster'
  ],
  [
    'Pendulum Normal Monster',
    'Pendulum Effect Monster',
    'Synchro Pendulum Effect Monster',
    'XYZ Pendulum Effect Monster'
  ]
];
const cards = useCardsStore();
const pools = usePoolStore();
let filteredCards = ref(cards.items);
const search = ref('');
const cardTypes = ref([]);

const selectedCard = ref(0);
const selectCard = (id) => {
  selectedCard.value = id;
}

const filterCards = () => {
  const filter = {
    
  }
  
  if (!isNaN(search.value) && search.value) {
    filter.id = parseInt(search.value);
  } else if (search.value) {
    filter.name = search.value.toUpperCase();
  }
  if (cardTypes.value.length) {
    filter.types = cardTypes.value.map(p => p.toUpperCase())
  }
  filteredCards.value = cards.filter(filter)
}
</script>

<template>
  <StatusBar />
  <div class="search-box">
    <input type="text" class="search-bar" placeholder="card name" maxlength="20"
    @keyup.enter="filterCards" v-model="search" />
    <span class="result-nb">results : {{ filteredCards.length }}</span>
  </div>
  <div class="types">
    <div class="type-category" v-for="(category, index) in allTypes" :key="index">
      <template v-for="selectedType in category" :key="selectedType">
        <Checkbox :label="selectedType" v-model="cardTypes" :value="selectedType"
        @change="(n) => {cardTypes=n; filterCards()}"/>
      </template>
    </div>
  </div>
  <div class="main">
    <template v-for="card in filteredCards.slice(0,50)" :key="card.id">
      <Card
        :card="card"
        @click="() => selectCard(card.id)"
        :class="{selected : selectedCard === card.id}"
      >
        <SearchCardOverlay
          :card="card"
        />
      </Card>
    </template>
  </div>         
</template>

<script>
export default {
  setup() {    
    return {
      selectCard,
      selectedCard,
      filteredCards,
      search,
      cardTypes,
    }
  },
}
</script>

<style lang="css" scoped>
  .result-nb {
    position: absolute;
    color: black;
    right: 5%;
    bottom: 15px;
  }

  .search-box {
    position: relative;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .search-bar {
    font-size: larger;
    border-radius: 5px;
    width: 100%;
    height:52px;
    padding: 10px;
  }
  .types {
    margin: 20px 0;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .type-category {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  .card-menu {
    position:absolute;
    bottom: 0;
    left: 0;
  }
</style>