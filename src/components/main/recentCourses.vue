<template>
    <div class="big-container">
        <div class="flex flex-column flex-center-y">

            <h2>Recent courses</h2>

            <div class="flex flex-aroud-x">
                <ul v-for="element in importedCategoriesCourses" :key="element.category">
                    <li>
                        <button class="pill-button" id="course-categories-button">
                            <a href="#">
                                {{ element.category }}
                            </a>
                        </button>
                    </li>
                </ul>
            </div>

            <!-- START CARDS -->
            <div class="flex flex-aroud-x flex-wrap flex-center-y cards-container">

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/photo-1461749280684-dccba630e2f6-544x322.jpeg"
                        alt="Web Coding and Apache Basics">
                    <h4>Apache</h4>
                    <p>Web Coding and Apache Basics</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>6 hours</p>
                        <p>Free</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/cat_2-544x322.jpg" alt="Real Things Art Painting by Jason Ni">
                    <h4>Art</h4>
                    <p>Real Things Art Painting by Jason Ni</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>6 hours</p>
                        <div>
                            <p>$60</p>
                            <p>$45</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/course-preview-544x322.jpg" alt="Basics of Masterstudy">
                    <h4>Software Development</h4>
                    <p>Basics of Masterstudy</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <div>VOTO 5</div>
                        <p>Free</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/photo-1496307042754-b4aa456c4a2d-544x322.jpeg" alt="Electronic music">
                    <h4>Electronic</h4>
                    <p>How to be a DJ? Make Electronic Music</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <div>VOTO 5</div>
                        <div class="flex flex-column">
                            <p>$59</p>
                            <p>$49</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/photo-1416339134316-0e91dc9ded92-scaled-544x322.jpeg"
                        alt="Design objects">
                    <h4>Communication</h4>
                    <p>Design Instruments for Communication</p>
                    <div class="summary">
                        <p>6 hours</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/cathryn-lavery-67852-unsplash-544x322.jpg"
                        alt="Image of writing in a book">
                    <h4>Art</h4>
                    <p>Make your Concept Right and Beautiful</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>6 hours</p>
                        <p>$70</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/photo-1475452779376-caebfb988090-544x322.jpeg" alt="Road bike">
                    <h4>Bicycling</h4>
                    <p>Road Bike Manual or How to Be a Champion.</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>6 hours</p>
                        <p>$20</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/cristian-grecu-762012-unsplash-min-scaled-544x322.jpg"
                        alt="Mountain landscape image">
                    <h4>Documentary</h4>
                    <p>How to Make Beautiful Landscape photos?</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>6 hours</p>
                        <p>$60</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/landscape-544x322.jpg" alt="Van Gogh's picture">
                    <h4>Art</h4>
                    <p>Let's paint Van Gogh's Starry Night</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>6 hours</p>
                        <p>$79</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/12345-1-544x322.png" alt="Unreal engine">
                    <h4>Nvidia</h4>
                    <p>Nvidia and UE4 Technologies Practice</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>VOTO 5</p>
                        <p>Free</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/jakob-owens-198234-unsplash-min-1-544x322.png"
                        alt="Professional camera">
                    <h4>Art</h4>
                    <p>How to Work with Legendary RED camera?</p>
                    <div class="flex flex-between-x flex-center-y summary">
                        <p>6 hours</p>
                        <p>Free</p>
                    </div>
                </div>

                <div class="flex flex-column flex-between-x">
                    <img src="@/assets/img/images/promo_tf-544x322.jpg" alt="Image of phones">
                    <h4>Software Development</h4>
                    <p>MasterStudy Mobile LMS App</p>
                    <div class="flex flex-between-x summary">
                        <p>2 hours</p>
                        <p>Free</p>
                    </div>
                </div>

            </div>
            <!-- END CARDS -->

            <button class="blue-button pill-button" id="show-all-button">
                <a href="#" class="white-font">
                    SHOW ALL
                </a>
            </button>

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
.cards-container>* {
    width: calc(100% / 6 - 1rem);
    margin: 0.5rem;
    height: 18rem;
    border: 1px solid #888;

    >* {}
}

h2 {
    font-size: 2.5rem;
    font-weight: 400;
    color: #888;
    margin-bottom: 1rem;
}

#course-categories-button {
    border: 0;
    padding: 0.5rem 1rem;
    background-color: #fff;
}

#show-all-button {
    margin-top: 3rem;
}

h4 {
    font-weight: 400;
    color: #888;
    font-size: 0.9rem;
}

.summary {
    border-top: 1px solid #888;
    padding-top: 0.5rem;
    width: 90%;

}

.summary,
h4,
p {
    margin: 0.3rem;
}
</style>  