<template>
    <div>
        <h3>Pages</h3>

        <ul class="flex flex-wrap">
            <li v-for="elements in importedPagesFooter" :key="elements.name" id="footer-pages">
                <a :href="elements.link" class="grey-font">
                    {{ elements.name }}
                </a>
            </li>
        </ul>

    </div>
</template>
  

<script>
export default {
    name: 'footerPages',
    props: {
        importedPagesFooter: Array,
    },
}
</script>
  

<style lang="scss" scoped>
#footer-pages {
    list-style-type: initial;
    width: 50%;
}
</style>  