<template lang="pug">
#app
    .listPageContent
        h1#listPageTitle {{bookmarkList.bookMarkTitle}}
        .List(v-for="idx in pageDataNum")
            .staffListContainer(v-if="bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1]")
                .staffShortIro
                    .staffListImage(v-if="bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1].src" :style="{'background-image': 'url(' + bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1].src + ')'}") 
                .staffListContentBlock
                    .staffListTitle {{bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1].title}}
                    .staffListTitle {{bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1].staffTitle}}
                    .staffListContent(v-for="text in bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1].content.text") {{text}}

        a#myhref.pageBtn(href="#").firstPage(v-if="currentPage!=1" @click="setPage(1)") {{ firstPage }}
        a#myhref.pageBtn(href="#").previous(v-if="currentPage!=1" @click="setPage(currentPage - 1)") {{ prev }}
        select.pageSel(v-model="currentPage")
            option(v-for="idx in totalPage") {{ idx }}
        a#myhref.pageBtn(href="#").next(v-if="currentPage!=totalPage" @click="setPage(currentPage + 1)") {{ next }}
        a#myhref.pageBtn(href="#").finalPage(v-if="currentPage!=totalPage" @click="setPage(totalPage)") {{ finalPage }}
</template>

<script>
export default {
    
    props: ['bookmark-list','page-title'],
    data() {
        return {
            pageDataNum: 5,
            currentPage: 1,
            totalPage: 1,
            firstPage: '第一頁',
            prev: '上一頁',
            next: '下一頁',
            finalPage: '最末頁',
            pagenumberList: [], 
        }
    },
    beforeMount(){
        this.pageInit();
    },
    computed: {
        // showList: function() {
        //     // return this.bookmarkList.articleList.filter(function ())
        // }
    },
    methods: {
        pageInit: function(){
            this.totalPage = Math.ceil(this.bookmarkList.articleList.length/this.pageDataNum);
        },
        setPage: function setPage(page) {
            if (page <= 0 || page > this.totalPage) {
                return;
            }else{
                this.currentPage = page;
                window.scrollTo(0,0);
            }
        }
    }
}

</script>

<style lang="sass">
@import "@/style/common.sass"
.staffShortIro
    
.staffListContent
    margin: 10px

@media (min-width: 960px)
    .staffListContentBlock
        width: 60%
    .staffListContainer
        width: 720px

@media (max-width: 960px)
    .staffListContentBlock
        width: 100%
    .staffListContainer
        width: 100%
.staffListContentBlock
    margin: 30px 
    margin-left: 40px
.staffListContainer
    display: flex
    flex-flow: row wrap
    margin: 30px
    margin-bottom: 50px
.staffListImage
    width: 175px
    height: 175px
    border-radius: 50%
.staffListTitle
    margin: 5px
    font-size: 15px
    font-weight: bold
    background-color: $c-primary
    width: 50%
    padding: 2px
    padding-left: 5px


</style>

