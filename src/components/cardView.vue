<template lang="pug">
#app
    .listPageContent 
        SearchBar.searchBar-list(:searchPlaceholder='searchPlaceholder' :search-lists='theArticleList')
        .cardContainer      
            #Card(v-for="idx in pageDataNum" v-if="theArticleList[idx+(currentPage-1)*pageDataNum-1]")  
                .cardcontentContainer
                    .ListImage(:style="{'background-image': 'url(' + theArticleList[idx+(currentPage-1)*pageDataNum-1].src + ')'}") 
                    .CardTextBlock(@click="changePath(idx+(currentPage-1)*pageDataNum-1)")
                        .ListTypeBlock {{theArticleList[idx+(currentPage-1)*pageDataNum-1].type}}
                        .ListTitle {{theArticleList[idx+(currentPage-1)*pageDataNum-1].title}}
                        .ListContent {{theArticleList[idx+(currentPage-1)*pageDataNum-1].content.text[0]}}
                    div#downloadBtn(v-if="theArticleList[idx+(currentPage-1)*pageDataNum-1].content.downloadFile")
                        a#sehref(:href='theArticleList[idx+(currentPage-1)*pageDataNum-1].content.downloadFile' download) {{theArticleList[idx+(currentPage-1)*pageDataNum-1].content.downloadText}}

        a#myhref.pageBtn.firstPage(v-if="currentPage!=1" @click="setPage(1)") {{ firstPage }}
        a#myhref.pageBtn.previous(v-if="currentPage!=1" @click="setPage(currentPage - 1)") {{ prev }}
        select.pageSel(v-model="currentPage")
            option(v-for="idx in totalPage") {{ idx }}
        a#myhref.pageBtn.next(v-if="currentPage!=totalPage" @click="setPage(currentPage + 1)") {{ next }}
        a#myhref.pageBtn.finalPage(v-if="currentPage!=totalPage" @click="setPage(totalPage)") {{ finalPage }}
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script>
import SearchBar from '@/components/searchBar.vue'
export default {
    components: {
        SearchBar
    },
    props: ['page-title','search-placeholder','the-article-list'],
    data() {
        return {
            pageDataNum: 12,
            currentPage: 1,
            totalPage: 1,
            firstPage: '第一頁',
            prev: '上一頁',
            next: '下一頁',
            finalPage: '最末頁',
        }
    },
    watch: {
        currentPage: function(page){
            this.$router.push({query: {page: page} });
            window.scrollTo(0,0);
        },
        theArticleList: function(){
            this.pageInit();
        }
    },
    beforeMount(){
        this.pageInit();
        if(this.$route.query.page)
            this.currentPage = this.$route.query.page;
    },
    methods: {
        pageInit: function(){
            this.totalPage = Math.ceil(this.theArticleList.length/this.pageDataNum);
        },
        setPage: function(page) {
            if (page <= 0 || page > this.totalPage) {
                return;
            }
            else{
                this.currentPage = page;
            }
        },
        changePath: function(idx){
            this.$router.push({ path: this.theArticleList[idx].link})
        },
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150
        setTimeout(function () {
            Velocity(
                el,
                { opacity: 1, height: '1.6em' },
                { complete: done }
                )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
        setTimeout(function () {
            Velocity(
            el,
            { opacity: 0, height: 0 },
            { complete: done }
            )
        }, delay)
    }
    }
}

</script>

<style lang="sass">
@import "@/style/common.sass"
#Card
    width: 240px
    border: 1px $c-primary solid
    border-radius: 3px
    margin: 10px
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3)
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3)
    color: #333
    text-decoration:none

.CardTextBlock 
    text-align: left
.cardContainer
    display: flex
    flex-wrap: wrap
    margin-bottom: 50px
</style>

