<template>
    <div class="little-container">

        <div class="flex" id="jumbotron-text">

            <div class="flex flex-column">
                <h2>Limitless learning, more possibilities</h2>
                <p>
                    Online courses open the opportunity for learning to almost anyone,
                    regardless of their scheduling commitments.
                </p>
                <button class="blue-button pill-button">
                    <a href="#" class="white-font">
                        READ MORE
                    </a>
                </button>
            </div>

        </div>

    </div>
</template>
  

<script>
export default {
    name: 'readMoreCTA',
}
</script>
  

<style lang="scss" scoped>
button {
    width: 8rem;
    padding: 0.7rem 0;
}

#jumbotron-text {
    width: 47%;
    font-size: 1.4rem;
    padding: 5rem 0;

    >div>* {
        margin: 1rem 0;
        font-weight: 200;
    }

    h2 {
        font-size: 3rem;
    }
}
</style>  