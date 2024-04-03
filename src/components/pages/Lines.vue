<script setup>
</script>

<template>
    <StatusBar
      :cards="cards"
      :pool="pool"
      :lines="lines"
    />
    <div class="main">
      <Card v-for="card in cards.slice(0,1000)"
        :card="card"
      />
    </div>        
</template>

<script>
export default {
    props : {
        lines : Array,
    }
}
</script>