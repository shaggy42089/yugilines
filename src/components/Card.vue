<template>
    <div class="card-wrapper">
        <img 
            :src="card.card_images[0].image_url_small" 
            :alt="card.name"
            @click="$emit('CardClick', card.id)"
        >
    </div>
</template>

<script>
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