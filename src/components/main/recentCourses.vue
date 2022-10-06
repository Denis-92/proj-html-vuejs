<template>
    <div class="big-container">
        <div class="flex flex-column flex-center-y">
            <h3>Recent courses</h3>
            <div class="flex flex-aroud-x">
                <ul v-for="element in importedCourses" :key="element.id">
                    <li>
                        <button>
                            {{ element.category }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  

<script>
export default {
    name: 'recentCourses',
    props: {
        importedCourses: Array,
    },
}
</script>
  

<style lang="scss" scoped>
div {
    background-color: blue;
    height: 200px;
}
</style>  