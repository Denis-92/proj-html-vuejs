<template>

    <div class="flex flex-center-y flex-center-x" id="container-section">

        <div>
            <img src="@/assets/img/images/image_box_1-221x231.png" alt="colored computer screens">
        </div>

        <div class="flex flex-column">
            <h2>Become an Instructor</h2>
            <p>
                Teach what you love. Masterstudy gives you
                the tools to create a course.
            </p>
            <button class="blue-button pill-button" id="button-start-teaching">
                <a href="#" class="white-font">
                    START TEACHING
                </a>
            </button>
        </div>

    </div>

</template>
  

<script>
export default {
    name: 'startTeaching',
}
</script>
  

<style lang="scss" scoped>
button {
    width: 10rem;
}

#button-start-teaching {
    padding: 0.8rem 0;
}

#container-section {
    padding: 2rem 0.5rem;

    >* {
        margin: 0.5rem;

        >* {
            margin: 0.5rem;
        }

        h2 {
            font-weight: 400;
            font-size: 2rem;
        }

        p {
            color: #888;
        }
    }
}
</style>  