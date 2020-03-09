<template lang="pug">
#app
    .listPageContent
        SearchBar.searchBar-list(:searchPlaceholder='searchPlaceholder' :search-lists='theArticleList')
        h1#listPageTitle {{pageTitle}}
        .markBlockContainer
            router-link.markBlock(style="color: #333; text-decoration: none;" v-for='(typ,t) in tabs' :key='t' :to="typ") {{typ}}
        transition-group(name="staggered-fade" tag="ul" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave")
            .List(v-for="idx in pageDataNum" :key="idx" :data-index="idx")
                .Listbtn(v-if="theArticleList[idx+(currentPage-1)*pageDataNum-1]")
                    .ListContainer
                        .Listhead
                            .ListImage(v-if="theArticleList[idx+(currentPage-1)*pageDataNum-1].media!=null" :style="{'background-image': 'url(' + theArticleList[idx+(currentPage-1)*pageDataNum-1].media.info.src + ')'}") 
                            .listTypeContainer
                                    router-link.ListTypeBlock(style="color: #333; text-decoration: none;" v-for='(typ,t) in theArticleList[idx+(currentPage-1)*pageDataNum-1].categories' :key='t' :to="'/newsPage/'+typ") {{typ.name}} 
                        .ListTextBlock(@click="changePath(idx+(currentPage-1)*pageDataNum-1)")
                            .ListTitle {{theArticleList[idx+(currentPage-1)*pageDataNum-1].title}}
                            .ListContent {{stripHTML(theArticleList[idx+(currentPage-1)*pageDataNum-1].body)}}
                            .dateNote 更新日期 {{theArticleList[idx+(currentPage-1)*pageDataNum-1].updated_at.split("T")[0]}}
                            //- div#downloadBtn(v-if="theArticleList[idx+(currentPage-1)*pageDataNum-1].content.downloadFile")
                            //-     a#sehref(:href='theArticleList[idx+(currentPage-1)*pageDataNum-1].content.downloadFile' download) {{theArticleList[idx+(currentPage-1)*pageDataNum-1].content.downloadText}}
    
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
import { ListArticles } from '@/api/Articles';
export default {
    components: {
        SearchBar
    },
    props: ['page-title','search-placeholder','tabs'],
    data() {
        return {
            pageDataNum: 8,
            currentPage: 1,
            totalPage: 1,
            firstPage: '第一頁',
            prev: '上一頁',
            next: '下一頁',
            finalPage: '最末頁',
            theArticleList: [
                {categories: [{name: ''}],tags: [{name: ''}],author: '',title: ''}
            ],
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
        // selectedQuery: function(query) {
        //     this.theArticleList = this.articleList;
        // },
        searchQuery: function(query){
            // if(query==null)
            //     return
            this.theArticleList = Object.values(this.theArticleList).filter((item)=>{
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
    created() {
        // this.ApiListArticles(2);
    },
    mount(){
        this.searchInit();
        this.pageInit();
        // this.selectedQuery = this.$route.params.id;
        // if(this.$route.query.page)
            // this.currentPage = this.$route.query.page;
    },
    methods: {
        ApiListArticles(id) {
            ListArticles(id)
                .then(response => {
                    this.theArticleList= response.data;
                })
                .catch(err => {
                console.log(err);
            });
        },
        stripHTML: function(input) {
            var output = '';
            if(typeof(input)=='string'){
                var output = input.replace(/(<([^>]+)>)/ig,"");
                output = output.replace(/&nbsp;/ig, "");
            }
            return output;
        },
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
            console.log(this.theArticleList[idx].id);
            this.$router.push({ path: this.$route.params.section+'/page/'+this.theArticleList[idx].id})
        },
        searchInit: function(){
            console.log(this.$route.query.search)
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

