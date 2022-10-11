<template>
    <div>
        <div class="flex big-container" id="footer-container">
            <footerAboutVue :importedSocialsFooter="importedSocialsFooter" />
            <footerContactVue :importedContactsFooter="importedContactsFooter" />
            <footerPagesVue :importedPagesFooter="importedPagesFooter" />
        </div>
    </div>
</template>
  
  
<script>
// IMPORT FOOTER COMPONENTS
import footerAboutVue from '@/components/footer/footerAbout.vue';
import footerContactVue from '@/components/footer/footerContact.vue';
import footerPagesVue from '@/components/footer/footerPages.vue';

export default {
    name: 'footerComponent',
    props: {
        importedSocialsFooter: Array,
        importedContactsFooter: Array,
        importedPagesFooter: Array,
    },
    components: {
        footerAboutVue,
        footerContactVue,
        footerPagesVue,
    }

}
</script>
  
  
<style lang="scss">
#footer-container {
    margin: 4rem;

    >* {
        width: 24%;
        margin: 0.6rem;
    }
}
</style>