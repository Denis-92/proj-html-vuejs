<template>
    <nav class="flex flex-between-x flex-center-y">
        <span class="text-properties">
            English
            <font-awesome-icon icon="fa-solid fa-user-secret" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
        </span>
        <ul class="flex">
            <li v-for="elements in importedLinks" :key="elements.name" class="text-properties relative">
                <a href="#">
                    {{ elements.name }}
                </a>
                <span v-if="elements.new" class="absolute">NEW</span>
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

    .absolute {
        top: 0;
        right: 0;
        color: white;
        background-color: red;
    }
}

.text-properties {
    padding: 0.7rem;
    font-size: 0.7rem;
}
</style>  