<template lang="pug">
.NewsContainer
    .News(v-for='items in newsList')
        .NewsDate {{items.date}}
        .NewsTitle {{items.title.substring(0,35)}}
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
.NewsDate
    font-size: 16px
.NewsTitle
    font-size: 25px  
.NewsMoreButton
    color: $c-secondary
    font-weight: 600
    width: 25px
    height: 25px
    border-radius: 50%
    position: absolute
    right: 33px
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
</style>