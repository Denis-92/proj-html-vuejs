<template>
  <main id="mainComponent">

    <joinCTAVue />

    <achieveRewardVue />

    <typeFieldsVue />

    <div id="jumbotron-read-more">
      <readMoreCTAVue />
    </div>

    <recentCoursesVue :importedCourses="importedCourses" :importedCategoriesCourses="importedCategoriesCourses" />

    <div id="jumbotron-we-proud">
      <statisticSuccessVue />
    </div>

    <div id="newsletter">
      <subscribeNewsletterVue />
    </div>

    <popularCoursesVue :importedCourses="importedCourses" />

    <div class="flex big-container">
      <startTeachingVue />
      <doingBusinessVue />
    </div>

    <div id="jumbotron-testimonial">
      <testimonialComponentVue />
    </div>

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
import popularCoursesVue from '@/components/main/popularCourses.vue';
import startTeachingVue from '@/components/main/startTeaching.vue';
import doingBusinessVue from '@/components/main/doingBusiness.vue';
import testimonialComponentVue from '@/components/main/testimonialComponent.vue';

export default {
  name: 'mainComponent',
  components: {
    joinCTAVue,
    achieveRewardVue,
    typeFieldsVue,
    readMoreCTAVue,
    recentCoursesVue,
    statisticSuccessVue,
    subscribeNewsletterVue,
    popularCoursesVue,
    startTeachingVue,
    doingBusinessVue,
    testimonialComponentVue,
  },
  props: {
    importedCourses: Array,
    importedCategoriesCourses: Array,
  }
}
</script>


<style lang="scss" scoped>
#mainComponent {
  >* {
    margin: 2rem auto;
    border: 1px solid black;
  }
}

#jumbotron-read-more {
  background-image: url('@/assets/img/images/Untitled-1-1-1-1-1.png');
  background-position: center;
  background-size: cover; //oppure contain?
}

#jumbotron-we-proud {
  background-image: url('@/assets/img/images/we_proud.png');
  background-position: center;
  background-size: cover;
}

#jumbotron-testimonial {
  background-image: url('@/assets/img/images/brooke-cagle-224821-unsplash-1-1920x700.jpg');
  background-position: center;
  background-size: cover;
}

#newsletter {
  background-color: green;
  color: white;
}
</style>