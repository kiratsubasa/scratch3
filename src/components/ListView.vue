<template lang="pug">
#app
    .listPageContent
        SearchBar.searchBar-list(:searchPlaceholder='searchPlaceholder' :search-lists='theArticleList')
        h1#listPageTitle {{pageTitle}}
        .markBlockContainer
            router-link.markBlock(style="color: #333; text-decoration: none;" v-for='(typ,t) in typeList' :key='t' :to="typ") {{typ}}
        transition-group(name="staggered-fade" tag="ul" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave")
            .List(v-for="idx in pageDataNum" v-bind:key="idx" v-bind:data-index="idx")
                .Listbtn(v-if="theArticleList[idx+(currentPage-1)*pageDataNum-1]")
                    .ListContainer
                        .Listhead
                            .ListImage(:style="{'background-image': 'url(' + theArticleList[idx+(currentPage-1)*pageDataNum-1].src + ')'}") 
                            .listTypeContainer
                                    router-link.ListTypeBlock(style="color: #333; text-decoration: none;" v-for='typ in theArticleList[idx+(currentPage-1)*pageDataNum-1].type' :key='typ' :to="'/newsPage/'+typ") {{typ}} 
                        .ListTextBlock(@click="changePath(idx+(currentPage-1)*pageDataNum-1)")
                            .ListTitle {{theArticleList[idx+(currentPage-1)*pageDataNum-1].title}}
                            //- .ListContent {{theArticleList[idx+(currentPage-1)*pageDataNum-1].content.text[0]}}
                            div#downloadBtn(v-if="theArticleList[idx+(currentPage-1)*pageDataNum-1].content.downloadFile")
                                a#myhref(:href='theArticleList[idx+(currentPage-1)*pageDataNum-1].content.downloadFile' download) {{theArticleList[idx+(currentPage-1)*pageDataNum-1].content.downloadText}}
    
        a#myhref.pageBtn.firstPage(v-if="currentPage!=1" @click="setPage(1)") {{ firstPage }}
        a#myhref.pageBtn.previous(v-if="currentPage!=1" @click="setPage(currentPage - 1)") {{ prev }}
        select#pageSel(v-model="currentPage")
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
    props: ['article-list','page-title','search-placeholder','typeList'],
    data() {
        return {
            pageDataNum: 8,
            currentPage: 1,
            totalPage: 1,
            firstPage: '第一頁',
            prev: '上一頁',
            next: '下一頁',
            finalPage: '最末頁',
            theArticleList: '',
            selectedQuery: '',
            searchStatus: false,
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
                if(item.title.includes(query)){
                    this.searchStatus = true;
                    return item.title.includes(query);
                }
            })
        },
        theArticleList: function(){
            this.pageInit();
        },
        '$route' (){
            this.searchInit();
        }
    },
    beforeMount(){
        this.searchInit();
        this.pageInit();
        this.selectedQuery = this.$route.params.id;
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
        searchInit: function(){
            if(this.$route.query.search)
                this.searchQuery = this.$route.query.search;
            else
                this.theArticleList = this.articleList;
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
</style>

