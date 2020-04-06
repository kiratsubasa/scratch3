<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}} 
    .BookMarkPageContainer
        .BookMarkContainer
            ListwithBookMark(:bookmark-list='bookmarkList' :search-placeholder='searchPlaceholder' :search-lists="bookmarkList[articleListIdx].articleList")
        router-view(:bookmark-list='bookmarkList[articleListIdx]' :page-title='pageTitle' :search-placeholder='searchPlaceholder' )

</template>

<script>
import ListwithBookMark from '@/components/ListwithBookMark'
export default {
    components: {
        ListwithBookMark
    },
    data() {
        return {
            articleListIdx: '',
            pageTitle: "美感人才",
            searchPlaceholder: "關鍵字",
            bookmarkList: []
        }
    },
    mounted:function(){
        var path = this.$route.params.categoryid;
        var pathIdx = this.bookmarkList.findIndex(function(item){
            return item.link.includes(path);         
            });
        this.articleListIdx =pathIdx;
    }
}
</script>

<style lang="sass">
</style>
