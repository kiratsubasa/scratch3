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
                                router-link.ListTypeBlock(style="color: #333; text-decoration: none;" v-for='typ in theArticleList[idx+(currentPage-1)*pageDataNum-1].type' :key='t' :to="'/newsPage/'+typ") {{typ}} 
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
            selectedQuery: ''
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
        theArticleList: function(){
            this.pageInit();
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
.markBlockContainer
    display: inline-flex
    margin: 10px
.markBlock
    margin: 10px
    padding: 5px
    border-radius: 5px
    border: 1px #F2DCE0 solid
    background-color: #FFF
.markBlock:hover
    border-radius: 30px
    background-color: #F2DCE0
.router-link-active
    background-color: #F2DCE0
div
    // border: 1px #000 solid
#listPageTitle
    text-align: left
    // margin-left :40px
    margin-top: 20px
    margin-bottom: 50px
    font-size: 30px
    font-weight: normal
.listPageContent
    max-width: 1280px
    margin: auto
    padding: 50px
.searchBar-list
    margin: 0px

.List
    text-align: left
    cursor: pointer

.ListContainer
    border: 1px #F2DCE0 solid
    margin-bottom: 20px
    border-radius: 3px
    display: flex
    flex-wrap: wrap
    width: 90%
    
.Listhead
    // border: 1px #000 solid
    background-color: #F2DCE0
    width: 230px
.ListImage
    width: 210px
    height: 140px
    margin-top: 30px
    margin: 10px
    background-size: cover
    border-radius: 5px

.ListTextBlock
    width: 70%

.listTypeContainer
    display: flex
    flex-wrap: wrap
    justify-content: center
.ListTypeBlock
    margin: 5px
    padding: 2px
    font-size: 0.6em
    background-color:  #FFF
    border-radius: 5px
    text-align: center
.ListTypeBlock:hover
    border-radius: 3px
    padding: 4px
    // background-color: #F2DCE0
    
.ListTitle
    font-size: 1.5em
    line-height: 1.6em
    margin: 10px
.ListContent
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    font-size: 1.2em
    margin: 20px
    margin-top: 30px
#pageSel
    text-align: center
    width: 50px

</style>

