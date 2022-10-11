<template>
    <div class="flex flex-center-y flex-center-x" id="container-section">

        <div>
            <img src="@/assets/img/images/image_box_1-221x231.png" alt="colored computer screens">
        </div>

        <BoxContributorsVue :importedContributor="importedContributor" />

    </div>
</template>
  

<script>
import BoxContributorsVue from '../lego/boxContributors.vue';

export default {
    name: "startTeaching",
    props: {
        importedContributor: Object,
    },
    components: {
        BoxContributorsVue,
    },
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