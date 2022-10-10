<template>
    <div class="little-container">
        <div class="flex flex-between-x flex-wrap" id="image-container">

            <div id="first-image">
                <img src="@/assets/img/images/cat_1-770x375.jpg" alt="Image of laptops">
                <div class="flex flex-between-x">
                    <p>Software Development</p>
                    <p>5 Courses</p>
                </div>
            </div>

            <!-- container for big column -->
            <div class="flex flex-column flex-between-x">
                <div>
                    <img src="@/assets/img/images/cat_2-370x155.jpg" alt="Image of painting colors">
                    <div class="flex flex-between-x">
                        <p>Art</p>
                        <p>8 Courses</p>
                    </div>
                </div>
                <div>
                    <img src="@/assets/img/images/cat_3-370x155.jpg" alt="Image of laptop">
                    <div class="flex flex-between-x">
                        <p>Material Design</p>
                        <p>5 Courses</p>
                    </div>
                </div>
            </div>
            <!-- /container for big column -->

            <div>
                <img src="@/assets/img/images/cat_5-370x155.jpg" alt="Image of violin">
                <div class="flex flex-between-x">
                    <p>Music</p>
                    <p>5 Courses</p>
                </div>
            </div>

            <div>
                <img src="@/assets/img/images/cat_4-370x155.jpg" alt="Image of workout">
                <div class="flex flex-between-x">
                    <p>Exercise</p>
                    <p>7 Courses</p>
                </div>
            </div>

            <div>
                <img src="@/assets/img/images/cat_6-370x155.jpg" alt="Image of landscape">
                <div class="flex flex-between-x">
                    <p>Photography</p>
                    <p>4 Courses</p>
                </div>
            </div>

        </div>
    </div>
</template>
  

<script>
export default {
    name: 'typeFields',
}
</script>
  

<style lang="scss" scoped>
#image-container {
    >* {
        width: calc(100% / 3 - 1rem);
        margin: 0.5rem;
    }

    #first-image {
        width: calc(100% / 3 * 2 - 1rem);
    }
}

.flex-no-stretch {
    align-self: flex-start;
}

p {
    font-size: 0.9rem;
    color: #333;
}
</style>  