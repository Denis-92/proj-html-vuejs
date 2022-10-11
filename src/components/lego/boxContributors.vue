<template>

    <div class="flex flex-center-y flex-center-x" id="container-section">

        <div class="flex flex-column">
            <h2>
                {{ importedContributor.title }}
            </h2>
            <p>
                {{importedContributor.description}}
            </p>
            <button class="blue-button pill-button" id="button-start-teaching">
                <a href="#" class="white-font">
                    {{ importedContributor.action }}
                </a>
            </button>
        </div>

    </div>

</template>
  

<script>
export default {
    name: 'startTeaching',
    props: {
        importedContributor: Object,
    }
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