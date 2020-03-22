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
                data: {title: '「因應十二年國教之音樂跨領域創新教學學術研討會」歡迎各位師長蒞臨與會！報名網址請詳見內文',body:'"<div style="text-align: center;"><p dir="ltr">各位敬愛師長您好：</p><p dir="ltr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;臺北市立大學2016音樂教育研討會以「因應十二年國教之音樂跨領域創新教學學術研討會」為主題，於105年12月17日（星期六）舉辦。竭誠歡迎各位廣邀學生與夥伴與會。<p><p dir="ltr">每年與您們相聚共商藝術教育的未來，是歲末最令人期待的溫馨時刻，期待您們與會及蒞臨指導。欲參加之師長，請填寫google表單：<a href="https://goo.gl/forms/egT6CiM5XKCo3iv83">https://goo.gl/forms/egT6CiM5XKCo3iv83</a> 進行報名，謝謝。</p><p dir="ltr">簡錄研討會資訊，謹供卓參。</p><h3><br /><br /></h3></div>',
                        tags: [{name: "美感教育"},{name: '專題演講'}],created_at: "2020-02-25T08:27:09.000000Z",updated_at: "2020-02-25T08:27:09.000000Z",media:{info:{src:"http://fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png"}}}
            }
    },
    created() {
        // var id = this.$route.params.id;
        // this.ApiListArticles(id);
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