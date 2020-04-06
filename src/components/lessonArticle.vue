<template lang="pug">
#newsApp
    h1.articlePageTitle {{data.title}}
    
    #lesSlider
        #lesImg(:style="{'background-image': 'url(' + jumpBar[jumpBarIdx] + ')'}")
        .ledImgs(v-for="(img,i) in jumpBar" :style="{'background-image': 'url(' + img + ')'}" @click="changeSlider(i)")

    p 活動時間： {{data.teach_hour}}
    p 適合對象： {{data.stage}}

    h3.lesSummary 課程大綱
    p {{data.summary}}

    h3.lesMainidea 核心概念
    p {{data.concept}}

    h3.lesTarget 教學目標
    p {{data.target}}

    h3.lesCommon 教案概說
    .comment(v-for="ol in data.outline")
        h3 {{ol.title}}
        p {{ol.content}}
    
    h3.lesContent 教學內容
        .HTMLContainer(v-html="data.body")

    h3.lesFile
        a#downloadBtn(:href="data.file" download) 教學檔案
    
    h3.lesReflection 課後省思
    p {{data.reflection}}

    .authorContainer 作者簡介
        .author(v-for="author in data.authors")
            .authorImg(:style="{'background-image': 'url(' + author.avatar.info.src + ')'}")
            h3.authorText {{author.name}}
            h3.authorText 服務單位：{{author.agency}}
            h3.authorText 職稱：{{author.job_title}}
            h3.authorText 電子信箱：{{author.email}}
            h3.authorText 電話：{{author.phone}}
            h3.authorText 服務地區：{{author.area}}
    div
        a#hashTag(v-for='tag in data.tags') &#35;{{tag.name}}
    p 區域： {{data.area}}
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

#lesSlider
    display: flex
    flex-wrap: wrap
#lesImg
    width: 1280px
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
    
.authorImg
    width: 180px
    height: 200px
    background-size: cover
    background-position: center

</style>