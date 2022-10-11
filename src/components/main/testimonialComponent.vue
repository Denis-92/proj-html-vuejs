<template>
    <div class="little-container">

        <div class="flex flex-column white-bg relative" id="w-cloud-container">

            <font-awesome-icon icon="fa-solid fa-caret-right" class="absolute" id="arrow-cloud-container" />

            <div id="text-cloud-container">

                <h2>Come as you are</h2>
                <p>
                    MasterStudy used is an excellent workshop whether you come
                    as a counselor, advisor, administrator, or faculty member. I am
                    going home empowered. I am looking forward to attending
                    the On Course MasterStudy and the MasterStudy National
                    Conference next year and facilitating the use of this excellent
                    retention/student success course at my college.
                </p>

                <div id="author-sign">Tim Sab</div>
                <div>General Developer, Stylemix Themes</div>

            </div>

        </div>

    </div>
</template>
  

<script>
export default {
    name: 'testimonialComponent',
}
</script>
  

<style lang="scss" scoped>
h2 {
    font-size: 2rem;
    font-weight: 400;
}

p {
    margin: 1.5rem 0;
    color: #888;
}

#author-sign {
    font-weight: bold;
}

#text-cloud-container {
    margin: 2rem;
    padding: 2rem 2rem 4rem;
}

#w-cloud-container {
    width: 60%;
}

#arrow-cloud-container {
    top: calc(50% - 1rem);
    right: -1rem;
    color: white;
    font-size: 3rem;
}
</style>  