<template>
  <div id="app">
    <navigationMenuVue :importedLinks="navLinks" :importedSocials="socials" />
    <linksActionVue />
    <joinCTAVue />
    <achieveRewardVue />
    <typeFieldsVue />
    <readMoreCTAVue />
    <recentCoursesVue />
    <statisticSuccessVue />
    <subscribeNewsletterVue />
  </div>
</template>


<script>
import { navLinks } from '@/assets/data/navHeader.js';
import { socials } from '@/assets/data/navHeader.js';

import navigationMenuVue from '@/components/header/navigationMenu.vue';
import linksActionVue from '@/components/header/linksAction.vue';
import joinCTAVue from '@/components/main/joinCTA.vue';
import achieveRewardVue from '@/components/main/achieveReward.vue';
import typeFieldsVue from '@/components/main/typeFields.vue';
import readMoreCTAVue from '@/components/main/readMoreCTA.vue';
import recentCoursesVue from '@/components/main/recentCourses.vue';
import statisticSuccessVue from '@/components/main/statisticSuccess.vue';
import subscribeNewsletterVue from '@/components/main/subscribeNewsletter.vue';

export default {
  name: 'App',
  components: {
    navigationMenuVue,
    linksActionVue,
    joinCTAVue,
    achieveRewardVue,
    typeFieldsVue,
    readMoreCTAVue,
    recentCoursesVue,
    statisticSuccessVue,
    subscribeNewsletterVue,
  },
  data() {
    return { navLinks, socials };
  },
}
</script>


<style lang="scss">
@import '@/assets/style/generics.scss';

#app {
  >* {
    margin: 1%;
    border: 1px solid black;
  }
}
</style>