<template>
    <nav class="flex flex-between-x flex-center-y text-properties">
        <span>
            English
        </span>

        <ul class="flex flex-center-y text-properties">
            <li v-for="elements in importedLinks" :key="elements.name" class="relative">
                <a href="#">
                    {{ elements.name }}
                </a>
                <span v-if="elements.new" class="absolute">NEW</span>
            </li>
            <li v-for="elements in importedSocials" :key="elements.name">
                <a href="#">
                    <font-awesome-icon :icon="elements.name " />
                </a>
            </li>
            <!-- <li>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
            </li>
            <li>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-behance" />
                </a>
            </li> -->
        </ul>
    </nav>
</template>
  

<script>


export default {
    name: 'navigationMenu',
    props: {
        importedLinks: Array,
        importedSocials: Array,
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

.text-properties>* {
    padding: 0.7rem;
    font-size: 0.7rem;
}
</style>  