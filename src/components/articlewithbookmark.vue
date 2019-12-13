<template lang="pug">
#newsApp
    h1.articlePageTitle {{bookmarkList[bookmarkIndex].articleList[articleIndex].title}}
    //- .articlePageJumpbar(v-if='articleList[articleIndex].src' :style="{'background-image': 'url(' + articleList[articleIndex].src + ')'}")
    //- //- .articlePageContent(v-for="text in articleList[articleIndex].content.text") {{text}}
    //- .articlePageContent {{articleList[articleIndex].content.text}}
    //- h1.articlePageTitle(v-if='articleList[articleIndex].content.video') 精彩影音
    //- diolog.articlePageVideoPlayer(:article-list='articleList[articleIndex]')
</iframe>

</template>

<script>
import diolog from '@/components/diolog.vue'
export default {
    props: ['page-title','search-placeholder','bookmark-list'],
    components: {
        diolog
    },
    data() {
        return {
            bookmarkIndex: 0,
            articleIndex: 0,
        }
    },
    mounted:function(){
        var path = this.$route.params.mark;
        var pathIdx = this.bookmarkList.findIndex(function(item){
            return item.link.includes(path);         
            });
        this.bookmarkIndex= pathIdx;
        path = this.$route.params.id;
        pathIdx = this.bookmarkList[this.bookmarkIndex].findIndex(function(item){
            return item.link.includes(path);         
            });
        this.articleIndex= pathIdx;
        console.log(this.articleIndex)
    }
}

</script>

<style lang="sass">

</style>

