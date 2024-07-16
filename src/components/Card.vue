<template>
    <div class="card-wrapper">
        <img 
            :src="card.card_images[0].image_url_small" 
            :alt="card.name"
        >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props : {
        card : Object
    },
}
</script>
<style lang="css" scoped>
    img {
        width : 180px;
    }

    .card-wrapper {
        position: relative;
        display: inline;
        padding: 10px; 
    }
    
    .card-wrapper.selected img{
        transition: opacity 0.2s ease-out 0s;
        opacity: 50%;
        transform: scale(0.95);
        transition: 0.15s all ease;
    }
</style>