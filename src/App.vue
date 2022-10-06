<template>
  <div id="app">
    <!-- HEADER COMPONENT -->
    <navigationMenuVue :importedLinks="navLinks" :importedSocials="socials" />
    <linksActionVue />

    <!-- MAIN COMPONENT -->
    <mainComponentVue class="flex flex-column flex-center-y" />

    <!-- FOOTER COMPONENT - TO DO -->

  </div>
</template>


<script>
// DATA LINKS NAV BAR
import { navLinks } from '@/assets/data/navHeader.js';

// ICONS FONT AWESOME
import { socials } from '@/assets/data/navHeader.js';

// IMPORT HEADER COMPONENTS
import navigationMenuVue from '@/components/header/navigationMenu.vue';
import linksActionVue from '@/components/header/linksAction.vue';

// IMPORT MAIN COMPONENT
import mainComponentVue from '@/components/mainComponent.vue';

export default {
  name: 'App',
  components: {
    navigationMenuVue,
    linksActionVue,
    mainComponentVue,
  },
  data() {
    return { navLinks, socials };
  },
}
</script>


<style lang="scss">
@import '@/assets/style/generics.scss';
@import '@/assets/style/utilities.scss';


#app {
  >* {
    margin: 1%;
    border: 1px solid black;
  }
}
</style>