<template>
  <div id="app">
    <navigationMenuVue />
    <linksActionVue />
    <joinCTAVue />
    <achieveRewardVue />
  </div>
</template>


<script>
import navigationMenuVue from '@/components/header/navigationMenu.vue';
import linksActionVue from '@/components/header/linksAction.vue';
import joinCTAVue from '@/components/main/joinCTA.vue'
import achieveRewardVue from '@/components/main/achieveReward.vue';

export default {
  name: 'App',
  components: {
    navigationMenuVue,
    linksActionVue,
    joinCTAVue,
    achieveRewardVue,
  },
}
</script>


<style lang="scss">
#app {
  >* {
    margin: 1%;
    border: 1px solid black;
  }
}
</style>