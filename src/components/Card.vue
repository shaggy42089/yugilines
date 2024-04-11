<template>
    <div class="card-wrapper">
        <img 
            :src="card.card_images[0].image_url_small" 
            :alt="card.name"
        >
        <!-- <div class="card-menu">
            <span class="card-menu-item">hello</span>
        </div> -->
    </div>
</template>

<script>
// console.log(this.$refs)
//v-if="$refs['card-' + card.id].$el.classList.contains('selected')
export default {
    props : {
        card : Object,
    }
}
</script>
<style lang="css">
    img {
        width : 180px;
    }

    .card-wrapper {
        display: inline;
        padding: 10px; 
    }
</style>