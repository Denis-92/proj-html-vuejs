<template>
  <div id="app">
    <!-- HEADER COMPONENT -->
    <navigationMenuVue :importedLinks="navLinks" :importedSocials="socials" />
    <linksActionVue />

    <!-- MAIN COMPONENT -->
    <mainComponentVue :importedCourses="courses" :importedCategoriesCourses="categoriesCourses" />
    <!-- class="flex flex-column flex-center-y" -->

    <!-- FOOTER COMPONENT - TO DO -->

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
    return { navLinks, socials, courses, categoriesCourses, };
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