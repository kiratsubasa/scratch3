<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}}
    //- router-view(:page-title='pageTitle' :search-placeholder='searchPlaceholder'  :type-list='typeList')
    ListView(:page-title='pageTitle' :search-placeholder='searchPlaceholder'  :tabs='tabs')
    //- newsList(:article-list='articleList' :page-title='pageTitle' :search-placeholder='searchPlaceholder' :type='type')
    //- newsListinArticle(v-if="this.$route.path!='/newsPage'" :article-list='articleList' :page-title='pageTitle')
</template>
<script src="/js/vue.js"></script>
<script src="/js/vue-resource.js"></script>
<script>
import ListView from '@/components/ListView.vue'
import newsListinArticle from '@/components/ListViewinArticle'

export default {
    components: {
        ListView,
        newsListinArticle
    },
    data() {
        return {
            pageTitle: "最新消息",
            tabs: ['最新消息','跨域薈萃',' 視覺藝術'],
            searchPlaceholder: '關鍵字',
        }
    },
    beforeMount() {
        this.pageTitle = this.$route.params.sectionId;
    }
}
</script>

<style lang="sass">

</style>

