<template>
    <div class="big-container">
        <div class="flex">

            <div class="flex flex-column w-50">
                <h2>Subscribe our newsletter</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form,
                    by injected humor, or randomised words
                </p>
            </div>

            <div class="flex flex-column">
                <h3>YOUR E-MAIL ADDRESS</h3>
                <div>
                    <input type="text" placeholder="Enter your E-mail" id="input-email-box">
                    <button class="blue-button">SUBSCRIBE</button>
                </div>
            </div>

        </div>
    </div>
</template>
  

<script>
export default {
    name: 'subscribeNewsletter',
}
</script>
  

<style lang="scss" scoped>
h3 {
    padding: 1rem 0;
}

#input-email-box {
    padding: 0.5rem 1rem;
    border: 0;
    width: 20rem;
}
</style>  