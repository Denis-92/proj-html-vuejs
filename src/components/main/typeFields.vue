<template>
    <div class="little-container">
        <div class="flex flex-between-x flex-wrap" id="image-container">
            <img src="@/assets/img/images/cat_1-770x375.jpg" alt="Image of laptops" id="first-image">
            <img src="@/assets/img/images/cat_2-370x155.jpg" alt="Image of painting colors">
            <img src="@/assets/img/images/cat_3-370x155.jpg" alt="Image of laptop">
            <img src="@/assets/img/images/cat_4-370x155.jpg" alt="Image of violin">
            <img src="@/assets/img/images/cat_5-370x155.jpg" alt="Image of workout">
            <img src="@/assets/img/images/cat_6-370x155.jpg" alt="Image of landscape">
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
        padding: 1rem 0;
    }

    #first-image {
        width: calc(100% / 3 * 2);
    }


}
</style>  