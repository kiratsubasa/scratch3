<template lang="pug">
#app
    .BookMarkList(v-for='(item,i) in bookmarkList[articleListIdx].articleList')
        a#BookMarkRouter(v-if="articleShow==false" :href='item.link')
            .BookMarkTitle {{item.title}}
    //- router-view(:articleList='bookmarkList[articleListIdx].articleList' :page-title='pageTitle' @openArticle="changeStatus")
</template>

<script>
export default {
    components: {
    },
    props: ['bookmark-list','page-title','search-placeholder'],
    data() {
        return {
            articleShow: false,
            articleListIdx: '0',
            drawerStatus: false
        }
    },
    mounted:function(){
        var path = this.$route.params.mark;
        var pathIdx = this.bookmarkList.findIndex(function(item){
            return item.link.includes(path);         
            });
        this.articleListIdx =pathIdx;
    },
    methods: {
        changeStatus:function(status){
            this.articleShow = status;
        }
    },
}

</script>

<style lang="sass">
.BookMarkTitle
    font-size: 15px
    line-height: 10px
    margin-left:20px
    margin-top:10px
    padding: 10px
    text-align: left

</style>

