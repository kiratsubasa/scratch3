<template lang="pug">
#app
    .listPageContent 
        SearchBar.searchBar-list(:searchPlaceholder='searchPlaceholder'  :search-lists='articleList')
        h1#listPageTitle {{pageTitle}}
        .cardContainer            
            #Card(v-for="idx in pageDataNum" v-if="bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1]" @click="changePath(idx+(currentPage-1)*pageDataNum-1)")
                .cardcontentContainer
                    .ListImage(:style="{'background-image': 'url(' + bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1].src + ')'}") 
                    .CardTextBlock 
                        .ListTypeBlock {{bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1].type}}
                        .ListTitle {{bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1].title}}
                        .ListContent {{bookmarkList.articleList[idx+(currentPage-1)*pageDataNum-1].content.text[0]}}
        a#myhref.pageBtn(href="#").firstPage(v-if="currentPage!=1" @click="setPage(1)") {{ firstPage }}
        a#myhref.pageBtn(href="#").previous(v-if="currentPage!=1" @click="setPage(currentPage - 1)") {{ prev }}
        select.pageSel(v-model="currentPage")
            option(v-for="idx in totalPage") {{ idx }}
        a#myhref.pageBtn(href="#").next(v-if="currentPage!=totalPage" @click="setPage(currentPage + 1)") {{ next }}
        a#myhref.pageBtn(href="#").finalPage(v-if="currentPage!=totalPage" @click="setPage(totalPage)") {{ finalPage }}
</template>

<script>
import SearchBar from '@/components/searchBar.vue'
export default {
    components: {
        SearchBar
    },
    props: ['bookmarkList','page-title','search-placeholder','article-list'],
    data() {
        return {
            pageDataNum: 8,
            currentPage: 1,
            totalPage: 1,
            firstPage: '第一頁',
            prev: '上一頁',
            next: '下一頁',
            finalPage: '最末頁'
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
        },
        changePath: function(idx){
            this.$router.push({ path: this.bookmarkList.articleList[idx].link , query: {articleIndex: idx} })
        }
    }
}

</script>

<style lang="sass">
$colorLighterPink: #FBE2E5
#Card
    width: 240px
    border: 1px $colorLighterPink solid
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

