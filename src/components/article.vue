<template lang="pug">
#newsApp
    h1.articlePageTitle {{data.title}}
    .articlePageJumpbar(v-if='data.media' :style="{'background-image': 'url(' + data.media.info.src + ')'}")
    .HTMLContainer(v-html="data.body")
    //- div#downloadBtn(v-if="articleList[articleIndex].content.downloadFile")
    //-     a#sehref(:href='articleList[articleIndex].downloadFile' download) {{articleList[articleIndex].content.downloadText}}
    //- h1.articlePageTitle(v-if='articleList[articleIndex].content.video') 精彩影音
    //- diolog.articlePageVideoPlayer(v-if='articleList[articleIndex].content.video' :article-list='articleList[articleIndex]')
    div
        a#hashTag(v-for='tag in data.tags') &#35;{{tag.name}}
    .dateNote 發布日期 {{data.created_at.split("T")[0]}}
    .dateNote 更新日期 {{data.updated_at.split("T")[0]}}
    
    //- h1.articlePageTitle(v-if='articleList[articleIndex].content.video') 精彩影音
    //- diolog.articlePageVideoPlayer(v-if='articleList[articleIndex].content.video' :article-list='articleList[articleIndex]')

</template>

<script>
import diolog from '@/components/diolog.vue'
import { GetArticle } from '@/api/Articles';
export default {
    props: ['page-title','search-placeholder','articleList'],
    components: {
        diolog
    },
    data() {
        return {
                data: ''
            }
    },
    created() {
        var id = this.$route.params.id;
        this.ApiListArticles(id);
    },
    methods: {
        ApiListArticles(id) {
            GetArticle(id)
                .then(response => {
                    this.data= response.data;
                })
                .catch(err => {
                console.log(err);
            });
        },
    }
}

</script>

<style lang="sass" scoped>
@import "@/style/common.sass"

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
@media all and (max-width: 760px)
    img
        width: 100%
</style>