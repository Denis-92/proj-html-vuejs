<template>
    <div class="little-container">
        <div class="flex flex-column flex-center-y" id="statistics">

            <h2>We are Proud</h2>

            <p>
                Certificate courses are instructed by highly educated and qualified instructors
                who hold doctoral and master's level degrees.
            </p>

            <div class="flex flex-center-x" id="numbers">

                <div class="flex flex-column flex-center-y flex-center-x" id="first-item">
                    <p>2000</p>
                    <span>STUDENT</span>
                </div>

                <div class="flex flex-column flex-center-y flex-center-x">
                    <p>950</p>
                    <span>COURSES</span>
                </div>

                <div class="flex flex-column flex-center-y flex-center-x">
                    <p>1600</p>
                    <span>HOURS VIDEO</span>
                </div>

                <div class="flex flex-column flex-center-y flex-center-x">
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
h2 {
    font-size: 2.5rem;
    font-weight: 100;
}

#statistics {
    >* {
        margin-top: 1.5rem;
    }

    >p {
        width: 65%;
        text-align: center;
        color: #888;
    }

}

#numbers {
    padding-bottom: 15rem;
    width: 100%;

    >div {
        padding: 1rem 5rem;
        border-left: 1px solid grey;
    }

    p {
        font-size: 3rem;
        font-weight: 200;
    }

    #first-item {
        border: 0;
    }

    span {
        font-weight: 200;
    }

}
</style>  