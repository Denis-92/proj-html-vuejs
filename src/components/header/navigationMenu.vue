<template>
    <nav class="flex flex-between-x">
        <h2>NAVIGATION</h2>
        <ul class="flex">
            <li v-for="elements in navLinks" :key="elements.name">{{ elements.name }}</li>
        </ul>
    </nav>
</template>
  

<script>
import { navLinks } from '@/assets/data/navHeader.js';

export default {
    name: 'navigationMenu',
    data() {
        return { navLinks };
    },
}
</script>
  

<style lang="scss" scoped>
@import '@/assets/style/utilities.scss';

nav {
    background-color: aqua;
    height: 100px;
}

li {
    margin: 1rem;
}
</style>  