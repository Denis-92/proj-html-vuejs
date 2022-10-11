<template>
    <div class="little-container flex">

        <div>
            <font-awesome-icon :icon="importedGoals.icon" />
            <h2> {{ importedGoals.title }} </h2>
            <p>
                {{ importedGoals.description }}
            </p>
        </div>

    </div>
</template>
  

<script>
export default {
    name: 'boxGoals',
    props: {
        importedGoals: Object,
    }
}
</script>
  

<style lang="scss" scoped>

</style>  