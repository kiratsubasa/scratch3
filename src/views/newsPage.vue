<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}}
    //- router-view(:page-title='pageTitle' :search-placeholder='searchPlaceholder'  :type-list='typeList')
    tabs(:tabs='tabs' :page-title='pageTitle')
    ListView(:page-title='pageTitle' :search-placeholder='searchPlaceholder' :article-list='articleList' :totalPage='totalPage')
    //- newsList(:article-list='articleList' :page-title='pageTitle' :search-placeholder='searchPlaceholder' :type='type')
    //- newsListinArticle(v-if="this.$route.path!='/newsPage'" :article-list='articleList' :page-title='pageTitle')
</template>
<script src="/js/vue.js"></script>
<script src="/js/vue-resource.js"></script>
<script>
import ListView from '@/components/ListView.vue'
import tabs from '@/components/tabs_head.vue'
import newsListinArticle from '@/components/ListViewinArticle'
import { ListArticlesOfCategory } from '@/api/client/Articles';
import { GetPage } from '@/api/client/Page';
export default {
    components: {
        ListView,
        tabs,
        newsListinArticle
    },
    data() {
        return {
            pageTitle: "最新消息",
            searchPlaceholder: '關鍵字',
            theArticleList: '',
            articleList: '',
            searchStatus: false,
            searchQuery: '',
            pageData: '',
            tabs: [],
            totalPage: 1,
            currentPage: 1
        }
    },
    watch: {
        '$route.query': function(route){
            this.currentPage=route.page;
            this.ListArticleByCate(this.selectedQuery,this.currentPage);
        }
    },
    created() {
        this.ApiGetPage(2,this.$route.params.pageid);
    },
    beforeMount() {

    },
    methods: {
        ListArticleByCate(categoryID,page) {
            ListArticlesOfCategory(categoryID,page)
                .then(response => {
                    this.articleList = response.data;
                    this.totalPage = response.meta.last_page;
                })
                .catch(err => {
                console.log(err);
            });
        },
        ApiGetPage(project, id) {
            GetPage(project, id)
                .then(response => {
                    this.pageData = response.data;
                    this.pageTitle = this.pageData.title;
                    //give tabs
                    for(var i=0;i<this.pageData.type.section.tabs.length;i++){
                        this.tabs.push(this.pageData.type.section.tabs[i].name);
                        if(this.$route.params.categoryid==this.pageData.type.section.tabs[i].name){
                            this.selectedQuery =this.pageData.type.section.tabs[i].id;
                            if(!this.currentPage)
                                this.ListArticleByCate(this.selectedQuery,1);
                            else
                                this.ListArticleByCate(this.selectedQuery,this.currentPage);
                        }
                    }
                    //change path to th first path if the params right isn't in the cate
                    if(this.tabs.indexOf(this.$route.params.categoryid)<0)
                        this.$router.push({ path: this.tabs[0]})
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

