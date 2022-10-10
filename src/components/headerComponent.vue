<template>
    <div>
        <div id="navigation-menu">
            <navigationMenuVue :importedLinks="importedLinks" :importedSocials="importedSocials" />
        </div>
        <linksActionVue />
    </div>
</template>
  
  
<script>
// IMPORT HEADER COMPONENTS
import navigationMenuVue from '@/components/header/navigationMenu.vue';
import linksActionVue from '@/components/header/linksAction.vue';

export default {
    name: 'headerComponent',
    props: {
        importedLinks: Array,
        importedSocials: Array,
    },
    components: {
        navigationMenuVue,
        linksActionVue,
    }

}
</script>
  
  
<style lang="scss">
#navigation-menu {
    border-bottom: 1px solid #ddd;
    margin-bottom: 1rem;
}
</style>