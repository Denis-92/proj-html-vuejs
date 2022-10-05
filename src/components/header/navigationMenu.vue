<template>
    <nav class="flex flex-between-x flex-center-y">
        <span class="text-properties">English</span>
        <ul class="flex">
            <li v-for="elements in importedLinks" :key="elements.name" class="text-properties">
                <a href="#">
                    {{ elements.name }}
                </a>
            </li>
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

li {
    list-style-type: none;

    a {
        text-decoration: none;
        color: grey;
    }
}

.text-properties {
    padding: 0.7rem;
    font-size: 0.7rem;
}
</style>  