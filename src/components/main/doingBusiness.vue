<template>
    <div class="flex flex-center-y flex-center-x" id="container-section">

        <div>
            <img src="@/assets/img/images/image_box_2-234x231.png" alt="colored computer screens">
        </div>

        <div class="flex flex-column">
            <h2>Setup For Business</h2>
            <p>
                Get unlimited access to 2,500 of Udemy's top courses for your team.
            </p>
            <button class="blue-button pill-button" id="button-doing-business">
                <a href="#" class="white-font">
                    DOING BUSINESS
                </a>
            </button>
        </div>

    </div>
</template>
  

<script>
export default {
    name: 'doingBusiness',
}
</script>
  

<style lang="scss" scoped>
button {
    width: 10rem;
}

#button-doing-business {
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