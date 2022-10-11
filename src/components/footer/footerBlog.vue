<template>
    <div>

        <h3>Blog</h3>

        <ul class="flex flex-column">

            <li class="flex">
                <div>
                    <img src="@/assets/img/images/photo-1517520287167-4bbf64a00d66-150x150.jpeg" alt="develop yourself">
                </div>
                <div class="flex flex-column flex-center-x">
                    <p>
                        Our main target is to
                        "Developing Yourself as
                        a Leader"
                    </p>
                    <p>
                        - August 9, 2018
                    </p>
                </div>
            </li>

            <li class="flex">
                <div>
                    <img src="@/assets/img/images/photo-1490376840453-5f616fbebe5b-150x150.jpeg" alt="college school">
                </div>
                <div class="flex flex-column">
                    <p>
                        Those Other college
                        Expenses You Aren't
                        Thinking About
                    </p>
                    <p>
                        - June 3, 2015
                    </p>
                </div>
            </li>

        </ul>

    </div>
</template>
  

<script>
export default {
    name: 'footerBlog',
}
</script>
  

<style lang="scss" scoped>
p {
    font-size: 0.8rem;
    color: #888;
    margin-left: 0.5rem;
}

li {
    margin: 0.5rem 0;
}
</style>  