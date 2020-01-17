<template lang="pug">
#newsApp
    h1.articlePageTitle {{articleList[articleIndex].title}}
    .articlePageJumpbar(v-if='articleList[articleIndex].src' :style="{'background-image': 'url(' + articleList[articleIndex].src + ')'}")
    .HTMLContainer(v-html="articleList[articleIndex].content.articleContent")
    div#downloadBtn(v-if="articleList[articleIndex].content.downloadFile")
        a#sehref(:href='articleList[articleIndex].downloadFile' download) {{articleList[articleIndex].content.downloadText}}
    h1.articlePageTitle(v-if='articleList[articleIndex].content.video') 精彩影音
    diolog.articlePageVideoPlayer(v-if='articleList[articleIndex].content.video' :article-list='articleList[articleIndex]')
    div
        a#hashTag(v-for='tag in articleList[articleIndex].content.hashTag') &#35;{{tag}}
    
    
    //- h1.articlePageTitle(v-if='articleList[articleIndex].content.video') 精彩影音
    //- diolog.articlePageVideoPlayer(v-if='articleList[articleIndex].content.video' :article-list='articleList[articleIndex]')

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
    
    mounted(){
        var temp = this.$route.params.id;
        var pathIdx = this.articleList.findIndex(function(item){
            return item.link.includes(temp);         
            });
        this.articleIndex = pathIdx;
        
    }
}

</script>

<style lang="sass">
@import "@/style/common.sass"
#newsApp
    max-width: 1280px
    min-height: 720px
    margin: auto

.articlePageVideoPlayer
    margin: 50px

.articlePageJumpbar
    background-size: cover
    max-width: 1080px
    height: 640px
    margin: auto
    background-position: center


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
    // padding-top: 50px
    margin: 50px
    // margin: 100px
    border-bottom: 1px #aaa solid
h1
    color: #444
h1,h2,h3,p,span
    margin: 10px
    text-align: left
    line-height: 25px

.HTMLContainer
    max-width: 1080px
    margin: auto
</style>