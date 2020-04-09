<template lang="pug">
#app
    tabs(:tabs='tabName' :page-title='pageTitle')
    .selectAndSearch
        .selectContainer
            .selectTitle 領域
            select#mySelect(v-model='specialty')
                option(v-for='(item,i) in specialtyList') {{item.name}}
        .selectContainer
            .selectTitle 地區
            select#mySelect(v-model='area')
                option(v-for='(item,i) in areaList') {{item}}
        .selectContainer
            .selectTitle 年級
            select#mySelect(v-model='stage')
                option(v-for='(item,i) in stageList') {{item}}

        SearchBar(:searchPlaceholder='searchPlaceholder' :queryObj='queryObj'  v-on:changePathByQuery="changePathByQuery")

    .searchList(v-if="queryStatus") 您的搜索條件為: 
        span.searchItem(v-for="que in showQuery")  {{que}} | 

</template>

<script>
import SearchBar from '@/components/searchBar.vue'
import tabs from '@/components/tabs_head.vue'
import { ListLessonCategories } from '@/api/client/LessonCategory';
import { ListLessonSpecialties } from '@/api/client/LessonSpecialty';
import { ListLessonsOfCategory,ListLessons,ListLessonsOfSpecialty} from '@/api/client/Lesson';
import { SearchLessons } from '@/api/client/Search.js';

export default {
    components: {
        tabs,
        SearchBar
    },
    props: ['page-title'],
    data() {
        return {
            tabData: [],
            tabName: [],
            bookmarkList: [],
            tempDataList: [],
            specialtyList: [],
            areaList: ['嘉義','新竹','花蓮縣'],
            stageList: ['小學','大學','國中'],
            searchPlaceholder: 'keyword',
            cate: '',
            specialty: '',
            area: '',
            stage: '',
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
        'specialty': function(query){
            this.$router.push({ path: 'all',query: {specialty: query}});
        },
        'area': function(query){
            this.$router.push({ path: 'all',query: {area: query}});
        },
        'stage': function(query){
            this.$router.push({ path: 'all',query: {stage: query}});
        },
        '$route.query': function(route){
            this.showQuery = route;
            this.getListByQuery(route);
        }
    },
    methods: {
        getListByQuery(querys){
            var spe = querys.specialty;
            var speID = -1;
            if(spe){
                for(var i=0;i<this.specialtyList.length;i++){
                    if(spe==this.specialtyList[i].name){
                        speID = this.specialtyList[i].id;
                    }
                }
                if(speID>0){
                    this.getListBySpe(speID,1);
                }
            }
            var area = querys.area;
            if(area){
                var data={
                    project_id: 2,
                    column: "area",
                    pattern: area
                }
                this.ApiSearchLess(data,1);
            }
            var stage = querys.stage;
            if(stage){
                data={
                    project_id: 2,
                    column: "stage",
                    pattern: stage
                }
                this.ApiSearchLess(data,1);
            }
            var search = querys.search;
            if(search){
                data={
                    project_id: 2,
                    column: "content",
                    pattern: search
                }
                this.ApiSearchLess(data,1);
            }
        },
        getListBySpe(id,page){
            ListLessonsOfSpecialty(id,page)
            .then(response => {
                this.bookmarkList = response.data;
                this.$emit('bookmarkList', this.bookmarkList);
            })
            .catch(err => {
            console.log(err);
            });
        },
        changePathByQuery(query){
            this.search = query;
            this.$router.push({ path: 'all',query: {search: query}});
        },
        ApiSearchLess(data, page){
            SearchLessons(data, page)
            .then(response => {
                this.bookmarkList = response.data;
                this.$emit('bookmarkList', this.bookmarkList);
                // console.log(response.data);
                // console.log(response.meta.last_page);
            })
            .catch(err => {
            console.log(err);
            });
        },
        ApiListAllLess(id,page){
            ListLessons(id,page)
            .then(response => {
                    this.bookmarkList = response.data;
                    this.$emit('bookmarkList', this.bookmarkList)
                })
                .catch(err => {
                console.log(err);
            });
        },
        ApiGetListwithCate(id,page){
            ListLessonsOfCategory(id,page)
                .then(response => {
                    this.bookmarkList = response.data;
                    this.$emit('bookmarkList', this.bookmarkList)
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
                            this.ApiGetListwithCate(this.tabData[i].id,1);
                            cateStatus=true;
                        }
                    }
                    if(!cateStatus && cate != 'all')
                        this.$router.push({ path: this.tabData[0].name});
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

