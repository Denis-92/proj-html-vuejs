<template>
    <div class="flex flex-between-x" id="join-cta-container">
        <div class="flex flex-column flex-center-x" id="investing-you">
            <h2>Start Investing in You</h2>
            <p>With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you</p>
            <button id="join-cta">JOIN FOR FREE</button>
        </div>
        <div class="flex flex-center-y">
            <img src="@/assets/img/images/base.png" alt="Image of a screen">
        </div>
    </div>
</template>
  

<script>
export default {
    name: 'joinCTA',
}
</script>
  

<style lang="scss" scoped>
#join-cta {
    width: 10rem;
}

#join-cta-container {
    max-width: 1000px;
    margin: 0 auto;

    >div {
        height: 25rem;
    }
}

#investing-you {
    >* {
        margin: 1rem;
    }
}
</style>  