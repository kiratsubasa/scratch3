<template lang="pug">
#app
    .listPageContent 
        SearchBar.searchBar-list(:searchPlaceholder='searchPlaceholder' :search-lists='theArticleList')
        h1#listPageTitle {{pageTitle}}
        .my-checkbox
            input(type='checkbox' id='tab' value='最新消息' v-model='selectedQuery')
            label(for='tab') 最新消息
               //- .my-tag(@click='selectedTag('跨域薈萃')') 跨域薈萃
        //-     input(type='checkbox' id='tab1' value='跨域薈萃' v-model='')
        //-     label(for='tab1') 
        .List(v-for="idx in pageDataNum")
            .Listbtn(v-if="theArticleList[idx+(currentPage-1)*pageDataNum-1]" @click="changePath(idx+(currentPage-1)*pageDataNum-1)" style="color: #333; text-decoration:none;")
                .ListContainer
                    .ListImage(:style="{'background-image': 'url(' + theArticleList[idx+(currentPage-1)*pageDataNum-1].src + ')'}") 
                    .ListTextBlock
                        .ListTypeBlock(v-for='type in theArticleList[idx+(currentPage-1)*pageDataNum-1].type') {{type}} 
                        .ListTitle {{theArticleList[idx+(currentPage-1)*pageDataNum-1].title}}
                        .ListContent {{theArticleList[idx+(currentPage-1)*pageDataNum-1].content.text[0]}}
    
        a#myhref.pageBtn(href="#").firstPage(v-if="currentPage!=1" @click="setPage(1)") {{ firstPage }}
        a#myhref.pageBtn(href="#").previous(v-if="currentPage!=1" @click="setPage(currentPage - 1)") {{ prev }}
        select#pageSel(v-model="currentPage")
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
    props: ['article-list','page-title','search-placeholder','type'],
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
            selectedQuery: []
        }
    },
    watch: {
        selectedQuery: function(query) {
            this.theArticleList = this.articleList.filter((item)=>{
                var tempAry;
                for(var q=0 ; q<query.length ;q++){
                    tempAry = item.type.includes(query[q]);
                }
                return tempAry;
            })
        },
        theArticleList: function(){
            this.pageInit();
        }
    },
    beforeMount(){
        this.pageInit();
        this.selectedQuery = this.type;
    },
    methods: {
        pageInit: function(){
            this.totalPage = Math.ceil(this.theArticleList.length/this.pageDataNum);
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
            this.$router.push({ path: this.theArticleList[idx].link , query: {articleIndex: idx} })
        },
        selectedTag: function(tag){
            this.selectedQuery = tag;
        }
    }
}

</script>

<style lang="sass">
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
    // min-height: 720px
    margin: auto
    padding: 50px
.searchBar-list
    margin: 0px
.my-checkbox
    background-color: #F2DCE0 
    margin: 10px
    padding: 20px
.List
    text-align: left
    cursor: pointer

.ListContainer
    display: flex
    flex-flow: row wrap
    border: 1px #F2DCE0 solid
    margin-bottom: 20px

.ListImage
    width: 210px
    height: 140px
    margin-top: 30px
    margin: 10px
    background-size: cover

.ListTextBlock
    width: 70%
    display: flex
    flex-wrap: wrap
.ListTypeBlock
    margin: 5px
    padding: 1px
    padding-left: 15px
    padding-right: 15px
    background-color:  #D1B1B4
    border-radius: 50px
    text-align: center
    
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

