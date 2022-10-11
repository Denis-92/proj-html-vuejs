<template>
    <div class="little-container flex">

        <boxGoalsVue :importedGoals="importedGoals[0]" />

        <boxGoalsVue :importedGoals="importedGoals[1]" />

        <boxGoalsVue :importedGoals="importedGoals[2]" />

    </div>
</template>
  

<script>
import boxGoalsVue from '@/components/lego/boxGoals.vue'
export default {
    name: 'achieveReward',
    props: {
        importedGoals: Array,
    },
    components: {
        boxGoalsVue,
    },
}
</script>
  

<style lang="scss" scoped>

</style>  