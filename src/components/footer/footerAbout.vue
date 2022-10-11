<template>
    <div>
        <h3>About</h3>
        <p class="grey-font">
            <a href="#">Masterstudy</a> is Education WordPress theme
            featured by Learning Management System
            (LMS) for online education.
            Developed by <a href="#">StylemixThemes</a>.
        </p>

        <ul class="flex flex-center-y">
            <li v-for="elements in importedSocialsFooter" :key="elements.name" class="socials-padding">
                <a href="#">
                    <font-awesome-icon :icon="elements.name" class="grey-font" />
                </a>
            </li>
        </ul>

    </div>
</template>
  

<script>
export default {
    name: 'footerAbout',
    props: {
        importedSocialsFooter: Array,
    },
}
</script>
  

<style lang="scss" scoped>
.socials-padding {
    padding: 0.3rem;
}
</style>  