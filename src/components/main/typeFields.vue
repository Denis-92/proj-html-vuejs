<template>
    <div class="little-container">
        <div class="flex flex-between-x flex-wrap" id="image-container">

            <div id="first-image">
                <img src="@/assets/img/images/cat_1-770x375.jpg" alt="Image of laptops">
            </div>

            <!-- container for big column -->
            <div>
                <div>
                    <img src="@/assets/img/images/cat_2-370x155.jpg" alt="Image of painting colors">
                </div>
                <div>
                    <img src="@/assets/img/images/cat_3-370x155.jpg" alt="Image of laptop">
                </div>
            </div>
            <!-- /container for big column -->

            <div>
                <img src="@/assets/img/images/cat_5-370x155.jpg" alt="Image of violin">
            </div>

            <div>
                <img src="@/assets/img/images/cat_4-370x155.jpg" alt="Image of workout">
            </div>

            <div>
                <img src="@/assets/img/images/cat_6-370x155.jpg" alt="Image of landscape">
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
img {
    width: 100%;
    height: auto;
}

#image-container {
    >* {
        width: calc(100% / 3 - 1rem);
    }

    #first-image {
        width: calc(100% / 3 * 2 - 1rem);
    }
}

.flex-no-stretch {
    align-self: flex-start;
}
</style>  