<template>
    <div class="statusbar-superwrapper">
        <div class="statusbar-wrapper">
            <div>Cards in pool : {{ pool.length }}</div>
            <div>Cards loaded : {{ cards.length }}</div>
            <div>Lines loaded : {{ lines.length }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pool: Array,
        cards: Array,
        lines: Array,
    }
}
</script>

<style lang="css">
  .statusbar-wrapper {
    display:inline
   }

  .statusbar-superwrapper {
    padding: 0 50px;
    padding-top: 150px;
    display: flex;
    justify-content: center;
  }
</style>