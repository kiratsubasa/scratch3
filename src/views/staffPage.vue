<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}} 
    SelectorHead(:page-title='pageTitle' :tab-name='tabName' :specialtyList='specialtyList')
    router-view(:articleList='articleList')

</template>

<script>
import SelectorHead from '@/components/Selector.vue'
import { ListHumanResourcesOfCategory } from "@/api/client/HumanResource";
import { ListHumanResourceCategories } from "@/api/client/HumanResourceCategory";
import { ListHumanResourceSpecialties } from "@/api/client/HumanResourceSpecialty";
import { SearchHumanResources } from "@/api/client/Search";
export default {
    components: {
        SelectorHead
    },
    data() {
        return {
            pageTitle: "美感人才",
            searchPlaceholder: "關鍵字",
            articleList: [],
            tabData: [],
            tabName: [],
            specialtyList: []
        }
    },
    created() {
        this.ApiGetHrCate(2);
        this.ApiGetHrSpe(2);
        if(this.$route.params.categoryid=='all'){
            this.ApiSearch(this.$route.query);
        }
    },
    watch:{
        '$route.query': function(route){
            this.ApiSearch(route);
        }
    },
    methods:{
        ApiSearch(qureys){
            console.log(qureys);
            var data;
            if(qureys.specialty==-1){
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
            SearchHumanResources(data, {page: 1})
            .then(response => {
                this.articleList = response.data;
            })
            .catch(err => {
                this.$router.push('/error')
                console.log(err);
            })
        },
        ApiGetHrwithCate(id,page){
            ListHumanResourcesOfCategory(id,page)
                .then(response => {
                    this.articleList = response.data;
                    
                })
                .catch(err => {
                console.log(err);
            });
        },
        ApiGetHrCate(id) {
            ListHumanResourceCategories(id)
                .then(response => {
                    this.tabData = response.data;
                    var cate = this.$route.params.categoryid;
                    var cateStatus=false;
                    for(var i=0;i<this.tabData.length;i++){
                        this.tabName.push(this.tabData[i].name);
                        if(cate==this.tabData[i].name){
                            this.ApiGetHrwithCate(this.tabData[i].id,1);
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
        ApiGetHrSpe(id) {
            ListHumanResourceSpecialties(id)
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
</style>
