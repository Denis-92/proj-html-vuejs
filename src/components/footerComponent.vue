<template>
    <div>
        <div class="flex">
            <footerAboutVue />
            <footerContactVue />
        </div>
    </div>
</template>
  
  
<script>
// IMPORT FOOTER COMPONENTS
import footerAboutVue from '@/components/footer/footerAbout.vue';
import footerContactVue from '@/components/footer/footerContact.vue';

export default {
    name: 'footerComponent',
    // props: {
    //     importedLinks: Array,
    //     importedSocials: Array,
    // },
    components: {
        footerAboutVue,
        footerContactVue,
    }

}
</script>
  
  
<style lang="scss">

</style>