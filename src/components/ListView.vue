<template lang="pug">
#app
    .listPageContent
        SearchBar.searchBar-list(:searchPlaceholder='searchPlaceholder' :search-lists='theArticleList')
        h1#listPageTitle {{pageTitle}}
        .markBlockContainer
            router-link.markBlock(style="color: #333; text-decoration: none;" v-for='(typ,t) in typeList' :key='t' :to="'/newsPage/'+typ") {{typ}}
        //- .my-checkbox(v-for='typ in typeList')
        //-     input(type='checkbox' id='tab' :value='typ' v-model='selectedQuery')
        //-     label(for='tab') {{typ}}
               //- .my-tag(@click='selectedTag('跨域薈萃')') 跨域薈萃
        //-     input(type='checkbox' id='tab1' value='跨域薈萃' v-model='')
        //-     label(for='tab1')
        .List(v-for="idx in pageDataNum")
            .Listbtn(v-if="theArticleList[idx+(currentPage-1)*pageDataNum-1]")
                .ListContainer
                    .Listhead
                        .ListImage(:style="{'background-image': 'url(' + theArticleList[idx+(currentPage-1)*pageDataNum-1].src + ')'}") 
                        .listTypeContainer
                                router-link.ListTypeBlock(style="color: #333; text-decoration: none;" v-for='typ in theArticleList[idx+(currentPage-1)*pageDataNum-1].type' :key='typ' :to="'/newsPage/'+typ") {{typ}} 
                    .ListTextBlock(@click="changePath(idx+(currentPage-1)*pageDataNum-1)")
                        .ListTitle {{theArticleList[idx+(currentPage-1)*pageDataNum-1].title}}
                        .ListContent {{theArticleList[idx+(currentPage-1)*pageDataNum-1].content.text[0]}}
    
        a#myhref.pageBtn.firstPage(v-if="currentPage!=1" @click="setPage(1)") {{ firstPage }}
        a#myhref.pageBtn.previous(v-if="currentPage!=1" @click="setPage(currentPage - 1)") {{ prev }}
        select#pageSel(v-model="currentPage")
            option(v-for="idx in totalPage") {{ idx }}
        a#myhref.pageBtn.next(v-if="currentPage!=totalPage" @click="setPage(currentPage + 1)") {{ next }}
        a#myhref.pageBtn.finalPage(v-if="currentPage!=totalPage" @click="setPage(totalPage)") {{ finalPage }}
</template>

<script>
import SearchBar from '@/components/searchBar.vue'
export default {
    components: {
        SearchBar
    },
    props: ['article-list','page-title','search-placeholder','type'],
    data() {
        return {
            typeList: ['最新消息','跨域薈萃',' 視覺藝術'],
            pageDataNum: 8,
            currentPage: 1,
            totalPage: 1,
            firstPage: '第一頁',
            prev: '上一頁',
            next: '下一頁',
            finalPage: '最末頁',
            theArticleList: '',
            selectedQuery: '',
            searchQuery: ''
        }
    },
    watch: {
        currentPage: function(page){
            this.$router.push({query: {page: page} });
            window.scrollTo(0,0);
        },
        selectedQuery: function(query) {
            this.theArticleList = this.articleList.filter((item)=>{
                return item.type.includes(query);
            })
        },
        searchQuery: function(query){
            this.theArticleList = this.articleList.filter((item)=>{
                return item.title.includes(query);
            })
        },
        theArticleList: function(){
            this.pageInit();
        },
        '$route' (){
            if(this.$route.query.search)
                this.searchQuery = this.$route.query.search;
        }
    },
    beforeMount(){
        this.pageInit();
        this.selectedQuery = this.$route.params.id;
        if(this.$route.query.page)
            this.currentPage = this.$route.query.page;
    },
    methods: {
        pageInit: function(){
            this.totalPage = Math.ceil(this.theArticleList.length/this.pageDataNum);
        },
        setPage: function setPage(page) {
            if (page <= 0 || page > this.totalPage) {
                return;
            }
            else{
                this.currentPage = page;
            }
        },
        changePath: function(idx){
            this.$router.push({ path: this.theArticleList[idx].link , query: {articleIndex: idx} })
        }
    }
}

</script>

<style lang="sass">
@import "@/style/common.sass"
</style>

