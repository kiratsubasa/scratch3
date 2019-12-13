<template lang="pug">
#newsApp
    h1.articlePageTitle {{articleList[articleIndex].title}}
    .articlePageJumpbar(v-if='articleList[articleIndex].src' :style="{'background-image': 'url(' + articleList[articleIndex].src + ')'}")
    //- .articlePageContent(v-for="text in articleList[articleIndex].content.text") {{text}}
    .articlePageContent {{articleList[articleIndex].content.text}}
    h1.articlePageTitle(v-if='articleList[articleIndex].content.video') 精彩影音
    diolog.articlePageVideoPlayer(:article-list='articleList[articleIndex]')
</iframe>

</template>

<script>
import diolog from '@/components/diolog.vue'
export default {
    props: ['page-title','search-placeholder','articleList'],
    components: {
        diolog
    },
    data() {
        return {
            articleIndex: 0,
        }
    },
    methods: {
    },
    mounted:function(){
        this.$emit('openArticle',true)
        var path = this.$route.params.id;
        console.log(path)
        var pathIdx = this.articleList.findIndex(function(item){
            return item.link.includes(path);         
            });
        this.articleIndex = pathIdx;
    }
}

</script>

<style lang="sass">
#newsApp
    max-width: 1280px
    min-height: 720px
    margin: auto

.articlePageVideoPlayer
    margin: 50px

.articlePageJumpbar
    background-size: cover
    width: 100%
    height: 750px

.articlePageTitle
    text-align: left
    line-height: 1.8em
    margin: 40px
.articlePageContent
    // margin: 40px
    // margin-left: 30%
    text-align: left
    font-size: 15px
    line-height: 30px
    color: #444
    padding-top: 50px
    padding: 50px
    // margin: 100px
    border-bottom: 1px #aaa solid
h1
    color: #444
div
    // border: 1px #daa solid

</style>

