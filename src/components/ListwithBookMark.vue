<template lang="pug">
#app
    .BookMarkContainer
        .BookMarkList(v-for='(item,i) in bookmarkList')
            router-link#BookMarkRouter(:to='item.link') {{item.bookMarkTitle}}  
            
</template>

<script>

export default {
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
@import "@/style/common.sass"

</style>

