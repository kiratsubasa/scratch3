<template lang="pug">
#app
    SearchBar(:search-placeholder="searchPlaceholder" :search-lists="searchLists")
    .BookMarkList(v-for='(item,i) in bookmarkList')
        router-link#BookMarkRouter(:to='item.link') 
            .BoolMarkTitle(v-if="i!=markIndex") {{item.bookMarkTitle}}
        router-link.markActive(v-if="i==markIndex" :to='item.link') {{item.bookMarkTitle}}
            
            
</template>

<script>
import SearchBar from '@/components/searchBar.vue'
export default {
    components: {
        SearchBar
    },
    props: ['mark-index','bookmark-list','page-title','search-placeholder','search-lists'],
    data() {
        return {
            bgImg: [
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/59821222_10216261950555708_2566258000335470592_n.jpg'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2018/07/170825_2017aura_012.jpg'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/59821222_10216261950555708_2566258000335470592_n.jpg'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2018/07/170825_2017aura_012.jpg'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/59821222_10216261950555708_2566258000335470592_n.jpg'}
            ]
        }
    }
}

</script>

<style lang="sass">
.BoolMarkTitle
    margin: 10px
    -webkit-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.05)
    box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.05)
#BookMarkRouter
    text-align: left
    color: #444
    text-decoration: none
    transition: .01s
    transition-timing-function: ease 
#BookMarkRouter:hover
    color: #D1B1B4
.markActive
    background-color: #F2DCE0
    margin: 10px
    padding-left: 10px
    padding-right: 10px
    text-align: left
    width: 1000px
</style>

