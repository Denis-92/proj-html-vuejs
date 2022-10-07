<template>
    <div class="big-container">
        <div class="flex flex-column flex-center-y">

            <h3>Recent courses</h3>

            <div class="flex flex-aroud-x">
                <ul v-for="element in importedCategoriesCourses" :key="element.category">
                    <li>
                        <button>
                            {{ element.category }}
                        </button>
                    </li>
                </ul>
            </div>

            <div class="flex flex-aroud-x flex-wrap flex-center-y">
                <div v-for="element in importedCourses" :key="element.id" class="cards-container">
                    <div>
                        <img src="@/assets/img/images/photo-1461749280684-dccba630e2f6-544x322.jpeg"
                            :alt="element.name">
                        {{ element.name }}
                    </div>
                </div>
            </div>

            <button>SHOW ALL</button>

        </div>
    </div>
</template>
  

<script>
export default {
    name: 'recentCourses',
    props: {
        importedCourses: Array,
        importedCategoriesCourses: Array,
    },
}
</script>
  

<style lang="scss" scoped>
.cards-container {
    width: calc(100% / 6 - 1rem);
    margin: 0.1rem;

    >* {
        margin: 0.2rem;
    }
}

img {
    width: 100%;
    height: auto;
}
</style>  