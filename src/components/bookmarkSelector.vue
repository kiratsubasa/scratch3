<template lang="pug">
#app
    tabs(:tabs='tabName' :page-title='pageTitle')
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

    SearchBar(:searchPlaceholder='searchPlaceholder' :queryObj='queryObj'  v-on:searchByQuery="searchByQuery")

    .searchList(v-if="queryStatus") 您的搜索條件為: 
        span.searchItem(v-for="que in queryObj")  {{que}} | 

</template>

<script>
import SearchBar from '@/components/searchBar.vue'
import tabs from '@/components/tabs_head.vue'
import { ListLessonCategories } from '@/api/client/LessonCategory';
import { ListLessonSpecialties } from '@/api/client/LessonSpecialty';
import { ListLessonsOfCategory,ListLessons} from '@/api/client/Lesson';
import { SearchLessons } from '@/api/client/Search';

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
            specialtyList: [],
            areaList: ['嘉義','新竹'],
            stageList: ['小學','大學'],
            searchPlaceholder: 'keyword',
            cate: '',
            specialty: '',
            area: '',
            stage: '',
            search: '',
            queryObj: {},
            queryStatus: false
        }
    },
    created() {
        this.ApiGetLessCate(2);
        this.ApiGetLessSpe(2);
    },
    watch: {
        // specialty: function(query){
        //     Object.assign(this.queryObj, {specialty: query});
        // },
        // area: function(query){
        //     Object.assign(this.queryObj, {area: query});
        // },
        // stage: function(query){
        //     Object.assign(this.queryObj, {stage: query});
        // },
        '$route.query': function(route){
            console.log(route);
        }
    },
    methods: {
        searchByQuery(query){
            this.search = query;
            this.assignAllQuery();
            this.$router.push({ path: 'all',query: this.queryObj});
        },
        assignAllQuery(){
            if(this.specialty)
                Object.assign(this.queryObj, {specialty: this.specialty});
            if(this.area)
                Object.assign(this.queryObj, {area: this.area});
            if(this.stage)
                Object.assign(this.queryObj, {stage: this.stage});
            if(this.search)
                Object.assign(this.queryObj, {search: this.search});
        },
        ListbyQuery(){
            if(this.$route.query.specialty){
                this.queryStatus = true;
                // Object.assign(this.queryObj, {specialty: this.$route.query.specialty});
            }
            if(this.$route.query.area){
                this.queryStatus = true;
                // Object.assign(this.queryObj, {area: this.$route.query.area});
            }
            if(this.$route.query.stage){
                this.queryStatus = true;
                // Object.assign(this.queryObj, {stage: this.$route.query.stage});
            }
            if(this.$route.query.search){
                this.queryStatus = true;
                // Object.assign(this.queryObj, {search: this.$route.query.search});
            }
            if(!this.queryStatus){
                this.$router.push({ path: 'all'});
                this.ApiListAllLess(2,1);
            }
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
                    var cateStatus = false;
                    for(var i=0;i<this.tabData.length;i++){
                        this.tabName.push(this.tabData[i].name);
                        if(cate==this.tabData[i].name){
                            this.ApiGetListwithCate(this.tabData[i].id,1);
                            cateStatus = true;
                        }
                    }
                    if(!cateStatus){
                        this.ListbyQuery();
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
.selectContainer
    width: 250px
    display: inline
.selectTitle
    display: inline
#mySelect
    border: 1px #D1B1B4 solid
    width: 150px


</style>

