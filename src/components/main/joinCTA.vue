<template>
    <div class="flex flex-between-x little-container">

        <div class="flex flex-column flex-center-x" id="investing-you">
            <h2 id="start-investing">Start Investing in You</h2>
            <p>With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you</p>
            <button class="blue-button pill-button" id="join-cta">
                <a href="#" class="white-font">
                    JOIN FOR FREE
                </a>
            </button>
        </div>

        <div class="flex flex-center-y relative">
            <img src="@/assets/img/images/base.png" alt="Image of a screen">
            <img src="@/assets/img/images/book1.png" alt="book with people" class="absolute" id="book1">
            <img src="@/assets/img/images/book2.png" alt="book with children" class="absolute" id="book2">
            <img src="@/assets/img/images/bubblespeech.png" alt="comics cloud" class="absolute" id="bubble-speech">
            <img src="@/assets/img/images/magnifier.png" alt="Zoom lent" class="absolute" id="zoom-lent">
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
    width: 8rem;
}

#investing-you {
    >* {
        margin: 1rem;
    }
}

#start-investing {
    font-size: 3rem;
    font-weight: 300;
}

#book1 {
    width: 10rem;
    right: 1.5rem;
    top: 4.5rem;
}

#book2 {
    width: 10rem;
    bottom: 2rem;
    left: 11rem;
}

#bubble-speech {
    width: 4rem;
    right: 1rem;
    top: 2rem;
}

#zoom-lent {
    width: 3.5rem;
    bottom: 5.5rem;
    right: 3.5rem;
}
</style>  