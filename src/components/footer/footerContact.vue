<template>
    <div>
        <h3>Contact</h3>
        <p class="grey-font">
            {{ importedContactsFooter[3].address }}
        </p>
        <p class="grey-font">{{ importedContactsFooter[0].type }}: {{ importedContactsFooter[0].number }}</p>
        <p class="grey-font">{{ importedContactsFooter[1].type }}: {{ importedContactsFooter[1].number }}</p>
        <a href="#" class="grey-font"> {{ importedContactsFooter[2].address }} </a>
    </div>
</template>
  

<script>
export default {
    name: 'footerContact',
    props: {
        importedContactsFooter: Array,
    }
}
</script>
  

<style lang="scss" scoped>

</style>  