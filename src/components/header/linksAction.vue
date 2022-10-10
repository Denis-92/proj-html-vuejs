<template>
    <div class="big-container">
        <div class="flex flex-between-x flex-center-y">
            <img src="@/assets/img/images/MasterStudy_logo.svg" alt="Master Study Logo">

            <div class="flex">

                <div class="flex flex-center-y" id="category">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                    <p>CATEGORY</p>
                </div>

                <div class="flex flex-center-y">
                    <input type="text" placeholder="Search courses" id="search-box">
                    <button id="button-search-box">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </button>
                </div>

            </div>

            <font-awesome-icon icon="fa-solid fa-bullhorn" />
            <a href="#">Become an Instructor</a>

            <font-awesome-icon icon="fa-solid fa-briefcase" />
            <a href="#">For Enterprise</a>

            <font-awesome-icon icon="fa-solid fa-user" />
            <a href="#">Log in</a>

            <button>SIGN UP</button>
            <font-awesome-icon icon="fa-solid fa-bookmark" />

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

#button-search-box {
    background-color: #195ec8;
    color: #fff;
    padding: 0.5rem 1rem;
    border: 0;
}
</style>  