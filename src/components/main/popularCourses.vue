<template>
    <div class="big-container">
        <div class="flex flex-column flex-center-y">

            <h3>Popular courses</h3>
            <p>Discover our most popular courses for self learning</p>

            <div class="flex flex-aroud-x flex-wrap flex-center-y">
                <div v-for="element in importedCourses" :key="element.id" class="cards-container">
                    <div>
                        <img src="@/assets/img/images/photo-1461749280684-dccba630e2f6-544x322.jpeg"
                            :alt="element.name">
                        {{ element.name }}
                    </div>
                </div>
            </div>

            <button>LEFT ARROW</button>
            <button>RIGHT ARROW</button>

        </div>
    </div>
</template>
  

<script>
export default {
    name: 'popularCourses',
    props: {
        importedCourses: Array,
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