<template lang="pug">
#app
    tabs(:tabs='tabName' :page-title='pageTitle')
    .selectAndSearch
        .selectContainer
            .selectTitle 領域
            select#mySelect(v-model='specialty')
                option(v-for='(item,i) in specialtyList') {{item.name}}
        .selectContainer
            .selectTitle 搜尋條件
            select#mySelect(v-model='searchType')
                option(v-for='(item,i) in searchTypeList') {{item.title}}

        SearchBar(:searchPlaceholder='searchPlaceholder' :queryObj='queryObj'  v-on:changePathByQuery="changePathByQuery")

</template>

<script>
import SearchBar from '@/components/searchBar.vue'
import tabs from '@/components/tabs_head.vue'
import { ListLessonCategories } from '@/api/client/LessonCategory';
import { ListLessonSpecialties } from '@/api/client/LessonSpecialty';
import { ListLessonsOfCategory,ListLessons} from '@/api/client/Lesson';
import { SearchLessons } from '@/api/client/Search.js';

export default {
    components: {
        tabs,
        SearchBar
    },
    props: ['page-title','currentPage'],
    data() {
        return {
            tabData: [],
            tabName: [],
            bookmarkList: [],
            tempDataList: [],
            specialtyList: [],
            searchTypeList: [
                {title: "標題+內容",name: "content"},
                {title: "核心概念",name: "concept"},
                {title: "教學目標",name: "target"},
                {title: "教案概述",name: "summary"},
                {title: "課後省思",name: "reflection"},
                {title: "教學階段",name: "stage"},
                {title: "地區",name: "area"}
            ],
            searchPlaceholder: 'keyword',
            cate: '',
            specialty: '',
            searchType: '',
            search: '',
            queryObj: {},
            showQuery: {},
            queryStatus: false
        }
    },
    created() {
        this.ApiGetLessCate(2);
        this.ApiGetLessSpe(2);
        
    },
    watch: {
        '$route': function(route){
            this.ApiSearch(route.query);
        },
        currentPage: function(){
            if(this.$route.params.categoryid == 'all'){
                if(this.$route.query.search){
                    this.ApiSearch(this.$route.query);
                }
                else{
                    this.ApiListAllLess(2,this.currentPage);
                }
            }
            else{
                this.ApiGetListwithCate(this.cate,this.currentPage);
            }
        }
    },
    methods: {
        ApiSearch(qureys){
            var data;
            if(qureys.specialty!=-1){
                data={
                    specialty_id: qureys.specialty,
                    column: qureys.type,
                    pattern: qureys.search
                }
            }
            else{
                data={
                    project_id: 2,
                    column: qureys.type,
                    pattern: qureys.search
                }
            }
            this.ApiSearchLess(data,this.currentPage);
        },
        changePathByQuery(query){
            var spe=-1;
            var typ='content';
            for(var i=0;i<this.specialtyList.length;i++){
                if(this.specialty==this.specialtyList[i].name){
                    spe=this.specialtyList[i].id;
                    break;
                }
            }
            for(i=0;i<this.searchTypeList.length;i++){
                if(this.searchType==this.searchTypeList[i].text){
                    typ=this.searchTypeList[i].name;
                    break;
                }
            }
            
            this.$router.push({ path: 'all',query: {specialty: spe,type: typ,search: query}});
        },
        ApiSearchLess(data, page){
            SearchLessons(data, page)
            .then(response => {
                this.bookmarkList = response.data;
                this.$emit('bookmarkList', this.bookmarkList,response.meta.last_page);
            })
            .catch(err => {
            console.log(err);
            });
        },
        ApiListAllLess(id,page){
            ListLessons(id,page)
            .then(response => {
                    this.bookmarkList = response.data;
                    this.$emit('bookmarkList', this.bookmarkList,response.meta.last_page)
                })
                .catch(err => {
                console.log(err);
            });
        },
        ApiGetListwithCate(id,page){
            ListLessonsOfCategory(id,page)
                .then(response => {
                    this.bookmarkList = response.data;
                    this.$emit('bookmarkList', this.bookmarkList,response.meta.last_page)
                })
                .catch(err => {
                console.log(err);
            });
        },
        ApiGetLessCate(id) {
            ListLessonCategories(id)
                .then(response => {
                    this.tabData = response.data;
                    var cate = this.$route.params.categoryid;
                    var cateStatus=false;
                    for(var i=0;i<this.tabData.length;i++){
                        this.tabName.push(this.tabData[i].name);
                        if(cate==this.tabData[i].name){
                            this.ApiGetListwithCate(this.tabData[i].id,this.currentPage);
                            this.cate=this.tabData[i].id;
                            cateStatus=true;
                        }
                    }
                    if(!cateStatus && cate != 'all')
                        this.$router.push({ path: this.tabData[0].name});
                    else{
                        if(this.$route.query.search){
                            this.ApiSearch(this.$route.query);
                        }
                        else{
                            this.ApiListAllLess(2,this.currentPage);
                        }
                    }
                })
                .catch(err => {
                console.log(err);
            });
        },
        ApiGetLessSpe(id) {
            ListLessonSpecialties(id)
                .then(response => {
                    this.specialtyList = response.data;
                    this.specialtyList.unshift({id: -1,name: '不分領域'});
                })
                .catch(err => {
                console.log(err);
            });
        }
    }
}

</script>

<style lang="sass">
@import "@/style/common.sass"
.selectAndSearch
    display: flex
    flex-direction: row
    margin-bottom: 45px
    flex-wrap: wrap
    width: 100%
.selectContainer
    display: flex
    flex-direction: row
    align-items: center
.selectTitle
    font-size: 25px
    margin-right: 8px
    padding: 0px
    color: $c-text
#mySelect
    width: 150px
    height: 50px
    background-color: $c-secondary
    margin-right: 40px
#mySelect:focus
    outline: none
@media only screen and (max-width: 480px)
    .selectAndSearch
        margin-bottom: 20px
    .selectTitle
        font-size: 10px
        margin-right: 3px
    #mySelect
        width: 73px
        height: 20px
        background-color: $c-secondary
        margin-right: 15px
    .selectContainer
        margin-bottom: 10px 
</style>

