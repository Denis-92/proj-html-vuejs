<template>
  <div id="app">
    <!-- HEADER COMPONENT -->
    <headerComponentVue :importedLinks="navLinks" :importedSocials="socials" />

    <!-- MAIN COMPONENT -->
    <mainComponentVue :importedCourses="courses" :importedCategoriesCourses="categoriesCourses" :importedGoals="goals"
      :importedContributors="contributors" />

    <!-- FOOTER COMPONENT -->
    <footerComponentVue :importedSocialsFooter="socialsFooter" :importedContactsFooter="contactsFooter"
      :importedPagesFooter="pagesFooter" />

    <!-- SIDEBAR -->
    <div id="sidebar-component">
      <sidebarCompoonentVue />
    </div>

  </div>
</template>


<script>

// DATA LINKS NAV BAR
import { navLinks } from '@/assets/data/navHeader.js';

// DATA ICONS FONT AWESOME
import { socials } from '@/assets/data/navHeader.js';

// DATA GOALS MAIN
import { goals } from '@/assets/data/goalsMain.js';

// DATA COURSES
import { courses } from '@/assets/data/courses.js';

// DATA CATEGORIES COURSES
import { categoriesCourses } from '@/assets/data/courses.js';

// DATA CONTRIBUTORS
import { contributors } from '@/assets/data/contributors.js'

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

// IMPORT SIDEBAR COMPONENT
import sidebarCompoonentVue from '@/components/sidebarComponent.vue';

export default {
  name: 'App',
  components: {
    headerComponentVue,
    mainComponentVue,
    footerComponentVue,
    sidebarCompoonentVue,
  },
  data() {
    return {
      navLinks,
      socials,
      courses,
      categoriesCourses,
      contributors,
      socialsFooter,
      contactsFooter,
      pagesFooter,
      goals,
    };
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

#sidebar-component {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 1px 5px 1px #888;
  background-color: rgba(255, 255, 255, 0.5)
}
</style>