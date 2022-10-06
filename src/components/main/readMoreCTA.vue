<template>
    <div class="little-container">

        <div class="flex" id="jumbotron-text">

            <div class="flex flex-column">
                <h3>Limitless learning, more possibilities</h3>
                <p>
                    Online courses open the opportunity for learning to almost anyone,
                    regardless of their scheduling commitments.
                </p>
                <button>READ MORE</button>
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
    width: 10rem;
}

#jumbotron-text {
    width: 50%;
    font-size: 1.4rem;
    padding: 5rem 0;

    >div>* {
        margin: 1rem 0;
    }
}
</style>  