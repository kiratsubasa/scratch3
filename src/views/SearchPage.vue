<template lang="pug">
#SearchPage
    .searchPageContent
        h1.articlePageTitle 全站搜尋
        SearchBar(:searchPlaceholder='searchPlaceholder' v-on:changePathByQuery='changePathByQuery')
        .searchContainer(v-for="(search,i) in searchData")
            .searchType {{search.name}}
            .searchResult(v-for="data in search.data")
                .searchText(v-if='!data.url') {{data.text}}
                a.searchText(v-if='data.url' :href='data.url') {{data.text}}
            .nextPage(v-if='search.cp!=search.mp' @click='nextSearch(i)') 更多結果

</template>

<script>
import SearchBar from '@/components/searchBar.vue'
import { SearchPages } from '@/api/client/Search'
import { SearchArticles } from '@/api/client/Search'
import { SearchHumanResources } from '@/api/client/Search'
import { SearchLessons } from '@/api/client/Search'
export default {
    components: {
        SearchBar
    },
    props: [],
    data() {
        return {
            searchPlaceholder: "Search All",
            searchData: [
                {type: 'page',name: '頁面搜尋',data: [{text:'查無結果'}],cp: 1,mp:1},
                {type: 'article',name: '全站文章',data: [{text:'查無結果'}],cp: 1,mp:1},
                {type: 'hr',name: '人才',data: [{text:'查無結果'}],cp: 1,mp:1},
                {type: 'lesson',name: '教案',data: [{text:'查無結果'}],cp: 1,mp:1}
            ],
            pageData: ''
        }
    },
    computed: {

    },
    created(){
        this.ApiSearchInit(2,this.$route.query.search);
    },
    methods: {
        nextSearch(typeIdx){
            this.searchData[typeIdx].cp+=1;
            this.doSearch(this.searchData[typeIdx].type);
        },
        doSearch(type){
            if(type=='page'){
                SearchPages(this.pageData, this.searchData[0].cp)
                    .then(response => {
                        var data = response.data
                        this.searchData[0].mp = response.meta.last_page
                        if(data.length>0){
                            this.searchData[0].data.pop({text:'查無結果'});
                            for(var i=0;i<data.length;i++){
                                var url = '/'
                                if(data[i].type.template=='section'||data[i].type.template=='module'||data[i].type.template=='hr')
                                    url = url.concat(data[i].type.template,'/',data[i].id,'/category/1')
                                else
                                    url = url.concat(data[i].type.template,'/',data[i].id)
                                var dataContent={
                                    text: data[i].title,
                                    url: url
                                }
                                this.searchData[0].data.push(dataContent);
                            }
                        }
                    })
                    .catch(err => {
                    console.log(err)
                });
            }
            if(type=='article'){
                SearchArticles(this.pageData,this.searchData[1].cp)
                    .then(response => {
                        var data = response.data
                        this.searchData[1].mp = response.meta.last_page
                        if(data.length>0){
                            this.searchData[1].data.pop({text:'查無結果'});
                            for(var i=0;i<data.length;i++){
                                var url = '/'
                                url = url.concat('post/',data[i].id)
                                var dataContent={
                                    text: data[i].title,
                                    url: url
                                }
                                this.searchData[1].data.push(dataContent);
                            }
                        }
                    })
                    .catch(err => {
                    console.log(err)
                });
            }
            if(type=='hr'){
                var hrData = {
                    project_id: 2,
                    column: "name",
                    pattern: this.$route.query.search
                };
                SearchHumanResources(hrData,this.searchData[2].cp)
                    .then(response => {
                        var data = response.data
                        this.searchData[2].mp = response.meta.last_page
                        if(data.length>0){
                            this.searchData[2].data.pop({text:'查無結果'});
                            for(var i=0;i<data.length;i++){
                                var url = '/'
                                url = url.concat('hr/staff/post/',data[i].id)
                                var dataContent={
                                    text: data[i].name,
                                    url: url
                                }
                                this.searchData[2].data.push(dataContent);
                            }
                        }
                    })
                    .catch(err => {
                    console.log(err)
                });
            }
            if(type=='lesson'){
                var lessonData = {
                    project_id: 2,
                    column: "content",
                    pattern: this.$route.query.search
                };
                SearchLessons(lessonData,this.searchData[3].cp)
                    .then(response => {
                        var data = response.data
                        this.searchData[3].mp = response.meta.last_page
                        if(data.length>0){
                            this.searchData[3].data.pop({text:'查無結果'});
                            for(var i=0;i<data.length;i++){
                                var url = '/'
                                url = url.concat('module/lesson/post/',data[i].id)
                                var dataContent={
                                    text: data[i].title,
                                    url: url
                                }
                                this.searchData[3].data.push(dataContent);
                            }
                        }
                    })
                    .catch(err => {
                    console.log(err)
                });
            }
        },
        ApiSearchInit(id,query){
            this.pageData = {
                project_id: id,
                pattern: query
            };
            for(var i=0;i<this.searchData.length;i++){
                this.searchData[i].cp = 1;
                this.doSearch(this.searchData[i].type);
            }
        },
        changePathByQuery: function(query){
            this.$router.push({path:'/search',query: {search:query}});
        }
    }
}
</script>

<style lang="sass">
@import "@/style/common.sass"
#SearchPage
    width: 100%
    margin: auto
    background-color: $c-bg
    padding-bottom: 30px
.searchPageContent
    width: 100%
    max-width: 1350px
    margin: auto
    
.articlePageTitle
    text-align: left
    line-height: 1.8em
    padding: 40px
    color: $c-primary
.searchContainer
    min-height: 100px
    margin-top: 30px
    background-color: $c-secondary
.searchType
    background-color: $c-primary
    color: $c-secondary
    font-size: 1.2em
    padding: 10px
.searchResult
    margin: 20px
    text-align: left
.nextPage
    cursor: pointer
    margin: 10px
@media only screen and (max-width: 480px)
    .searchContainer
        margin: 0px
</style>

