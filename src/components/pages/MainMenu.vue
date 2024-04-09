<script setup>
import Card from '../Card.vue';
import StatusBar from '../StatusBar.vue';
import { useCardsStore } from '@/stores/cards';
import { ref } from 'vue';
const allTypes = ['Spell Card', 'Trap Card'];
const cards = useCardsStore();
let filteredCards = ref(cards.items);
const search = ref('');
const cardTypes = ref([]);
const filterCards = () => {
  const filter = {
    type: cardTypes.value
  }

  if (!isNaN(search.value) && search.value) {
    filter.id = parseInt(search.value);
  } else if (search.value) {
    filter.name = search.value;
  }
  filteredCards = cards.filter(filter)
}
</script>

<template>
    <StatusBar />
    <div class="main">
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="card name" maxlength="20"
         @keyup="filterCards" v-model="search" />
      </div>
      <div class="types">
        <template v-for="selectedType in allTypes" :key="selectedType">
          <input type="checkbox" :id="selectedType" :value="selectedType" v-model="cardTypes" @input="filterCards"/>
          <label for="selectedType">{{selectedType}}</label>
        </template>
      </div>
      <Card v-for="card in filteredCards.slice(0,100)"
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