<template lang="pug">
.emptyPageContainer
    .emptyPagePic(v-html='emptyPage.img')
    .emptyPageText
        .emptyPageTitle(v-html='emptyPage.title')
        .emptyPageContent(v-html='emptyPage.content')
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
@import "@/style/common.sass"
.emptyPageContainer
    padding-bottom: 135px
    display: flex
    flex-direction: row
    justify-content: space-between
    color: $c-text
.emptyPagePic
    width: 670px
.emptyPageText
    width: 670px
    padding: 10px
.emptyPageTitle
    font-size: 33px
    font-weight: 600
    text-align: left
    line-height: 40px
    margin-bottom: 30px
.emptyPageContent
    font-size: 16px
    text-align: left
    line-height: 25px
@media only screen and (max-width: 480px)
    .emptyPageContainer
        flex-direction: column
    .emptyPagePic
        width: 100%
    .emptyPageText
        width: 100%
    .emptyPageTitle
        font-size: 16px
        font-weight: 600
        text-align: left
        line-height: 20px
        margin-bottom: 10px
    .emptyPageContent
        font-size: 10px
        text-align: left
        line-height: 15px
</style>