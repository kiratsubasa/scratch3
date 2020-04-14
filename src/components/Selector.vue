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
                option(v-for='(item,i) in searchTypeList') {{item.text}}

        SearchBar(:searchPlaceholder='searchPlaceholder' :queryObj='queryObj'  v-on:changePathByQuery="changePathByQuery")

</template>

<script>
import SearchBar from '@/components/searchBar.vue'
import tabs from '@/components/tabs_head.vue'
export default {
    components: {
        tabs,
        SearchBar
    },
    props: ['page-title','tab-name','specialtyList'],
    data() {
        return {
            bookmarkList: [],
            tempDataList: [],
            searchTypeList: [
                {name: 'name',text: '姓名'},
                {name: 'agency',text: '服務單位'},
                {name: 'job_title',text: '職稱'},
                {name: 'email',text: '電子郵件'},
                {name: 'phone',text: '電話'},
                {name: 'area',text: '區域'},
                {name: 'intro',text: '介紹'},
                {name: 'project_job_title',text: '計畫職稱'},
            ],
            searchPlaceholder: 'keyword',
            cate: '',
            specialty: '',
            searchType: '',
            search: '',
            queryObj: {},
        }
    },
    created() {
        
    },
    watch: {
    },
    methods: {
        changePathByQuery(query){
            var spe=-1;
            var typ='name';
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

