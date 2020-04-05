<template lang="pug">
.NewsContainer
    .News(v-for='items in newsList')
        .NewsDate {{items.date}}
        .NewsTitle {{items.title.substring(0,38)}}
        .NewsMoreButton >
    .NewsLearnMore LEARN MORE
</template>
<script>
export default {
    components: {
    },
    props: ['news-list'],
    data(){
        return{
            
        }
    }
}
</script>
<style lang="sass">
@import "@/style/common.sass"
.NewsContainer
    display: flex
    flex-direction: column
.News
    position: relative
    color: $c-text
    background-color: $c-secondary
    display: flex
    flex-direction: row
    padding: 23px 33px 23px 33px
    margin-bottom: 25px
    overflow: hidden
.NewsDate
    font-size: 16px
.NewsTitle
    font-size: 25px
    width: 86%
    height: 20px
    overflow: hidden  
.NewsMoreButton
    color: $c-secondary
    font-weight: 600
    width: 25px
    height: 25px
    border-radius: 50%
    float: right
    background-color: $c-primary
.NewsMoreButton:hover
    cursor: pointer
    opacity: 0.75
.NewsLearnMore
    width: 194px
    height: 53px
    font-weight: 600
    align-self: flex-end
    padding: 15px 34px 15px 34px
    background-color: $c-secondary
    color: $c-primary
    font-size: 16px
.NewsLearnMore:hover
    cursor: pointer
    opacity: 0.75
@media only screen and (min-width: 480px)
    .NewsMoreButton
        position: absolute
        right: 33px
@media only screen and (max-width: 480px)
    .News
        flex-direction: column
        align-items: flex-start
        padding: 10px 20px 10px 20px
    .NewsDate
        font-size: 10px
    .NewsTitle
        font-size: 16px
        margin-bottom: 5px
    .NewsMoreButton
        align-self: flex-end

</style>