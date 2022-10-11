<template>
  <div id="app">
    <!-- HEADER COMPONENT -->
    <headerComponentVue :importedLinks="navLinks" :importedSocials="socials" />

    <!-- MAIN COMPONENT -->
    <mainComponentVue :importedCourses="courses" :importedCategoriesCourses="categoriesCourses" />
    <!-- class="flex flex-column flex-center-y" -->

    <!-- FOOTER COMPONENT -->
    <footerComponentVue :importedSocialsFooter="socialsFooter" :importedContactsFooter="contactsFooter"
      :importedPagesFooter="pagesFooter" />

  </div>
</template>


<script>

// DATA LINKS NAV BAR
import { navLinks } from '@/assets/data/navHeader.js';

// DATA ICONS FONT AWESOME
import { socials } from '@/assets/data/navHeader.js';

// DATA COURSES
import { courses } from '@/assets/data/courses.js';

// DATA CATEGORIES COURSES
import { categoriesCourses } from '@/assets/data/courses.js';

// DATA SOCIALS FOOTER
import { socialsFooter } from '@/assets/data/menuFooter.js';

// DATA CONTACTS FOOTER
import { contactsFooter } from '@/assets/data/menuFooter.js';

// DATA PAGES FOOTER
import { pagesFooter } from '@/assets/data/menuFooter.js';


// IMPORT HEADER COMPONENT
import headerComponentVue from '@/components/headerComponent.vue';

// IMPORT MAIN COMPONENT
import mainComponentVue from '@/components/mainComponent.vue';

// IMPORT FOOTER COMPONENT
import footerComponentVue from '@/components/footerComponent.vue';

export default {
  name: 'App',
  components: {
    headerComponentVue,
    mainComponentVue,
    footerComponentVue,
  },
  data() {
    return { navLinks, socials, courses, categoriesCourses, socialsFooter, contactsFooter, pagesFooter, };
  },
}
</script>


<style lang="scss">
@import '@/assets/style/generics.scss';
@import '@/assets/style/utilities.scss';

.little-container {
  max-width: 1000px;
  margin: 0 auto;
}

.big-container {
  max-width: 1400px;
  margin: 0 auto;
}
</style>