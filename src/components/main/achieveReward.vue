<template>
    <div class="little-container flex flex-center-y">

        <div class="goals-container">
            <boxGoalsVue :importedGoals="importedGoals[0]" />
        </div>

        <div class="goals-container">
            <boxGoalsVue :importedGoals="importedGoals[1]" />
        </div>

        <div class="goals-container">
            <boxGoalsVue :importedGoals="importedGoals[2]" />
        </div>

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
.goals-container {
    background-color: #f2f6fb;
    margin-left: 1rem;
    padding: 1rem;
    height: 14rem;
}
</style>  