<template>
    <nav class="flex flex-between-x">
        <h2>NAVIGATION</h2>
        <ul class="flex">
            <li v-for="elements in importedLinks" :key="elements.name">{{ elements.name }}</li>
        </ul>
    </nav>
</template>
  

<script>


export default {
    name: 'navigationMenu',
    props: {
        importedLinks: Array,
    }

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