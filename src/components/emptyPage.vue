<template lang="pug">
.emptyPageContainer
    .emptyPagePic
        .emptyPageTitle(v-html='emptyPage.title')
</template>
<script>
export default {
    components: {
    },
    props: ['empty-page'],
    data(){
        return{
            
        }
    }
}
</script>
<style lang="sass">
.emptyPageContainer
    padding-bottom: 135px
    dispaly: flex
    flex-direction: row

</style>