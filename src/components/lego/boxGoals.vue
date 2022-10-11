<template>
    <div class="little-container flex">

        <div>
            <div class="icon-properties">
                <font-awesome-icon :icon="importedGoals.icon" />
            </div>
            <h2> {{ importedGoals.title }} </h2>
            <p class="grey-font">
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
.icon-properties {
    color: blue;
    font-size: 3rem;
}

h2 {
    font-weight: 400;
    padding: 1rem 0;
}

h2,
p {
    font-size: 0.9rem;
}
</style>  