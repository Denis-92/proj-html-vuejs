<template>
    <div class="flex flex-column flex-center-x flex-center-y" id="sidebar-container">

        <a href="#" class="grey-font">
            <font-awesome-icon icon="fa-solid fa-desktop" />
        </a>

        <a href="#" class="grey-font">
            <font-awesome-icon icon="fa-solid fa-globe" />
        </a>

        <a href="#" class="grey-font">
            <font-awesome-icon icon="fa-solid fa-wrench" />
        </a>

        <a href="#" class="grey-font">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </a>

        <a href="#" class="grey-font">
            <font-awesome-icon icon="fa-solid fa-mobile-screen" />
        </a>

    </div>
</template>
  
  
<script>
export default {
    name: 'sidebarComponent',

}
</script>
  
  
<style lang="scss" scoped>
#sidebar-container {
    padding: 1rem;

    >* {
        margin: 0.5rem 0.2rem;
        font-size: 1.5rem;
    }
}
</style>