<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}}
    //- router-view(:page-title='pageTitle' :search-placeholder='searchPlaceholder'  :type-list='typeList')
    tabs(:page-title='pageTitle' :search-placeholder='searchPlaceholder'  :tabs='tabs' :theArticleList='theArticleList')
    ListView(:page-title='pageTitle' :search-placeholder='searchPlaceholder'  :tabs='tabs' :theArticleList='theArticleList')
    //- newsList(:article-list='articleList' :page-title='pageTitle' :search-placeholder='searchPlaceholder' :type='type')
    //- newsListinArticle(v-if="this.$route.path!='/newsPage'" :article-list='articleList' :page-title='pageTitle')
</template>
<script src="/js/vue.js"></script>
<script src="/js/vue-resource.js"></script>
<script>
import ListView from '@/components/ListView.vue'
import tabs from '@/components/tabs_head.vue'
import newsListinArticle from '@/components/ListViewinArticle'
import { ListArticles } from '@/api/Articles';
export default {
    components: {
        ListView,
        tabs,
        newsListinArticle
    },
    data() {
        return {
            pageTitle: "最新消息",
            tabs: ['最新消息','跨域薈萃',' 視覺藝術'],
            searchPlaceholder: '關鍵字',
            theArticleList: [{title:'article1',author: 'author1',status: '1',body: '<div style=\"text-align: center;\"><p dir=\"ltr\">各位敬愛師長您好：<\/p><p dir=\"ltr\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;臺北市立大學2016音樂教育研討會以「因應十二年國教之音樂跨領域創新教學學術研討會」為主題，於105年12月17日（星期六）舉辦。竭誠歡迎各位廣邀學生與夥伴與會。<\/p><p dir=\"ltr\">每年與您們相聚共商藝術教育的未來，是歲末最令人期待的溫馨時刻，期待您們與會及蒞臨指導。欲參加之師長，請填寫google表單：<a href=\"https:\/\/goo.gl\/forms\/egT6CiM5XKCo3iv83\">https:\/\/goo.gl\/forms\/egT6CiM5XKCo3iv83<\/a> 進行報名，謝謝。<\/p><p dir=\"ltr\">簡錄研討會資訊，謹供卓參。<\/p><h3><br \/><br \/><\/h3><\/div>',
                            categories:[{name: '最新消息'},{name: '成果消息'}],tags:[{name: '美感教育'}],created_at: "2020-02-25T08:27:09.000000Z",updated_at: "2020-02-25T08:27:09.000000Z",media:{info:{src: '\/\/fbilab.cc:8008\/storage\/photos\/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png'}}}],
            selectedQuery: '',
            searchStatus: false,
            searchQuery: ''

        }
    },
    beforeMount() {
        this.pageTitle = this.$route.params.sectionId;
    },
    watch: {
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
        '$route' (){
            this.searchInit();
        }
        
    },
    created() {
        // this.ApiListArticles(2);
    },
    mount(){
        this.searchInit();
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
        searchInit: function(){
            console.log(this.$route.query.search)
            if(this.$route.query.search)
                this.searchQuery = this.$route.query.search;
            else
                this.theArticleList = this.ArticleList;
        }
    }
}
</script>

<style lang="sass">

</style>

