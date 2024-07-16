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
<style lang="scss">
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

    .card-menu {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: 50;
    }
</style>