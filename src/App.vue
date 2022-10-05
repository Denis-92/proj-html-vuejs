<template>
  <div id="app">
    <navigationMenuVue />
    <linksActionVue />
  </div>
</template>


<script>
import navigationMenuVue from '@/components/header/navigationMenu.vue';
import linksActionVue from '@/components/header/linksAction.vue';

export default {
  name: 'App',
  components: {
    navigationMenuVue,
    linksActionVue,
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