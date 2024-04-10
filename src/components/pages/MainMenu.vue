<script setup>
import Card from '../Card.vue';
import StatusBar from '../StatusBar.vue';
import { useCardsStore } from '@/stores/cards';
import { ref } from 'vue';
import Checkbox from '../ui/Checkbox.vue';
const allTypes = ['Spell Card', 'Trap Card'];
const cards = useCardsStore();
let filteredCards = ref(cards.items);
const search = ref('');
const cardTypes = ref([]);
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
    <div class="types checkbox-wrapper">
      <template v-for="selectedType in allTypes" :key="selectedType">
        <Checkbox :label="selectedType" v-model="cardTypes" 
        @val-change="filterCards()"/>
      </template>
    </div>
    <div class="main">
      <Card v-for="card in filteredCards.slice(0,50)"
        :card="card" :key="card.id"
      />
    </div>         
</template>

<script>
export default {
  setup() {
    return {
      filteredCards,
      search,
      cardTypes,
    }
  },
}
</script>

<style scoped>
  .result-nb {
    position: absolute;
    color: black;
    right: 20%;
  }

  .search-box {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .search-bar {
    font-size: larger;
    border-radius: 5px;
    width: 100%;
  }
  .types {
    display: flex;
    justify-content: center;
  }
</style>