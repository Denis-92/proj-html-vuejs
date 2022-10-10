<template>
    <nav class="big-container">
        <div class="flex flex-between-x flex-center-y">
            <span class="text-properties">
                <a href="#">
                    <span> English </span>
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                </a>
            </span>

            <ul class="flex flex-center-y text-properties text-padding">

                <li v-for="elements in importedLinks" :key="elements.name" class="relative">
                    <a href="#">
                        {{ elements.name }}
                    </a>
                    <span v-if="elements.new" class="absolute">NEW</span>
                </li>

                <li v-for="elements in importedSocials" :key="elements.name" class="socials-padding">
                    <a href="#">
                        <font-awesome-icon :icon="elements.name" />
                    </a>
                </li>

            </ul>
        </div>
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
li {
    a {
        color: #888;
    }

    .absolute {
        top: 0;
        right: 0;
        color: #fff;
        background-color: #dc1245;
    }
}

.text-padding>* {
    padding: 0.7rem;
}

.text-properties>* {
    font-size: 0.7rem;
    color: #888;
}

.socials-padding {
    padding: 0.3rem;
}
</style>  