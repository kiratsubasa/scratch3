<template lang="pug">
#newsApp
    h1.articlePageTitle {{data.title}}
    #lesSlider
        #lesImg(:style="{'background-image': 'url(' + jumpBar[jumpBarIdx] + ')'}")
        .ledImgs(v-for="(img,i) in jumpBar" :style="{'background-image': 'url(' + img + ')'}" @click="changeSlider(i)")
    .lessonTextContainer
        .timeContainer
            .information 活動時間： {{data.teach_hour}}
            .information 適合對象： {{data.stage}}

        .lesSummary.lessonTitle 課程大綱
        .lessonContent {{data.summary}}

        .lesMainidea.lessonTitle 核心概念
        .lessonContent {{data.concept}}

        .lesTarget.lessonTitle 教學目標
        .lessonContent {{data.target}}

        .lesCommon.lessonTitle 教案概說
        .comment(v-for="ol in data.outline")
            .lessonSubtitle {{ol.title}}
            .lessonContent {{ol.content}}
        
        .lesContent.lessonTitle 教學內容
            .HTMLContainer(v-html="data.body")

        a#downloadBtn(:href="data.file" download) DOWNLOAD
        
        .lesReflection.lessonTitle 課後省思
        .lessonContent {{data.reflection}}

        .authorContainer
            .lessonTitle 作者簡介
            .author(v-for="author in data.authors")
                .authorImg(:style="{'background-image': 'url(' + author.avatar.info.src + ')'}")
                .authorText {{author.name}}
                .authorText 服務單位：{{author.agency}}
                .authorText 職稱：{{author.job_title}}
                .authorText 電子信箱：{{author.email}}
                .authorText 電話：{{author.phone}}
                .authorText 服務地區：{{author.area}}
        div
            a#hashTag(v-for='tag in data.tags') &#35;{{tag.name}}
        .information 區域： {{data.area}}
        .dateNote 發布日期 {{data.created_at.split("T")[0]}}
        .dateNote 更新日期 {{data.updated_at.split("T")[0]}}

</template>

<script>
import { GetLesson } from '@/api/client/Lesson';
export default {
    props: [],
    components: {
        
    },
    data() {
        return {
            jumpBarIdx: 0,
            jumpBar: [],
            data: {}
        }
    },
    created() {
        var id = this.$route.params.postid;
        this.ApiGetPage(2,id);
    },
    watch:{
        'jumpBarIdx': function(idx){
            document.getElementById("lesImg").style.backgroundImage = this.jumpBar[idx];
        }
    },
    methods: {
        changeSlider(id){
            this.jumpBarIdx = id;
        },
        ApiGetPage(project, id) {
            GetLesson(project, id)
                .then(response => {
                    this.data= response.data;
                    var slider = this.data.sliders;
                    for(var i=0;i<slider.length;i++){
                        this.jumpBar.push(slider[i].info.src);
                    }
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
.lessonTextContainer
    display: flex
    flex-direction: column
.timeContainer
    text-align: left
    margin-bottom: 10px
    color: $c-text
.information
    font-size: 16px
    margin-bottom: 5px
.lessonTitle
    font-size: 20px
    font-weight: 600
    color: $c-text
    text-align: left
    margin-bottom: 20px
    margin-top: 20px
.lessonSubtitle
    font-size: 16px
    color: $c-text
    line-height: 20px
    text-align: left
    font-weight: 600 
    margin-bottom: 10px
.lessonContent
    font-size: 16px
    color: $c-text
    line-height: 20px
    text-align: left
    margin-bottom: 10px
.articlePageVideoPlayer
    margin: 50px

.articlePageJumpbar
    background-size: cover
    max-width: 1080px
    height: 640px
    margin: auto
    background-position: center

h3
    font-size: 20px
    font-weight: 600
    color: $c-text
p
    font-size: 16px
    color: $c-text
.articlePageTitle
    text-align: left
    padding: 0px
    line-height: 1.8em
    margin-bottom: 40px
    color: $c-primary
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

#lesSlider
    max-width: 1350px
    display: flex
    flex-wrap: wrap
    margin-bottom: 20px
#lesImg
    width: 100%
    height: 640px
    background-size: cover
    background-position: center
.ledImgs
    width: 180px
    height: 100px
    background-size: cover
    background-position: center
    opacity: 0.5
    transition: 0.46s
    cursor: pointer
    &:hover
        opacity: 1
.authorContainer
    
.authorText
    font-weight: 500
    font-size: 16px
    text-align: left
    line-height: 20px
    color: $c-text
    margin-bottom: 5px
.authorImg
    margin-bottom: 20px
    width: 180px
    height: 200px
    background-size: cover
    background-position: center
@media only screen and (max-width:480px)
    .lessonTextContainer
        padding: 10px
    .lessonTitle
        font-size: 20px
        margin-top: 10px
        margin-bottom: 10px
    .lessonSubtitle
        font-size: 16px
        margin-bottom: 5px
    .lessonContent
        font-size: 16px
        margin-bottom: 5px
    .authorText
        font-size: 16px
    #lesSlider
        margin-bottom: 10px
    #lesImg
        height: 249px
    .ledImgs
        width: 25%
        height: 60px
</style>