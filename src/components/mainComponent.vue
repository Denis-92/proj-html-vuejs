<template>
  <main id="mainComponent">
    <joinCTAVue />
    <achieveRewardVue />
    <typeFieldsVue />
    <readMoreCTAVue />
    <recentCoursesVue />
    <statisticSuccessVue />
    <subscribeNewsletterVue />
  </main>
</template>


<script>
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
    joinCTAVue,
    achieveRewardVue,
    typeFieldsVue,
    readMoreCTAVue,
    recentCoursesVue,
    statisticSuccessVue,
    subscribeNewsletterVue,
  },
}
</script>


<style lang="scss" scoped>
#mainComponent {
  >* {
    margin: 1%;
    border: 1px solid black;
  }
}
</style>