<template>
    <div class="big-container">
        <div class="flex flex-between-x flex-center-y">

            <div class="flex flex-center-y">
                <a href="#" class="flex flex-center-y">
                    <img src="@/assets/img/images/MasterStudy_logo.svg" alt="Master Study Logo">
                </a>
            </div>

            <div class="flex">

                <div class="flex flex-center-y">
                    <a href="#" class="flex flex-center-y" id="category">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                        <p>CATEGORY</p>
                    </a>
                </div>

                <div class="flex flex-center-y">
                    <input type="text" placeholder="Search courses" id="search-box">
                    <button class="blue-button">
                        <a href="#">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="white-font" />
                        </a>
                    </button>
                </div>

            </div>


            <a href="#">
                <font-awesome-icon icon="fa-solid fa-bullhorn" />
                Become an Instructor
            </a>


            <a href="#">
                <font-awesome-icon icon="fa-solid fa-briefcase" />
                For Enterprise
            </a>


            <a href="#">
                <font-awesome-icon icon="fa-solid fa-user" />
                Log in
            </a>

            <button class="blue-button pill-button">
                <a href="#" class="white-font">
                    SIGN UP
                </a>
            </button>

            <font-awesome-icon icon="fa-solid fa-bookmark" class="blue-icon" />

        </div>
    </div>
</template>
  

<script>
export default {
    name: 'linksAction',
}
</script>
  

<style lang="scss" scoped>
#category {
    padding-right: 0.3rem;

    >* {
        padding-right: 0.2rem;
        color: #888;
        font-size: 0.8rem;
    }
}

#search-box {
    background-color: #f0f2f5;
    padding: 0.5rem 0.5rem;
    border: 0;
    width: 25rem;
}

.blue-icon {
    color: #195ec8;
}
</style>  