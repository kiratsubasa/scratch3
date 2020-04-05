<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}} 
    router-view(:page-title='pageTitle')
    //- newsListinArticle(:article-list='articleList' :page-title='pageTitle')
</template>

<script>
import newsListinArticle from '@/components/ListViewinArticle'

export default {
    components: {
        newsListinArticle
    },
    data() {
        return {
            pageTitle: "教學資源",
            searchPlaceholder: "關鍵字",
            selectedQuery: '',
            searchStatus: false,
            searchQuery: ''
        }
    },
    watch: {
        // selectedQuery: function(query) {
        //     this.theArticleList = this.articleList.filter((item)=>{
        //         for(var i=0;i<item.type.length;i++){
        //             if(item.type[i] == query)
        //                 return true;
        //         }
        //         return false;
        //     })
        // },
        // searchQuery: function(query){
        //     this.theArticleList = this.articleList.filter((item)=>{
        //         if(item.title.includes(query)){
        //             this.searchStatus = true;
        //             return item.title.includes(query);
        //         }
        //     })
        // },
        // '$route' (){
        //     this.searchInit();
        // }
    },
    beforeMount(){
        // this.searchInit();
        // this.selectedQuery = this.$route.params.categoryid;
        
    },
    methods: {
        searchInit: function(){
            if(this.$route.query.search)
                this.searchQuery = this.$route.query.search;
            
        },
    }
}

</script>

<style lang="sass">

</style>

