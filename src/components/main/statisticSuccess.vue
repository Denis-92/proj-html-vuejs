<template>
    <div class="little-container">
        <div class="flex flex-column flex-center-y" id="statistics">

            <h2>We are Proud</h2>

            <p>Certificate courses are instructed by highly educated and qualified instructors who hold
                doctoral and master's level degrees.
            </p>

            <div class="flex flex-around-x" id="numbers">
                <div class="flex flex-column flex-center-y">
                    <p>2000</p>
                    <span>STUDENT</span>
                </div>
                <div class="flex flex-column flex-center-y">
                    <p>950</p>
                    <span>COURSES</span>
                </div>
                <div class="flex flex-column flex-center-y">
                    <p>1600</p>
                    <span>HOURS VIDEO</span>
                </div>
                <div class="flex flex-column flex-center-y">
                    <p>150</p>
                    <span>COUNTRIES REACHED</span>
                </div>
            </div>

        </div>
    </div>
</template>
  

<script>
export default {
    name: 'statisticSuccess',
}
</script>
  

<style lang="scss" scoped>
#statistics {
    >* {
        margin-top: 2rem;
    }
}

#numbers {
    padding-bottom: 15rem;

    >div {
        padding: 1rem;
        border-left: 1px solid grey;
    }

    p {
        font-size: 3rem;
    }
}
</style>  