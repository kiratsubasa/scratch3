<template lang="pug">
.NewsContainer
    .News(v-for='items in newsList')
        .NewsDate {{items.date}}
        .NewsTitle {{items.title.substring(0,35)}}
        .NewsMoreButton
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
.News
    background-color: #ECE8E3
    display: flex
    flex-direction: row
    padding: 23px 33px 23px 33px
    margin-bottom: 25px
.NewsDate
    font-size: 16px
.NewsTitle
    font-size: 25px

</style>