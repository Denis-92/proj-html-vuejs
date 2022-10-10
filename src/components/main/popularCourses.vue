<template>
    <div class="big-container">
        <div class="flex flex-column flex-center-y">

            <h2>Popular courses</h2>
            <h3>Discover our most popular courses for self learning</h3>

            <!-- START CARDS -->
            <div class="flex flex-aroud-x flex-wrap flex-center-y cards-container">

                <div class="flex flex-column flex-between-x">
                    <div class="image-box">
                        <img src="@/assets/img/images/photo-1461749280684-dccba630e2f6-544x322.jpeg"
                            alt="Web Coding and Apache Basics">
                    </div>
                    <h4>Apache</h4>
                    <p>Web Coding and Apache Basics</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>6 hours</p>
                        <p>Free</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <div class="image-box">
                        <img src="@/assets/img/images/cat_2-544x322.jpg" alt="Real Things Art Painting by Jason Ni">
                    </div>
                    <h4>Art</h4>
                    <p>Real Things Art Painting by Jason Ni</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>6 hours</p>
                        <div>
                            <p class="discount">$60</p>
                            <p>$45</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <div class="image-box">
                        <img src="@/assets/img/images/course-preview-544x322.jpg" alt="Basics of Masterstudy">
                    </div>
                    <h4>Software Development</h4>
                    <p>Basics of Masterstudy</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <div class="flex">
                            <img src="@/assets/img/images/starfull.svg" alt="yellow star rating">
                            <img src="@/assets/img/images/starfull.svg" alt="yellow star rating">
                            <img src="@/assets/img/images/starfull.svg" alt="yellow star rating">
                            <img src="@/assets/img/images/starfull.svg" alt="yellow star rating">
                            <img src="@/assets/img/images/starfull.svg" alt="yellow star rating">
                            <span>5</span>
                        </div>
                        <p>Free</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <div class="image-box">
                        <img src="@/assets/img/images/photo-1496307042754-b4aa456c4a2d-544x322.jpeg"
                            alt="Electronic music">
                    </div>
                    <h4>Electronic</h4>
                    <p>How to be a DJ? Make Electronic Music</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <div class="flex">
                            <img src="@/assets/img/images/starfull.svg" alt="yellow star rating">
                            <img src="@/assets/img/images/starfull.svg" alt="yellow star rating">
                            <img src="@/assets/img/images/starfull.svg" alt="yellow star rating">
                            <img src="@/assets/img/images/starfull.svg" alt="yellow star rating">
                            <img src="@/assets/img/images/starfull.svg" alt="yellow star rating">
                            <span>5</span>
                        </div>
                        <div class="flex flex-column">
                            <p class="discount">$59</p>
                            <p>$49</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <div class="image-box">
                        <img src="@/assets/img/images/photo-1416339134316-0e91dc9ded92-scaled-544x322.jpeg"
                            alt="Design objects">
                    </div>
                    <h4>Communication</h4>
                    <p>Design Instruments for Communication</p>
                    <div class="summary">
                        <p>6 hours</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <div class="image-box">
                        <img src="@/assets/img/images/cathryn-lavery-67852-unsplash-544x322.jpg"
                            alt="Image of writing in a book">
                    </div>
                    <h4>Art</h4>
                    <p>Make your Concept Right and Beautiful</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>6 hours</p>
                        <p>$70</p>
                    </div>
                </div>

            </div>
            <!-- END CARDS -->

            <div class="flex" id="arrow-buttons">
                <button>
                    <a href="#">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                    </a>
                </button>
                <button>
                    <a href="#">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    </a>
                </button>
            </div>

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
.cards-container>* {
    width: calc(100% / 6 - 1rem);
    margin: 0.5rem;
    height: 18rem;
    border: 1px solid #888;
    background-color: #fff;

    >* {
        margin: 0.5rem;
    }
}

h2 {
    font-size: 2.5rem;
    font-weight: 400;
    color: #888;
    margin-bottom: 1rem;
}

h3 {
    font-size: 1rem;
    color: #888;
    margin: 1rem 0 2rem;
    font-weight: 400;
}

.image-box {
    margin: 0;
}

.summary {
    border-top: 1px solid #888;
    padding-top: 0.5rem;
    width: 90%;
}

.discount {
    text-decoration: line-through;
    color: #888;
    font-size: 0.8rem;
    text-align: right;
}

h4 {
    font-weight: 400;
    color: #888;
    font-size: 0.9rem;
}

#arrow-buttons>* {
    border: 1px solid #888;
    background-color: #fff;
    padding: 0.8rem;
    margin-top: 2rem;

    a {
        color: #888;
    }
}
</style>  